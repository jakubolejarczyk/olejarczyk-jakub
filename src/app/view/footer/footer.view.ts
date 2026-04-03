import { inject, Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { FooterLayoutBuilder } from '../../../generator/builder/layout/footer-layout.builder';
import { CopyrightView } from './copyright.view';
import { ContactView } from './contact.view';

@Injectable({ providedIn: 'root' })
export class FooterView {
  contact = inject(ContactView);
  copyright = inject(CopyrightView);

  buildNodes(): NodeModel {
    return FooterLayoutBuilder.builder()
      .setChildren([this.contact.build(), this.copyright.build()])
      .build();
  }
}
