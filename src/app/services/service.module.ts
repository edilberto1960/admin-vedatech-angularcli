import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './service.index';
import { SidebarService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
