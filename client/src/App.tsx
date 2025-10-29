import './App.css'
import { useState } from 'react'

const API_URL = 'http://localhost:3001'

function App() {
    const [url, setUrl] = useState('')
    const [shortenedUrl, setShortenedUrl] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const submit = async () => {
        // Réinitialiser l'erreur précédente
        setError(null)
        setIsLoading(true)

        try {
            const data = await fetch(`${API_URL}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            })

            const response = await data.json()

            // If the response is not ok or not successful
            if (!data.ok || !response.status || response.status !== 'ok') {
                setError(response.message || 'Une erreur est survenue')
                setShortenedUrl('')
                return
            }

            // Succès
            console.log({ response })
            setShortenedUrl(response.content.code)
        } catch (err) {
            // Network or fetch error
            setError('Erreur de connexion au serveur')
            setShortenedUrl('')
        } finally {
            setIsLoading(false)
        }
    }

    const redirect = async () => {
        window.location.href = `${API_URL}/${shortenedUrl}`
    }

    return (
        <div className="container">
            <h1>URL Shortener</h1>
            <p>Build your URL shortener interface here.</p>

            <div className="card">
                <p>
                    <input
                        type="text"
                        placeholder="Enter your URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        pattern="https?://.+"
                    />
                </p>

                {/* Affichage des erreurs */}
                {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}

                {shortenedUrl && (
                    <p>
                        Shortened URL:{' '}
                        <span
                            onClick={() => redirect()}
                            style={{ cursor: 'pointer', color: 'blue' }}
                        >{`${API_URL}/${shortenedUrl}`}</span>
                    </p>
                )}

                <button onClick={submit} disabled={isLoading || !url.trim()}>
                    {isLoading ? 'Chargement...' : 'Shorten'}
                </button>
            </div>
        </div>
    )
}

export default App
