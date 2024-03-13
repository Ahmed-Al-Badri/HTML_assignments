## Code Review Exercise

Write your code review here in markdown format. 

**First code review, it is regarding the hash movement through the page, other than that it is the Top bar navigation.
The main issue was that the hash wasen't being cleared, in that it casued the html body to not move through the page only after a couple of clicks through the rest of the nav.

What is needed:
- A javascript code used with the onclick html element/etc.
- The onclick event must be added to the nav locations.
- The hash must be cleared to changed to ensure working results.

*Code view before change:

```html
<li class="nav-list-item">
            <a
              href="#Introduction"
              class="nav-link hover-transition"
              >Introduction</a
            >
```
*New code
'''html
<li class="nav-list-item">
            <a
              onclick="hash()"
              href="#Introduction"
              class="nav-link hover-transition"
              >Introduction</a
            >
```
- Do the rest to the a elements in the nav list item

*Java script code.
The javascript code, it will reset the hash through the function.

```js
function hash() {
  location.hash = "";
}
```

**Second Code review has to do with the HTML and CSS, memory is being lost when converted into smaller screen display.

* Issue
- Fullscreen
	<img scr="../code-review-codebase/images/Second,One,one.PNG" height=200 alt="Issue in full screen before fix">

- Smaller Screen
	<img scr="../code-review-codebase/images/Second,One,two.PNG" height=200 alt="Issue in half screen before fix">

* The fix result on the Small Screen.

- Fullscreen, No change.

- Smaller Screen
	<img scr="../code-review-codebase/images/Second,two,two.PNG" height=200 alt="Issue in half screen, fixed">

*CSS code
The code in CSS. Instead of allowing the block to be displayed as none, it is displayed as a block. To ensure no data lost to the clients/users with small screens.

```CSS
.characteristics-image {
    display: inline-block;
    padding: 5px;
  }
```
- As a note, there are better ways to display an image than just to display it as a block.

**Third Problem, it is not as big, however and if it is, four should do.
-This third problem is regarding the lack of information on the button, which might be needed for people that use listing web elements to navigate through the web.

Before fix
```html
<div class="space-between-distributed-row-container">
              <h3>Origin</h3>
              <button
                class="close-popup-button"
              >
```

After fix
```html
<div class="space-between-distributed-row-container">
              <h3>Origin</h3>
              <button
                class="close-popup-button"
                aria-label="close popup window"
                title="close popup window"
              >
```

**Four problem, the form is not set up correct, in which it does not allow the form to be submitted or restarded.

- How it was fixed, the buttons were placed outside of the form, in which it was placed inside.
- Other than that, a few elements were misiing like the fieldset and legend.

The fix is
- fieldset and legend was added.
```html
<form id="RequestInfo" class="content-container form">
        <fieldset>
          <legend><h1>Tell us what you want to learn more</h1></legend>
          <div
```

- The buttons and funcationality fix.
```html
            <input class="form-button" type="submit" value="submit" />
            <input class="form-button" type="reset" value="reset" />
          </div>
        </fieldset>
      </form>
```
The form was ended before the two inputs of the buttons.

-Name: Ahmed Al-Badri
-Class: Html web.
First is code 406 and it is regarding less formats for input
