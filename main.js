(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $('.buy-sell-btn a').click(function (e) {
            e.preventDefault();
            $('.buy-sell-btn a.active').removeClass('active');
            $(this).addClass('active');
        });
    }, false);
})(jQuery);
