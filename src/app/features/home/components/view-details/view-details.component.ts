import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent {
  modalType:string = 'details'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data);

  }
}
