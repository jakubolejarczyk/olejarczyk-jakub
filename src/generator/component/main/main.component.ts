import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { MainComponentModel } from '../../model/component/main-component.model';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
@RegisterComponent('main')
export class MainComponent extends BaseComponent<MainComponentModel> {}
