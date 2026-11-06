#!/usr/bin/env bash
# ==============================================================================
# Afrinit Database Setup Script
#
# Usage:
#   ./setup_db.sh                          # Uses the defaults configured below
#   ./setup_db.sh <db_name>                # Specifies a custom database name
#   ./setup_db.sh <db_name> <schema_file>  # Specifies database name and schema file
# ==============================================================================

set -euo pipefail

# ------------------------------------------------------------------------------
# 1. CONFIGURATION (Edit these defaults or pass arguments to the script)
# ------------------------------------------------------------------------------
TARGET_DB="${1:-afrinit_portfolio}"
SCHEMA_PATH="${2:-Backend/db/migrations/000001_init_schema.up.sql}"

# Connection parameters (defaults to local PostgreSQL instance)
DB_HOST="${PGHOST:-127.0.0.1}"
DB_PORT="${PGPORT:-5433}"
DB_USER="${PGUSER:-$(whoami)}"

# ------------------------------------------------------------------------------
# 2. COLOR OUTPUT HELPERS
# ------------------------------------------------------------------------------
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}====================================================${NC}"
echo -e "${BLUE}        Afrinit Portfolio Database Setup            ${NC}"
echo -e "${BLUE}====================================================${NC}"
echo -e "Target Database : ${GREEN}${TARGET_DB}${NC}"
echo -e "Schema File     : ${GREEN}${SCHEMA_PATH}${NC}"
echo -e "Host / Port     : ${GREEN}${DB_HOST}:${DB_PORT}${NC}"
echo -e "Database User   : ${GREEN}${DB_USER}${NC}"
echo -e "----------------------------------------------------"

# ------------------------------------------------------------------------------
# 3. VERIFY POSTGRESQL SERVER RUNNING
# ------------------------------------------------------------------------------
echo -e "[1/4] Checking PostgreSQL server status..."
if ! pg_isready -h "$DB_HOST" -p "$DB_PORT" > /dev/null 2>&1; then
    echo -e "${YELLOW}PostgreSQL is not responding on ${DB_HOST}:${DB_PORT}. Attempting to start...${NC}"
    if [ -d "$HOME/postgres_data" ]; then
        pg_ctl -D "$HOME/postgres_data" -l "$HOME/postgres_data/logfile" -o "-p ${DB_PORT}" start
        sleep 1
    fi
fi

if ! pg_isready -h "$DB_HOST" -p "$DB_PORT" > /dev/null 2>&1; then
    echo -e "${RED}ERROR: Could not connect to PostgreSQL on ${DB_HOST}:${DB_PORT}.${NC}"
    echo -e "Ensure PostgreSQL is running: pg-start"
    exit 1
fi
echo -e "${GREEN}✓ PostgreSQL server is active.${NC}"

# ------------------------------------------------------------------------------
# 4. VERIFY SCHEMA FILE EXISTS
# ------------------------------------------------------------------------------
echo -e "[2/4] Validating schema file..."
if [ ! -f "$SCHEMA_PATH" ]; then
    echo -e "${RED}ERROR: Schema file not found at '${SCHEMA_PATH}'.${NC}"
    echo -e "Please ensure the path is correct or place your schema at that location."
    exit 1
fi
echo -e "${GREEN}✓ Schema file found (${SCHEMA_PATH}).${NC}"

# ------------------------------------------------------------------------------
# 5. CREATE DATABASE IF IT DOES NOT EXIST
# ------------------------------------------------------------------------------
echo -e "[3/4] Ensuring database '${TARGET_DB}' exists..."
DB_EXISTS=$(psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='${TARGET_DB}';" 2>/dev/null || true)

if [ "$DB_EXISTS" = "1" ]; then
    echo -e "${YELLOW}• Database '${TARGET_DB}' already exists. Continuing to apply schema...${NC}"
else
    echo -e "• Database '${TARGET_DB}' does not exist. Creating it..."
    createdb -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" "$TARGET_DB"
    echo -e "${GREEN}✓ Database '${TARGET_DB}' created successfully.${NC}"
fi

# ------------------------------------------------------------------------------
# 6. APPLY SCHEMA TO DATABASE
# ------------------------------------------------------------------------------
echo -e "[4/4] Applying schema '${SCHEMA_PATH}' to database '${TARGET_DB}'..."
psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$TARGET_DB" -v ON_ERROR_STOP=1 -f "$SCHEMA_PATH"

echo -e "\n${GREEN}✓ Schema applied successfully!${NC}"
echo -e "----------------------------------------------------"
echo -e "${BLUE}Current tables in '${TARGET_DB}':${NC}"
psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$TARGET_DB" -c '\dt'

# ------------------------------------------------------------------------------
# 7. SYNC WITH BACKEND .env IF PRESENT
# ------------------------------------------------------------------------------
ENV_FILE="Backend/.env"
if [ -f "$ENV_FILE" ]; then
    # Update DB_NAME in .env if it differs
    if grep -q "^DB_NAME=" "$ENV_FILE"; then
        sed -i "s/^DB_NAME=.*/DB_NAME=${TARGET_DB}/" "$ENV_FILE"
    fi
    if grep -q "^DB_PORT=" "$ENV_FILE"; then
        sed -i "s/^DB_PORT=.*/DB_PORT=${DB_PORT}/" "$ENV_FILE"
    fi
    echo -e "${GREEN}✓ Synchronized DB_NAME='${TARGET_DB}' and DB_PORT='${DB_PORT}' in ${ENV_FILE}.${NC}"
fi

echo -e "===================================================="
echo -e "${GREEN}All done! You can connect to this database anytime with:${NC}"
echo -e "  psql -d ${TARGET_DB}"
echo -e "===================================================="
