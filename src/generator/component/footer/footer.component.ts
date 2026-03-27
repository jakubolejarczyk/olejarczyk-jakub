import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { FooterComponentModel } from '../../model/component/footer-component.model';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
@RegisterComponent('footer')
export class FooterComponent extends BaseComponent<FooterComponentModel> {}
