import {projectCard} from '../data/data.js';    
const{id,title,content,img_src,alt,button}=projectCard[0];
const{problem_statement,description,tech_stack}=content;
const{live_demo,code_preview}=button;

export function setProjectContent(){
    $("#projects-section h3").text(title);
    $("#projects-section .description .content .problem-statement").text(problem_statement);
    $("#projects-section .description .content .description").text(description);
    $("#projects-section .description .content .tech-stack").text(tech_stack);
    $("#projects-section .description img").attr({"src":img_src,"alt":alt});

    $("#projects-section #live-demo").click(()=>window.location.href=live_demo);

    $("#projects-section #code-prev").click(()=>window.location.href=code_preview);
}