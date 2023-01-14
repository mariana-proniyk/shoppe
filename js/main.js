$(function () {
    $(".range-slider-input").ionRangeSlider({
        type: "double",
        min: 0,
        max: 2000,
        hide_from_to: true,
        hide_min_max: true,
        extra_classes: "range-slider",
        onChange: function (data) {
            $(".price-range").html(`Price: $${data.from} - $${data.to}`);
        },
    });

    $(".dropdown").on("click", function () {
        $(this).toggleClass("is-open");
    });

    $(".dropdown li").on("click", function () {
        $(this)
            .closest(".dropdown")
            .children(".title")
            .children(".text")
            .html($(this).text());
    });
});
