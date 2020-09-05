import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  perfiles = ['Administrador', 'Operador', 'Visitante'];

  model: User;
  submittedUser: User;

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.model = new User();
  }

  onSubmit() {
    this.userService.addUser(this.model)
      .subscribe(user => this.submittedUser = user)
    this.submitted = true;
  }

  goBack(): void {
    this.location.back();
  }

  get diagnostic() { return JSON.stringify(this.model) }

}
