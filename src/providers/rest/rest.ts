import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {storage, initializeApp} from 'firebase';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  
  apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    const firebaseConfig = {
      apiKey: "AIzaSyDkMey7-GD3Ydmynsx_ecQoOvN-dgqanZ0",
      authDomain: "website-f0312.firebaseapp.com",
      databaseURL: "https://website-f0312.firebaseio.com",
      projectId: "website-f0312",
      storageBucket: "website-f0312.appspot.com",
      messagingSenderId: "1081104934065"
    };
    initializeApp(firebaseConfig);
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  uploadImage(imageString) {
    const pictures =  storage().ref().child('rajshree').child('cheque1')
    pictures.putString(imageString, 'data_url');
  }

}
