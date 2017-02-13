import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListModify } from '../pages/home/listmodify';
import { HistoryListPage } from '../pages/history-list/history-list';
import { ListsFactory} from '../providers/lists-factory';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryListPage,
    ListModify
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryListPage,
    ListModify    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ListsFactory]
})
export class AppModule {}
