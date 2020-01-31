import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {HelpComponent} from './pages/help/help.component';
import {DynamicComponent} from './pages/dynamic/dynamic.component';
import {FormComponent} from './pages/form/form.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'form', component: FormComponent, pathMatch: 'full'},
  {path: 'help', component: HelpComponent, pathMatch: 'full'},
  
  {path: 'nav-item-1', component: DynamicComponent, children: [
    {path: 'child-1', children: [
      {path: 'child-2', component: DynamicComponent},
    ]},

    {path: 'speakers', children: [
      {path: 'michael-prentice', children: [
        {path: 'material-design', component: DynamicComponent}
      ]},
      {path: 'stephen-fluin', children: [
        {path: 'what-up-web', component: DynamicComponent}
      ]},
      {path: 'mike-brocchi', children: [
        {path: 'my-ally-cli', component: DynamicComponent},
        {path: 'become-angular-tailer', component: DynamicComponent}
      ]},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
