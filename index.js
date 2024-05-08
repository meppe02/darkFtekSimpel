const courses = ["tif083", "enn190", "att140", "tif086"];
const id = "courses";
let htmlContent = courses.sort().map(course => {
    const upper = course.toUpperCase();
    const lower = course.toLowerCase();
    return `
        <div class="clickable">
            <a href="courses/${lower}/${lower}.html">
                ${upper}
            </a>
        </div>`;
}).join('');

document.getElementById(id).innerHTML = htmlContent;
