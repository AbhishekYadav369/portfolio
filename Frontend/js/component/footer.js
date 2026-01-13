import { feedbackLayout } from "../data/layout.js";
 
const{code,connect}=feedbackLayout;
const {  github, leetcode, hackerrank} =code;
const {location,gmail,linkedin }=connect;

const gmail_url=gmail.url+"&to="+encodeURIComponent(gmail.to);

   function setFooterLinks(){
    $("#gmail").attr({src: gmail.img_src, alt: gmail.alt});
    $("#linkedin").attr({src: linkedin.img_src, alt: linkedin.alt});
    $("#location").attr({src: location.img_src, alt: location.alt});
    $("#github").attr({src: github.img_src, alt: github.alt});
    $("#leetcode").attr({src: leetcode.img_src, alt: leetcode.alt});
    $("#hackerrank").attr({src: hackerrank.img_src, alt: hackerrank.alt});
  }

   function setFooterLinksURL(){
    $("#gmail").click(()=>window.open(gmail_url, "_blank"));
    $("#linkedin").click(()=>window.open(linkedin.url, "_blank"));
    $("#location").click(()=>window.open(location.url, "_blank"));
    $("#github").click(()=>window.open(github.url, "_blank"));
    $("#leetcode").click(()=>window.open(leetcode.url, "_blank"));
    $("#hackerrank").click(()=>window.open(hackerrank.url, "_blank"));
  }

  export function setFooterContent(){
    setFooterLinks();
    setFooterLinksURL();
  }
