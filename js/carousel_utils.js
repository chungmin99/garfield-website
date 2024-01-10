// For teaser object carousel -- left/right arrow clicks to navigate
function teaser_slide_left() {
  slider_window = document.getElementById('teaser-objs-scroll');
  slider_window.scrollLeft = 0;
}
function teaser_slide_right() {
  slider_window = document.getElementById('teaser-objs-scroll');
  slider_window.scrollLeft += 1000;
}

// For main results object carousel -- left/right arrow clicks to navigate
function results_slide_left() {
  slider_window = document.getElementById('results-objs-scroll');
  slider_window.scrollLeft = 0;
}
function results_slide_right() {
  slider_window = document.getElementById('results-objs-scroll');
  slider_window.scrollLeft += 1000;
}
