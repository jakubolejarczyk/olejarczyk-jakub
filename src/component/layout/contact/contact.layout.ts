import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBase } from '../../base/layout.base';
import { ContactDataModel } from '../../model/data/contact-data.model';
import { ContactMetadataModel } from '../../model/metadata/contact-metadata.model';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';

@Component({
  selector: 'contact-layout',
  templateUrl: './contact.layout.html',
  styleUrl: '../../../style/layout/contact.layout.scss',
  imports: [CommonModule],
})
@RegisterComponent({ kind: 'layout', layout: 'contact' })
export class ContactLayout extends LayoutBase<ContactDataModel, ContactMetadataModel> {
  constructor() {
    super('contact');
  }
}
