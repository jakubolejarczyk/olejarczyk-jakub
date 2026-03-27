import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { HeaderComponentModel } from '../../model/component/header-component.model';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
@RegisterComponent('header')
export class HeaderComponent extends BaseComponent<HeaderComponentModel> {}
