function writePlaceholderSizes() {
    $(".c-placeholder").each(function (i, item) {
        var span = $(item).find(".c-placeholder__size");
        var el = $($(item).parent());
        span.text($(el).width() + 'x' + $(el).height());
    });
}


$(function () {
    if($(".c-placeholder").length > 0)
    {
        writePlaceholderSizes();
        $(window).resize(writePlaceholderSizes);
    }
});