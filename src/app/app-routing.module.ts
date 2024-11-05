import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { EvaluationComponent } from './rolepage/tester/evaluation/evaluation.component';
import { ReportComponent } from './rolepage/tester/report/report.component';
import { CertificationComponent } from './rolepage/contractor/certification/certification.component';
import { PrequalificationComponent } from './rolepage/contractor/prequalification/prequalification.component';
import { ProfileComponent } from './layout/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'tester/evaluation', component: EvaluationComponent },
  { path: 'tester/report', component: ReportComponent },
  { path: 'contractor/prequalification', component: PrequalificationComponent },
  { path: 'contractor/certification', component: CertificationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
