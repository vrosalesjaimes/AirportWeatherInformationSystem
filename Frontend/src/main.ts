import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ElementRef, ViewChild } from '@angular/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const appRootElement = document.querySelector('app-root');
      if (appRootElement) {
        appRootElement.classList.remove('content'); 
      }
    }, 1500);
  });
