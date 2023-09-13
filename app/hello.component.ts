import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent  {
  @Input() obj: object;
  public i = 0;

  public changeName() {
    this.obj = {
      name: 'Riccardo'
    };
    this.i++;
  }
}
