  import { setHeroContent } from "./component/hero.js";
import { setAboutmeContent } from "./component/about.js"; 
import { setProjectContent } from "./component/project.js";
import { setSkillContent } from "./component/skill.js";
import { setEducationContent } from "./component/education.js";
import { setBlogContent } from "./component/blog.js";
import { setFooterContent } from "./component/footer.js";

import {setLoadButton,loadButtonfunction} from "./component/load.js";

// function to close navigation menu
function closeNav() {
  $(".nav").css("display", "none");
}

//function for setting sections content

function setContent(){
  setHeroContent(),
  setAboutmeContent(),
  setProjectContent(),
  setSkillContent(),
  setEducationContent(),
  setBlogContent(),
  setFooterContent(),
  setLoadButton()
}

// $("load").

// behaviour after page load
$(document).ready(()=> {

  // Setting the component's data dynamically

  $("#menu-icon").click(function () {
    $(".nav").css("display", "block");
  });
  $("#cancel-icon").click(closeNav);

  // onclick it return to home page
  $("header .logo").click(function () {
    window.location.href = "index.html";
  });

  $("header .logo").addClass("hover");

  //   navigation to different sections

  $(".nav #aboutme").click(function () {
    window.location.href = "#aboutme-section";
    closeNav();
  });

  $(".nav #projects").click(function () {
    window.location.href = "#projects-section";
    closeNav();
  });

  $(".nav #skills").click(function () {
    window.location.href = "#skills-section";
    closeNav();
  });

  $(".nav #education").click(function () {
    window.location.href = "#education-section";
    closeNav();
  });

  $(".nav #blog").click(function () {
    window.location.href = "#blog-section";
    closeNav();
  });
  
//   Setting section content
  setContent();
  loadButtonfunction();
  
});




