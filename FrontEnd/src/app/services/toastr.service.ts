import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {

  constructor(private toastrService: NbToastrService) { }

  config: NbToastrConfig;

  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;

  public makeToastSucess(content: string) {
    this.showToast('success', 'Success', content);
  }
  public makeToastDanger(content: string) {
    this.showToast('danger', 'Error', content);
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.toastrService.show(
      body,
      title,
      config);
  }
}
