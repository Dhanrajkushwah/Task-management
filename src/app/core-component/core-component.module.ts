import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentRoutingModule } from './core-component-routing.module';
import { CoreComponentComponent } from './core-component.component';
import { sharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoreComponentComponent,
  ],
  imports: [CommonModule, CoreComponentRoutingModule, sharedModule],
  providers: [],
})
export class CoreComponentModule {}
