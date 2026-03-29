import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
// import { BaseComponent } from '../../base/component.base';
// import { FooterComponentModel } from '../../model/component/footer-component.model';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [Generator],
})
@RegisterComponent('footer')
export class FooterComponent {} //extends BaseComponent<FooterComponentModel> {}
