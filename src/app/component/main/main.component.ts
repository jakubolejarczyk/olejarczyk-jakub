import { Component } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';
import { SectionGroupDataEnum } from '../../../data/section/section-data.enum';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [SectionsComponent],
})
export class MainComponent {
  group = SectionGroupDataEnum.main;
}
