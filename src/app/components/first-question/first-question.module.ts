import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstQuestionComponent } from "./first-question.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: FirstQuestionComponent,
  },
];

@NgModule({
  declarations: [FirstQuestionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FirstQuestionModule {}
