import { Component } from '@angular/core';
import { navbarText } from 'src/assets/constants/text';
import { NavbarType } from 'src/assets/constants/text.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navbarText: NavbarType

  // Lo primero que se renderiza en el componente siempre es el constructor, y después diversos servicios
  constructor() {
    this.navbarText = navbarText
  }
}
