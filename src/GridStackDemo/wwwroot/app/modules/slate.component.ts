/// <reference path="../../../typings/index.d.ts" />
import {names} from '../angular.global';
import {ReOpenedClaimsComponent} from '../components/reopenedclaims/reOpenedClaims.component';
import {OpenedClaimsComponent} from '../components/openclaims/OpenedClaims.component';
import {TransferredClaimsComponent} from "../components/transferredclaims/transferredclaims.component";
import {ClosedClaimsComponent} from "../components/closedclaims/closedClaims.component";
import {AssignedClaimsComponent} from "../components/assigned/assignedclaims.component";
import {FlaggedClaimsComponent} from "../components/flaggedclaims/flaggedClaims.component";
angular.module(names.Modules.components, []);

angular
    .module(names.Modules.components)
    //<re-opened-claims-panel></re-opened-claims-panel>
    .component(names.Components.reOpenedClaimsPanel, new ReOpenedClaimsComponent())
    .component(names.Components.openClaimsPanel, new ReOpenedClaimsComponent())
    .component(names.Components.transferredClaimsPanel, new TransferredClaimsComponent())
    //<closed-claims-panel></closed-claims-panel>
    .component(names.Components.closedClaimsPanel, new ClosedClaimsComponent())
    .component(names.Components.assignedClaimsPanel, new ClosedClaimsComponent())
    .component(names.Components.flaggedClaimsPanel, new FlaggedClaimsComponent())
    ;
  