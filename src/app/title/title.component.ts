import { 
  Component, 
  OnInit 
} from '@angular/core';
import { TitleService } from '../services/title.service'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  titles: any[];

  constructor(private eventService: TitleService) { 
  }

  ngOnInit() {
    this.titles = this.eventService.getTitles();
  }

}
