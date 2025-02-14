$(function () {
    // hides the marquee when scrolled down so it doesn't overlap with the footer
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 550) {
            $(".marquee-header, .c-wrapper-carousel.c-wrapper-carousel--vertical").addClass("marquee-hide");
        } else {
            $(".marquee-header, .c-wrapper-carousel.c-wrapper-carousel--vertical").removeClass("marquee-hide");
        }
    });

    // assigns class to marquee image based on width/height of marquee so pic fills the space properly
    $(window).resize(function () {
        $('.marquee-header').find('img').each(function () {
            $(this).removeClass();
            var marqueeWidth = $('.marquee-header').width();
            var marqueeHeight = $('.marquee-header').height();
            var imgClass = (((marqueeWidth / marqueeHeight) - 2) > .06) ? 'wide' : 'tall';
            $(this).addClass(imgClass);
        })
    }).resize();

    // NEW search bar class toggles
    $('.desktop-search-container .glyphicon-search').click(function (e) {
        e.preventDefault();
        var isHidden = $('.desktop-search-container').hasClass('search-hidden');

        if (isHidden) {
            $('.desktop-search-container').removeClass('search-hidden');
            $('#desktop-search-box').focus();
        }
        //else {
        //    $('#desktop-search-button').click();
        //}

    });

    $('#desktop-search-button').click(function (e) {
        if ($('#desktop-search-box').val().length == 0) {
            $('.desktop-search-container').addClass('search-hidden');
        }
    });

    
    //New pinned search bar 
    $('.pinned-search-container .glyphicon-search').click(function (e) {
        e.preventDefault();
        var isHidden = $('.pinned-search-container').hasClass('search-hidden');

        if (isHidden) {
            $('.pinned-search-container').removeClass('search-hidden');
            $('#pinned-search-box').focus();
        } else {
            $('#pinned-search-button').click();
        }
    });

    $('#pinned-search-button').click(function (e) {
        if ($('#pinned-search-box').val().length == 0) {
            $('.pinned-search-container').addClass('search-hidden');
        }
    });


    //Spaces the margins on the pinned nav
    $(window).resize(function () {
        if ($(window).width() > 1300) {
            var extraSpace = $(window).width() - 1300;
            var halfExtraSpace = extraSpace / 2;
            $('.pinned-search').css("margin-right", halfExtraSpace);
            $('.pinned-brand').css("margin-left", halfExtraSpace);
        } else {
            $('.pinned-search').css("margin-right", 5);
            $('.pinned-brand').css("margin-left", 5);
        }
    });

    $('.navbar-toggle').click(function (e) {
        $('.search-bar.mobile').toggleClass('show-search');
    });

    //bootstrap tooltips
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
        //$('.tooltip-anchor').tooltip('show'); //makes tooltips show on page load for styling
    });

    //close button for value chain infographic tabs
    $('.c-value-chain-infographic-blade .close').click(function (e) {
        e.preventDefault();
        $('.c-value-chain-infographic-blade .tab-pane, .infographic-tabs li').removeClass('active');

    });

    function doSearch(element) {
        var searchValue = $(element).parent().find(".search-box").val();
        var searchUrl = $(element).parent().find(".search-box").data('search-url');
        if (searchUrl == null || searchUrl.length == 0) searchUrl = "/search"
        if (searchValue.length > 0) {
            window.location = searchUrl + "?q=" + searchValue;
        }
        return false;
    }

    $(function () {
        $(".search-submit-btn").click(function () { doSearch(this); });
        $(".search-box").keypress(function (e) {
            if (e.which == 13) {
                doSearch(this);
            }
        });

        //Need to clone the text in the 2 search boxes
        $("#desktop-search-box,#mobile-search-box,#pinned-search-box").change(function () {
            var value = $(this).val();
            $('#desktop-search-box').val(value);
            $('#mobile-search-box').val(value);
            $('#pinned-search-box').val(value);
        });
    });

    // add curtain margin-bottom based on height of footer
    $(window).resize(function () {
        var footerHeight = $('footer').height();
        var adjustedFooterHeight = footerHeight + 200; // adjust for footer padding
        $('.curtain').css('margin-bottom', adjustedFooterHeight);
    }).resize();

    // pinned nav

    $(document).ready(function () {
        var menu = $('.navbar.navbar-default');
        var siteSelectorMessage = $(".c-site-selection-message");
        if (menu.length > 0) {
            var mainContent = $('main');
            var origOffsetY = menu.offset().top;

            function scroll() {
                var topnavHeight = $('.top-navbar').height();
                var siteSelectorMessageHeight = 0;
                if (siteSelectorMessage.hasClass("visible")) {
                    siteSelectorMessageHeight = siteSelectorMessage.outerHeight()
                }
                $(window).resize(function () {
                    var topnavHeight = $('.top-navbar').height();
                    if (siteSelectorMessage.hasClass("visible")) {
                        siteSelectorMessageHeight = siteSelectorMessage.outerHeight()
                    }
                });
                if ($(window).scrollTop() - (topnavHeight + siteSelectorMessageHeight) > 0) {
                    menu.addClass('sticky');
                    mainContent.addClass('sticky-main');
                    $(".c-site-selection-message").addClass("offscreen");
                } else {
                    menu.removeClass('sticky');
                    mainContent.removeClass('sticky-main');
                    $(".c-site-selection-message").removeClass("offscreen");
                }
                //console.log($(window).scrollTop() + " : " + topnavHeight + " : " + siteSelectorMessageHeight + " : " + origOffsetY);
            }

            document.onscroll = scroll;
        }
    });

    
    $('.dropdown-submenu a.btn-dropdown').on("click", function (e) {
        $(this).next('ul').toggle();
        $(this).toggleClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    $(".sub_menu .width-50-item").each(function () {
        console.log("width-50-item");
        var submenuItems = $(this).children().length;
        var submenuItems2 = $(this).children(".submenu-item-info").length;
        var middleChild = Math.round(submenuItems / 2) - 1;
        $(this).children(".submenu-item-info").eq(middleChild).addClass("column-break");

        console.log(submenuItems);
        console.log(submenuItems2);
        console.log(middleChild);
    });

    console.log("HELLLLLOOOOOOOOO");

});

