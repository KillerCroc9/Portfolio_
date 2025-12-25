// =============================================================================
// SERVICE WORKER REGISTRATION
// =============================================================================

/**
 * Registers the service worker for PWA functionality
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/Portfolio_/service-worker.js', { scope: '/Portfolio_/' })
                .then((registration) => {
                    console.log('Service Worker registered successfully:', registration.scope);
                    
                    // Check for updates periodically
                    setInterval(() => {
                        registration.update();
                    }, 1000 * 60 * 60); // Check every hour
                    
                    // Handle updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New service worker available
                                showUpdateNotification(registration);
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    } else {
        console.log('Service Worker not supported in this browser');
    }
}

/**
 * Shows a notification when an app update is available
 */
function showUpdateNotification(registration) {
    const updateMessage = 'A new version is available! Click to refresh.';
    
    // Create custom notification
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
        <div class="update-notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${updateMessage}</span>
            <button class="update-btn">Refresh</button>
            <button class="dismiss-btn" aria-label="Dismiss">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add click handlers
    const refreshBtn = notification.querySelector('.update-btn');
    const dismissBtn = notification.querySelector('.dismiss-btn');
    
    refreshBtn.addEventListener('click', () => {
        if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
        }
    });
    
    dismissBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Track event
    if (typeof trackEvent === 'function') {
        trackEvent('PWA', 'Update Available', 'Service Worker');
    }
}

/**
 * Adds install prompt for PWA
 */
function setupInstallPrompt() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        
        // Stash the event so it can be triggered later
        deferredPrompt = e;
        
        // Show custom install button if it exists
        const installBtn = document.getElementById('install-btn');
        if (installBtn) {
            installBtn.style.display = 'block';
            
            installBtn.addEventListener('click', async () => {
                if (deferredPrompt) {
                    // Show the install prompt
                    deferredPrompt.prompt();
                    
                    // Wait for the user to respond
                    const { outcome } = await deferredPrompt.userChoice;
                    
                    console.log(`User response to install prompt: ${outcome}`);
                    
                    // Track event
                    if (typeof trackEvent === 'function') {
                        trackEvent('PWA', 'Install Prompt', outcome);
                    }
                    
                    // Clear the deferredPrompt
                    deferredPrompt = null;
                    installBtn.style.display = 'none';
                }
            });
        }
    });
    
    // Detect if app was successfully installed
    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
        
        // Track event
        if (typeof trackEvent === 'function') {
            trackEvent('PWA', 'Installed', 'Success');
        }
        
        // Hide install button
        const installBtn = document.getElementById('install-btn');
        if (installBtn) {
            installBtn.style.display = 'none';
        }
        
        // Show thank you notification
        if (typeof showNotification === 'function') {
            showNotification('Thanks for installing the app!', 'success', 3000);
        }
    });
}

// Initialize service worker and PWA features
registerServiceWorker();
setupInstallPrompt();

// Add styles for update notification
const style = document.createElement('style');
style.textContent = `
    .update-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--card-bg);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        border-left: 4px solid var(--primary-color);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    }
    
    .update-notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .update-notification i {
        color: var(--primary-color);
        font-size: 1.2rem;
    }
    
    .update-notification span {
        flex: 1;
    }
    
    .update-btn {
        padding: 0.5rem 1rem;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition);
    }
    
    .update-btn:hover {
        background: var(--secondary-color);
        transform: translateY(-2px);
    }
    
    .dismiss-btn {
        background: transparent;
        border: none;
        color: var(--text-secondary);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.5rem;
        line-height: 1;
        transition: var(--transition);
    }
    
    .dismiss-btn:hover {
        color: var(--text-primary);
    }
`;
document.head.appendChild(style);
