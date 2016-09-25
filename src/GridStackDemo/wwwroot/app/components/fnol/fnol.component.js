/// <reference path="../../../../typings/index.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FnolComponentController, FnolComponent;
    return {
        setters:[],
        execute: function() {
            class FnolComponentController {
                constructor() {
                }
                $onInit() {
                }
            }
            exports_1("FnolComponentController", FnolComponentController);
            class FnolComponent {
                constructor() {
                    this.templateUrl = "/app/components/fnol/fnol.component.html";
                    this.controllerAs = "Vm";
                    this.controller = [FnolComponentController];
                }
            }
            exports_1("FnolComponent", FnolComponent);
        }
    }
});
