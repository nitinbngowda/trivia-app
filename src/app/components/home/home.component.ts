import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/services/quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  name: string = "";

  constructor(private router: Router, private quizService: QuizService) {}

  ngOnInit() {}

  continue() {
    if (this.name != "") {
      localStorage.setItem("name", this.name);
      this.router.navigate(["/question1"]);
    } else {
      alert('Name is Required');
    }
  }

  showHistory() {
    this.router.navigate(['/history']);
  }
}
