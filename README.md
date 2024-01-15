# SHPE Website Project

## References
For references and tutorials see [w3schools](https://www.w3schools.com). They offer information for all the languages we are and will be using.
[Google Drive](https://drive.google.com/drive/folders/13NLnJd46wAAWkXQJ4704ZHu32EO3EtUA?usp=sharing) with website information.

## Files
The working files are stored in the main directory of this repository. There are a total of **11 HTML Files**, all sharing **1 CSS file**, and each with a respective **JavaScript File** *(Except the team files. They share one JavaScript File `team.js`)*.

> **HTML** *(.html)* files are for creating the overal content and text for the page.\
> **CSS** *(.css)* files are for styling the *HTML* content.\
> **JavaScript** *(.js)* files are for creating interactive content such as animations and functionality.

## HTML
Each HTML file is divided into two sections: **head** and **body**. The **head** contains meta information that does not appear on the main page of the website while the **body** comprises all of the content on screen.

---
To deduct which files are connected, see the head:

For CSS files see `<link href="style.css" rel="stylesheet" type="text/css">`\
The code snippet above is an *HTML* file linked to the file **style.css**.

For JavaScript files see `<script type="text/jscript" src="myScript.js"></script>`\
The code snippet above is an *HTML* file linked ot the file **myScript.js**.

---
All HTML files should have:

#### Navigation Bar
`<div class="navigationBar">` ... `</div>`
#### Footer
`<div class="footer">` ... `</div>`

## CSS
The CSS file contains the SHPE fonts `@font-face {` ... `}` and styles for *classes*, *ids*, and *elements*.

> **Element** `elementName` is a selector for all the elements in the document of a specified type.\
> **Class** `.className` is a selector for multiple elements with the attribute `class="`NAME`"`.\
> **Id** `#idName` is a selector for a single element with the unique attribute `id="`NAME`"`.

## Navigation
- ### Home
  - index.html
- ### About
  - history.html
  - events.html
  - programs.html
- ### Team
  - team19.html
  - team20.html
  - team21.html
- ### Join
  - member.html
  - sponsor.html
- ### Other
  - faq.html
  - bylaws.html
