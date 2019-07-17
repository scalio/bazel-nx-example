import { NgModule, NgModuleFactoryLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { routes } from './app.routing';
import { HomeModuleNgFactory } from './home/home.module.ngfactory';
import { RegisterModuleNgFactory } from './register/register.module.ngfactory';

const routeModule = {
  register: RegisterModuleNgFactory,
  home: HomeModuleNgFactory,
};

const routesMap = routes.reduce((a, r) => {
  a[r.loadChildren as string] = routeModule[r.path];
  return a;
}, {});

export class MyLoader extends NgModuleFactoryLoader {
  load(id: string) {
    const res = routesMap[id];
    if (!res) {
      throw new Error(`Unrecognized route id ${id}`);
    }
    return Promise.resolve(res);
  }
}

@NgModule({
  imports: [AppModule],
  bootstrap: [AppComponent],
  providers: [{ provide: NgModuleFactoryLoader, useClass: MyLoader }],
})
export class AppModuleDev {}
