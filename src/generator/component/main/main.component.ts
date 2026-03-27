import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { MainComponentModel } from '../../model/component/main-component.model';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [Generator],
})
@RegisterComponent('main')
export class MainComponent extends BaseComponent<MainComponentModel> {}
