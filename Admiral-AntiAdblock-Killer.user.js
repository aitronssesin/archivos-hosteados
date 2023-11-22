// ==UserScript==
// @name         Admiral AntiAdblock Killer
// @version      0.2
// @description  
// @author       JeremyLee
// @match        https://*/*
// @match        http://*/*
// @grant        none
// @updateURL    https://gist.github.com/JeremyLee/2f7ffe2c7ef6576de36795dadaa2a535/raw/Admiral-AntiAdblock-Killer.user.js
// ==/UserScript==

(function() {
  window.setInterval(function(){

    if(document.getRootNode().children[0].style.overflow === "hidden" && document.getElementsByTagName("body")[0].style.overflow === "hidden") {
      // Admiral Anti Adblock sets these properties when it activates.
      
      // Search for the keyword to make sure it's actually the admiral anti-adblock. We don't want to clear the above properties if it's part of the page design.
      var aTags = document.getElementsByTagName("H3");
      var searchText = "Uh Oh...Adblocker detected!";
      var found;

      for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
          found = aTags[i];
          break;
        }
      }

      if(found){
        // Loop until we've found the topmost element that's part of admiral.
        while(found.parentElement.nodeName !== "BODY") {
          found = found.parentElement;
        }
        
        // Remove that stupid element
        found.remove()
        
        // Enable the scrollbars again.
        document.getRootNode().children[0].style.overflow = null
        document.getElementsByTagName("body")[0].style.overflow = null
      }
    }
  }, 100);
})();
