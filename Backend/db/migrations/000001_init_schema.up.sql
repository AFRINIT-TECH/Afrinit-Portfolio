-- 000001_init_schema.up.sql
-- Afrinit Portfolio Database Initial Schema
-- Note: gen_random_uuid() is built-in natively in PostgreSQL 13+

-- 1. Admins Table
-- Contains credentials for portfolio content management.
-- Configured with exactly two login variables for now (username and password_hash),
-- ready for confirmation and extension by the authentication lead.
CREATE TABLE IF NOT EXISTS admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Gallery Items Table
-- Dynamic photos managed by admin for the portfolio gallery.
-- NOTE: Stores the relative asset path / CDN URL (NOT raw binary data) to prevent DB bloat.
CREATE TABLE IF NOT EXISTS gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    alt_text VARCHAR(255),
    category VARCHAR(100),
    display_order INT NOT NULL DEFAULT 0,
    is_published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. Success Stories Table
-- Client case studies and success stories for the customer view.
CREATE TABLE IF NOT EXISTS success_stories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    client_name VARCHAR(255),
    summary TEXT,
    content TEXT NOT NULL,
    cover_image_url TEXT,
    alt_text VARCHAR(255),
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT true,
    display_order INT NOT NULL DEFAULT 0,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. Customer Contact Inquiries (Optional portfolio inbound messages)
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for optimal customer-facing query performance
CREATE INDEX IF NOT EXISTS idx_gallery_published_order ON gallery_items (is_published, display_order ASC, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_stories_published_order ON success_stories (is_published, display_order ASC, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_stories_featured ON success_stories (is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON contact_inquiries (created_at DESC);
