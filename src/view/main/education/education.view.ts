import { Component } from '@angular/core';
import { StoreCore } from '../../../core/store.core';
import { TextComponent } from '../../../component/text/text.component';

@Component({
  selector: 'education-view',
  templateUrl: './education.view.html',
  styleUrl: './education.view.scss',
  imports: [TextComponent],
})
export class EducationView extends StoreCore {
  education = this.store.selectSignal((state) => state.education);
}
