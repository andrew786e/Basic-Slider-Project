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

            $("#slider ul").clone().appendTo("#slider") ;
            $("#slider ul").last().css("left" , imageWidth + "px") ;


            leftPosition = `-${TotalWidth}` ;

            console.log(leftPosition) ;

            $("#slider ul").last().animate({left: 0}, 700, "easeInQuad") ;
            $("#slider ul").first().animate({left: leftPosition}, 700, "easeInQuad", function(){
                $("#slider ul").first().remove() ;
            }) ;



            counter = 0 ;
        }else{
            leftPosition = -(counter * imageWidth) + 'px';

            $("#slider ul").animate({left : leftPosition} , 700 , "easeInQuad") ;
        }

    }) ;


    $("#previous").click(()=>{

        counter-- ;

        if(counter < 0){

            $("#slider ul").clone().appendTo("#slider") ;
            $("#slider ul").last().css("left" , `-${TotalWidth}`) ;


            leftPosition = -(imageWidth*imageCOUNT) + imageWidth + "px";

            // console.log(leftPosition) ;

            $("#slider ul").last().animate({left: leftPosition}, 700, "easeInQuad") ;
            $("#slider ul").first().animate({left: imageWidth}, 700, "easeInQuad", function(){
                $("#slider ul").first().remove() ;
            }) ;

            counter = imageCOUNT - 1 ; 

        }else{
            leftPosition = -(counter * imageWidth) + 'px' ;

            $("#slider ul").animate({left : leftPosition}, 700 , "easeInQuad") ;
        }


    }) ;
})