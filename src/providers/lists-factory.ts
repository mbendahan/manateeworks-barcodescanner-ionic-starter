import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the ListsFactory provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListsFactory {

	storage:Storage = new Storage();
	lists:any[] = [];
	list:any;

	constructor(public http: Http) {
		console.log('Hello ListsFactory Provider');


		this.storage.get('lists').then( lists => {
			this.lists = lists;
		}).catch(error =>{
			console.log(error);
		})
	}
	setItem(id,list){
		if(Array.isArray(this.lists))
			this.lists[id] = list;
		else{
			this.lists = [];
		}
		return this.saveLists();


	}
	removeItem(id){
		this.lists.splice(id,1);
		return this.saveLists();
	}
	saveLists(){

		return this.storage.set("lists" , this.lists).then(result =>{
			console.log('response result'+result);
			return this.lists;
		});		

	}
	getItem(id){

		return this.storage.get("lists").then(lists => {
			if(!Array.isArray(lists))
				lists = [];

			this.list = lists[id];
			return this.list;
		});
	}
	getAll(){
        return this.storage.get('lists').then(lists => {

			if(!Array.isArray(lists))
				lists = [];

			this.lists = lists;
			return this.lists;
        });
	}

}
