//common side navbar call

$(document).ready(function() {
    $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");

if (mybutton) {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 350 ||
            document.documentElement.scrollTop > 350
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

//Footer and Navbar

let header = $(`
<nav class="fixed-top black">
<div class="nav-wrapper">
    <a href="https://akshitjain16.github.io/akshit-jain/" class="brand-logo"><img src="assets/images/navLogo.png"></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="skill.html">Skills</a></li>       
        <li><a class="white-text" href="experience.html">Experience</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <li><a class="white-text" href="education.html">Education</a></li>
        
        
        
        
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li>Jheel<li>
<li><a href="index.html">Home</a></li>
<li><a href="skill.html">Skills</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="education.html">Education</a></li>






<!--TOGGLE FOR LIGHT/DARK MODE-->
        
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="footer-left">
  <div class="footer-img">
    <img src="assets/images/navLogo.png" alt="User img" style="width:220px;">
  </div>
  <div class="footer-text">
    <p style="color:#cccccc">"Develop a passion for learning. If you do, you will never cease to grow."</p>
  </div>
  <div class="footer-icons">
   
    
    <a href="https://www.linkedin.com/in/akshitjain16/" class="linkedin sub-footer-icon">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/akshitjain16" class="git sub-footer-icon">
      <i class="fab fa-github"></i>
    <a href="https://twitter.com/akshitjain61" class="twitter sub-footer-icon">
      <i class="fab fa-twitter"></i>
    </a>
    </a>
    <a href="mailto:gang.akshitjain@gmail.com" class="email-icon" >
      <i class="fas fa-envelope" style="color: #1da1f2;"></i>
    </a>
    
  </div>
  
</div>



</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

// selecting toggler dynamically as their are two separate code sections for the toggler to support both mobile screen and desktop screens
if (window.innerWidth <= 992) {
    var checkbox = document.querySelector("#switch-2");
    var toggler = document.querySelector('.toggle-button-2');
} else {
    var checkbox = document.querySelector("#switch-1");
    var toggler = document.querySelector('.toggle-button-1');
}

if (checkbox) {
    let a = localStorage.getItem("theme");
    document.documentElement.setAttribute("dark", a); // setting the initial theme to light


    if (localStorage.getItem("theme") === "dark") {
        checkbox.checked = true;
    }

    // selecting the footer text & footer icons
    const footerText = document.querySelector('.footer-text p');
    const footerIcons = document.querySelectorAll('.sub-footer-icon');
    const emailIcon = document.querySelector('.email-icon');

    // listening for click on toggler
    toggler.addEventListener("click", () => {
        if (checkbox.checked) {
            // if theme is dark then on the toggler click we have to make it light
            trans();
            // changing the color
            toggleDarkColor();

            document.documentElement.setAttribute("dark", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            /*
            if there is click on toggler and if theme is light (initially it will be light) then the theme should convert to dark
            */
            trans();
            // changing the color
            toggleDarkColor();

            document.documentElement.setAttribute("dark", "dark");
            localStorage.setItem("theme", "dark");
        }
    });



    // function for changing color when dark theme is on.
    let toggleDarkColor = () => {
            footerText.style.color = '#fff';
            emailIcon.style.color = '#fff';

            footerIcons.forEach(icon => {
                icon.style.backgroundColor = '#fff';
                icon.style.border = '1px solid #fff';

                // hover effect
                icon.addEventListener('mouseover', () => {
                    icon.style.backgroundColor = '#4d4d4d';
                    icon.style.border = '1px solid #4d4d4d';
                });

                icon.addEventListener('mouseleave', () => {
                    icon.style.backgroundColor = '#fff';
                    icon.style.border = '1px solid #fff';
                });
            });
        } // function for changing color when the light theme is on.
    let toggleLightColor = () => {
        footerText.style.color = '#fff';
        emailIcon.style.color = '#fff';

        footerIcons.forEach(icon => {
            icon.style.backgroundColor = '#fff';
            icon.style.border = '1px solid #fff';

            // hover effect
            icon.addEventListener('mouseover', () => {
                icon.style.backgroundColor = '#4d4d4d';
                icon.style.border = '1px solid #4d4d4d';
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.backgroundColor = '#fff';
                icon.style.border = '1px solid #fff';
            });
        });

    }
}
