import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeferLoadDirective} from './defer-load.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [DeferLoadDirective],
    exports: [DeferLoadDirective]
})
export class DeferLoadModule { }
