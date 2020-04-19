import { Component, OnInit } from "@angular/core";
import { Questions } from "src/app/models/questions";
import { QuizService } from "src/app/services/quiz.service";
import { History } from "src/app/models/history";
import { Router } from "@angular/router";
declare var M: any;

@Component({
  selector: "app-second-question",
  templateUrl: "./second-question.component.html",
  styleUrls: ["./second-question.component.css"],
})
export class SecondQuestionComponent implements OnInit {
  question: Questions;
  modalIns: any;
  results: History;
  history: History;

  constructor(private quizService: QuizService, private router: Router) {}

  ngAfterViewInit() {
    var elems = document.querySelectorAll(".modal");
    this.modalIns = M.Modal.init(elems,{dismissible:false});
  }

  ngOnInit() {
    this.setQuestion();
  }

  setQuestion() {
    this.question = this.quizService._questions[this.quizService.currentIndex];
  }


  setMultiple(event) {
    if (event.target.checked) {
      if (!this.question.selectedAnswers) {
        this.question.selectedAnswers = [];
        this.question.selectedAnswers.push(event.target.value);
      } else {
        this.question.selectedAnswers.push(event.target.value);
      }
    } else {
      let index = this.question.selectedAnswers.indexOf(event.target.value);
      this.question.selectedAnswers.splice(index, 1);
    }
  }

  setSingle(event) {
    this.question.selectedAnswers = [];
    this.question.selectedAnswers = event.target.value;
  }

  openSummary() {
      let temp = {
        name: localStorage.getItem("name"),
        date: new Date(),
        answeredQuestions: this.quizService._questions,
      };

      this.results = new History(temp);

      if (this.modalIns[0] != undefined && this.modalIns[0] != null) {
        this.modalIns[0].open();
      }

      //storing history in localstorage
      let previous = localStorage.getItem("history");
      if (previous != undefined) {
        let toStore = JSON.parse(previous);
        toStore.push(this.results);
        localStorage.setItem("history", JSON.stringify(toStore));
      } else {
        let toStore = [];
        toStore.push(this.results);
        localStorage.setItem("history", JSON.stringify(toStore));
      }
  }

  showHistory() {
    this.router.navigate(['/history']);
  }

  finish() {
    this.router.navigate(["/"]).then(() => {
      location.reload();
    });
  }
}
