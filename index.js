const courses = ["tif083", "enn190", "att140", "tif086"];
const id="courses"
const realCourses = courses.sort().map(course => {
    upper=course.toUpperCase();
    document.getElementById(id).innerHTML+=`

    <div class="clickable">
        <a href="/courses/${upper}/${upper}.html">
        ${upper}
    </div>`
})
