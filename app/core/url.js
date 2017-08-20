;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    url.$inject = [];

    function url() {
        // let baseUrl = 'http://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/'; //original
        let baseUrl = 'http://svm.biz.ua/weather/';
        return {
            baseUrl: baseUrl
        };
    }

})();