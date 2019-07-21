$(document).ready(function(){
    $(".hidden").click(function(){
        $(".hidden").toggle();
        $(".descript-hide p").toggle();
        $(".caption").css({
            "front-weight":"bold",
            "transition":"ls",
            "cursor":"pointer"
        })
    })
})