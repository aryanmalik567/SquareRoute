function main() {
    $('#fade').hide();
    $('#fade').fadeIn(3000);

    $('.MoreButtonA').click(function () {
        $('.submenuA').slideToggle();
    });

    $('.MoreButtonJ').click(function () {
        $('.submenuJ').slideToggle();
    });

    $('.MoreButtonB').click(function () {
        $('.submenuB').slideToggle();
    });
}

$(document).ready(main);

