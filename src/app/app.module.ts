import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NavbarComponent } from './layout/component/navbar/navbar.component';
import { SidebarComponent } from './layout/component/sidebar/sidebar.component';
import { FooterComponent } from './layout/component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { EvaluationComponent } from './rolepage/tester/evaluation/evaluation.component';
import { ReportComponent } from './rolepage/tester/report/report.component';
import { CertificationComponent } from './rolepage/contractor/certification/certification.component';
import { PrequalificationComponent } from './rolepage/contractor/prequalification/prequalification.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { FormsModule } from '@angular/forms'; // Tambahkan ini
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    EvaluationComponent,
    ReportComponent,
    CertificationComponent,
    PrequalificationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
