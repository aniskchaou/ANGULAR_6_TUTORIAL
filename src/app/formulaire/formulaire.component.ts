import { Component, OnInit } from '@angular/core';
import {Formulaire} from './Formulaire';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  title=""
  model=new Formulaire(1,55,"kgkghkhgf");
  places=["a","b","c"];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>this.title=params.get('param'));
  }

  onSubmit()
  {
    console.log(this.model);
  }

}
