/// <reference path="modules/slate.controller.module.ts" />
'use strict'
import 'angular'

import {names} from './angular.global';
import './modules/slate.controller.module'
import './modules/slate.directive.module'
import './modules/slate.service.module'
    'use strict';
   var app =  angular.module(names.Modules.slate,
        [
            names.Modules.slateServices,
            names.Modules.slateDirectives,
            names.Modules.slateControllers,
           
        ]);

   export default app;