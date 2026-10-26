package models

import "time"

// Admin represents an administrative user with privileges to manage portfolio content.
// Currently initialized with two placeholder authentication variables (Username and PasswordHash),
// pending final specifications from the authentication lead.
type Admin struct {
	ID           string    `json:"id" db:"id"`
	Username     string    `json:"username" db:"username"`
	PasswordHash string    `json:"-" db:"password_hash"` // Excluded from JSON responses for security
	CreatedAt    time.Time `json:"created_at" db:"created_at"`
	UpdatedAt    time.Time `json:"updated_at" db:"updated_at"`
}
