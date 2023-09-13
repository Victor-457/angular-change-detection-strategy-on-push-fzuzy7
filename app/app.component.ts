import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public person: object;
  public i = 0;

  public ngOnInit() {
    this.person = {
      name: 'Angular',
    };
  }

  public changeName() {
    this.person['name'] = `AppComponent changed the value in ${++this.i}`;
  }
}
