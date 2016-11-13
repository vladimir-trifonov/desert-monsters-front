import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { Router } from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private http: Http, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.http.post('http://localhost:4000/api/authenticate', {
        name: this.email.value,
        password: this.password.value
      })
        .map(res => res.json())
        .subscribe(
          data => {
            if (!data || !data.success) {
              return;
            }

            localStorage.setItem('id_token', data.token);
            localStorage.setItem('profile', JSON.stringify(data.profile));

            // Navigate to dashboard route
            this.router.navigate(['pages/dashboard']);
          },
          err => console.log(err)
        );
    }
  }
}
