import React from 'react'

function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>DevOps Portfolio Project</h1>
                <p className="subtitle">A Modern React Application with CI/CD Pipeline</p>
                <div className="features">
                    <div className="feature-card">
                        <h3>🚀 CI/CD Pipeline</h3>
                        <p>Automated testing and deployment using GitHub Actions</p>
                    </div>
                    <div className="feature-card">
                        <h3>⚛️ React</h3>
                        <p>Built with modern React practices and clean architecture</p>
                    </div>
                    <div className="feature-card">
                        <h3>🎯 GitHub Pages</h3>
                        <p>Automatically deployed to GitHub Pages</p>
                    </div>
                </div>
                <div className="cta-section">
                    <a href="https://github.com/Ryheembon/Dev-ops.demo" 
                       className="github-link" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Welcome;