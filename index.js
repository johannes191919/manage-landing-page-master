





$(document).ready(function () {
    let width = screen.width;

    if (width > 500) {

        console.log("ali")
        $(".input").val("johnmadden/mail")

    };


    $("#owl-demo").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                dotsEach: true,
            },
            600: {
                items: 2,

            },
            900: {
                items: 3,

            },

        }

    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

});




function ValidateEmail(mail) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(mail).parent().children(".input").val())) {
        return (true)
    }
    $(".mail_error").html("Please insert a valid email")


    return (false)
}


$(".menu_button").click(function () {

    $(".navbar_list").fadeIn("slow");
    $(".close_button").fadeIn("slow");
    $(".menu_button").hide();
    $(".container").addClass("background_change")
    $(".first_img").hide()
    $(".second_section .page_left p").css("color","black")
    $(".first_section .page_left p").css("color","black")
    $(".second_section .page_right p").css("color","black")
    $("#owl-demo .item").css("background-color","hsl(12, 88%, 59%)")
    $(".owl-carousel .owl-item p").css("color","white")
    $(".mobile_orange").css("background-color","hsl(12, 88%, 59%)")

})


$(".close_button").click(function () {

    $(".navbar_list").fadeOut("slow");
    $(".menu_button").fadeIn("slow");
    $(".close_button").hide();
    $(".container").removeClass("background_change")
    $(".first_img").fadeIn("slow")
    $(".second_section .page_left p").css("color","hsl(227, 12%, 61%)")
    $(".first_section .page_left p").css("color","hsl(227, 12%, 61%)")
    $(".second_section .page_right p").css("color","hsl(227, 12%, 61%)")
    $("#owl-demo .item").css("background-color","hsl(0, 0%, 98%)")
    $(".owl-carousel .owl-item p").css("color","hsl(227, 12%, 61%)")
    $(".mobile_orange").css("background-color","rgba(255, 240, 235, 255)")
})



 function changecolor(target){
    var target_color=  $( target).children("path")
   $(target_color).css("fill","hsl(12, 88%, 59%)")

};


function changebackcolor(target){
    var target_color=  $( target).children("path")
   $(target_color).css("fill","#FFF")

};
