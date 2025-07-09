const slideImage = (count) => {

    for ( let i = 0 ; i < count ; i++ ){

    }
}



const slidecount = document.getElementsByClassName("imagedisplay").length;
let currentslide = 1;

const displaySlides = (currentslide) => {
    const imageClass = document.getElementsByClassName("imagedisplay");
    console.log("currentlside is ", currentslide)
    let slideID = document.getElementById(String(currentslide));
    console.log(slideID,"is the slideID");

    //reset
    Array.from(imageClass).forEach((e)=>{
        e.classList.remove("showimage");
        e.classList.add("imagedisplay");
    })

    //display the current image alone
    Array.from(imageClass).forEach((e)=>{
        if ( e === slideID){
            e.classList.remove("imagedisplay");
            e.classList.add("showimage");
            console.log(e);
            console.log(e.classList,"is the classlist.")
        }
    })
}



const leftSliderEL = document.getElementById("leftslider").addEventListener("click",()=>{
    if ( currentslide === 1 ){
        return;
    }
    else{
        currentslide = currentslide - 1;
        console.log(currentslide,"is the leftclick currentslide.")
        displaySlides(currentslide);
    }
});

const rightSliderEL = document.getElementById("rightslider").addEventListener("click",()=>{
    if ( currentslide === slidecount ){
        return;
    }
    else{
        currentslide = currentslide + 1;
        console.log('running');
        displaySlides(currentslide);
    }
});


displaySlides(currentslide);
slideImage(slidecount);