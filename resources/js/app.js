$(document).ready(function() {

  'use strict';

  // =====================
  // Homepage Layout
  // =====================

  // Make the second and third posts in homepage be 50% width
  $('.home-template .js-post-card-wrap:nth-of-type(2), .home-template .js-post-card-wrap:nth-of-type(3)')
  .addClass('o-grid__col--2-4-m o-grid__col--2-4-l');

  // =====================
  // Responsive videos
  // =====================

  // $('.c-content').fitVids({
  //   'customSelector': ['iframe[src*="ted.com"]']
  // });

  // =====================
  // Off Canvas menu
  // =====================

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-content, .js-off-canvas-container').toggleClass('is-active');
  });

  // =====================
  // Post Card Images Fade
  // =====================

  // $('.js-fadein').viewportChecker({
  //   classToAdd: 'is-inview', // Class to add to the elements when they are visible
  //   offset: 100,
  //   removeClassAfterAnimation: true
  // });

  // =====================
  // Search
  // =====================

  var search_field = $('.js-search-input'),
      search_results = $('.js-search-result'),
      toggle_search = $('.js-search-toggle'),
      search_result_template = "\
        <div class='c-search-result__item'>\
          <a class='c-search-result__title' href='{{link}}'>{{title}}</a>\
          <span class='c-search-result__date'>{{pubDate}}</span>\
        </div>";

  toggle_search.click(function(e) {
    e.preventDefault();
    $('.js-search').addClass('is-active');

    // If off-canvas is active, just disable it
    $('.js-off-canvas-container').removeClass('is-active');

    setTimeout(function() {
      search_field.focus();
    }, 500);
  });

  $('.c-search, .js-search-close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'js-search-close' || event.keyCode == 27) {
      $('.c-search').removeClass('is-active');
    }
  });

  // search_field.ghostHunter({
  //   results: search_results,
  //   onKeyUp         : true,
  //   info_template   : "<h4 class='c-search-result__head'>Number of results found: {{amount}}</h4>",
  //   result_template : search_result_template,
  //   zeroResultsInfo : false,
  //   includepages 	: true,
  //   before: function() {
  //     search_results.fadeIn();
  //   }
  // });

  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
  heap.load(php_vars.heap_key);

  $('.c-post-card__image').each((index, item) => {
    // console.log($(item).find('.c-post-card__image__sharp').data('image'));
    var sharpDiv = $(item).find('.c-post-card__image__sharp');
    var smallDiv = $(item).find('.c-post-card__image__small');
    var imageUrl = sharpDiv.data('image');
    swapBg(imageUrl, sharpDiv, smallDiv);
  })
});


function swapBg(imageSrc, sharpDiv, originalDiv)
{
  $('<img/>').attr('src', imageSrc).on('load', function()
  {
    $(sharpDiv).css('background-image', 'url('+imageSrc+')');

    $(originalDiv).fadeOut(500, function() {
      $(this).remove();
    });

    $(this).remove();
  });
}
