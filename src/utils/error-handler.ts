// New file for centralized error handling
export class AppError extends Error {
  constructor(message: string, public code?: string) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleDatabaseError = (error: any) => {
  console.error('Database error:', error)
  throw new AppError(`Database operation failed: ${error.message}`, 'DB_ERROR')
} 