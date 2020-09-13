/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'cod-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private iconLibraries: NbIconLibraries,
  ) {
    this.iconLibraries.registerFontPack('font-awesome', { packClass: 'fa' });
    this.iconLibraries.setDefaultPack('font-awesome');
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }
}
