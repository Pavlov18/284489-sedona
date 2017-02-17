var link = document.querySelector(".index-search-title");
var popup = document.querySelector(".index-search-form");

link.addEventListener("click", function(event) {
  event.preventDefault();        
  if (popup.classList.contains("index-search-close")) {
    popup.classList.remove("index-search-close");
    popup.classList.add("index-search-animation");
  }
  else {
    popup.classList.add("index-search-close");
    popup.classList.remove("index-search-animation");
  }
  
});