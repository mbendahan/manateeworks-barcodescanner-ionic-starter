import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListModify } from '../pages/home/listmodify';
import { HistoryListPage } from '../pages/history-list/history-list';
import { ListsFactory} from '../providers/lists-factory';
import { ManateeScanner} from '../providers/manatee-scanner';
import { ViewCodePage} from '../pages/view-code/view-code';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryListPage,
    ListModify,
    ViewCodePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryListPage,
    ListModify,
    ViewCodePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ListsFactory,ManateeScanner]
})
export class AppModule {}
