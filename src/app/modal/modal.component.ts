import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private loginService: LogInService) {}

  modalVisible: boolean = false;

  ngOnInit() {
    this.loginService.showModal().subscribe(data => {
      this.modalVisible = data;
    })
  }

  hideModal(){
    this.loginService.hideModal()
  };
  
  logIn(){
    this.loginService.logIn();
    this.loginService.resetForm();
  };

}
