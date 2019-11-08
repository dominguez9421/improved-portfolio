$(document).ready(function () {

    //get the header height 
    var headerHeight = $('header').outerHeight();

    $('.nav-link').click(function (e) {
        e.preventDefault();
        var linkHref = $($(this).attr('href'))[0];

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);
    
    }); 

}); 
