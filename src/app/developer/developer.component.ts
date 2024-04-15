import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {
  developer: Developer = {
    lastName: "Léponge",
    firstName: "Bob",
    age: 29,
    gender: "Etoile de mer",
    bio: "glou glou",
    skills: [
      {
        name: "Javascript",
        logo: "https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500",
        site: "https://developer.mozilla.org/fr/"
      },
      {
        name: "PHP",
        logo: "https://www.alsacreations.com/xmedia/doc/medium/php-logo.png",
        site: "https://www.php.net/"
      }
    ]

  }
}
