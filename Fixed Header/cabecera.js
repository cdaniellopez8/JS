jQuery('document').ready(function($){

var menuBtn = $('.menu-icon');
var menu= $('.navigation ul');
var oculto=$('.logo-nav-container span');
var visible=$('.logo-nav-container span');
    

menuBtn.click(function()
    {
        if (menu.hasClass("show"))
        {
            menu.removeClass("show");    
        }
        else
        {
            menu.addClass('show');
        }

    });
});