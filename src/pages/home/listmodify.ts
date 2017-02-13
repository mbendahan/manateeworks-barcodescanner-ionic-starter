import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams, ViewController } from 'ionic-angular';
import { ListsFactory} from '../../providers/lists-factory';

@Component({
	selector: 'list-modify',
	templateUrl: 'listmodify.html'
})
export class ListModify {

editListName: FormGroup;
lists:any;

 constructor(private viewCtrl: ViewController, params: NavParams, formBuilder: FormBuilder, private listsFactory : ListsFactory) {

	this.listsFactory.getAll().then(lists=>{
		this.lists = lists;
	});


	this.editListName = formBuilder.group({
		listName : ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])]
	})

 }
 dismiss(){
 	this.viewCtrl.dismiss(false);
 }
 save(){

 	if(this.editListName.valid){
		let id:any = this.lists.length;
		this.listsFactory.setItem(id,{"name":this.editListName.value.listName}).then(lists=>{
			this.lists = lists;
			this.viewCtrl.dismiss({"lists":this.lists});
		});
 	}
 }
}