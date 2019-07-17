import {platformBrowser} from '@angular/platform-browser';
// @ts-ignore
import {AppModuleDevNgFactory} from './app/app.module.dev.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleDevNgFactory);
