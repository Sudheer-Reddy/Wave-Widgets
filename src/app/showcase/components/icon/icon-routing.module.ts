import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IconDemoComponent } from './icon-demo.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: IconDemoComponent}
        ])    
    ],
    exports: [RouterModule]
})
export class IconDemoRoutingModule {}