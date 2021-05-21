import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

/** Services **/
import { LoaderService } from './loader/service/loader.service';
import { LoaderInterceptor } from './loader/service/loader.interceptor';

/** Components **/
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  imports: [
    AngularCommonModule,
    RouterModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  exports: [
    LoaderComponent
  ],
})
export class SharedModule { }
