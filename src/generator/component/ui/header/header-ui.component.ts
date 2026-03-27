import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../enum/component-ui-kind.enum';

@Component({
  selector: 'header-ui-component',
  templateUrl: './header-ui.component.html',
  styleUrl: './header-ui.component.scss',
  // imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.header)
export class HeaderUiComponent {} // extends BaseGenerator {}
