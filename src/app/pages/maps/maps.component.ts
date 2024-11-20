import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  private map: any;
  private apiUrl = 'http://192.168.47.89:3018/api/position'; // URL API Backend
  private markers: L.Marker[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initMap();
    this.fetchData();
  }

  // Inisialisasi Peta
  private initMap(): void {
    this.map = L.map('map', {
      center: [-7.2756, 112.7976], // Pusat peta (Surabaya)
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }

  // Mengambil data dari API
  private fetchData(): void {
    setInterval(() => {
      this.http.get(this.apiUrl).subscribe((data: any) => {
        this.updateMarkers(data);
      });
    }, 10000); // Ambil data setiap 10 detik
  }

  // Perbarui Marker di Peta
  private updateMarkers(data: any): void {
    // Hapus semua marker sebelumnya
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.markers = [];

    // Tambahkan marker baru
    const lat = data.latitude;
    const lng = data.longitude;
    const time = data.time;

    const marker = L.marker([lat, lng]).addTo(this.map);
    marker.bindPopup(`<b>Time:</b> ${time}<br><b>Latitude:</b> ${lat}<br><b>Longitude:</b> ${lng}`);
    this.markers.push(marker);

    // Atur pusat peta ke posisi terakhir
    this.map.setView([lat, lng], 13);
  }
}
