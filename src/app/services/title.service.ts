import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
    getTitles() {
        return TITLES
    }

    getTitle(id:number) {
        return TITLES.find(title => title.id === id)
    }
}

const TITLES = [
    {
        id: 1,
        name: 'First Title'
    },
    {
        id: 2,
        name: 'Second Title'
    }
]