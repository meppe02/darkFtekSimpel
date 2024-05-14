// Base URL, adjusting for GitHub Pages or local hosting
const isGitHub = window.location.hostname.includes('github.io');
const repoName = 'darkfteksimpel'; // Repository name
const url = isGitHub ? `/${repoName}/` : 'http://127.0.0.1:5500/';
const expfysen_url = "https://stekpannan02.github.io/Expfys-calculator/";
// Function to check website status and update link accordingly
function checkAndUpdateLink() {
    fetch(expfysen_url, { method: 'HEAD' })
        .then(response => {
            const linkText = response.ok ? "Expfysräknare" : "Expfysräknare (Nere)";
            updateNavbarLink(linkText);
        })
        .catch(error => {
            console.error('Error accessing the website:', error);
            updateNavbarLink("Expfysräknare (Error)");
        });
}

function updateNavbarLink(text) {
    const navbarList = document.querySelector('.navbar-list');
    const navbarListDropDown = document.querySelector('.navbar-list-drop');
    if (navbarList) {
        navbarList.innerHTML = `
            <li><a href="${url}index.html">Hem</a></li>
            <li><a href="${url}about.html">Om oss</a></li>
            <li><a href="${expfysen_url}">${text}</a></li>
        `;
    }
    if (navbarListDropDown) {
        navbarListDropDown.innerHTML = `
            <li><a href="${url}index.html">Hem</a></li>
            <li><a href="${url}about.html">Om oss</a></li>
            <li><a href="${expfysen_url}">${text}</a></li>
        `;
    }
    
}function main(){
    console.log("DOM fully loaded and parsed");
    document.body.innerHTML = `
        <nav class="navbar">
            <ul class="navbar-list">
                <!-- Links will be populated by checkAndUpdateLink function -->
            </ul>
            <div id="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="drop-down" class="not-active">
                <ul class="navbar-list-drop">
                    <!-- Links will be populated by checkAndUpdateLink function -->
                </ul>
            </div>
        </nav>
        ${document.body.innerHTML}
        <footer>End</footer>
    `;
    console.log("Navbar and footer added to DOM");
    checkAndUpdateLink();
}
main()
document.getElementById("burger").addEventListener("click", () => {
    const dropDown = document.getElementById("drop-down");
    if (dropDown.classList.contains("not-active")) {
        dropDown.classList.remove("not-active");
        dropDown.classList.add("active");
    } else {
        dropDown.classList.remove("active");
        dropDown.classList.add("not-active");
    }
});
/*
document.addEventListener('load', () => {
    console.log("DOM fully loaded and parsed");
    document.body.innerHTML = `
        <nav class="navbar">
            <ul class="navbar-list">
                <!-- Links will be populated by checkAndUpdateLink function -->
            </ul>
        </nav>
        ${document.body.innerHTML}
        <footer>End</footer>
    `;
    console.log("Navbar and footer added to DOM");
    checkAndUpdateLink();
});
*/
