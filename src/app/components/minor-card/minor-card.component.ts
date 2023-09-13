import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minor-card',
  templateUrl: './minor-card.component.html',
  styleUrls: ['./minor-card.component.css']
})
export class MinorCardComponent implements OnInit {

  @Input()
  photoCover: string = ''
  @Input()
  cardTitle: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
