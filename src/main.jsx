import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// Remove the SEO tags baked into the prerendered HTML before Helmet mounts.
// react-helmet-async injects its own set on hydration without clearing these,
// which otherwise leaves duplicate <title>/meta tags in the DOM. Non-JS
// crawlers still receive the prerendered tags from the static HTML.
document
  .querySelectorAll('head [data-prerendered]')
  .forEach((el) => el.remove())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
