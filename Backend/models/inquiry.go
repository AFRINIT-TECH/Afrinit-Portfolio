package models

import "time"

// ContactInquiry represents an inbound lead or message submitted through the portfolio contact form.
type ContactInquiry struct {
	ID        string    `json:"id" db:"id"`
	Name      string    `json:"name" db:"name"`
	Email     string    `json:"email" db:"email"`
	Phone     *string   `json:"phone,omitempty" db:"phone"`
	Message   string    `json:"message" db:"message"`
	IsRead    bool      `json:"is_read" db:"is_read"`
	CreatedAt time.Time `json:"created_at" db:"created_at"`
}
