import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
