/**
 * Drilldown menu init
 */
(function($) {

    $('.mainnav.-root').apDrillDownMenu({
        maxWindowWidth: 960, // Width that the navigation becomes "active"
        width: '100%',
        height: 'auto',
        showSpeed: 200,
        backLink: true,
        backLinkText: 'Back',
        backLinkSelector: '.ddmenu_back',
        currentText: true,
        currentTextSelector: '.ddmenu_current',
        cloneClass: 'clone',
        prependCurrentOnChild: true,
        prependCurrentOnChildCallback: function() {},
        parentIconText: '',
        toggleSwitch: '.ddmenu',
        toggleSpeed: 200
    });

})(jQuery);
