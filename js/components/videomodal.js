$(document).ready(function () {
    $('#video-modal').on('show.bs.modal', function (e) {
        $("html").css("overflow", "hidden");
    });

    $('#video-modal').on('hide.bs.modal', function (e) {
        $("html").css("overflow", "");
        $('#video-modal .modal-body').html('');
    });

    $('.js-video-lightbox-button').click(function () {

        var href = $(this).data("video-url");
        var caption = $(this).data("video-caption");
        if (caption == undefined) {
            caption = "";
        }
        if (href != null && href.length > 0) {
            $('#video-modal .modal-body').html('<iframe src="' + href + '" frameborder="0"></iframe>' + decodeHtml(caption));
            $('#video-modal').modal('show');
            return false;
        }
    });

});

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}