mysite="http://127.0.0.1:5500/"
nav="FTEK"
footer="End"
document.body.innerHTML=
`
<nav class="navbar">
    <ul class="navbar-list">
        <li><a href="${mysite}/index.html">Hem</a></li>
        <li><a href="${mysite}/about.html">Om oss</a></li>
        <li><a href="${mysite}/sitt.html">Sitt ner</a></li>
    </ul>
</nav>
`
+document.body.innerHTML+
`
<footer>
${footer}
</footer>
`