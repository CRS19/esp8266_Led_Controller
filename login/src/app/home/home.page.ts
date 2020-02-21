import { Component } from '@angular/core';
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //esto tengo que poner en el componente login

  constructor(public navCtrl: NavController) {}

    goLogin() {
    }
}
