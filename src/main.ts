import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

const providers: any[] = [
  { provide: APP_BASE_HREF, useValue: '/' } // แทนที่ '/your-base-href/' ด้วยพาธของคุณ
];

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
