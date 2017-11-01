import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ButtonDemoComponent}
        ])    
    ],
    exports: [RouterModule]
})
export class ButtonDemoRoutingModule {}