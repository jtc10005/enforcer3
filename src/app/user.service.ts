import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ipConfig } from './config';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { ConvertTimeStampToJSDate } from './utilities';


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
      this.validateUser(res.ip);
    });
  }

  validateUser(ip: string) {
    this.firestore.collection('user', ref => ref.where('IP', '==', ip)).get().subscribe(res => {
      if (!res.empty) {
        const e = res.docs[0];
        this.ui = e.data() as UserInfo;
        this.ui.timstamp = ConvertTimeStampToJSDate(e.data().timestamp);
        this.ui.UserID = e.id;
        console.log('User Info Retrieved', this.ui);
        return;
      }
      // tslint:disable-next-line: no-use-before-declare
      const u = new UserInfo({ IP: ip });
      this.addAnnonUser(u);

    })
  }

  addAnnonUser(ui: UserInfo) {
    this.userCollection.add({ ...ui })
    .then(res => {
      console.log('added user res', res);
      this.validateUser(ui.IP);
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
  timstamp: Date;
  UserID: string;
  constructor(options?: {
    IP: string;
  }) {
    this.IP = options.IP;
    this.timstamp = new Date();
  }

}
