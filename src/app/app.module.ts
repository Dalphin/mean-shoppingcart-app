import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeLayoutComponent } from './theme-layout/theme-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ThemeLayoutComponent,
    NotFoundComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
