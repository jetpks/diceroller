(function() {
  "use strict";
  var $ = require('ender')
    , colors = ["black", "white", "yellow", "cyan", "green", "blue"]
    ;

  function cycleRandom() {
    $('.removeme').hide();
    $('body').css("background-color", "black");
    var randomize = setInterval(function() {
      var randomNum = String(Math.floor((Math.random() * 5) + 1));
      $('#dice').text(randomNum);
      $('body').css("background-color", colors[randomNum]);
    }, 75);
    setTimeout(function() {
      clearInterval(randomize);
      $('body').css("background-color", "white");
    }, 1000);
  }

  $.domReady(function() {
    $('html').delegate('#dice', 'click', cycleRandom);
  });

})();
