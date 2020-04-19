import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history = [];

  constructor(private router:Router) { }

  ngOnInit() {
    let temp = localStorage.getItem('history');
    if (temp) {
      this.history = JSON.parse(temp);
    } else {
      alert('no history available');
      this.router.navigate(['/']).then(()=>{
        location.reload();
      })
    }
  }

}
