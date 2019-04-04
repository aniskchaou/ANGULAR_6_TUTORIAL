import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="app component"
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
