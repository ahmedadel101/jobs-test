import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.scss'
})
export class ApplyFormComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data);

  }
}
