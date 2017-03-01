function main() {
    $('#fade').hide();
    $('#fade').fadeIn(3000);

    $('.submenuA').hide();
    $('.MoreButtonA').click(function () {
        $('.MoreButtonA').show();
        $('.submenuA').slideToggle();
    });

    $('.submenuJ').hide();
    $('.MoreButtonJ').click(function () {
        $('.MoreButtonJ').show();
        $('.submenuJ').slideToggle();
    });

    $('.submenuB').hide();
    $('.MoreButtonB').click(function () {
        $('.MoreButtonB').show();
        $('.submenuB').slideToggle();
    });
}

$(document).ready(main);

