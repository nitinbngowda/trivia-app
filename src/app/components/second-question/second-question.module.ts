import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SecondQuestionComponent } from "./second-question.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: SecondQuestionComponent,
  },
];

@NgModule({
  declarations: [SecondQuestionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecondQuestionModule {}
