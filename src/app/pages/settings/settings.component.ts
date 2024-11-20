import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDeviceDialogComponent } from '../../components/add-device-dialog/add-device-dialog.component';
import { Device } from '../../models/deviceModels';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  devices: Device[] = [];

  constructor(public dialog: MatDialog) {}

  openAddDeviceDialog(): void {
    const dialogRef = this.dialog.open(AddDeviceDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.devices.push({ id: this.generateDeviceId(), ...result });
      }
    });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert('API Key copied to clipboard!');
    });
  }

  private generateDeviceId(): string {
    return Math.random().toString(36).substr(2, 9); // Generate random ID
  }
}
