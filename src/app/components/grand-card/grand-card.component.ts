import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-card',
  templateUrl: './grand-card.component.html',
  styleUrls: ['./grand-card.component.css']
})
export class GrandCardComponent implements OnInit {

  @Input()
  photoCover: string = ''
  @Input()
  cardTitle: string = ''
  @Input()
  cardDescription: string = ''
  @Input()
  Id: string = '0'

  constructor() { }

  ngOnInit(): void {
  }

}
