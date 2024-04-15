import { Component, OnInit } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  hide = true;
  applyForm!: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.applyForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  updateErrorMessage() {
    if (this.applyForm?.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.applyForm?.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  submitApplication() {
    if (this.applyForm?.valid) {
      console.log('Email:', this.applyForm.value.email);
      console.log('Senha:', this.applyForm.value.senha);
    } else {
      console.log('Formulário inválido');
    }
  }
}
