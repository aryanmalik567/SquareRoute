function main() {
    $('#fade').hide();
    $('#fade').fadeIn(3000);

    $('.submenuA').hide();
    $('.MoreButtonA').click(function () {
        $('.MoreButtonA').show();
        $('.submenuA').slideToggle();
        $(this).toggleClass('active');
    });

    $('.submenuJ').hide();
    $('.MoreButtonJ').click(function () {
        $('.MoreButtonJ').show();
        $('.submenuJ').slideToggle();
        $(this).toggleClass('active');
    });

    $('.submenuB').hide();
    $('.MoreButtonB').click(function () {
        $('.MoreButtonB').show();
        $('.submenuB').slideToggle();
        $(this).toggleClass('active');
    });

    $("#slider").rgbslide();

}

$(document).ready(main);

