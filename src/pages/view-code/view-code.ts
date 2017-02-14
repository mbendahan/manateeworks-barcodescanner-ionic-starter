import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-code',
  templateUrl: 'view-code.html'
})
export class ViewCodePage {

	item:any;
	public arrayOfKeys;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCodePage');

    this.item = this.navParams.data.item;
    this.arrayOfKeys = Object.keys(this.item);
    
  }

}
