(function($){

  // initialize mobile navigation
  $('#ap-ddmenu-root > ul').apDrillDownMenu({
    maxWindowWidth: 800, // Width that the navigation becomes "active"
    width: '100%',
    height: 'auto',
    showSpeed: 200,
    backLink: true,
    backLinkText: 'Back',
    backLinkSelector: '.ap-ddmenu-back',
    currentText: true,
    currentTextSelector: '.ap-ddmenu-current-text',
    cloneClass: 'ap-ddmenu-clone',
    prependCurrentOnChild: true,
    prependCurrentOnChildCallback: function() {},
    parentIconText: '',
    toggleSwitch: '.ap-ddmenu-toggle',
    toggleSpeed: 200
  });

}(jQuery));
