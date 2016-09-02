/// <reference path="../../../../typings/index.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SystemInfoComponentController, SystemInfoComponent;
    return {
        setters:[],
        execute: function() {
            class SystemInfoComponentController {
                constructor() {
                }
                $onInit() {
                }
            }
            exports_1("SystemInfoComponentController", SystemInfoComponentController);
            class SystemInfoComponent {
                constructor() {
                    this.templateUrl = "/app/components/systeminfo/systeminfo.component.html";
                    this.controllerAs = "Vm";
                    this.controller = [SystemInfoComponentController];
                }
            }
            exports_1("SystemInfoComponent", SystemInfoComponent);
        }
    }
});
