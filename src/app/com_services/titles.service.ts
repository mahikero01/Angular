import { Injectable } from '@angular/core';
import { 
  Subject, 
  Observable 
} from 'rxjs/RX'
import { ITitle } from '../com_entities/all.models';

@Injectable()
export class TitlesService {
  getTitles():Observable<ITitle[]> {
    //old style of getting data
    //return TITLES

    //using observables
    let subject = new Subject<ITitle[]>();
    //simulate delay
    setTimeout(() => {subject.next(TITLES); subject.complete();}, 3000);
    return subject;
  }

  getTitle(id:number) {
    return TITLES.find(title => title.id === id)
  }
  
  constructor() { }

}

const TITLES:ITitle[] = [
  {
      id: 1,
      name: 'First Title',
      isActive: true
  },
  {
      id: 2,
      name: 'Second Title',
      isActive: true
  },
  {
      id: 3,
      name: 'Third Title',
      isActive: false
  }
]
