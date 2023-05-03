(function ($) {
  var $sliderControl   = $(".slider__control"),
    $sliderBox = $(".slider__box"),
    $imageLeft = $(".slider__image--left");
  $sliderControl.draggable({
    containment: "parent",
    drag: function () {
      $imageLeft.css({
        width: parseFloat($(this).css('left')) + 5
      });
    }
  });
  $sliderBox.on("click", function (event) {
    var eventLeft = event.pageX - $sliderBox.offset().left - 15;
    animateTo(eventLeft);
  });
  function animateTo(_left) {
    $sliderControl.animate({
      left: _left
    }, 'slow', 'linear');
    $imageLeft.animate({
      width: _left
    }, 'slow', 'linear');
  }
})(jQuery);
