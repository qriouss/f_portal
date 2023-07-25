import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = localStorage.getItem("session");

  admincheck = (this.text === 'true');
  userName=localStorage.getItem("userName");
  notifications = ['Export', 'Import', 'Workbook BR100', 'Catalog Import', 'Catalog Export', 'Compare'];




  notificationCount=this.notifications.length;
  role=localStorage.getItem("userRole");
  userDetails: any;

  constructor(
    private router: Router,
    
  ) {
    this.userDetails = localStorage.getItem("userDetails");
    this.userDetails = JSON.parse(this.userDetails);
    // console.log(this.userDetails);
    // this.userName = this.userDetails.firstName + ' ' + this.userDetails.lastName
    // this.role = this.userDetails.role;

   }

   deleteNotification(notification: any) {
    const index = this.notifications.indexOf(notification);
    if (index !== 0) {
      this.notifications.splice(index, 1);
    }
  }

  logoutClicked() {
    
      sessionStorage.removeItem("loggedIn");
      this.router.navigateByUrl('/');
 
  }
  ngOnInit(): void {
  }

}
