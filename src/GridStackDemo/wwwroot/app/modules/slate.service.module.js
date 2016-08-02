/// <reference path="../../../typings/index.d.ts" />
System.register(['../angular.global'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_global_1;
    return {
        setters:[
            function (angular_global_1_1) {
                angular_global_1 = angular_global_1_1;
            }],
        execute: function() {
            angular.module(angular_global_1.names.Modules.slateServices, []);
        }
    }
});
