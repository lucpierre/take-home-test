import { NextFunction, Request, Response } from 'express'

/**
 * Give the available error types
 */
export const ErrorTypes = {
    NOT_FOUND: 'NOT_FOUND',
    URL_ALREADY_KNOWN: 'URL_ALREADY_KNOWN',
}

/**
 * Wraps a route function to catch errors and pass them to the next middleware
 * @param fn route handler function
 */
export const routeWrapper =
    (fn: (req: Request, res: Response, next: NextFunction) => any) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            fn(req, res, next)
        } catch (e) {
            next(e)
        }
    }

/**
 * Middleware to manage errors
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Function to go to the next middleware
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`[${new Date().toISOString()}] Error:`, err.message, err.stack)

    // Hydrate default error data
    let statusCode = 500
    let message = 'Internal server error occurred'

    // Dirty management of the errors according to their types
    if (err.name === 'NOT_FOUND') {
        statusCode = 404
        message = 'The given code is not known'
    } else if (err.name === 'URL_ALREADY_KNOWN') {
        statusCode = 400
        message = 'The given code is already known, please retry'
    }

    // Send the error response
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        // Ne pas envoyer le stack en production
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    })
}
