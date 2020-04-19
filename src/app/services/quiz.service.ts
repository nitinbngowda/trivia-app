import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Questions } from "../models/questions";
import { History } from "../models/history";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  constructor(private http: HttpClient) {}

  public _questions: Questions[];
  public currentIndex = 0;

  //fetching questions from assets file
  getQuestions(): Observable<Questions[]> {
    return this.http.get("assets/sample.json").pipe(
      map((res) => {
        let response: any = res;
        return response.map((item) => new Questions(item));
      })
    );
  }
}
