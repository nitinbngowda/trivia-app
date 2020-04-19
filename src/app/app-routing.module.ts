import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HistoryComponent } from "./components/history/history.component";

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: HomeComponent, pathMatch: "full" },
  {
    path: "question1",
    loadChildren:
      "./components/first-question/first-question.module#FirstQuestionModule",
  },
  {
    path: "question2",
    loadChildren:
      "./components/second-question/second-question.module#SecondQuestionModule",
  },
  { path: "history", loadChildren: './components/history/history.module#HistoryModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
