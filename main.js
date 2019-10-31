$(window).load(function(){
    $('.loader').fadeOut();
});

// the loading gif before the page is fully loaded

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 600) {
            $(".header").addClass("active");
        } else {

            $(".header").removeClass("active");
        }
    });
});
// makes the header change color by adding a class



//voor de smooth scrolling
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 850);
    // return false;
});



// makes the header go's up and down
$(document).ready(function () {
    $("label").click(function () {
        $(".header").toggleClass("header-responsive");
    });
});

var skillsDiv = jQuery('#skills');

jQuery(window).on('scroll', function(){
    var winT = jQuery(window).scrollTop(),
        winH = jQuery(window).height(),
        skillsT = skillsDiv.offset().top;
    if(winT + winH  > skillsT){
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },6000);
        });
    }
});



var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()-60,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 850);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active2")
            .end().filter("[href=#"+id+"]").parent().addClass("active2");
    }
});



