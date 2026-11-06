-- 000001_init_schema.down.sql
-- Revert initial schema

DROP INDEX IF EXISTS idx_inquiries_created_at;
DROP INDEX IF EXISTS idx_stories_featured;
DROP INDEX IF EXISTS idx_stories_published_order;
DROP INDEX IF EXISTS idx_gallery_published_order;

DROP TABLE IF EXISTS contact_inquiries;
DROP TABLE IF EXISTS success_stories;
DROP TABLE IF EXISTS gallery_items;
DROP TABLE IF EXISTS admins;
