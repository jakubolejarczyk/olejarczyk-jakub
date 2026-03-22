import { Component } from '@angular/core';
import { TextComponent } from '../../../component/text/text.component';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'education-view',
  templateUrl: './education.view.html',
  styleUrl: './education.view.scss',
  imports: [TextComponent],
})
export class EducationView extends StoreCore {
  educations = this.store.selectSignal((state) => {
    return state.education.sort((prev, next) => next.year - prev.year);
  });
}
