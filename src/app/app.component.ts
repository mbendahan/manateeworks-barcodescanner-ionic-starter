import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ManateeScanner} from '../providers/manatee-scanner';
import { HomePage } from '../pages/home/home';


declare var device:any;


@Component({
  templateUrl: 'app.html',
  providers : [ManateeScanner]
})
export class MyApp {
  rootPage = HomePage; //root page

  constructor(platform: Platform,manateeScanner:ManateeScanner) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      manateeScanner.config(()=>{
          manateeScanner.scanner.setCallback((result:any) =>{});
          var mw_c : any =  manateeScanner.scanner.getConstants();
          var settings : any = [
                  // {"method" : 'MWBenableZoom', "value" : [true]},
                  // {"method" : 'MWBsetZoomLevels', "value" : [200, 400, 1]},
                  // {"method" : 'MWBsetInterfaceOrientation', "value" : [mw_c.OrientationLandscapeLeft]},
                  // {"method" : 'MWBsetOverlayMode', "value" : [mw_c.OverlayModeImage]}
              ];
          var keys : any = {
              'Android'   : "VALID_ANDROID_KEY",
              'iOS'       : "VALID_IOS_KEY",
              'Win32NT'   : "VALID_WIN_WP8_KEY",
              'windows'   : "VALID_WIN_10_UWP_KEY"
          };
          var key : any = (keys[device.platform])?keys[device.platform]:'';

          return manateeScanner.scanner.setKey(key).then((response:any)=>{
              return manateeScanner.scanner.loadSettings(settings).then((response:any)=>{}).catch((reason:any)=>{
                              console.log(reason)
                          });
          });
        });      

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
