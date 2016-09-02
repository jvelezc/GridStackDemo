System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClaimProgressComponentController, ClaimProgressComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class ClaimProgressComponentController {
                constructor($http) {
                    this.$http = $http;
                    this.value = "0%";
                }
                $onInit() {
                    this.$http.get("app/components/claimsprogress/fakeprogress.json").success((response) => {
                        this.value = response.ClaimsProgress;
                    });
                    this.intervalId = setInterval(() => {
                        this.$http.get("app/components/claimsprogress/fakeprogress.json").success((response) => {
                            this.value = response.ClaimsProgress;
                            this.IsTracking();
                        });
                    }, 3000);
                }
                IsTracking() {
                    if (this.value === "100%") {
                        clearInterval(this.intervalId);
                    }
                }
            }
            class ClaimProgressComponent {
                constructor() {
                    this.templateUrl = "/app/components/claimsprogress/claimprogress.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", ClaimProgressComponentController];
                    //No configurations needed so far. 
                    this.bindings = {};
                }
            }
            exports_1("ClaimProgressComponent", ClaimProgressComponent);
        }
    }
});
