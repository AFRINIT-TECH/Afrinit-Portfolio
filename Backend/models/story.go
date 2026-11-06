package models

import "time"

// SuccessStory represents a client case study or project highlight shown on the portfolio.
type SuccessStory struct {
	ID            string     `json:"id" db:"id"`
	Title         string     `json:"title" db:"title"`
	ClientName    *string    `json:"client_name,omitempty" db:"client_name"`
	Summary       *string    `json:"summary,omitempty" db:"summary"`
	Content       string     `json:"content" db:"content"`
	CoverImageURL *string    `json:"cover_image_url,omitempty" db:"cover_image_url"`
	AltText       *string    `json:"alt_text,omitempty" db:"alt_text"`
	IsFeatured    bool       `json:"is_featured" db:"is_featured"`
	IsPublished   bool       `json:"is_published" db:"is_published"`
	DisplayOrder  int        `json:"display_order" db:"display_order"`
	PublishedAt   *time.Time `json:"published_at,omitempty" db:"published_at"`
	CreatedAt     time.Time  `json:"created_at" db:"created_at"`
	UpdatedAt     time.Time  `json:"updated_at" db:"updated_at"`
}
