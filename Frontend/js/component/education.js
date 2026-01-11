import { educationCard } from "../data/data.js";
const { id, title, content } = educationCard[0];
const { duration,schooling,field, from, score} = content;

// function to set education content
export function setEducationContent() {
  $("#education-section h3").text(title);
  $("#education-section .description p").eq(0).text(field);
    $("#education-section .description p").eq(1).text(from);
    $("#education-section .description p").eq(2).text(score);
    $("#education-section .description p").eq(3).text(schooling);
    $("#education-section .description p").eq(4).text(duration);
    
}