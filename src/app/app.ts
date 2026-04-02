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
    RootLayoutBuilder.build([
      HeaderLayoutBuilder.build([
        SectionLayoutBuilder.build('navigation', []),
        SectionLayoutBuilder.build('home', []),
      ]),
      MainLayoutBuilder.build([
        SectionLayoutBuilder.build('about-me', []),
        SectionLayoutBuilder.build('technologies', []),
        SectionLayoutBuilder.build('skills', []),
        SectionLayoutBuilder.build('experience', []),
        SectionLayoutBuilder.build('resume', []),
        SectionLayoutBuilder.build('projects', []),
        SectionLayoutBuilder.build('education', []),
      ]),
      FooterLayoutBuilder.build([
        SectionLayoutBuilder.build('contact', []),
        SectionLayoutBuilder.build('copyright', []),
      ]),
    ]),
  ];
}
