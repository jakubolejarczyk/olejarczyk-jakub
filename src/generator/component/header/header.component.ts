import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
// import { BaseComponent } from '../../base/component.base';
// import { HeaderComponentModel } from '../../model/component/header-component.model';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [Generator],
})
@RegisterComponent('header')
export class HeaderComponent {} //extends BaseComponent<HeaderComponentModel> {}
