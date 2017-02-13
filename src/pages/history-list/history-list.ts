import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListsFactory} from '../../providers/lists-factory';

declare var mwbScanner:any;

/*
  Generated class for the HistoryList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history-list',
  templateUrl: 'history-list.html'
})
export class HistoryListPage {
	list:any;
	id:number;
	list_name:string;
	list_data:any[];
	scannerActive:string ="barcode";	

	constructor(public navCtrl: NavController, public navParams: NavParams, private listsFactory : ListsFactory, private zone: NgZone) {}

	ionViewDidLoad() {

		this.id = this.navParams.data.listId;

		this.listsFactory.getItem(this.navParams.data.listId).then(list=>{

			this.list = list;
			this.list_name = this.list.name;
			if (this.list.data)
				this.list_data = this.list.data;
			else
				this.list_data = [];
		});

	}
	viewData(item){
		console.log(item);
		console.log('TODO: code this one');

		alert(item);

	}
	removeItem(){
		console.log('TODO: code this one');
	}
	startScanner(event){

		if(typeof mwbScanner != 'undefined' && typeof mwbScanner.startScanning != 'undefined'){
			mwbScanner.setCallback(function(result){
			  //disable the default callback. Our plugin uses a default callback to show the results from the scan. We also return a promise
			  //since ionic2 works more naturally with promises, we will use the promise approach. But we still need to disable the default callback function which
			  //uses alert() to show results
			});

			this.scannerActive = "power";
			mwbScanner.startScanning(0,0,100,50).then(response =>{
			  if(response && response.code){
			    this.zone.run(() => {
			    	this.list_data.push(response);
			    	this.list.data = this.list_data;
			    	this.scannerActive = "barcode";
			    	this.listsFactory.setItem(this.id,this.list).then(response=>{})
	       	
			    });
			  }
			  else{
			    this.zone.run(() => {
			    	this.scannerActive = "barcode";

			    });		      	
			  }
			});		
			
		}
		else{
			this.startDummy();
		}

	}
	startDummy(){
		let timestamp = function(){ return Number(new Date); }
		this.scannerActive = "power";
		let response:any = {
			"code":"Dummy BarcodeScan @ " + timestamp(),
			"location" : {},
			"type" : "dummy"
		};

		this.list_data.push(response);
		this.list.data = this.list_data;
		this.listsFactory.setItem(this.id,this.list).then(response=>{
			this.scannerActive = "barcode";
		})
	}	

}
