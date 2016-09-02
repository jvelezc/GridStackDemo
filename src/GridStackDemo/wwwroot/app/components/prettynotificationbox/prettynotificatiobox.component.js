System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PrettyNotificationsController, PrettyNotificationsComponent;
    return {
        setters:[],
        execute: function() {
            class PrettyNotificationsController {
                constructor($http) {
                    this.$http = $http;
                }
            }
            exports_1("PrettyNotificationsController", PrettyNotificationsController);
            class PrettyNotificationsComponent {
                constructor() {
                    this.templateUrl = "/app/components/prettynotificationbox/prettynotificatiobox.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", PrettyNotificationsController];
                    this.bindings = {
                        key: "@",
                    };
                }
            }
            exports_1("PrettyNotificationsComponent", PrettyNotificationsComponent);
        }
    }
});
