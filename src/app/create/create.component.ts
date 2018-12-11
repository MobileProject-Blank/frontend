import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  eventForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      startTime: [''],
      endTime: ['']
    })
  }

  onSubmit() {
    this.submitted = true;

    if(this.eventForm.invalid) {
      return;
    }

    this.success = true;
    console.log(this.eventForm.value);
  }

}
