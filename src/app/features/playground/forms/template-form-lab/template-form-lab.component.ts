import { Component } from '@angular/core';
import { SubjectShareService } from '../../rxjs/subject-lab/subject-share.service';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-lab',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form-lab.component.html',
  styleUrl: './template-form-lab.component.css'
})
export class TemplateFormLabComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    console.log('Form Data:', this.user);
    console.log('Form Valid:', form.valid);
  }

  receivedValue = '';
  private destroy$ = new Subject<void>();
  allValues: string[] = [];

  constructor(private shareService: SubjectShareService) { }

  ngOnInit() {
    // this.shareService.message$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(value => {
    //     this.receivedValue = value;
    //     console.log("this.receivedValue...", this.receivedValue);
    //   });

    // this.shareService.message$.subscribe(value => {
    //   this.receivedValue = value;
    //    this.allValues.push(value);   // store every value
    // });
    this.shareService.behaviourMessage$.subscribe(value => {
      console.log('behaviour Received:', value);
      this.allValues.push(value);   // store every value
    });
    this.shareService.replayMessage$.subscribe(value => {
      console.log('replay Received:', value);
      this.allValues.push(value);   // store every value
    });
    this.shareService.asyncMessage$.subscribe(value => {
      console.log('async Received:', value);
      this.allValues.push(value);   // store every value
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
