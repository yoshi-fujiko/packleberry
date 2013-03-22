(function(window){
  if(typeof(DOCS) == 'undefined' || !DOCS ){
    window.DOCS = {}
  }
  DOCS.navLink = document.getElementsByClassName("local_nav_link");
  for (i = 0, I = DOCS.navLink.length; i < I; i++) {
    DOCS.navLink[i].addEventListener("click", function(e) {
      e.preventDefault();
      DOCS.pageLink(this);
    }, false);
  }
  DOCS.pageLink = function(elem) {
    var id = elem.getAttribute("href").replace(/#/, "");
    var getScrollY = document.getElementById(id).offsetTop
    window.scrollTo(0, getScrollY);
  }
})(window);