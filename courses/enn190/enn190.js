const subs = [{ "Teorifrågor": "https://drive.google.com/drive/folders/1VUsszCfNdJVKDuw7cFbzelgY-a21Faxc" }];
const leftDiv = document.getElementById("left_div");

subs.forEach(obj => {
    for (const [key, value] of Object.entries(obj)) {
        console.log(key, value);
        leftDiv.innerHTML += `
        <li>
            <a href="${value}" target="_blank" rel="noopener noreferrer">
                ${key}
            </a>
        </li>
        `;
    }
});
