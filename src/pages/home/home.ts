import { Component, NgZone } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { HistoryListPage } from '../history-list/history-list';
import { ListsFactory} from '../../providers/lists-factory';
import { ListModify} from './listmodify';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController,public modalCtrl: ModalController, private zone: NgZone, private listsFactory:ListsFactory) {
		this.listsFactory.getAll().then(lists=>{
			this.lists = lists;
		});
	}
	historyListPage = HistoryListPage;
	lists:any;

	navSomewhere(id){
		this.navCtrl.push(HistoryListPage,{
			listId : id
		});
	}

	showNewListModal(){
		let newListModal = this.modalCtrl.create(ListModify,{});
		newListModal.present();
		newListModal.onDidDismiss(data => {
			if(data)
				this.lists = data.lists;
		})
	}

	removeItem(id){
		console.log(id);
		this.listsFactory.removeItem(id).then(result=>{
			this.lists = result;
		})
	}
}