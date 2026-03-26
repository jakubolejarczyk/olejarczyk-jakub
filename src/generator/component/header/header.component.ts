import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { ComponentKindEnum } from '../../enum/component-kind.enum';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
@RegisterComponent(ComponentKindEnum.header)
export class HeaderComponent {}
