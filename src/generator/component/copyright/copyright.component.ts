import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { CopyrightComponentModel } from '../../model/component/copyright-component.model';

@Component({
  selector: 'copyright-component',
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
})
@RegisterComponent('copyright')
export class CopyrightComponent extends BaseComponent<CopyrightComponentModel> {}
