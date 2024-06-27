import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { Subscription } from 'rxjs';
import { HomeService } from './services/home.service';
import { DomSanitizer } from '@angular/platform-browser';
import { JobsComponent } from './components/jobs/jobs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    JobsComponent
  ],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(
  ) { }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }




}
