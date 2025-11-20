import { portfolioData } from '../data/portfolioData';

const GITHUB_USERNAME = 'yuvrajAry';

export const fetchGitHubProjects = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);

        if (!response.ok) {
            throw new Error('GitHub API request failed');
        }

        const repos = await response.json();

        // Filter out forks if desired, or keep them. For now, keeping everything public.
        // Map to our project structure
        return repos.map(repo => ({
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // Format title
            tech: [repo.language || 'Code', ...repo.topics].filter(Boolean).slice(0, 4), // Use language + topics
            description: repo.description || "No description available.",
            github: repo.html_url,
            stars: repo.stargazers_count,
            updatedAt: new Date(repo.updated_at).toLocaleDateString()
        }));

    } catch (error) {
        console.warn("Failed to fetch from GitHub API, falling back to static data.", error);
        return portfolioData.projects;
    }
};
