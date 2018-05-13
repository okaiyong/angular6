import { Component } from '@angular/core';
import { MaterialModule } from './material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
}
