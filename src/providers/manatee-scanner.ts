import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var mwbScanner:any;

/*
  Generated class for the ManateeScanner provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ManateeScanner {

  mwInit : boolean;
  public scanner : any;

  constructor(public http: Http) {}

  config(setFunc){

    if(typeof mwbScanner != 'undefined' && typeof mwbScanner.startScanning != 'undefined'){
      console.log("mwbScanner initialized");
      this.scanner = mwbScanner;
    }
    else{
      this.scanner = {};
    }    

  	setFunc.call();
  	this.mwInit = true;

  }

}
