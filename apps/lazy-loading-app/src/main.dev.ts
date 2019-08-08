import {platformBrowser} from '@angular/platform-browser';
// @ts-ignore
import {AppModuleNgFactory} from './app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
