import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-device-dialog',
  templateUrl: './add-device-dialog.component.html',
})
export class AddDeviceDialogComponent {
  deviceName: string = '';

  constructor(public dialogRef: MatDialogRef<AddDeviceDialogComponent>) {}

  addDevice(): void {
    const apiKey = this.generateApiKey();
    this.dialogRef.close({ name: this.deviceName, apiKey });
  }

  private generateApiKey(): string {
    return Math.random().toString(36).substr(2, 16); // Generate random API key
  }
}
