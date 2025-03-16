import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecComponent } from './Components/homec/homec.component';

const routes: Routes = [{ path: '', component: HomecComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
