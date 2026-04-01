import { Component } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { NodeModel } from '../generator/model/node/node.model';
import { RootLayoutBuilder } from '../generator/builder/layout/root-layout.builder';
import { HeaderLayoutBuilder } from '../generator/builder/layout/header-layout.builder';
import { MainLayoutBuilder } from '../generator/builder/layout/main-layout.builder';
import { FooterLayoutBuilder } from '../generator/builder/layout/footer-layout.builder';
import { SectionLayoutBuilder } from '../generator/builder/layout/section-layout.builder';

@Component({
  selector: 'app',
  template: '<generator [nodes]="nodes"></generator>',
  imports: [Generator],
})
export class App {
  nodes: NodeModel[] = [
    RootLayoutBuilder.build('primary', [
      HeaderLayoutBuilder.build('primary', [
        SectionLayoutBuilder.build('primary', 'navigation', []),
        SectionLayoutBuilder.build('primary', 'home', []),
      ]),
      MainLayoutBuilder.build('primary', [
        SectionLayoutBuilder.build('primary', 'about-me', []),
        SectionLayoutBuilder.build('primary', 'technologies', []),
        SectionLayoutBuilder.build('primary', 'skills', []),
        SectionLayoutBuilder.build('primary', 'experience', []),
        SectionLayoutBuilder.build('primary', 'resume', []),
        SectionLayoutBuilder.build('primary', 'projects', []),
        SectionLayoutBuilder.build('primary', 'education', []),
      ]),
      FooterLayoutBuilder.build('primary', [
        SectionLayoutBuilder.build('primary', 'contact', []),
        SectionLayoutBuilder.build('primary', 'copyright', []),
      ]),
    ]),
  ];
}
