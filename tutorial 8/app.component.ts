import {Component} from '@angular/core';

@Component({
selector:'app',
templateUrl: 'app/app.component.html',
styleUrls: ['app/app.component.css']

})
export class AppComponent{
firstMediaItem = {
    id: 1,
    name: "Thor",
    medium: "Movie",
    category: "Action",
    year: 2016,
    watchedOn: 12052016,
    isFavorite: false
  };
}
