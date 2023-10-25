import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule}  from '@angular/fire/compat'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireTellevoModule} from '@angular/fire/compat/tellevo';
import { environment } from 'src/environments/environment';
import { AngularFireTellevo}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule, AngularFireTellevoModule, AngularFireTellevo, AngularFireModule.initializeApp(environment.firebaseConfig)],
  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
