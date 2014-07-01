var css = function(cssObj) {
  var rules = [];
  for (var prop in cssObj) {
    rules.push(prop + ":" + cssObj[prop] + ';');
  }
  return rules.join('');
};

window.onload = function() {
  var selectors = ['.swiper-container', '.swiper-slide', 'body'];
  [].forEach.call(document.querySelectorAll(selectors), function(el) {
    el.setAttribute('style', css({
      width: document.documentElement.clientWidth + "px",
      height: document.documentElement.clientHeight + "px"
    }));
  });
  var slotsSwiper = new Swiper('.slots', {
    mode:'vertical',
    loop: true
  });
  var tracksSwiper = new Swiper('.multi-slot', {
    mode:'horizontal'

  });
};
