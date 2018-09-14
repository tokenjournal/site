function setActive() {
  const currentPage = window.location.pathname.split("/").pop()
  var el = document.getElementById(currentPage);
  el.classList.add("active");
}
setActive();

document.addEventListener("DOMContentLoaded", function() {
  var collapsableElements = document.getElementsByTagName('H6');

  for(var i = 0; i < collapsableElements.length; i++) {
    let el = collapsableElements[i];

    let className = "collapse-" + i;
    el.classList.add(className);

    el.innerHTML = `\<i class=\"${className} arrow right\"><\/i>` + el.innerHTML;

    el.addEventListener('click', function(){
      toggleSection(this);
    }, false);
    toggleSection(el);
  }
});

function toggleArrow(el, currentElement) {
  var arrow = document.getElementsByClassName(`${el.classList} arrow`)[0]

  if (!currentElement.classList.contains("hide")) {
    arrow.classList.remove("down");
    arrow.classList.add("right")
  } else {
    arrow.classList.remove("right")
    arrow.classList.add("down");
  }
}

function toggleSection(startElement) {
  var currentElement = startElement.nextElementSibling.nextElementSibling;

  toggleArrow(startElement, currentElement);

  while(true) {
    if (!currentElement.classList.contains("hide")) {
      currentElement.classList.add("hide");
    } else {
      currentElement.classList.remove("hide");
    }

    // Switch the current element to the next sibling
    currentElement = currentElement.nextElementSibling;

    // Stop the loop if the element is null (no sibling elements)
    if (currentElement == null) {
      return;
    }

    //Stop the loop if you hit another <H#> tag
    if (currentElement.tagName.includes("H")) {
      return;
    }
  }
}
