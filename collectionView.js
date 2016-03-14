// variables
var loadMore = $('#load-more'),
    initInfinitePageLoad;

/**
 * initInfinitePageLoad
 * @type {{getItems: initInfinitePageLoad.getItems}}
 */
initInfinitePageLoad = {
    /**
     * getItems
     */
    getItems: function() {

        // simple get current active page
        // and the next paga
        var currentPage = $('.pagination .active'),
            nextPage =currentPage.next().find('a').attr('href');

        $.ajax({
            type: 'GET',
            url: nextPage,
            success: function(response) {
                var products = $(response).find('#product-list');

                $('#product-list').append(products);
            }
        }).done(function() {

            // set the loaded page as active
            // to prevent loading duplicate items
            currentPage.removeClass('active')
                .next()
                .addClass('active');

        });
    }
};


// init on click
loadMore.on('click', function(event) {
    event.preventDefault();
    initInfinitePageLoad.getItems();
});

// hint:
// if you use Foundation 6, for example and you want
// to use it just for mobile devices, wrap it with
// if(Foundation.MediaQuery.current === "small") {...}