import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorMsgDirective } from './directives/error-msg.directive';


@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  exports:[
    ErrorMsgDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
