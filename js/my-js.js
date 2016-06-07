$(document).ready(function() {
  "use strict";

  $('#slider').children('article')
  .each(function() {
    if ($(this).hasClass('active')) {
      $(this).show('slow');
    } else {
      $(this).hide();
    }
  });

  $('#slider-links').children('li')
  .each(function() {
    var $link = $(this).find('a');
    var $target = $('#' + $link.data('target'));
    $link.on('click', function(e) {
      e.preventDefault();
      if ($target.css('display') === 'none') {
        $('#slider').trigger('set-active');
        $target.show('slow');
      }
    });
  });

  $('#slider').on('set-active', function() {
    $(this).children('article').each(function() {
        $(this).hide('slow');
    });
  });

});
