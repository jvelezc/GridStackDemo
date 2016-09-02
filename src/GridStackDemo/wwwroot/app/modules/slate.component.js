import { names } from '../angular.global';
import { ReOpenedClaimsComponent } from '../components/reopenedclaims/reopenedclaims.component';
import { TransferredClaimsComponent } from "../components/transferredclaims/transferredclaims.component";
import { ClosedClaimsComponent } from "../components/closedclaims/closedclaims.component";
import { AssignedClaimsComponent } from "../components/assigned/assignedclaims.component";
import { FlaggedClaimsComponent } from "../components/flaggedclaims/flaggedclaims.component";
import { OpenClaimsGridComponent } from "../components/openclaimsgrid/openclaimsgrid.component";
import { ActivityGridComponent } from "../components/activityGrid/activitygrid.component";
import { DashboardConfigComponent } from "../components/dashboardconfig/dashboardconfig.component";
import { KendoLineChartComponentComponent } from "../components/kendolinechart/kendolinechart.component";
import { KendoGaugeComponent } from "../components/kendogauge/kendogauge.component";
import { FilterTimelineComponent } from "../components/filtertimeline/filtertimeline.component";
import { ClaimProgressComponent } from "../components/claimsprogress/claimprogress.component";
import { ServerStatusComponent } from "../components/serverstatus/serverstatus.component";
import { SystemInfoComponent } from "../components/systeminfo/systeminfo.component";
angular.module(names.Modules.components, []);
angular
    .module(names.Modules.components)
    .component(names.Components.reOpenedClaimsPanel, new ReOpenedClaimsComponent())
    .component(names.Components.openClaimsPanel, new ReOpenedClaimsComponent())
    .component(names.Components.transferredClaimsPanel, new TransferredClaimsComponent())
    .component(names.Components.closedClaimsPanel, new ClosedClaimsComponent())
    .component(names.Components.assignedClaimsPanel, new AssignedClaimsComponent())
    .component(names.Components.flaggedClaimsPanel, new FlaggedClaimsComponent())
    .component(names.Components.openClaimsGrid, new OpenClaimsGridComponent())
    .component(names.Components.activityGrid, new ActivityGridComponent())
    .component(names.Components.dashboardConfig, new DashboardConfigComponent())
    .component(names.Components.kendoLineChart, new KendoLineChartComponentComponent())
    .component(names.Components.kendoGauge, new KendoGaugeComponent())
    .component(names.Components.filterTimeline, new FilterTimelineComponent())
    .component(names.Components.claimsProgressBar, new ClaimProgressComponent())
    .component(names.Components.serverStatus, new ServerStatusComponent())
    .component(names.Components.systemInfo, new SystemInfoComponent())
    .component(names.Components.hourOfOperations, new HoursOfOperation());
