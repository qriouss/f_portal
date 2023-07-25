import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  async getLogin(useremail: string, userpassword: string) {
    const url = this.apiUrl + '/auth/login';

    let data = await this.httpClient.post(url, { username: useremail, password: userpassword }).toPromise();
    // let value = Object.values(data);
    // if (value[0] === 200) {
      // sessionStorage.setItem('loggedIn', 'true');

    // }
    return data;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem("loggedIn");
  }

  // async forgotData(useremail: string, password: string) {
  //   const url = this.apiUrl + '/auth/forgotpassword';
  //   let data = await this.httpClient.post(url, { username: useremail, Code: password }).toPromise();
  //   return data;
  // }


}



