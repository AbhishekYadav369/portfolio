import {aboutCard} from "../data/data.js";
const {info, img_src, alt, conclusion} = aboutCard;
const {para1, para2, para3} = info;

export function setAboutmeContent() {
$("#aboutme-section .info p").eq(0).text(para1);
$("#aboutme-section .info p").eq(1).text(para2);
$("#aboutme-section .info p").eq(2).text(para3);
$("#aboutme-section .self-intro img").attr({"src": img_src, "alt": alt});
$("#aboutme-section .conclusion").text(conclusion);
}