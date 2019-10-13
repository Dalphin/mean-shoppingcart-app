import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavBarComponent ],
    exports: [ NavBarComponent ]
})

export class NavBarModule {}
