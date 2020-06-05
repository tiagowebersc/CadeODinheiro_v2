import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken, NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
} from './utils';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './utils/jwt.interceptor';


export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'username',
        token: {
          class: NbAuthJWTToken,
          key: 'token',
        },
        baseEndpoint: 'http://localhost:8080',
            login: {
              endpoint: '/authenticate',
              method: 'post',
              redirect: {
                success: '/pages/dashboard',
                failure: null,
              },
            },
            register: {
              endpoint: '/register',
              method: 'post',
              redirect: {
                success: '/pages/dashboard',
                failure: null,
              },
            },
      }),
    ],
    forms: {
      login: {
        rememberMe: false,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: (req) => false },
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
      ],
    };
  }
}
