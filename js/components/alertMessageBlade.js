$(document).ready(function () {
    $('.c-alert-message-blade__click').click(function (e) {
     //   e.preventDefault();

        var promoBladehash = $('.c-alert-message-blade').data('hash');
        cookieHelper.createCookie("promoBlade_" + promoBladehash, "true", 1);
        $('.c-alert-message-blade').addClass('closed');
    });

    var promoBladehash = $('.c-alert-message-blade').data('hash');
    var promoCookie = cookieHelper.readCookie("promoBlade_" + promoBladehash);
    if (typeof (promoCookie) == "undefined" || promoCookie != "true") {
        $('.c-alert-message-blade').removeClass("closed");
    }

    
});