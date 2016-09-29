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
import { OperationHoursComponent } from "../components/operationhours/operationhours.component";
import { SystemInfoComponent } from "../components/systeminfo/systeminfo.component";
import { HolidayDatesComponent } from "../components/holidaydates/holidaydates.component";
import { PostageComponent } from "../components/postage/postage.component";
import { ROPSettingsComponent } from "../components/ropsettings/ropsettings.component";
import { ClaimsDepartmentSettingsComponent } from "../components/claimsDepartmentSettings/claimsDepartmentSettings.component";
import { FnolComponent } from "../components/fnol/fnol.component";
import { FnolWizardComponent } from "../components/fnolwizard/fnolwizard.component";
import { FnolPolicySearchComponent } from "../components/fnolpolicysearch/fnolpolicysearch.component";
import { FnolInformationComponent } from "../components/fnolinformation/fnolinformation.component";
import { FnolClaimDetailsComponent } from "../components/fnolclaimdetails/fnolclaimdetails.component";
import { FnolAsignSubmitComponent } from "../components/fnolasignsubmit/fnolasignsubmit.component";
import { FnolServicesComponent } from "../components/fnolservices/fnolservices.component";
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
    .component(names.Components.operationHours, new OperationHoursComponent())
    .component(names.Components.holidayDates, new HolidayDatesComponent())
    .component(names.Components.postage, new PostageComponent())
    .component(names.Components.ropSettings, new ROPSettingsComponent())
    .component(names.Components.claimsDepartmentSettings, new ClaimsDepartmentSettingsComponent())
    .component(names.Components.fnol, new FnolComponent())
    .component(names.Components.fnolWizard, new FnolWizardComponent())
    .component(names.Components.fnolAsignSubmit, new FnolAsignSubmitComponent())
    .component(names.Components.fnolInformation, new FnolInformationComponent())
    .component(names.Components.fnolClaimDetails, new FnolClaimDetailsComponent())
    .component(names.Components.fnolServices, new FnolServicesComponent())
    .component(names.Components.fnolPolicySearch, new FnolPolicySearchComponent());
