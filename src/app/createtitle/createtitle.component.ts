import { 
  Component, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-createtitle',
  templateUrl: './createtitle.component.html',
  styleUrls: ['./createtitle.component.css']
})
export class CreateTitleComponent implements OnInit {
  title:any;
  constructor() { }

  ngOnInit() {
  }

}
