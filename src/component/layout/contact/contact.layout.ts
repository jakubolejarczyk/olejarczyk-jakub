import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBase } from '../../base/layout.base';
import { RegisterLayout } from '../../../generator/decorator/layout.decorator';
import { ContactDataModel } from '../../model/data/contact-data.model';
import { ContactMetadataModel } from '../../model/metadata/contact-metadata.model';

@Component({
  selector: 'contact-layout',
  templateUrl: './contact.layout.html',
  styleUrl: '../../../style/layout/contact.layout.scss',
  imports: [CommonModule],
})
@RegisterLayout('contact')
export class ContactLayout extends LayoutBase<ContactDataModel, ContactMetadataModel> {
  constructor() {
    super('contact');
  }
}
