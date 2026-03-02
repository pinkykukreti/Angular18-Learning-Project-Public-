
import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildViewComponent],
  templateUrl: './parent-view.component.html'
})
export class ParentViewComponent implements AfterViewInit {
  childMessage = '';
  childMessageViaOutput = '';
  parentMessage = 'Initial Parent Message';

  // @ViewChild
  @ViewChild('singleChild') child!: ChildViewComponent;   // Access single child component/element from template

  // @ViewChildren
  @ViewChildren('allChildren') children!: QueryList<ChildViewComponent>;  // Access multiple child components/elements as a list

  ngAfterViewInit() {
    // can access child after view init
    this.childMessage = this.child.message;
  }


  changeSingleChildMessage() {
    this.child.shout('Updated from Parent using ViewChild');
  }

  shoutAllChildren() {
    this.children.forEach(c => c.shout('Updated using ViewChildren'));
  }

  handleNotify(event: string) {
    console.log('Received from child via @Output:', event);
    this.childMessageViaOutput = event;
  }
}
