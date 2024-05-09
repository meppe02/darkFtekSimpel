const subs = ["Del A", "Del B", "Del C", "Del D"];
const leftDiv = document.getElementById("left_div");
subs.map(sub => {
    console.log(sub);
    leftDiv.innerHTML += `
    <li>
        ${sub}
    </li>
    `;
});
