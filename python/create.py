import os
map="courses"
cwd=os.getcwd()
pathToCourses=os.path.join(cwd, map)
def nameOfCOurse():
    while True:
        ans_continue=False
        ans="n"
        name=input("Enter the name of the course: ")
        if not ans_continue:
            ans = input(f'Is \"{name}\" the right name of the course (y/n)? ')
        if ans == "y" or ans == "yes":
            return name
def exist(name, path):
    if os.path.isdir(os.path.join(path,name)):
        print("Dir does already exist!")
        return 1
    return 0
def createDir(name, path):
    fullPath= os.path.join(path, name)
    if not exist(name, path):
        os.mkdir(fullPath)
        return 1
    print("Does already exist")
    return 0
def createFiles(name, path):
    fullPath=os.path.join(path,name)
    pPExtensionHtml=f"{fullPath}.html"
    pPExtensionCss=f"{fullPath}.css"
    pPExtensionJs=f"{fullPath}.js"
    html=f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="all.css">
        <link rel="stylesheet" href="courses/courses.css">
        <link rel="stylesheet" href="courses/{name}/{name}.css">
        

    </head>

    <body>
        <div class="main">
            <div class="grid_container">
                <div id="left_div">
        
                </div>
                <div id="right_div">

                </div>
            </div>
        </div>
    </body>
    <script src="all.js">
    </script>
    <script src="courses/{name}/{name}.js"></script>
    </html>
    """
    if not exist(name, path):
        with open(pPExtensionHtml, "w") as file:
            file.write(html)
        with open(pPExtensionCss, "w") as file:
            file.write("")
        with open(pPExtensionJs, "w") as file:
            file.write("")
        return 1
    print("Does already exist")
    return 0
def main(path):
    name=nameOfCOurse()
    createDir(name, path)
    pathToNew=os.path.join(path, name)
    createDir("files", pathToNew)#Makes the empty dir with all the files
    createFiles(name, pathToNew)
    print("Everything worked")
main(pathToCourses)