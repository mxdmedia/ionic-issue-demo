import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ height: '0px', opacity: 0.0 }),
        animate('250ms', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('250ms', style({ height: '0px', opacity: 0 }))
      ])
    ])
  ]
})
export class HomePage {
  employeesOpen = false;
  managersOpen = false;
  managers = [
    { name: 'Matt Manager', mobile: '1112223333' },
    { name: 'Stuart Pid', mobile: '1112223333' },
    { name: 'Benadryl Cucumberpatch', mobile: '1112223333' },
    { name: 'Runninout Ovideas', mobile: '1112223333' }
  ];
  employees = [
    { name: 'Employed Guy', mobile: '1112223333' },
    { name: 'Another Person', mobile: '1112223333' },
    { name: 'Matt Manager', mobile: '1112223333' },
    { name: 'Oliver Operator', mobile: '1112223333' },
    { name: 'George Foreman', mobile: '1112223333' },
    { name: 'Frankie Fuller', mobile: '1112223333' },
    { name: 'Jessica Smith', mobile: '1112223333' },
    { name: 'Another Name', mobile: '1112223333' },
    { name: 'Runninout Ovideas', mobile: '1112223333' },
    { name: 'Timothy Randie', mobile: '1112223333' },
    { name: 'Stuart Pid', mobile: '1112223333' },
    { name: 'Some Gal', mobile: '1112223333' },
    { name: 'Rachel Runner', mobile: '1112223333' },
    { name: 'Archie Turnbuck', mobile: '1112223333' },
    { name: 'Benadryl Cucumberpatch', mobile: '1112223333' },
    { name: 'Riely Autoparts', mobile: '1112223333' },
    { name: 'Nice Person', mobile: '1112223333' },
    { name: 'Nota Niceperson', mobile: '1112223333' },
    { name: 'Other Employee', mobile: '1112223333' }
  ];
}
