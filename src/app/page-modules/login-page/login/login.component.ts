import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'shared_services/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { NavBarValues } from 'app_module/shared_daos/navbar/NavBarValues';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasLoginFailed: boolean = false;
  constructor(private fb: FormBuilder, protected authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isUserAuthenticated)
      return this.router.navigate([NavBarValues.ADD_PROJECT])
    else {
      this.loginForm = this.fb.group({
        userName: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        password: ['', [
          Validators.required
        ]]
      })
    }
  }

  public subbmitLogin() {
    if (this.loginForm.valid) {
      this.authService.getAuthSubscriber().subscribe(user => {
        if (user.wasSuccesfull) {
          this.hasLoginFailed = user.wasSuccesfull;
          this.router.navigate([NavBarValues.ADD_PROJECT])
        } else
          this.hasLoginFailed = !user.wasSuccesfull;

      })
      this.authService.fetchUserAuthentication(this.loginForm.value);
    }
  }

}
