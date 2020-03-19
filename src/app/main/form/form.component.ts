import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroupDirective, FormGroup, NgForm, FormBuilder, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})



export class FormComponent implements OnInit {

  questionerForm: FormGroup;
  name = ''
  phone = ''
  email = ''
  matcher = new MyErrorStateMatcher()

  constructor(private formBuilder: FormBuilder) { }
  onFormSubmit() {

    if (this.questionerForm.valid) {
      console.log(this.questionerForm.value);
    } else {
      return;
    }
  }

  ngOnInit(): void {
    this.questionerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['', Validators.required]
    });
  }

}
