(function () {
  "use strict";
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-20158204-6');
  
  var trackOutboundLink = function (url) {
    gtag('event', 'click', {
      'event_category': 'outbound',
      'event_label': url,
      'transport_type': 'beacon',
      'event_callback': function () { }
    });
  };
  
  $('a').each(function () {
    $(this).on("click", function () { 
      trackOutboundLink($(this).attr('href'));
    });
  });
  
}());