 // Make the DIV element draggable:
 const elements = document.querySelectorAll(".window");
 
 elements.forEach((element) => {
   let movable = element.querySelector(".movable");
   dragElement(element, movable);
 })

 function dragElement(element, movable) {
  var pos1 = 0,
   pos2 = 0,
   pos3 = 0,
   pos4 = 0;
  if (movable) {
   // if present, the header is where you move the DIV from:
   movable.onmousedown = dragMouseDown;
  } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   element.style.top = element.offsetTop - pos2 + "px";
   element.style.left = element.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
  }
 }
