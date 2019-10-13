import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

import { ThemeLayoutRoutes } from './theme-layout.routing';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProductListComponent } from '../components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThemeLayoutRoutes),
    FormsModule,
    IconsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    ProductListComponent
  ]
})

export class ThemeLayoutModule {}