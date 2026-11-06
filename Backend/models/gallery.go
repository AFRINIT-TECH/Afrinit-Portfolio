package models

import "time"

// GalleryItem represents an image entry in the public portfolio gallery.
// ImageURL stores the relative asset path (e.g., "/uploads/gallery/xyz.webp")
// or an external CDN URL rather than raw image bytes.
type GalleryItem struct {
	ID           string    `json:"id" db:"id"`
	Title        string    `json:"title" db:"title"`
	Description  *string   `json:"description,omitempty" db:"description"`
	ImageURL     string    `json:"image_url" db:"image_url"`
	AltText      *string   `json:"alt_text,omitempty" db:"alt_text"`
	Category     *string   `json:"category,omitempty" db:"category"`
	DisplayOrder int       `json:"display_order" db:"display_order"`
	IsPublished  bool      `json:"is_published" db:"is_published"`
	CreatedAt    time.Time `json:"created_at" db:"created_at"`
	UpdatedAt    time.Time `json:"updated_at" db:"updated_at"`
}
