// Add your JS here

// Makes sure all the images are downloaded before the function below checks the width 
// of images below 

$(window).on('load', function(){

    "use strict"
    const imageCOUNT = $("#slider ul li").length ;

    // Gets the width of the image

    const imageWidth = $("#slider ul li img").first().width() ;

    // Total width of all the images 

    const TotalWidth = (imageWidth * imageCOUNT) + 'px' ;

    let leftPosition = 0 ;
    let counter = 0 ;

    $("#slider ul").css("width" , TotalWidth) ;

    $("#next").click(()=>{



        counter++ ;

        if(counter == imageCOUNT){
            counter = 0 ;
        }



        leftPosition = -(counter * imageWidth) + 'px';

        $("#slider ul").animate({left : leftPosition} , 700 , "easeInQuad") ;

    }) ;


    $("#previous").click(()=>{

        counter-- ;

        if(counter < 0){
            counter = imageCOUNT - 1 ; 
        }

        console.log(leftPosition) ;

        leftPosition = -(counter * imageWidth) + 'px' ;

        $("#slider ul").animate({left : leftPosition}, 700 , "easeInQuad") ;

    }) ;
})