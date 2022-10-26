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

    // SubPage JS
    //  $('.btn-sidebar-toggle') 
    // init on mobile
    $(function () {
        if (window.matchMedia('(max-width: 1200px)').matches) {
            $('body').addClass('sidebar-collapsed');
        } else {
            $('body').removeClass('sidebar-collapsed');
        }

        $(window).resize(function () {
            if (window.matchMedia('(max-width: 1200px)').matches) {
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

    // SubPage All JS =======

    //  $('.btn-sidebar-toggle') 
    $(function () {
        $('.btn-sidebar-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-collapsed');
            $('.btn-sidebar-toggle2').show();
        })
        $('.btn-sidebar-toggle2').on('click', function (e) {
            if ($('body').hasClass('sidebar-collapsed')) {
                e.preventDefault();
                $('body').toggleClass('sidebar-collapsed');
                $('.btn-sidebar-toggle2').hide();
            }
        })
    })



    // btnFormGroupCollapsedToggle
    // FormGroupCollapsed-item
    $(function () {
        if ($('.btnCollapsedToggle').length && $('.collapsed-item').length) {
            $('.btnCollapsedToggle').on('click', function (e) {
                e.preventDefault();
                if ($(this).closest('.collapsed-group').find('.collapsed-item').slideToggle()) {
                    $(this).find('.ni').toggleClass('ni-downward-ios ni-upword-ios');
                }
            });
        }
    });


    //for view btn active
    $('.viewBtn .btn').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        $('.layoutView').fadeToggle('d-block');
        event.preventDefault();
    });



    //BtnAddNewDay
    $('.btn-wrap .BtnAddNewDay').on('click', function (event) {
        $('.addNewDayBox').toggleClass('d-block');
        event.preventDefault();
    });






    // jquery increment decrement min max
    var minVal = 1, maxVal = 100; // Set Max and Min values
    // Increase product quantity on cart page
    $(".increaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    // Decrease product quantity on cart page
    $(".decreaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });





    

});



    
