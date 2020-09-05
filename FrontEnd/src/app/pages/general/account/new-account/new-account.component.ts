import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      accountType: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      displayOnDashboard: new FormControl(''),
      active: new FormControl(''),
    });
  }

  onSubmit(newAccountItem) {
    this.accountService.save(newAccountItem)
      .subscribe();

      this.router.navigateByUrl('/pages/general/account');
  }

}
