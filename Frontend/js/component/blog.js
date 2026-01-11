import { blogCard } from "../data/data.js";

const { id, title,img_src,alt, content,button } = blogCard[0];

// function to set blog content
export function setBlogContent() {
  $("#blog-section h3").text(title); 
    $("#blog-section .blog-post img").attr("src", img_src);
    $("#blog-section .blog-post  img").attr("alt", alt);
    $("#blog-section .blog-post p").text(content); 

    $("blog-section .blog-post button").click(() => window.location.href = button);
}