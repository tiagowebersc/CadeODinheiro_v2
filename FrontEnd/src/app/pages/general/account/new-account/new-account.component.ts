import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../../services/account.service';
import { ToastrService } from '../../../../services/toastr.service';
import { Router } from '@angular/router';
import { Account } from '../../../../model/account';

@Component({
  selector: 'cod-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  form: FormGroup;
  accountID: string = '';
  buttonDescription = '';

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

    if (this.accountID.trim().length > 0) {
      this.accountService.get(this.accountID)
      .subscribe(account => {
        this.form.patchValue({name: account.name});
        this.form.patchValue({description: account.description});
        this.form.patchValue({accountType: account.accountType});
        this.form.patchValue({currency: account.currency.acronym});
        this.form.patchValue({displayOnDashboard: account.displayOnDashboard});
        this.form.patchValue({active: account.active});
      });
      this.buttonDescription = 'Save Account Changes';
    } else {
      this.buttonDescription = 'Create New Account';
    }
  }

  onSubmit(accountItem: Account) {
    if (this.accountID.trim().length > 0) {
      accountItem.idAccount = this.accountID;
      this.accountService.edit(this.accountID, accountItem)
        .subscribe(
          data => {
            this.toastrService.makeToastSucess('Account changes saved!');
            this.router.navigateByUrl('/pages/general/account');
          },
          error => {
            this.toastrService.makeToastDanger(error);
          },
        );
    } else {
      this.accountService.save(accountItem)
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

}
