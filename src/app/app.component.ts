import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { MenusPage } from '../pages/menus/menus.component';
import { Events } from 'ionic-angular';




@Component({
  templateUrl: 'app.html'
})
export class AppComponent {
  rootPage:any = HomePage;
  
  public isToggled: boolean;

  constructor(public events: Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.isToggled = false;
    });
  }
  
  public notify() {
    //console.log("Toggled: "+ this.isToggled);
    if (this.isToggled==true) {
      this.events.publish('toggle:value', "en");
    }
    else {
      this.events.publish('toggle:value', "fr");
    }
  }


}
