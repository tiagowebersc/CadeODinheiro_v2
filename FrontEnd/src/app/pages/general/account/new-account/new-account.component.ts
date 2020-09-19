import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../../services/account.service';
import { ToastrService } from '../../../../services/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  form: FormGroup;
  accountID: string = '';

  constructor(
    private router: Router,
    private accountService: AccountService,
    private toastrService: ToastrService,
  ) {
    try {
      if (this.router.getCurrentNavigation().extras.state.accountID != null) {
        this.accountID = this.router.getCurrentNavigation().extras.state.accountID;
      }
    } catch (e) {}
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      accountType: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      displayOnDashboard: new FormControl(''),
      active: new FormControl(''),
    });



    this.form.patchValue({name: this.accountID});

  }

  onSubmit(newAccountItem) {
    this.accountService.save(newAccountItem)
      .subscribe(
        data => {
          this.toastrService.makeToastSucess('New account created!');
          this.router.navigateByUrl('/pages/general/account');
        },
        error => {
          this.toastrService.makeToastDanger(error);
        },
      );
  }

}
