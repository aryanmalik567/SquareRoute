function main() {
    $('#fade').hide();
    $('#fade').fadeIn(2000);

    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    }

    $('#meetteam').click(function (event) {
        event.preventDefault();
        $('.MeetOurTeam').scrollView();
    });

    $('#pathfindr').click(function (event) {
        event.preventDefault();
        $('.PathFindr').scrollView();
    });

    $('#sugarsnap').click(function (event) {
        event.preventDefault();
        $('.SugarSnap').scrollView();
    });

    $('#contact').click(function (event) {
        event.preventDefault();
        $('.contactDetails').scrollView();
    });

    $('#scroll').click(function (event) {
        event.preventDefault();
        $('.PathFindr').scrollView();
    });

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
    

    $("#PhotoGallery").rgbslide();



}

$(document).ready(main);

