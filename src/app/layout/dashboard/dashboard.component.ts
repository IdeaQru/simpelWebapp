import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  devicesCount = 8; // Jumlah perangkat yang tersedia
  locationsCount = 12; // Jumlah lokasi yang dipetakan
  dataPoints = 145; // Jumlah data yang terkumpul
}
