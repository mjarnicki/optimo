import { Component } from '@angular/core';
import {LogInService} from '../log-in.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private loginService: LogInService) {}

  login: string;
  password: string;

  ngOnInit() {
    this.loginService.resetForm().subscribe(data => {
      this.login = data;
      this.password = data;
    })
  }

  showModal() {
    this.loginService.showModal()
  }
}
