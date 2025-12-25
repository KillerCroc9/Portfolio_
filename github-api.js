// =============================================================================
// GITHUB API INTEGRATION
// =============================================================================

const GITHUB_USERNAME = 'KillerCroc9'; // Change this to your GitHub username
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes
const CACHE_KEY = 'github_repos_cache';

/**
 * Fetches user's repositories from GitHub API
 */
async function fetchGitHubRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return null;
    }
}

/**
 * Gets cached repository data if available and not expired
 */
function getCachedRepos() {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;
        
        const { data, timestamp } = JSON.parse(cached);
        const now = Date.now();
        
        if (now - timestamp < CACHE_DURATION) {
            return data;
        }
        
        // Cache expired, remove it
        localStorage.removeItem(CACHE_KEY);
        return null;
    } catch (error) {
        console.error('Error reading cache:', error);
        return null;
    }
}

/**
 * Caches repository data
 */
function cacheRepos(repos) {
    try {
        const cacheData = {
            data: repos,
            timestamp: Date.now()
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error caching repos:', error);
    }
}

/**
 * Formats a date to relative time (e.g., "2 days ago")
 */
function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };
    
    for (const [unit, seconds] of Object.entries(intervals)) {
        const interval = Math.floor(diffInSeconds / seconds);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }
    
    return 'just now';
}

/**
 * Creates HTML for a single repository card
 */
function createRepoCard(repo) {
    const {
        name,
        description,
        html_url,
        stargazers_count,
        forks_count,
        language,
        updated_at
    } = repo;
    
    return `
        <div class="repo-card">
            <div class="repo-header">
                <i class="fab fa-github repo-icon"></i>
                <div class="repo-title">
                    <h3><a href="${html_url}" target="_blank" rel="noopener noreferrer">${name}</a></h3>
                </div>
            </div>
            <p class="repo-description">${description || 'No description available'}</p>
            <div class="repo-stats">
                <span class="repo-stat">
                    <i class="fas fa-star"></i>
                    <span>${stargazers_count}</span>
                </span>
                <span class="repo-stat">
                    <i class="fas fa-code-branch"></i>
                    <span>${forks_count}</span>
                </span>
            </div>
            ${language ? `<span class="repo-language">${language}</span>` : ''}
            <div class="repo-updated">Updated ${formatRelativeTime(updated_at)}</div>
        </div>
    `;
}

/**
 * Displays repository cards on the page
 */
function displayRepos(repos) {
    const container = document.getElementById('github-repos-grid');
    
    if (!repos || repos.length === 0) {
        container.innerHTML = `
            <div class="loading-state">
                <i class="fas fa-exclamation-circle"></i>
                <p>Unable to load repositories. Please check back later.</p>
            </div>
        `;
        return;
    }
    
    const repoCards = repos.map(repo => createRepoCard(repo)).join('');
    container.innerHTML = repoCards;
    
    // Track analytics event
    trackEvent('GitHub Repos', 'Load', 'Success', repos.length);
}

/**
 * Loads and displays GitHub repositories
 */
async function loadGitHubRepos() {
    const container = document.getElementById('github-repos-grid');
    
    if (!container) {
        console.warn('GitHub repos container not found');
        return;
    }
    
    // Try to get cached data first
    const cachedRepos = getCachedRepos();
    if (cachedRepos) {
        displayRepos(cachedRepos);
        return;
    }
    
    // Fetch fresh data
    const repos = await fetchGitHubRepos();
    
    if (repos) {
        cacheRepos(repos);
        displayRepos(repos);
    } else {
        container.innerHTML = `
            <div class="loading-state">
                <i class="fas fa-exclamation-circle"></i>
                <p>Unable to load repositories. Please try again later.</p>
            </div>
        `;
    }
}

// Initialize GitHub repos when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGitHubRepos);
} else {
    loadGitHubRepos();
}
