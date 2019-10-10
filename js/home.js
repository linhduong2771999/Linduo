var btnOpenNav = document.getElementById("btn-open-navbar");
var btnCloseNav = document.getElementById("btn-close-navbar");
var sideNav = document.getElementById("header");

var z = window.matchMedia("(max-width: 767px)");
myFunction(z); // Call listener function at run time
z.addListener(myFunction); // Attach listener function on state changes

function myFunction(z) {
  // If media query matches enter mobile device
  if (z.matches) {
    // onsrcoll mobile device
    window.onscroll = function() {
      scrollNavbar()
    };

    function scrollNavbar() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("header").style.backgroundColor = "#f8a42a";
        document.getElementById("header").style.boxShadow =
          " 0px 1px 20px 0px rgba(231,166,26,1) ";
        document.getElementById("header-wrap").style.padding = "0";
        // change color text when scroll
        let textColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul > li > a"
        );
        for (let i = 0; i < textColor.length; i++) {
          textColor[i].style.color = "white";
        }

        // change background color dropdown when scroll
        let textBackgroundColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul  li > ul > li"
        );
        for (let i = 0; i < textBackgroundColor.length; i++) {
          textBackgroundColor[i].style.backgroundColor = "transparent";
        }
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.boxShadow =
          "0 0 0 transparent ";
        document.getElementById("header-wrap").style.padding = "30px 0";

        // change color text when scroll
        let textColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul > li "
        );
        for (let i = 0; i < textColor.length; i++) {
          textColor[i].style.color = "transparent";
        }

        // change background color dropdown when scroll
        let textBackgroundColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul  li > ul > li"
        );
        for (let i = 0; i < textBackgroundColor.length; i++) {
          textBackgroundColor[i].style.backgroundColor = "transparent ";
        }
      }
    }
    // open & close side-navbar when click on mobie
    btnOpenNav.addEventListener("click", function() {
      sideNav.style.marginLeft = "0";
    });
    
    btnCloseNav.addEventListener("click", function() {
      sideNav.style.marginLeft = "-250px";
    });
  }
  else { // large device
    
    // on scroll slide down shrink navbar on large device
       window.onscroll = function() {
      scrollNavbar();
    };
    // function scroll navbar
    function scrollNavbar() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        // add style for navbar
        document.getElementById("header").style.backgroundColor = "#f8a42a";
        document.getElementById("header").style.boxShadow =
          " 0px 1px 20px 0px rgba(231,166,26,1) ";
        document.getElementById("header-wrap").style.padding = "15px 0";
        // change color text when scroll
        let textColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul > li > a"
        );
        for (let i = 0; i < textColor.length; i++) {
          textColor[i].style.color = "brown"; 
        }

        // change background color dropdown when scroll
        let textBackgroundColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul  li > ul > li"
        );
        for (let i = 0; i < textBackgroundColor.length; i++) {
          textBackgroundColor[i].style.backgroundColor = "#f8a42a";
        }
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.boxShadow =
          "0 0 0 transparent ";
        document.getElementById("header-wrap").style.padding = "30px 0";

        // change color text when scroll
        let textColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul > li > a"
        );
        for (let i = 0; i < textColor.length; i++) {
          textColor[i].style.color = "rgba(255, 255, 255, 0.7)";
        }

        // change background color dropdown when scroll
        let textBackgroundColor = document.querySelectorAll(
          "#header .header-wrap .navbar ul  li > ul > li"
        );
        for (let i = 0; i < textBackgroundColor.length; i++) {
          textBackgroundColor[i].style.backgroundColor = "#21292745";
        }
      }
    }

    // this is use to stop effect click from mobie to large device
    sideNav.style.marginLeft = "";
  }
}

// click image modal Photography

var modal = document.getElementById("modal");
var imgPhoto = document.getElementsByClassName("img-photo");
var modalContent = document.getElementById("modal-content");
var imgModal = document.getElementsByClassName("imgModal");
var closeBtn = document.getElementById("close");

for (let i = 0; i < imgPhoto.length; i++) {
  imgPhoto[i].onclick = function() {
    modal.style.display = "block";
    for (let j = i; j < imgModal.length; j++) {
      modalContent.src = imgModal[j].src;
      break;
    }
  };
}

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
