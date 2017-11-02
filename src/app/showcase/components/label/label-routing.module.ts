import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelDemoComponent } from './label-demo.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      {path: '', component: LabelDemoComponent}
  ])],
  exports: [RouterModule]
})
export class LabelDemoRoutingModule { }
