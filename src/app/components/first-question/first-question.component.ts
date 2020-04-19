import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/services/quiz.service";
import { Questions } from "src/app/models/questions";
import { Router } from "@angular/router";

@Component({
  selector: "app-first-question",
  templateUrl: "./first-question.component.html",
  styleUrls: ["./first-question.component.css"],
})
export class FirstQuestionComponent implements OnInit {
  question: Questions;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.quizService.getQuestions().subscribe((res) => {
      this.quizService._questions = res;
      this.question = this.quizService._questions[
        this.quizService.currentIndex
      ];
    });
  }

  setAnswer(event) {
    this.question.selectedAnswers = [];
    this.question.selectedAnswers.push(event.target.value);
  }

  next() {
    this.quizService.currentIndex++;
    this.router.navigate(["/question2"]);
  }
}
