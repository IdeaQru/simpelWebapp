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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'; // Tambahkan ini
import { HttpClientModule } from '@angular/common/http';
import { MapsComponent } from './pages/maps/maps.component';
import { LoggerComponent } from './pages/logger/logger.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddDeviceDialogComponent } from './components/add-device-dialog/add-device-dialog.component'; // Import HttpClientModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MapsComponent,
    LoggerComponent,
    SettingsComponent,
    AddDeviceDialogComponent,
 
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
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
