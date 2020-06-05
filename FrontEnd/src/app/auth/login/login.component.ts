import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'cod-login',
  templateUrl: './login.component.html',
})
export class CodLoginComponent extends NbLoginComponent {
  strategy = 'username';
}
