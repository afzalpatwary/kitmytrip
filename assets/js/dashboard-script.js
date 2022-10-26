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

    //  $('.btn-sidebar-toggle') 
    // init on mobile
    $(function () {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $('body').addClass('sidebar-collapsed');
        } else {
            $('body').removeClass('sidebar-collapsed');
        }

        $(window).resize(function () {
            if (window.matchMedia('(max-width: 991px)').matches) {
                $('body').addClass('sidebar-collapsed');
            } else {
                $('body').removeClass('sidebar-collapsed');
            }
        })
    })

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    //  $('.btn-sidebar-toggle') 
    // init
    $(function () {
        $('.btn-sidebar-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-collapsed');
            $('.navigation-footer').toggleClass('d-none');
        })
        $('.navbar-logo').on('click', function (e) {
            if ($('body').hasClass('sidebar-collapsed')) {
                e.preventDefault();
                $('body').toggleClass('sidebar-collapsed');
            }
        })
    })



    // //for menu active class
    // $('.navbar-nav .nav-item').on('click', function () {
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    // });



    //  // datepicker2
    //  $(".startDate").datepicker({
    //     maxDate: new Date(new Date().setMonth(new Date().getMonth() + 2))
    // });


     //for view btn active
     $('.viewBtn .btn').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        $('.layoutView').fadeToggle('d-block');
        event.preventDefault();
    });
    

    // for select2
    $(function () {
        if ($(".select2-init").length) {
            $(".select2-init").select2({
                width: 'resolve' // need to override the changed default
            });
        }
    });


    // pass show hide
    $(function () {
        $("#show_hide_password a").on('click', function (event) {
            event.preventDefault();
            if ($('#show_hide_password input').attr("type") == "text") {
                $('#show_hide_password input').attr('type', 'password');
                $('#show_hide_password i').addClass("fa-eye-slash");
                $('#show_hide_password i').removeClass("fa-eye");
            } else if ($('#show_hide_password input').attr("type") == "password") {
                $('#show_hide_password input').attr('type', 'text');
                $('#show_hide_password i').removeClass("fa-eye-slash");
                $('#show_hide_password i').addClass("fa-eye");
            }
        });

    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 150) {
            $(".header").addClass("stickyHeader");
        } else {
            $(".header").removeClass("stickyHeader");
        }
    });


    // increment decrements
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });




});
