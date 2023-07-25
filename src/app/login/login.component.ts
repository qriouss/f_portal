
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login'
  userData: any = {};
 

  first_from_modal!: string;
  last_from_modal!: string;
  useremail_from_modal!: string;
  code_from_modal!: string;
  newcode_from_modal!: string;
  confirmcode_from_modal!: string;
  flag!: boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private router: Router,
    private loginService: LoginService,
    
   
    public _snackBar: MatSnackBar    //test case

  ) { }

  ngOnInit(): void {
    sessionStorage.setItem('loggedIn', 'false');
    
  }


  openSnackBar() {
    this._snackBar.open('Wrong Credentials!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
      panelClass: ['warning'],
    });
  }



  // async loginUser(data: NgForm) {
  //   let resData: any;
  //   this.userData = data

  //   try {
  //     resData = await this.loginService.getLogin(
  //       this.userData.email,
  //       window.btoa(this.userData.password)
  //       // this.userData.password

  //     );
  //     console.log(resData.data);
  //     if (resData.status === 200) {
  //       localStorage.setItem("userName", resData.data.firstName+" "+resData.data.lastName);
        

  //       localStorage.setItem("userDetails", JSON.stringify(resData.data));
  //       localStorage.setItem("userRole", resData.data.role);

  //       //  this.utils.setUserDetails(JSON.parse(localStorage.getItem("empData")));


  //       console.log("welcome to dashboard")
  //       this.router.navigate(['/home/', 'dashboard'])

  //       if (resData.data.role.toLowerCase() == "admin") {
  //         this.flag = true;
  //         let flagstring = String(this.flag)
  //         localStorage.setItem("session", flagstring)
  //         return;
  //       }

  //       this.flag = false;
  //       let flagstring = String(this.flag)
  //       localStorage.setItem("session", flagstring)
  //     }

  //     if (resData.status === 400) {
  //       this.openSnackBar()
  //       this.router.navigate(['/', 'login'])
  //     }
  //     if (resData.status === 201) {
  //       this.openSnackBar()
  //       this.router.navigate(['/', 'login'])
  //     }

  //   }
  //   catch (error) {
  //     this.openSnackBar()
  //     return error;
  //   }



  //   //   if(this.userData.email=="admin@lntinfotech.com" && this.userData.password=="admin"){
  //   //     console.log("welcome to dashboard")
  //   //     this.router.navigate(['/home/','dashboard'])

  //   //   }
  //   //   else{
  //   //     alert("ID or password incorrect!")
  //   //   }

  //   // }


  // }


  //Ltimindtree@123

  // openForgotPassword() {
  //   let resData: any;
  //   const dialogRef = this.dialog.open(PopupForgotPasswordComponent, {
  //     width: '400px',
  //     // data: { email:this.user.email  }
  //   });

  //   dialogRef.afterClosed().subscribe(async (result) => {
  //     if (result == undefined) {
  //       console.log('error occured');
  //       return;
  //     }

  //     console.log('The dialog was closed', result);

  //     try {
  //       this.useremail_from_modal = result.useremail;
  //       this.code_from_modal = result.code;
  //       resData = await this.loginService.forgotData(this.useremail_from_modal,
  //         window.btoa(this.code_from_modal),
  //       );
  //       if (resData.status === 200) {

  //         // let res1=await this.loginService.mailtoUser(this.useremail_from_modal, window.btoa(this.code_from_modal));
  //         // console.log(res1);
  //         this._snackBar.open('Password has been sent to your Email!', 'Close', {
  //           horizontalPosition: this.horizontalPosition,
  //           verticalPosition: this.verticalPosition,
  //           duration: 6000,
  //           panelClass: ['warning'],
  //         });
         
  //         console.log(resData.data);
  //       }
      
  //     } catch (error) {
  //       return error;
  //     }
  //   });
  // }


  loginUser(data: NgForm) {
    sessionStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/home', 'dashboard'])
  }

}
