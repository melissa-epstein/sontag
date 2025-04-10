This repository contains front-end of Sontag website.

Each file *.html here is a page on the website.
course.html is universal for pages of all courses.
css/ contains the file of styles which is the same for all pages.

img/ contains necessary pictures. Inside of it,
courses/ contains one main illustration for each course,
illustration/ contains other pictures used for design,
interface/ contains elements of interface (like buttons),
team/ contains photos of team members.
This way of sorting files is arbitrary and not mandatory.

js/ contains the java script programs for the website.
Each file add-*.js fills in a certain universal block on the website with content (header and footer). 
In turn, header.js makes the added in advance header interactive. handle-phone-input.js creates a function that can make a phone input work in a needed way.
Each file run-*.js creates a function that allows to run a certain kind of an interactive element on the website;
in each such file you can see which css classes should be defined for the interactive elements. These classes can be copy-pasted from the other interactive elements of the same kind and then altered to fit the needs.
Each other script currently runs a specific page on the website.
course.js begins with a list of courses on the website and all the information that makes page of each course unique.

programs/ could contain files that describe the programs of the courses which the user can download from the pages of the courses.