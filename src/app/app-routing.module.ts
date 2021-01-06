import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { SignupComponent } from './parent/signup/signup.component';
import { AuthGuardGuard } from './auth-guard.guard';
const routes: Routes = [
  {
    path: 'Signup',
    component: SignupComponent,

  },
  {
    path: 'child1',
    component: Child1Component,

  },
  {
    path: 'child2',
    component: Child2Component,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'child1', redirectTo: 'child1'
  },
  {
    path: 'child1', redirectTo: 'child1'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Child1Component, Child2Component, SignupComponent ]