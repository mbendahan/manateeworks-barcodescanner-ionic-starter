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

  constructor(public http: Http) {
    console.log('Hello ManateeScanner Provider');
    if(typeof mwbScanner != 'undefined' && typeof mwbScanner.startScanning != 'undefined'){
    	this.scanner = mwbScanner;
    }
    else{
    	this.scanner = {};
    }
  }
  config(setFunc){
  	setFunc.call();
  	console.log('setting the function');
  	this.mwInit = true;

  }

}
