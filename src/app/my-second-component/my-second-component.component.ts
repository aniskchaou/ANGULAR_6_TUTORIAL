import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title="second component"
  le = 'helloWorld';
  name="robert";
  lastName="dupont";
  values=["a","b","c","d"]
  show=true

  direBonjour()
  {
    this.title="click sur button";
  }
  toggle()
  {
    if(this.show)
    {
      this.show=false;
    }else
    {
     this.show=true;
    }
  }

  log(value)
  {
    console.log(value);
  }
}
