import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-lab',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-lab.component.html'
})
export class ReactiveFormLabComponent {
 registerForm: FormGroup;
 submittedData: any;

  skillsList = ['Angular', 'React', 'Vue', 'Node'];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, this.noSpaceValidator]],
      email: ['', [Validators.required, Validators.email]],
      gender: [''],
      skills: this.fb.array([]),
      phones: this.fb.array([this.fb.control('')]),
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  // ===== Custom Validators =====
  noSpaceValidator(control: AbstractControl) {
    if (control.value?.includes(' ')) {
      return { spaceNotAllowed: true };
    }
    return null;
  }

  passwordMatchValidator(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  // ===== FormArray =====
  get skills(): FormArray {
    return this.registerForm.get('skills') as FormArray;
  }

  get phones(): FormArray {
    return this.registerForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(this.fb.control(''));
  }

  removePhone(i: number) {
    this.phones.removeAt(i);
  }

  onSkillChange(event: any) {
    if (event.target.checked) {
      this.skills.push(this.fb.control(event.target.value));
    } else {
      const index = this.skills.controls.findIndex(x => x.value === event.target.value);
      this.skills.removeAt(index);
    }
  }

  // ===== API Submit (fake) =====
  submit() {
    if (this.registerForm.valid) {
      console.log('Sending to API...', this.registerForm.value);
      this.submittedData = this.registerForm.value;
    }
  }

  // ===== Edit Form =====
  loadUser() {
    const userData = {
      name: 'Rahul',
      email: 'rahul@gmail.com',
      gender: 'Male',
      password: '123456',
      confirmPassword: '123456',
      agree: true,
      phones: ['9999999999', '8888888888'],
      skills: ['Angular', 'Node']
    };

    this.registerForm.patchValue(userData);

    this.skills.clear();
    userData.skills.forEach(skill => {
      this.skills.push(this.fb.control(skill));
    });

    this.phones.clear();
    userData.phones.forEach(phone => {
      this.phones.push(this.fb.control(phone));
    });
  }
}

