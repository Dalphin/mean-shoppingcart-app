import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SideBarComponent ],
    exports: [ SideBarComponent ]
})

export class SidebarModule {}
