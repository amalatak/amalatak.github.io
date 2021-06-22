// document.getElementById("testelement").innerHTML = 10;


var coll = document.getElementsByClassName("collapsible");
var i;
var content = document.getElementById("mas-projects");


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

showText = function(classname) {
    var containerElement = document.getElementsByClassName(classname);
    var pageText = containerElement[0].nextElementSibling
    var text = containerElement[0].getElementsByClassName("background-subject");

    console.log(pageText)

    if (containerElement[0].getAttribute('value') == "0") {
        containerElement[0].setAttribute('value', '1');
        containerElement[0].setAttribute('style', 'filter: blur(1px); opacity:0.2;');
        text[0].setAttribute('style', "opacity:0;")
        pageText.setAttribute('style', "color: #fff; background-color:rgba(100,100,100,0.5);")
        
    } else {
        containerElement[0].setAttribute('value', '0');
        containerElement[0].setAttribute('style', '');
        text[0].setAttribute('style', "opacity:1;")
        pageText.setAttribute('style', "color: transparent;")
    }
}






