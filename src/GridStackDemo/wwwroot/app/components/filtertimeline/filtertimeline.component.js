System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FilterTimelineComponentController, FilterTimelineComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class FilterTimelineComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                }
            }
            class FilterTimelineComponent {
                constructor() {
                    this.templateUrl = "/app/components/filtertimeline/filtertimeline.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", FilterTimelineComponent];
                    this.bindings = {
                        key: "@",
                    };
                }
            }
            exports_1("FilterTimelineComponent", FilterTimelineComponent);
        }
    }
});
