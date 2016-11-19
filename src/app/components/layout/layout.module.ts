import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './layout.routing';
import { NgaModule } from '../../theme/nga.module';

import { Layout } from './layout.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Layout]
})
export class LayoutModule {
}
