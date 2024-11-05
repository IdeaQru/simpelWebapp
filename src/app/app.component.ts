import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMinimized: boolean = false; // Status sidebar

  constructor(private renderer: Renderer2) {}

  // Fungsi untuk toggle sidebar
  toggleSidebar(): void {
    this.isMinimized = !this.isMinimized;
    const sidebarToggleEvent = new CustomEvent('sidebarToggle', {
      detail: { isMinimized: this.isMinimized }
    });
    window.dispatchEvent(sidebarToggleEvent);
  }
  trails = Array(20).fill(0); // Membuat array untuk 20 bagian ekor agar lebih halus

  private positions: { x: number; y: number }[] = Array(20).fill({ x: 0, y: 0 }); // Posisi ekor
  private hideTimeout: any;


  ngOnInit(): void {
    document.addEventListener('mousemove', (event: MouseEvent) => {
      const { clientX, clientY } = event;

      // Update posisi ekor (mulai dari yang terakhir)
      this.positions.unshift({ x: clientX, y: clientY });
      this.positions.pop();

      // Update posisi elemen trail di DOM
      const trails = document.querySelectorAll('.cursor-trail');
      trails.forEach((trail, index) => {
        (trail as HTMLElement).style.transform = `translate(${this.positions[index].x}px, ${this.positions[index].y}px)`;
        (trail as HTMLElement).style.opacity = `${(20 - index) / 20}`; // Membuat bagian ekor semakin redup
      });

      // Jika mouse bergerak, tampilkan kembali ekor
      this.showTrails();

      // Reset timeout untuk menyembunyikan ekor setelah 2 detik
      clearTimeout(this.hideTimeout);
      this.hideTimeout = setTimeout(() => {
        this.hideTrails();
      }, 30);
    });
  }

  private hideTrails(): void {
    const trails = document.querySelectorAll('.cursor-trail');
    trails.forEach((trail) => {
      (trail as HTMLElement).style.opacity = '0';
    });
  }

  private showTrails(): void {
    const trails = document.querySelectorAll('.cursor-trail');
    trails.forEach((trail, index) => {
      (trail as HTMLElement).style.opacity = `${(20 - index) / 20}`;
    });
  }
}
