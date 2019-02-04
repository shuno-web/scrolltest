'use strict';

$(function(){
  $(window).scroll(function(){
    $(".scroll").each(function(){
      let elemPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass("in")

      }
    });
  });
});
