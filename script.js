const slidecount = document.getElementsByClassName("imagedisplay").length;
let currentslide = 1;
let currentnav = 1;


const displaySlides = (currentslide) => {
    const imageClass = document.getElementsByClassName("imagedisplay");
    let slideID = document.getElementById(String(currentslide));


    console.log("imageClass is: ",imageClass);
    //reset
    Array.from(imageClass).forEach((e)=>{
        e.style.display = "none";
    })

    //display the current image alone
    Array.from(imageClass).forEach((e)=>{
        if ( e === slideID){
            e.style.display = "block";
        }
    })
}


const displayNav = (currentnav) =>{
    let navID = document.getElementById("nav"+String(currentnav));
    // console.log(navID, "is the navID");

}

displayNav(currentnav);
const leftSliderEL = document.getElementById("leftslider").addEventListener("click",()=>{
    if ( currentslide === 1 ){
        return;
    }
    else{
        currentslide = currentslide - 1;
        displaySlides(currentslide);
    }
});

const rightSliderEL = document.getElementById("rightslider").addEventListener("click",()=>{
    if ( currentslide === slidecount ){
        return;
    }
    else{
        currentslide = currentslide + 1;
        displaySlides(currentslide);
    }
});


displaySlides(currentslide);