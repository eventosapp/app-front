import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { ClientesModule } from 'src/modules/clientes/clientes.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment.dev';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarNavComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    // AuthModule.forRoot({
    //   domain: environment.config.auth0.domain,
    //   clientId: environment.config.auth0.clientId,
    //   authorizationParams: {
    //     redirect_uri: window.location.origin
    //   },
    // }),
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
