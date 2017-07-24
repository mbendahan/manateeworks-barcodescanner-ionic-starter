import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListsFactory} from '../../providers/lists-factory';
import { ManateeScanner} from '../../providers/manatee-scanner';
import { ViewCodePage} from '../view-code/view-code';

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

	constructor(public navCtrl: NavController, public navParams: NavParams, private listsFactory : ListsFactory, private zone: NgZone,private manateeScanner : ManateeScanner) {}

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
		this.navCtrl.push(ViewCodePage,{
			item : item
		});		
	}
	removeItem(item_id){

		this.list_data.splice(item_id,1);
		this.list.data = this.list_data;
		this.listsFactory.setItem(this.id,this.list).then(response=>{
			
		});
	}
	startScanner(event){

		if(typeof this.manateeScanner.scanner != 'undefined' && typeof this.manateeScanner.scanner.startScanning != 'undefined'){
			if (this.scannerActive =="barcode"){
				this.scannerActive = "power";
				this.manateeScanner.scanner.startScanning(0,0,100,50).then(response =>{
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
				this.manateeScanner.scanner.closeScanner();
				this.scannerActive = "barcode";
			}
			
		}
		else{
			this.startDummy();
		}

	}
	startDummy(){
		let timestamp = function(){ return Number(new Date); }
		this.scannerActive = "power";
		let response:any = {
			"code":"mwbScanner not available @ " + timestamp(),
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
