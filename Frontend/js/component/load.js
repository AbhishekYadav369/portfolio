const prev_src="./assets/icons/left.png";
const prev_alt="previous button";
const next_src="./assets/icons/right.png";
const next_alt="next button";

function loadButtonfunction(){
    $(".load .bttn").click(function(){
    const element= $(this);
    element.addClass("load-button");
  });

    // element.removeClass("load-button");
}

function setLoadButton(){
    $(".load #prev-bttn").attr({src:prev_src,alt:prev_alt});
    $(".load #next-bttn").attr({src:next_src,alt:next_alt});

} 

export{loadButtonfunction,setLoadButton};