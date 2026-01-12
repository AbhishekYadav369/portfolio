import { skillCard } from "../data/data.js"; 
const { id, title, content } = skillCard[0];
const { programming_lang, frameworks, databases, orm, version_control, testing, containerization, cloud, ci_cd } = content;

// function to set skill content
export function setSkillContent() {
  $("#skills-section h3").text(title);
    $("#skills-section .content #programming-lang").text(programming_lang);
    $("#skills-section .content #frameworks").text(frameworks);
    $("#skills-section .content #databases").text(databases);
    $("#skills-section .content #orm").text(orm);
    $("#skills-section .content #version-control").text(version_control);
    $("#skills-section .content #testing").text(testing);
    $("#skills-section .content #containerization").text(containerization);
    $("#skills-section .content #cloud").text(cloud);
    $("#skills-section .content #ci-cd").text(ci_cd);
}


