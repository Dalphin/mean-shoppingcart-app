import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './icons/icons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NavBarModule } from './theme-layout/layouts/nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeLayoutComponent } from './theme-layout/theme-layout.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ShoppingCartService } from './services/shopping-cart.service';

import { SidebarModule } from './theme-layout/layouts/side-bar/side-bar.module';
import { NavBarModule } from './theme-layout/layouts/nav-bar/nav-bar.module';
import { FooterModule } from './theme-layout/layouts/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    IconsModule,
    SlimLoadingBarModule,
    HttpClientModule,
    SidebarModule,
    NavBarModule,
    FooterModule,
    AppRoutingModule,
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }