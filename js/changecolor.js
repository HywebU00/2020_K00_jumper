$(function() {
    $('body').append('<div class="changeColor"><ul><li><a href="#" class="initial_btn">原</a></li><li><a href="#" class="pu_btn">pu</a></li><li><a href="#" class="NCL_btn">NCL</a></li></ul></div>');

    $('head').append("<link>");
        css = $("head").children(":last");
        css.attr({
            rel: "stylesheet",
            type: "text/css",
            href: "",
            id: "cssStyle"
     });

    $('.initial_btn').click(function(e) {
    	$('.wrapper').removeClass('NCL pu');
    });

    $('.pu_btn').click(function(e) {
        $('.wrapper').removeClass('NCL').addClass('pu');
        $('head').find('#cssStyle').attr('href',"css/pu.css");
        $('h1 img').attr('src','images/pu/logo_version.png');
        $('.login_page h1 img').attr('src','images/pu/logo.png');
        $('.mp_logo img').attr('src','images/pu/logo.png');   
    });

    $('.NCL_btn').click(function(e) {
        $('.wrapper').removeClass('pu').addClass('NCL');
        $('head').find('#cssStyle').attr('href',"css/NCL.css");
        $('h1 img').attr('src','images/NCL/logo_version.png');
        $('.login_page h1 img').attr('src','images/NCL/logo.png');
        $('.mp_logo img').attr('src','images/NCL/logo.png');
    });
});