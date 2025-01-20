import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../../../service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  contactForm!: FormGroup;
  contactFormUrl = '/api/contact/sendContactDetail'
  @Input() formDetail: any = [];
  contacatData: any;
  spinner = false;
  constructor(private formBuilder: FormBuilder, private http: HttpService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    console.log('Component initialized'); // Debugging
    this.buildForm();
    console.log(this.contactForm);
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Ensure phone is 10 digits
      pincode: ['', Validators.required],
      option: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger
    this.spinner = true;
    if (this.contactForm.valid) {
  
      this.http.post(this.contactFormUrl, this.contactForm.getRawValue()).subscribe(
        response => {
          this.contacatData = response;
          console.log(this.contacatData)
          this.contactForm.reset();
          this.snackbar.open('Thank you for reaching out, we will get back to you soon', 'Okay', { duration: 5000 });
        
        },
        error => {
          console.error('Error submitting form:', error);
          this.snackbar.open('Something went wrong. Please try again later.', 'Okay', { duration: 5000 });
        }
      );
    } else {
      this.spinner = false;
      this.snackbar.open('Please check all the details in the form', 'Okay', { duration: 5000 });
    }
  }
}