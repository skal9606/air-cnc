// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




// IMAGE SLIDER
$(document).on("turbolinks:load", function() {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.single-item-rtl').slick({
    rtl: true
  });

  $('.slick-prev').html('<');
       $('.slick-next').html('>');
});
