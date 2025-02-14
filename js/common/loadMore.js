/*
 * Javascript that can be used to for ajax pagination of a list of items that we want to load more over ajax like a blog.  
 * 
 * Usage: 
 *      Add a class of 'load-more-container' on the div you want to append with the more items.
 *      Add a class of 'load-more-ajax' on the buttons you want to trigger the load more action.  
 *          - clicking this button will update the current page you are on in the URL query strings.  
 *      Add logic to the view so if a querystring of "load-more=true", the view will return the items to append for the given page number.  
 *          - Inital page load should load all items up to that page number, so if we have 10 items on page, loading with ?page=3 will display 30 items on page load.  
 *          - when load-more=true, should only return the last {ItemsPerPage}, so if we have 10 items on a page, loading with ?page=3&load-more=true will return the items 21-30 that will then be appended into the "load-more-container".  
 * 
 * Restrictions
 *      - Only supports one 'load more container' per page.  
  */


$(function () {
    if ($(".load-more-container").length > 0) {

        page = $(".load-more-container").data("page-number");
        totalPages = $(".load-more-container").data("total-pages");
        isLoading = false;

        $(".load-more-ajax").click(function () {
            if (!isLoading) {
                isLoading = true;
                page++;
                url = updateQueryStringParameter(window.location.href, "page", page);
                $.ajax({
                    url: url + "&load-more=true",
                    type: 'GET',
                    dataType: "text",
                    error: function (err) {
                        console.log(err.responseText)
                        isLoading = false;
                    },
                    success: function (data) {
                        //console.log(data);
                        $(".load-more-container").append($(data));
                        window.history.pushState(data, $("h1").first().text(), url);
                        if (page >= totalPages) {
                            $(".load-more-ajax").hide();
                        }
                        isLoading = false;
                        if (typeof $(".load-more-container").unveil !== 'undefined') {
                            $(".load-more-container img").unveil();
                        }
                    }
                });
            }
            return false;
        });
    }
});

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)", "i");
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        var hash = '';
        if (uri.indexOf('#') !== -1) {
            hash = uri.replace(/.*#/, '#');
            uri = uri.replace(/#.*/, '');
        }
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        return uri + separator + key + "=" + value + hash;
    }
}