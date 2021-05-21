import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 *
 *
 * @export
 * @class LoaderService
 */
@Injectable()
export class LoaderService {
  public isAppLoading = new BehaviorSubject<boolean>(false);

  /**
   * @function showBlockLoader
   * @description emit to show app loader
   */
  public showBlockLoader() {
    this.isAppLoading.next(true);
  }
  /**
   * @function hideBlockLoader
   * @description emit to hide app loader
   */
  public hideBlockLoader() {
    this.isAppLoading.next(false);
  }
}
