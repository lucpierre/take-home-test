import { Express } from 'express'
import { ErrorTypes, routeWrapper } from './middleware/error.handler'
import { getCode } from './helper/codes.helper'

export const makeRoutes = (app: Express, urlDatabase: Map<string, string>) => {
    /**
     * @route POST /add
     * @desc Add a new URL to the database
     * @access Public
     * @body {string} url - The URL to shorten
     */
    app.post(
        '/add',
        routeWrapper((req, res) => {
            const urlCode = getCode()

            const isAlreadyKnown = urlDatabase.has(urlCode)

            if (isAlreadyKnown) {
                throw new Error(ErrorTypes.URL_ALREADY_KNOWN)
            }

            urlDatabase.set(urlCode, req.body.url)
            res.json({
                status: 'ok',
                message: 'URL added successfully',
                content: { code: urlCode, url: urlDatabase.get(urlCode) },
            })
        }),
    )

    /**
     * @route GET /all
     * @desc Get all URLs from the database
     * @access Public
     * @returns {Array} - An array of all the URL objects
     */
    app.get(
        '/all',
        routeWrapper((req, res) => {
            res.json({ status: 'ok', message: 'All URLs', content: Array.from(urlDatabase.entries()) })
        }),
    )

    /**
     * @route GET /:urlCode
     * @desc Redirect to the original URL
     * @access Public
     * @param {string} urlCode - The shortened URL code
     */
    app.get(
        '/:urlCode',
        routeWrapper((req, res) => {
            const urlCode = req.params.urlCode ?? ''

            const target = urlDatabase.get(urlCode)

            if (!target) {
                throw new Error(ErrorTypes.NOT_FOUND)
            }

            res.redirect(target)
        }),
    )
}
