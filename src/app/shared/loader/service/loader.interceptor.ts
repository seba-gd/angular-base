import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

/**
 *
 *
 * @export
 * @class LoaderInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  public constructor(public loaderService: LoaderService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.showLoader();
    }

    this.activeRequests++;
    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.hideLoader();
        }
      })
    );
  }

  /**
   * @function showLoader
   * @description trigger show loader
   */
  public showLoader() {
    this.loaderService.showBlockLoader();
  }

  /**
   * @function hideLoader
   * @description trigger hide loader
   */
  public hideLoader() {
    this.loaderService.hideBlockLoader();
  }
}
