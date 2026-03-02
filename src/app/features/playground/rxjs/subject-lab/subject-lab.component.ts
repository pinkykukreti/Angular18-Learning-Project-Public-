import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectDemoService } from './subject-demo.service';
import { Subscription } from 'rxjs';
import { SubjectShareService } from './subject-share.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject-lab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject-lab.component.html'
})
export class SubjectLabComponent implements OnInit, OnDestroy {

  subjectMsg = '';
  behaviorMsg = '';
  replayMsg = '';
  asyncMsg = '';

  private sub = new Subscription();

  constructor(private subjectService: SubjectDemoService, private shareService: SubjectShareService) {}

  ngOnInit() {
    this.sub.add(
      this.subjectService.messageSubject.subscribe(v => this.subjectMsg = v)
    );

    this.sub.add(
      this.subjectService.behaviorMessage$.subscribe(v => this.behaviorMsg = v)
    );

    this.sub.add(
      this.subjectService.replayMessage$.subscribe(v => this.replayMsg = v)
    );

    this.sub.add(
      this.subjectService.asyncMessage$.subscribe(v => this.asyncMsg = v)
    );
  }

  // send(value: string) {
  //   this.subjectService.sendMessage(value);
  // }

  complete() {
    this.subjectService.completeAsync();
  }
  send(value: string) {
    console.log("Send value", value);
    this.shareService.sendMessageViaBehaviour(value);  // pass through Behaviour Subject only
    this.shareService.sendMessageViaReplay(value);  // pass through Replay only
    this.shareService.sendMessageViaAsync(value);  // pass through Async only
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('SubjectLabComponent destroyed');
  }
}
