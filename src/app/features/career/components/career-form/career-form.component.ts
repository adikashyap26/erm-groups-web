import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpService } from '../../../../service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-career-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FormsModule,MatProgressSpinnerModule, RouterModule],
  templateUrl: './career-form.component.html',
  styleUrl: './career-form.component.scss'
})
export class CareerFormComponent {
  careerForm!: FormGroup;
  selectedFile:any;
  careerUrl = '/api/career/sendCareerDetails';
  spinner = false;

  constructor(private http: HttpService, private formBuilder: FormBuilder, private snackbar: MatSnackBar, private router: Router){}

  ngOnInit(){
    this.buildForm();
  }

  buildForm(){
    this.careerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      course_value: ['', Validators.required],
      experience: ['', Validators.required],
      file: ['', Validators.required]
    })
  }

  onFileChange(event: any): void {
    const input = event.target as HTMLInputElement;
    
    if (input && input.files && input.files[0]) {
      const file = input.files[0];
      this.careerForm.patchValue({ file: file });
    } else {
      console.log('No file selected.');
    }
  }

  onSubmit() {
    this.spinner = true;
    const formData = new FormData();

    formData.append('first_name', this.careerForm.value.first_name);
    formData.append('last_name', this.careerForm.value.last_name);
    formData.append('phone', this.careerForm.value.phone); 
    formData.append('email', this.careerForm.value.email);
    formData.append('address', this.careerForm.value.address); 
    formData.append('course_value', this.careerForm.value.course_value); 
    formData.append('experience', this.careerForm.value.experience); 
  
    if (this.careerForm.value.file) {  
      formData.append('file', this.careerForm.value.file);
    }
  
    this.http.post(this.careerUrl,formData).subscribe(
      response => {
        this.spinner = false;
        this.snackbar.open('Thank you for reaching out, we will get back to you soon', 'Okay', { duration: 5000 });
        this.router.navigate(['/home'])
        this.careerForm.reset();
      
      },
      error => {
        console.error(error); 
        this.spinner = false;
        alert('An error occurred. Please try again.');
        this.snackbar.open('Something went wrong. Please try again later.', 'Okay', { duration: 5000 });
      }
    );
  }

}
