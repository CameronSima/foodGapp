import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PendingPage } from '../pages/pending/pending';
import { PostPage } from '../pages/post/post';
import { ProgressPage } from '../pages/progress/progress';
import { SignupPage } from '../pages/signup/signup';
import { VolStartScreenPage } from '../pages/vol-start-screen/vol-start-screen';
import { WayPointMapPage } from '../pages/way-point-map/way-point-map';
import { SignupTypePage } from '../pages/signup-type/signup-type';
import { SetAvailabilityPage } from '../pages/set-availability/set-availability';
import { HealthPartnerPage } from '../pages/health-partner/health-partner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = VolStartScreenPage;


  // rootPage: any = ProgressPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: SignupTypePage },
      { title: 'Sign In', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
