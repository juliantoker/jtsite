$("#pic").click(function(event) {
  //event.preventDefault();
  $.fancybox({
    padding: 0,
    autoScale: true,
    showCloseButton: true,
    transitionIn: 'elastic',
    transitionOut: 'fade',
    width: 100,
    height: 100,
    type: 'image',
    title: 'test',
    href: "apple-touch-icon.png"
  });
});
