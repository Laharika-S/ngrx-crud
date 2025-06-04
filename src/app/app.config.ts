import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {provideToastr} from 'ngx-toastr'

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { employeeReducer } from './Store/Employee.Reducer';
import { empEffect } from './Store/Employee.Effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(), 
    provideToastr(), 
    provideStore({'emp':employeeReducer}), 
    provideEffects([empEffect]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
  
};

