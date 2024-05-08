// Base URL, adjusting for GitHub Pages or local hosting
const isGitHub = window.location.hostname.includes('github.io');
const repoName = 'darkfteksimpel'; // Repository name
const baseURL = isGitHub ? `/${repoName}/` : 'http://127.0.0.1:5500/';

// Navigation and footer text
const nav = "FTEK";
const footer = "End";

// Update the entire body's HTML
document.body.innerHTML = `
<nav class="navbar">
    <ul class="navbar-list">
        <li><a href="${baseURL}index.html">Hem</a></li>
        <li><a href="${baseURL}about.html">Om oss</a></li>
        <li><a href="${baseURL}sitt.html">Sitt ner</a></li>
    </ul>
</nav>
` + document.body.innerHTML + `
<footer>
    ${footer}
</footer>
`;
