# Afrinit Portfolio

## Implementation Overview

The backend database connection, configuration, models, and schema migrations are structured within the `Backend/` directory:

```
Backend/
├── config/
│   ├── config.go                     # Environment and connection pool configuration
│   └── config_test.go                # Configuration unit tests
├── db/
│   ├── db.go                         # pgx connection pool, Ping context, migration runner
│   ├── db_test.go                    # Connection error & embed tests
│   └── migrations/
│       ├── 000001_init_schema.up.sql   # PostgreSQL table definitions and indexes
│       └── 000001_init_schema.down.sql # Clean schema rollback
├── models/
│   ├── admin.go                      # Admin model (2 login placeholder variables)
│   ├── gallery.go                    # GalleryItem model
│   ├── story.go                      # SuccessStory model
│   └── inquiry.go                    # ContactInquiry model
├── .env.example                      # Template for database credentials & connection pool
├── go.mod / go.sum                   # Go 1.22 dependencies (pgx/v5, godotenv, fiber)
└── main.go                           # Server bootstrapper, /health check, & migration flag
```

### Key Components

- **Database Schema (`Backend/db/migrations/000001_init_schema.up.sql`)**: Defines `admins`, `gallery_items`, `success_stories`, and `contact_inquiries` tables along with performance indexes.
- **Rollback Script (`Backend/db/migrations/000001_init_schema.down.sql`)**: Reversible schema teardown.
- **Admin Model (`Backend/models/admin.go`)**: Configured strictly with the two credentials variables (`username` and `password_hash`) as requested, ready for confirmation from the authentication lead:
  ```go
  type Admin struct {
      ID           string    `json:"id" db:"id"`
      Username     string    `json:"username" db:"username"`
      PasswordHash string    `json:"-" db:"password_hash"`
      CreatedAt    time.Time `json:"created_at" db:"created_at"`
      UpdatedAt    time.Time `json:"updated_at" db:"updated_at"`
  }
  ```
- **Content Models (`Backend/models/gallery.go`, `Backend/models/story.go`, `Backend/models/inquiry.go`)**: Represent dynamic portfolio gallery images, client case studies, and inbound inquiries, storing relative paths/links for media assets.
- **Configuration Loader (`Backend/config/config.go`)**: Reads environment variables from `.env` or system environment, with support for discrete parameters and direct `DATABASE_URL` strings, alongside connection pool settings (`SetMaxOpenConns`, `SetMaxIdleConns`, connection lifetimes).
- **Database Connection Pool (`Backend/db/db.go`)**: Manages the PostgreSQL connection pool using `pgx/v5` via standard `database/sql` with a 5-second `PingContext` health timeout.
- **Embedded Migrations (`Backend/db/db.go`)**: Embeds SQL scripts into the binary using Go's `embed.FS` and executes schema creation via the `-migrate` CLI flag.
- **Server Entrypoint (`Backend/main.go`)**: Initializes the Fiber HTTP server, exposes a `/health` endpoint verifying database reachability, serves static media from `/uploads`, and handles graceful shutdowns.

---

## Step-by-Step Procedure to Run

### Step 1: Reload Your Terminal & Verify PostgreSQL Connection
Reload your shell configuration so the PostgreSQL environment settings take effect:

```bash
source ~/.zshrc
```

Verify that `psql` connects immediately to your local database instance:
```bash
psql
```
*(Type `\q` and press Enter to exit).*

> [!TIP]
> If your database server is ever stopped (e.g., following a system reboot), you can start, check, or stop it using the built-in aliases:
> ```bash
> pg-start   # Starts PostgreSQL server
> pg-status  # Checks server status
> pg-stop    # Gracefully stops PostgreSQL server
> ```

---

### Step 2: Create the Database & Apply the Schema
From the repository root directory, run the automated setup script:

```bash
./setup_db.sh
```

**What this executes automatically:**
- Verifies PostgreSQL server status on `127.0.0.1:5433`.
- Creates the `afrinit_portfolio` database (if not already existing).
- Applies the initial database schema (`Backend/db/migrations/000001_init_schema.up.sql`).
- Prints the verified list of created tables (`admins`, `gallery_items`, `success_stories`, `contact_inquiries`).
- Synchronizes `DB_NAME` and `DB_PORT` in `Backend/.env`.

*(Optional: To create a different database or apply a custom schema, run: `./setup_db.sh <db_name> <path_to_schema>`)*

---

### Step 3: (Optional) Inspect the Database in `psql`
To interact directly with the portfolio database from your terminal:

```bash
psql -d afrinit_portfolio
```

Useful commands inside `psql`:
- `\dt` — List all created tables.
- `\d admins` — Inspect table columns and constraints for admin credentials.
- `\d gallery_items` — Inspect the gallery table structure.
- `\q` — Exit `psql`.

---

### Step 4: Run the Go Backend Server
Navigate into the `Backend/` directory and start the server:

```bash
cd Backend
go run main.go
```

Expected startup output:
```text
Successfully connected to PostgreSQL at 127.0.0.1:5433 (database: afrinit_portfolio)
Starting server on port 3000...
```

---

### Step 5: Verify Backend Health
In another terminal tab, run:

```bash
curl http://localhost:3000/health
```

Expected response:
```json
{"database":"connected","status":"healthy"}
```
