import { 
  Component, 
  OnInit 
} from '@angular/core';
import { TitlesService } from '../services/titles.service'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  titles: any[];

  constructor(private eventService: TitlesService) { 
  }

  ngOnInit() {
    this.titles = this.eventService.getTitles();
  }

  
}
