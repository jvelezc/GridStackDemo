/// <reference path="../../../../typings/index.d.ts" />
import {names} from '../../angular.global';
angular
    .module(names.Modules.components)
    //<opened-Claims-Panel></open-Claims-Panel>
    .component(names.Components.openClaimsPanel, {

        template: "hello world"
    });

console.log("hi"); 