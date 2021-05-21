import { Component, isDevMode, OnInit } from '@angular/core';
import { Logger } from './core/common/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-base';

  constructor(private _log: Logger) {}
  
  ngOnInit(): void {
    if (!isDevMode()) {
      this._log.enableProductionMode();
    }
  }
}
