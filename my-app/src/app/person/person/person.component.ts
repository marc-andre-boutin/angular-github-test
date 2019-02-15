import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private firstName: string;
  private lastName: string;

  constructor() { }

  ngOnInit() {
  }

  /*FullName(firstName: string, lastName: string): string{

  }*/

}
