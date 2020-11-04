import { Component, OnInit } from '@angular/core';

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  // const instances = M.Sidenav.init(elems);
  // Esta Linea es la que hace funcionar el NavBar, pero no compila
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
