window.addEventListener('load', function(){

    // Number of slides
    const slideCount = document.querySelectorAll("#slider-wrapper ul li").length ;

    // Width of Slide

    const slideWidth = document.querySelector("#slider-wrapper").offsetWidth ;

    // Total width of slider

    const totalWidth = slideCount * slideWidth + "px" ;

    // Slider DOM element 


    const slider = this.document.querySelector("#slider-wrapper ul") ;

    // next button

    const next = document.getElementById("next") ;

    // previous button 

    const previous = document.getElementById("prev") ;

    let leftPostion = 0 ;
    let counter = 0 ;
    slider.style.width = totalWidth ;

    next.addEventListener("click" , (event)=>{

        event.preventDefault() ;

        counter++ ;


        if(counter ==slideCount ){

            counter = 0 ;

        }

        leftPostion = `-${counter * slideWidth}px`  ;

        slider.style.left = leftPostion ;


    }) ;

    previous.addEventListener("click" , (event)=>{

        event.preventDefault() ;

        counter-- ;


        if(counter < 0 ){

            counter = slideCount - 1 ;

        }

        leftPostion = `-${counter * slideWidth}px`
        slider.style.left = leftPostion ;

    }) ;
})