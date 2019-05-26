import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ipConfig } from './config';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ui: UserInfo = undefined;

  get UserInfo() {
    return this.ui;
  }

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  private userCollection = this.firestore.collection('user');

  loginUser() {
    if (this.ui) {
      return;
    }

    this.http.get('https://api.ipify.org?format=json').subscribe((res: IpResponse) => {
      // console.log('res ', res);
      // const ipInfo = res.json();
      // this.userInfo.IP = res.ip;
      this.validateUser(res.ip);

    }); // ...and calling .json() on the response to return data
    // . catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  validateUser(ip: string) {
    this.userCollection.doc(ip).get().subscribe(res => {
      if (res.exists) {
        // this.ui = res;
        console.log(res);
        return;
      }
      // tslint:disable-next-line: no-use-before-declare
      const u = new UserInfo({ IP: ip });
      this.addUser(u);

    })
  }

  addUser(ui: UserInfo) {
    //trying to add user with my id (ip address)
    this.userCollection.add(ui).then(res => {

      console.log('added user res', res);
      this.validateUser(ui.IP)
    });
  }
}

class IpResponse {
  ip: string;
  constructor(options: { ip: string }) {
    this.ip = options.ip;
  }
}

export class UserInfo {
  IP: string;
  fName: string;

  constructor(options?: {
    IP: string;
  }) {
    this.IP = options.IP;
  }

}
