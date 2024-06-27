import { HomeService } from './../../services/home.service';
import { Component, OnInit, inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  dialog = inject(MatDialog);
  jobs:any[]=[]
  subscription: Subscription = new Subscription()
  constructor(private HomeService:HomeService){}
  ngOnInit(): void {
      this.subscription.add(this.HomeService.getJobs({pagination_type:'paginate', per_page:20}).subscribe({
        next: res => {
          console.log(res.data);

          this.jobs = res.data

          this.jobs.forEach(item => {
            if (typeof item.work_space_meta_data == "string") {
              item.work_space_meta_data = JSON.parse(item.work_space_meta_data)
            }
          })
          console.log(this.jobs);


        }
      }))

  }
   openViewDialog(data:any) {
    console.log(data);

    const dialogRef = this.dialog.open(ViewDetailsComponent , {
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
