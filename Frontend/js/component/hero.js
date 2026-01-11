import {heroCard} from "../data/data.js";
const { img_src, alt, salutaion, name, role, tagline1, tagline2 } = heroCard;

export function setHeroContent() {
$("#hero-section img").attr({"src": img_src, "alt": alt});
$("#salutaion").text(salutaion);
$("#hero-section .hero-card .name").eq(1).text(name);
$("#hero-section .hero-card .role").text(role);
// $("#hero-section .tagline").html(`${tagline1} <br/> ${tagline2}`);
$("#hero-section .tagline p").eq(0).text(tagline1);
$("#hero-section .tagline p").eq(1).text(tagline2);
}