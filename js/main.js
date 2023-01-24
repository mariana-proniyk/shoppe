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

    $(".amount-input  .plus").on("click", function () {
        const inputElement = $(this).siblings("input");
        inputElement.val(Number(inputElement.val()) + 1);
    });

    $(".amount-input  .minus").on("click", function () {
        const inputElement = $(this).siblings("input");
        const value = Number(inputElement.val());
        if (value > 1) {
            inputElement.val(value - 1);
        }
    });

    $(".icon-heard").on("click", function () {
        $(this).addClass("is-liked");
    });

    $(".stars .icon-star").on("click", function () {
        const index = $(this).index();
        $(this)
            .parent()
            .find(".icon-star")
            .each(function (i) {
                if (i <= index) {
                    $(this).addClass("is-active");
                } else {
                    $(this).removeClass("is-active");
                }
            });
    });

    $(".backet-card .button").on("click", function () {
        $(".message").addClass("is-open");
    });

    $(".tabs-menu li").on("click", function () {
        const tabMenuElement = $(this).parent();

        tabMenuElement.find("li").each(function () {
            $(this).removeClass("is-active");
        });

        $(this).addClass("is-active");

        tabMenuElement
            .parent()
            .find(".tab-content")
            .each(function () {
                $(this).removeClass("is-open");
            });

        $(`.${$(this).data("idTab")}`).addClass("is-open");
    });

    $(".account .button").on("click", function () {
        $(this)
            .parent()
            .find(".button")
            .each(function () {
                $(this).removeClass("is-active");
            });

        $(this).addClass("is-active");
    });

    $(".buttons-wrap .button").on("click", function () {
        $(this)
            .parent()
            .find(".button")
            .each(function () {
                $(this).removeClass("is-active");
            });

        $(this).addClass("is-active");
    });

    $(".icon-criss-cross").on("click", function () {
        $(this).parent().find("input").val("");
    });
});
