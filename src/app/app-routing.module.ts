import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LessonsComponent } from './main/lessons/lessons.component';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'lessons', component:LessonsComponent},
  {path:'games', component:GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
