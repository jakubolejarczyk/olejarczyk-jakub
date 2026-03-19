import { Component } from '@angular/core';
import { StoreCore } from '../../../core/store.core';

@Component({
  selector: 'education-view',
  templateUrl: './education.view.html',
  styleUrl: './education.view.scss',
})
export class EducationView extends StoreCore {
  education = this.store.selectSignal((state) => state.education);
}
