import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';


declare var mwbScanner:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  barcodetype = '';
  barcoderesult = '';

  constructor(public navCtrl: NavController,private zone: NgZone) {
    
  }

  startScanner(event){
  	var me = this;
	mwbScanner.setCallback(function(result){
	  //disable the default callback. Our plugin uses a default callback to show the results from the scan. We also return a promise
	  //since ionic2 works more naturally with promises, we will use the promise approach. But we still need to disable the default callback function which
	  //uses alert() to show results
	});


		mwbScanner.startScanning().then(function(response){
		  if(response && response.code){
		    me.zone.run(() => {
		        me.barcodetype = response.type;
		        me.barcoderesult = response.code;        	
		    });
		  }
		  else{
		    me.zone.run(() => {
		        me.barcodetype = response.type;  // will return Cancel
		        me.barcoderesult = '';
		    });		      	
		  }
		});
  	
  }

}
