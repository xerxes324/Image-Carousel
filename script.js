const slidecount = document.getElementsByClassName("imagedisplay").length;
let currentslide = 1;

const displaySlides = (currentslide) => {
    if ( currentslide === 5){
        clearInterval(interval);
    }


    const imageClass = document.getElementsByClassName("imagedisplay");
    let slideID = document.getElementById(String(currentslide));

    Array.from(imageClass).forEach((e)=>{
        e.classList.remove("showimage");
        e.classList.add("hide");
    })

    Array.from(imageClass).forEach((e)=>{
        if ( e === slideID){
            e.classList.remove("hide");
            e.classList.add("showimage");
        }
    })
}

const leftSliderEL = document.getElementById("leftslider").addEventListener("click",()=>{
    if ( currentslide === 1 ){
        return;
    }
    else{
        currentslide = currentslide - 1;
        displaySlides(currentslide);
        modifyNav(currentslide);
    }

    clearInterval(interval);
});

const rightSliderEL = document.getElementById("rightslider").addEventListener("click",()=>{
    if ( currentslide === slidecount ){
        return;
    }
    else{
        currentslide = currentslide + 1;
        displaySlides(currentslide);
        modifyNav(currentslide);
    }
    clearInterval(interval);
});

const modifyNav = (navid) =>{
    const navbuttons = document.getElementsByClassName("navbutton");
    Array.from(navbuttons).forEach((e)=>{
        e.classList.remove("disableColor");
        e.classList.add("enableColor")
    })

    Array.from(navbuttons).forEach((e)=>{
        if ( e.id === "nav" + navid){
            const currentBtn = document.getElementById("nav"+ navid);
            e.classList.add("disableColor");
        }
    })
}

displaySlides(currentslide);
modifyNav(1);
interval = setInterval(() => {
    console.log(currentslide);
    currentslide += 1;
    displaySlides(currentslide);
    modifyNav(currentslide);
}, 1500);

