$(function () {
    $('#content-modal').on('show.bs.modal', function (e) {
        var linkEl = $(e.relatedTarget);
        var title = linkEl.data("modal-title");
        console.log(title);
        var contentSelector = linkEl.data("modal-content-selector");
        //UMBRACO_TODO: Theres probably a better way to do this.
        var contents = $($(contentSelector)[0]).clone();
        contents.show();
        console.log(contents.html());
        $("#content-modal").attr("aria-labelledby", title);
        $("#content-modal .modal-title").text(title);
        $("#content-modal .modal-body").html(contents.html());

    });
});
