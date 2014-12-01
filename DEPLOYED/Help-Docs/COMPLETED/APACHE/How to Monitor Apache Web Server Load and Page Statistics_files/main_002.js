/* Tabber.JS --- Copyright (c) 2006 Patrick Fitzgerald */
jQuery(document).ready(function(){

        // UL = .tabs
        // Tab contents = .inside

       var tag_cloud_class = '#tag-cloud';

              //Fix for tag clouds - unexpected height before .hide()
            var tag_cloud_height = jQuery('#tag-cloud').height();

       jQuery('.inside ul li:last-child').css('border-bottom','0px') // remove last border-bottom from list in tab conten
       jQuery('.tabs').each(function(){
        jQuery(this).children('li').children('a:first').addClass('selected'); // Add .selected class to first tab on load
       });
       jQuery('.inside > *').hide();
       jQuery('.inside > *:first-child').show();


       jQuery('.tabs li a').click(function(evt){ // Init Click funtion on Tabs

            var clicked_tab_ref = jQuery(this).attr('href'); // Strore Href value

            jQuery(this).parent().parent().children('li').children('a').removeClass('selected'); //Remove selected from all tabs
            jQuery(this).addClass('selected');
            jQuery(this).parent().parent().parent().children('.inside').children('*').hide();

            /*
            if(clicked_tab_ref === tag_cloud_class) // Initiate tab fix (+20 for padding fix)
            {
                clicked_tab_ref_height = tag_cloud_height + 20;
            }
            else // Other height calculations
            {
                clicked_tab_ref_height = jQuery('.inside ' + clicked_tab_ref).height();
            }
            */
             //jQuery('.inside').stop().animate({
            //    height: clicked_tab_ref_height
            // },400,"linear",function(){
                    //Callback after new tab content's height animation
                    jQuery('.inside ' + clicked_tab_ref).fadeIn(500);
            // })

             evt.preventDefault();

        })

})

/* Superfish Tabber Script */

jQuery(document).ready(function(){

        // UL = .tabs
        // Tab contents = .inside
        
       var tag_cloud_class = '#tag-cloud'; 
       
              //Fix for tag clouds - unexpected height before .hide() 
            var tag_cloud_height = jQuery('#tag-cloud').height();

       jQuery('.inside ul li:last-child').css('border-bottom','0px') // remove last border-bottom from list in tab conten
       jQuery('.tabs').each(function(){
       	jQuery(this).children('li').children('a:first').addClass('selected'); // Add .selected class to first tab on load
       });
       jQuery('.inside > *').hide();
       jQuery('.inside > *:first-child').show();
       

       jQuery('.tabs li a').click(function(evt){ // Init Click funtion on Tabs
        
            var clicked_tab_ref = jQuery(this).attr('href'); // Strore Href value
            
            jQuery(this).parent().parent().children('li').children('a').removeClass('selected'); //Remove selected from all tabs
            jQuery(this).addClass('selected');
            jQuery(this).parent().parent().parent().children('.inside').children('*').hide();
            
            /*
            if(clicked_tab_ref === tag_cloud_class) // Initiate tab fix (+20 for padding fix)
            {
                clicked_tab_ref_height = tag_cloud_height + 20;
            }
            else // Other height calculations
            {
                clicked_tab_ref_height = jQuery('.inside ' + clicked_tab_ref).height();
            }
            */
             //jQuery('.inside').stop().animate({
            //    height: clicked_tab_ref_height
            // },400,"linear",function(){
                    //Callback after new tab content's height animation
                    jQuery('.inside ' + clicked_tab_ref).fadeIn(500);
            // })
             
             evt.preventDefault();

        })
    
})

/* Jquery Tools Min Js */

/* Jquery Tool Tip MIni  */
 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);


/* Custon Js */
jQuery.fn.rdy = function(func) {
	this.length && func.apply(this);
	return this;
};

jQuery.fn.placeHolder = function(default_value) {
	var el = jQuery(this);
	default_value = default_value || el.attr('placeholder');
	
	if(default_value && default_value.length) {
		el.focus(function() {
			if(el.val() == el.data('default_value')) el.val('').removeClass('empty');
		});

		el.blur(function() {
			if(!el.val().length) el.val(el.data('default_value')).addClass('empty');
		});

		el.closest('form').submit(function() {
			if(el.val() == el.data('default_value')) el.val('');
		});

		el.data('default_value', default_value).attr('title', default_value).trigger('blur');
	}
	
	return this;
};

jQuery(function($) {


	if($.browser.msie) {
		$('body').addClass('is-ie');
		if($.browser.version == 7) $('body').addClass('is-ie7');
		if($.browser.version == 8) $('body').addClass('is-ie8');
	}

	$('.search-input').placeHolder();
	$('.widget-enews #email-address').placeHolder();

	//slider
	$('#slider').rdy(function() {

		$('#slider .a-project:nth-child(4n)').addClass('last');
		var current = 0, length = Math.ceil($('#slider .article').length / 4);

		$('#slider .prev, #slider .next').click(function() {
			var i = $(this).attr('class').indexOf('next') != -1 ? 1 : -1;
			current += i;
			if(current < 0) current = length - 1;
			if(current > length - 1) current = 0;
			$('#slider-inner').animate({ left: -978 * current });
			return false;
		});
	});


	//tooltips
	$(".w-tooltip").tipTip({ delay: 10 });


	// Initialize javascript tabs for toggling
	$("ul.tabs").tabs("div.pane", {
		effect: 'fade'
	});
	$("ul.comment-controls").tabs("ol.commentlist", {
		effect: 'fade'
	});


	// Initialize hover over dropdown navigation menus
	$("#nav-top > .wrapper ul, #main-menu > .wrapper ul").superfish({
		delay:			200,
		speed:			'fast',
		autoArrows:		false
	});
	$('#nav-top ul li:first').addClass('first');


	//css
	$('.post-related .article:odd').addClass('last');
	$("#main-nav ul.nav li:last-child").addClass("last");
	$("#slider .post:nth-child(4)").addClass("last");
	$("#content div.one_third:nth-child(3n+0), #content div.one_fourth:nth-child(4n+0)").addClass("last");
	$('.page-template-template-sidebar-left-php #sidebar').addClass('first');
	$('#sidebar .widget:last, #subfooter .widget:last, #subfooter .widget:nth-child(3n+0)').addClass("last");
	$('.widget-ads .ad-square:odd, .widget-ads .ad-square:nth-child(2n)').addClass("last");
	$('#main-menu ul li:last').addClass("last");

});

