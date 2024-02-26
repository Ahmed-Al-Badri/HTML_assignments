// Add your code here
let image = document.createElement("img");

let style = document.createElement("style");
style.type = "text/css";

let style_of_text =
  '.img { display: block; margin: 0 auto; }\
  .bio {margin: 20px auto;\
    width: 300px;\
  }\
  .bio::first-line \
    {\
        color: aqua;\
        font-size: 16px;\
        font-family: Fonstars;\
      }\
      @font-face{\
    font-family: Fonstars;\
    src: url("../fp/Fonstars-4Bo0p.woff") format("woff");\
  }';

style.innerHTML = style_of_text;
document.getElementsByTagName("head")[0].appendChild(style);

image.style.width = 200;
image.style.height = 200;
image.src = "../images/Ahmed.png";
image.style.borderRadius = "100%";
image.alt =
  "This image is the image of the University student Ahmed Al-Badri at Portland State";

image.className = "img";
let paragraph = document.createElement("p");

paragraph.textContent =
  "My name is Ahmed Al-Badri and am a student in this class term which \
is Winter 2024, this term might be a good term becasue of the topics \
being taught in other classes and this class. However, during the \
choicing of the terms classes, there seemed to be many classes to take, \
and since this is the third year, more Computer Science classes became\
open.";
paragraph.className = "bio";

document.body.append(image);
document.body.append(paragraph);
