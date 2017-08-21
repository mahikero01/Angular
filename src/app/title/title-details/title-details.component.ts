import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.component.html',
  styleUrls: ['./title-details.component.css']
})
export class TitleDetailsComponent implements OnInit {
  DetailTitle: any;

  constructor(
      private eventService: TitleService, 
      private route:ActivatedRoute) { }

  ngOnInit() {
    this.DetailTitle = this.eventService.getTitle(
        //'+= symbol cast the value to number
        +this.route.snapshot.params['id']);
  }

}
