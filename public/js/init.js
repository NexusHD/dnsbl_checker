'use strict';

$(function () {
    var _this = this;

    // Plugin initialization
    $('.carousel.carousel-slider').carousel({ full_width: true });
    $('.carousel').carousel();
    $('.slider').slider({ full_width: true });
    $('.parallax').parallax();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({ 'edge': 'left' });
    $('.datepicker').pickadate({ selectYears: 20 });
    // $('select.basic-select').not('.disabled').material_select();
    $('input.autocomplete').autocomplete({
        data: { "Apple": null, "Microsoft": null, "Google": 'http://placehold.it/250x250' }
    });

    $('.chips').material_chip();

    $('.chips-initial').material_chip({
        readOnly: true,
        data: [{
            tag: 'Apple'
        }, {
            tag: 'Microsoft'
        }, {
            tag: 'Google'
        }]
    });

    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag'
    });

    // Swipeable Tabs Demo Init
    if ($('#tabs-swipe-demo').length) {
        $('#tabs-swipe-demo').tabs({ 'swipeable': true });
    }

    // DOM-SubTreeModification
    document.addEventListener("DOMSubtreeModified", function (e) {
        if ($('#sidenav-overlay').length === 0) {
            $('.mob-menu').removeClass('leftArrow').addClass('menu');
        } else {
            $('.mob-menu').removeClass('menu').addClass('leftArrow');
        }
    }, false);

    $("#rsb-tasklist div.tab-notelist").sortable({
        placeholder: "ui-state-highlight"
    });

    $("#rsb-tasklist div.tab-notelist").disableSelection();

    //  MATERIALIZED INIT
    $('select.mat_select').material_select();
    $('.theme-tooltipped').tooltip({ delay: 50 });

    // PuSH Pin
    var tocWrapper = $('.toc-wrapper');
    var mainContainer = $('.main-container');
    if (tocWrapper.length && mainContainer.length) {
        tocWrapper.pushpin({
            top: $('.main-container').offset().top
        });
    }

    // ScrollFire
    var options = [{
        selector: '#staggered-test',
        offset: 50,
        callback: function callback(el) {
            Materialize.toast("This is our ScrollFire Demo!", 1500);
            $("#call-1").velocity({ backgroundColor: "#333", color: "#ef5350" }, { duration: 500 });
        }
    }, {
        selector: '#staggered-test',
        offset: 205,
        callback: function callback(el) {
            Materialize.toast("Please continue scrolling!", 1500);
            $("#call-2").velocity({ backgroundColor: "#333", color: "#ef5350" }, { duration: 500 });
        }
    }, {
        selector: '#staggered-test',
        offset: 500,
        callback: function callback(el) {
            Materialize.showStaggeredList($(el));
            $("#call-3").velocity({ backgroundColor: "#333", color: "#ef5350" }, { duration: 500 });
        }
    }, {
        selector: '#image-test',
        offset: 500,
        callback: function callback(el) {
            Materialize.fadeInImage($(el));
            $("#call-4").velocity({ backgroundColor: "#333", color: "#ef5350" }, { duration: 500 });
        }
    }];
    Materialize.scrollFire(options);

    $(window).on('load', function () {
        // Load Tab Elements
        setTimeout(function () {
            $('ul.tabs').tabs();
        }, 300);

        // Application PreLoader & Loader
        // ############# HIDE PRELOADER AND ITS OVERLAY #################
        setTimeout(function () {
            $('.preloader-center').addClass('loaded');
        }, 1000);
        setTimeout(function () {
            $("#preloader").addClass('loaded');
            $("#loader-wrapper").addClass('loaded');
        }, 1010);

        // ############# HIDE PRELOADER AND ITS OVERLAY ENDs #################

        /**
         * Custom scrollbars
         */
        var navdefault = document.getElementById('nav-default');
        if (typeof navdefault != 'undefined' && navdefault != null) {
            Ps.initialize(navdefault);
        }

        var psNotificationList = document.getElementById('psNotificationList');
        if (typeof psNotificationList != 'undefined' && psNotificationList != null) {
            Ps.initialize(psNotificationList);
        }

        var psTabShortcut = document.getElementById('psTabShortcut');
        if (typeof psTabShortcut != 'undefined' && psTabShortcut != null) {
            Ps.initialize(psTabShortcut);
        }
        var psTabNotelist = document.getElementById('psTabNotelist');
        if (typeof psTabNotelist != 'undefined' && psTabNotelist != null) {
            Ps.initialize(psTabNotelist);
        }
        var psTopNavMmsgs = document.getElementById('psTopNavMmsgs');
        var psTopNavMmsgsWeb = document.getElementById('psTopNavMmsgsWeb');
        if (typeof psTopNavMmsgs != 'undefined' && psTopNavMmsgs != null) {
            Ps.initialize(psTopNavMmsgs);
        }
        if (typeof psTopNavMmsgsWeb != 'undefined' && psTopNavMmsgsWeb != null) {
            Ps.initialize(psTopNavMmsgsWeb);
        }
    });

    // DASH CARD HANDLERS
    $('.card-dash .card-reveal .card-title').on("click", function () {
        return $(_this).closest('.card').removeAttr("style");
    });

    $('.card-dash .activator').on("click", function () {
        return $(_this).closest('.card').removeAttr("style");
    });

    // WINDOW ON RESIZE
    $(window).on('resize', function () {
        return $('ul.tabs').tabs();
    });

    // WINDOW ON LOAD
    $(window).on("load", function () {
        var forge = new Forge('vertical', 'default');
        forge.init();
    });
});