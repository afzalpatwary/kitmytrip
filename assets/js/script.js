/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {



});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

var alterClass = function () {
    var joinWindowSize = document.body.clientWidth;
    if (joinWindowSize < 991) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $(".navbar").removeClass("active");
            } else {
                $(".navbar").removeClass("active");
            }
        });


    } else if (joinWindowSize >= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $(".navbar").addClass("stickyHeaders");
            } else {
                $(".navbar").removeClass("stickyHeaders");
            }
        });
    }
};
$(window).resize(function () {
    alterClass();
});
//Fire it when the page first loads:
alterClass();

var alterClass = function () {
    var joinWindowSize = document.body.clientWidth;
    if (joinWindowSize < 991) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $(".navbar").addClass("active1");
            } else {
                $(".navbar").removeClass("active1");
            }
        });


    } else if (joinWindowSize >= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $(".navbar").addClass("stickyHeader");
            } else {
                $(".navbar").removeClass("stickyHeader");
            }
        });
    }
};
$(window).resize(function () {
    alterClass();
});




$(window).scroll(function () {
    if ($(window).scrollTop() >= 0) {
        $(".drawerMenubottom").addClass("stickyBottomMenu");
    } else {
        $(".drawerMenubottom").removeClass("stickyBottomMenu");
    }
});
//Fire it when the page first loads:
alterClass();




$(document).ready(function () {


    /**
     * @function  - for (searchModal)
     * @event     - {input change keyup paste}
     * @developed_by - kawsar bin siraj
     * @param     - 
     * @type      - 
     * @return    - 
     */
    $(function () {
        if ($('#searchModal').length) {
            $('#searchModal input.form-control-search').on('input change keyup paste', function () {
                if ($(this).val().toString().length > 0) {
                    $(this).siblings('.btn-clear').removeClass('d-none');
                    $('#searchModal').on('click', '.btn-clear', function (e) {
                        e.preventDefault();
                        $(this).siblings('input.form-control-search').val('');
                        $(this).addClass('d-none');
                    })
                } else {
                    $(this).siblings('.btn-clear').addClass('d-none');
                }
            })
        }
    });



    /**
     * @function  - for (datepicker)
     * @event     - {}
     * @developed_by - kawsar bin siraj
     * @param     - 
     * @type      - 
     * @return    - 
     */
    $(function () {
        function updateDatePickerCells(month, year, dp) {
            let date = new Date();
            setTimeout(function () {
                $('.ui-datepicker td').each(function (idx, elem) {
                    if ($(this).data('year') < date.getFullYear()) {
                        $(this).addClass('ui-datepicker-unselectable ui-state-disabled');
                    } else if ($(this).data('year') === date.getFullYear()) {
                        if ($(this).data('month') < date.getMonth()) {
                            $(this).addClass('ui-datepicker-unselectable ui-state-disabled');
                        } else if ($(this).data('month') === date.getMonth()) {
                            if ($(this).find('.ui-state-default').text() < date.getDate()) {
                                $(this).addClass('ui-datepicker-unselectable ui-state-disabled');
                            }
                        }
                    }
                });
            }, 0);
        }

        function datePickerInit() {
            if ($('.datepicker').length) {
                $('.datepicker').datepicker({
                    numberOfMonths: $(window).width() < 991 ? 1 : 2,
                    dateFormat: 'dd-mm-yy',
                    onSelect: function (date, dp) {
                        updateDatePickerCells();
                    },
                    onChangeMonthYear: function (month, year, dp) {
                        ;
                        updateDatePickerCells();
                    },
                    beforeShow: function (elem, dp) {
                        updateDatePickerCells();
                    },
                });
                updateDatePickerCells();
            }
        }

        datePickerInit();
        $(window).resize(function () {
            datePickerInit();
        });

    });



    // datepicker2
    $(".startDate").datepicker({
        maxDate: new Date(new Date().setMonth(new Date().getMonth() + 2))
    });





    // Dark mode js
    $(function () {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
        }
        toggleSwitch.addEventListener("change", switchTheme, false);
    });
    // Dark mode js - END






    //for slider mobile auto play disable
    $(function () {
        if ($(window).width() < 776) {
            if ($('.slider-wrapper').length) {
                $(".slider-wrapper").owlCarousel({
                    items: 3,
                    margin: 30,
                    nav: false,
                    loop: true,
                    autoplay: false,
                    dots: true,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    autoplayHoverPause: true,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 1
                        },
                        776: {
                            items: 1
                        },
                    }
                });
            }
        }
    })




    // heroCarousel
    $(function () {
        if ($('.heroCarousel').length) {
            $(".heroCarousel").owlCarousel({
                items: 2,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                animateOut: 'fadeOut',
                smartSpeed: 1000,
                navText: ["<img src='assets/img/arrow-left-white.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-white.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
    });



    // featured-slider
    $(function () {
        if ($('.featured-slider').length) {
            $(".featured-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                animateOut: 'fadeOut',
                smartSpeed: 1000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    767: {
                        items: 3
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }
    });




    //Trip Plans/Itineraries
    $(function () {
        if ($(".slider-wrapper").length) {
            $(".slider-wrapper").owlCarousel({
                items: 4,
                autoplayHoverPause: true,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                animateOut: "fadeOut",
                smartSpeed: 1000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    767: {
                        items: 2.2,
                        nav: false,
                        dots: true,
                    },
                    991: {
                        items: 3.2,
                        nav: false,
                        dots: true,
                    },
                    1200: {
                        items: 4,
                        nav: true,
                        dots: false,
                    },
                },
            });
        }
    });




    //Activities/Experiences
    $(function () {
        if ($(".experiences-wrapper").length) {
            $(".experiences-wrapper").owlCarousel({
                items: 5,
                autoplayHoverPause: true,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                animateOut: "fadeOut",
                smartSpeed: 1000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    767: {
                        items: 2.2,
                        nav: false,
                        dots: true,
                    },
                    991: {
                        items: 3.2,
                        nav: false,
                        dots: true,
                    },
                    1200: {
                        items: 5,
                        nav: true,
                        dots: false,
                    },
                },
            });
        }
    });




    //joinSlider-wrapper
    $(function () {
        if ($(".joinSlider-wrapper").length) {
            $(".joinSlider-wrapper").owlCarousel({
                items: 5,
                autoplayHoverPause: true,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                animateOut: "fadeOut",
                smartSpeed: 1000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    767: {
                        items: 1.2,
                        nav: false,
                        dots: true,
                    },
                    991: {
                        items: 2.2,
                        nav: false,
                        dots: true,
                    },
                    1200: {
                        items: 3,
                        nav: true,
                        dots: false,
                    },
                },
            });
        }
    });





    // testimonial  slider
    $(function () {
        if ($(".testimonialActive").length) {
            $(".testimonialActive").owlCarousel({
                items: 2,
                autoplayHoverPause: true,
                margin: 22,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                animateOut: "fadeOut",
                smartSpeed: 1000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    767: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    991: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    1200: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                },
            });
        }
    });




    //for menu active class
    $('.searchbox .activeItem').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });



    var alterClass = function () {
        var joinWindowSize = document.body.clientWidth;
        if (joinWindowSize < 991) {
            $(".joinCommunity").addClass("container sectionPadding");
            $(".joinCommunity").removeClass("join-padding");
        } else if (joinWindowSize >= 992) {
            $(".joinCommunity").addClass("join-padding");
            $(".joinCommunity").removeClass("container");
        }
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();






    // loadMore item
    $(function () {

        if (window.matchMedia("(max-width: 991px)").matches) {
            $('.citiesParent .citiesItems').slice(0, 3).show();
            $('.btn-loadMore').on('click', function (e) {
                e.preventDefault();
                $('.citiesParent .citiesItems:hidden').slice(0, 4).show();
                if ($('.citiesParent .citiesItems:hidden').length < 1) {
                    $(this).addClass('disabled').css('cursor', 'no-drop')
                } else {
                    $(this).removeClass('disabled').css('cursor', 'default')
                }
            })
        } else {
            $('.citiesParent .citiesItems').slice(0, 9).show();
            $('.btn-loadMore').on('click', function (e) {
                e.preventDefault();
                $('.citiesParent .citiesItems:hidden').slice(0, 4).show();
                console.log($('.citiesParent .citiesItems:hidden').length)
                if ($('.citiesParent .citiesItems:hidden').length < 1) {
                    $(this).addClass('disabled').css('cursor', 'no-drop')
                } else {
                    $(this).removeClass('disabled').css('cursor', 'default')
                }
            });

        }
    })



    // for select2
    $(function () {
        if ($(".select2-init").length) {
            $(".select2-init").select2({
                width: 'resolve' // need to override the changed default
            });
        }
    });



    // magnificPopup
    $(".test-popup-link").magnificPopup({
        type: "iframe",
        // other options
    });


    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });






});
