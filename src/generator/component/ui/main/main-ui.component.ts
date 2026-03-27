import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../enum/component-ui-kind.enum';

@Component({
  selector: 'main-ui-component',
  templateUrl: './main-ui.component.html',
  styleUrl: './main-ui.component.scss',
  // imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.main)
export class MainUiComponent {} // extends BaseGenerator {}
