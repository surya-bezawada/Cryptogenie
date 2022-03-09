import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }
  dDay = ''
  private susbcription: Subscription | undefined;
  public timeDifference: any
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;
  setReload: boolean = false

  ngOnInit(): void {
    let date = new Date()
    date.setMinutes(date.getMinutes() + 5)
    date.setSeconds(0)
    this.dDay = date.toString()
    this.susbcription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }
  private getTimeDifference() {
    this.timeDifference = new Date(this.dDay).getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);

    if (this.timeDifference <= 1000) {
      this.setReload = true;
      this.susbcription?.unsubscribe()
    }
  }
  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }
  addZero(i:any) {
    if(i < 10) { i = "0" + i}
    return i;
  }
  reLoad(){
    this.router.navigateByUrl(this.router.url).then(()=>{
      window.location.reload()
    })
  }
}
