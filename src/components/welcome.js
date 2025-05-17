import React, { useEffect } from 'react'
import { trackEvent, logError } from '../utils/monitoring'

function Welcome() {
    // Use environment variable with fallback
    const githubUrl = process.env.REACT_APP_GITHUB_URL || 'https://github.com/Ryheembon/Dev-ops.demo';
    const enableAnimations = process.env.REACT_APP_ENABLE_ANIMATIONS === 'true';
    const apiUrl = process.env.REACT_APP_API_URL;

    // Track component mount
    useEffect(() => {
        trackEvent('component_mount', {
            component: 'Welcome',
            environment: process.env.REACT_APP_ENV
        });
    }, []);

    // Only show warning if API URL is required for future features
    const showApiWarning = false; // Set to true when you need the API URL
    const missingVars = [];
    if (showApiWarning && !apiUrl) {
        missingVars.push('REACT_APP_API_URL');
        logError(new Error('Missing API URL'), { component: 'Welcome' });
    }

    const handleGitHubClick = () => {
        trackEvent('github_click', {
            url: githubUrl,
            environment: process.env.REACT_APP_ENV
        });
    };

    return (
        <div className={`welcome-container ${enableAnimations ? 'with-animations' : ''}`}>
            <div className="welcome-content">
                {missingVars.length > 0 && (
                    <div className="error-message">
                        Warning: Missing environment variables: {missingVars.join(', ')}
                    </div>
                )}
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
                    <a href={githubUrl} 
                       className="github-link" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       onClick={handleGitHubClick}>
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Welcome;