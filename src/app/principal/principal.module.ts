import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    MenuComponent
  ]
})
export class PrincipalModule { }
