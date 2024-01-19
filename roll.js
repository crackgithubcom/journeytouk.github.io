window.onscroll = function() {backToTop()};  
  
function backToTop() {  
  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {  
    document.getElementById("backToTop").style.display = "block";  
  } else {  
    document.getElementById("backToTop").style.display = "none";  
  }  
}