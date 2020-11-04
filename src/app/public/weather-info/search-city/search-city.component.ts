import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  Backgrounds = ['#FFB5E8', '#DCD3FF', '#AFF8DB', '#FFC9DE', '#C5AEFF', '#FFCCF9', '#ACE7FF', '#FFFFD1', '#FFBEBC', '#C4FAF8', '#B5B9FF', '#6EB5FF'];

  cityName = new FormControl('');
  
  @Output() cityStringEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchCity () {
    this.cityStringEmit.emit(this.cityName.value);
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  randomColor: any;

  setBackground() {
    this.getRandomArbitrary(0, this.Backgrounds.length);
    this.randomColor = this.getRandomArbitrary(0, this.Backgrounds.length)
    document.getElementById('main').style.backgroundColor = this.Backgrounds[this.randomColor]
  }

}
