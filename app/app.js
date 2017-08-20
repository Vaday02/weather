;(function () {
    angular.module('app',
        [
            'app.core',
            // 'app.directives',
            'app.request',
            'app.services',
            // 'app.filters',

        ])
        .run(runBlock);

    // runBlock.$inject = ['$sessionStorage','$localStorage',];

    function runBlock() {
        Array.prototype.load = Array.prototype.load || function (limit, offset) {
            let result = [];
            offset = offset === null ? 0 : offset;
            limit = limit === null ? this.length() : limit;
            let size = limit + offset;
            for (let i = offset; i < size; i++) {
                result.push(this[i]);
            }
            return result;
        };

    }
})();
