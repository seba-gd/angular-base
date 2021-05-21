import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})

export class LoaderComponent {
  @Input()
  public message: string | undefined;

  public isLoading: Subject<boolean> = this.loaderService.isAppLoading;

  /**
   *Creates an instance of AppLoaderComponent.
   * @param {LoaderService} loaderService
   * @memberof AppLoaderComponent
   */
  public constructor(private loaderService: LoaderService) {}
}
