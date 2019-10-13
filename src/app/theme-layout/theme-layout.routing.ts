import { Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProductListComponent } from '../components/product-list/product-list.component';

export const ThemeLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'product-list',   component: ProductListComponent }
];
