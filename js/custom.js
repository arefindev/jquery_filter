(function($){

    "use strict";

    $('.filtr-container').filterizr({
        animationDuration: 0.5,
        callbacks: {
            onInit: function() { },
            onFilteringStart: function() { },
            onFilteringEnd: function() { },
            onShufflingStart: function() { },
            onShufflingEnd: function() { },
            onSortingStart: function() { },
            onSortingEnd: function() { }
        },
        controlsSelector: '',
        delay: 0,
        delayMode: 'progressive',
        easing: 'ease-out',
        filter: 'all',
        filterOutCss: {
            opacity: 0,
            transform: 'scale(0.5)'
        },
        filterInCss: {
            opacity: 0,
            transform: 'scale(1)'
        },
        gridItemsSelector: '.filtr-item',
        gutterPixels: 0,
        layout: 'sameSize',
        multifilterLogicalOperator: 'or',
        searchTerm: '',
        setupControls: true,
        spinner: {
            enabled: false,
            fillColor: '#2184D0',
            styles: {
            height: '75px',
            margin: '0 auto',
            width: '75px',
            'z-index': 2,
            },
        }
    });

})(jQuery);