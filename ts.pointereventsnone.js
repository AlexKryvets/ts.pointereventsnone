(function (window, angular, undefined) {

    'use strict';

    angular.module('ts.pointerEventsNone', []).directive('pointerEventsNone', function () {
        var events = ['click', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend'];
        return {
            restrict: 'A',
            scope: {
                pointerEventsNoneOff: '=',
            },
            link: function (scope, element, attr) {
                element.bind(events.join(' '), function (e) {
                    if (!scope.pointerEventsNoneOff) {
                        if (attr.pointerEventsNone === 'preventDefault') {
                            e.preventDefault();
                        } else {
                            e.stopPropagation();
                        }
                    }
                });
            }
        };
    });

})(window, window.angular);