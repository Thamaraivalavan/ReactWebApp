import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
function App() {
    return (<>
        <nav>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
        <section id="about">
            <h1>About Section</h1>
            <p>Welcome to the about section!</p>
        </section>
        <section id="contact">
            <h1>Contact Section</h1>
            <p>Get in touch with us.</p>
        </section></>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)