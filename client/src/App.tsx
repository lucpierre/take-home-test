import './App.css'
import { useState } from 'react'

const API_URL = 'http://localhost:3001'

function App() {
    const [url, setUrl] = useState('')
    const [shortenedUrl, setShortenedUrl] = useState('')

    const submit = async () => {
        const data = await fetch(`${API_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        })

        const response = await data.json()

        setShortenedUrl(response.content.code)
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
                    />
                </p>
                {shortenedUrl && (
                    <p>
                        Shortened URL: <span onClick={() => redirect()}>{`${API_URL}/${shortenedUrl}`}</span>
                    </p>
                )}
                <button onClick={submit}>Shorten</button>
            </div>
        </div>
    )
}

export default App
