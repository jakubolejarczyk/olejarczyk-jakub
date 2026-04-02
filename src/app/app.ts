import { Component } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { NodeModel } from '../generator/model/node/node.model';
import { RootLayoutBuilder } from '../generator/builder/layout/root-layout.builder';
import { HeaderLayoutBuilder } from '../generator/builder/layout/header-layout.builder';
import { MainLayoutBuilder } from '../generator/builder/layout/main-layout.builder';
import { FooterLayoutBuilder } from '../generator/builder/layout/footer-layout.builder';
import { SectionLayoutBuilder } from '../generator/builder/layout/section-layout.builder';
import { TextControlBuilder } from '../generator/builder/control/text-control.builder';

@Component({
  selector: 'app',
  template: '<generator [nodes]="nodes"></generator>',
  imports: [Generator],
})
export class App {
  nodes: NodeModel[] = [
    RootLayoutBuilder.build([
      HeaderLayoutBuilder.build([
        SectionLayoutBuilder.build('navigation', [
          TextControlBuilder.build('h1', 'Header 1'),
          TextControlBuilder.build('p', 'Navigation'),
        ]),
        SectionLayoutBuilder.build('home', [
          TextControlBuilder.build('h2', 'Header 2'),
          TextControlBuilder.build('p', 'Home'),
        ]),
      ]),
      MainLayoutBuilder.build([
        SectionLayoutBuilder.build('about-me', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'About me'),
        ]),
        SectionLayoutBuilder.build('technologies', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Technologies'),
        ]),
        SectionLayoutBuilder.build('skills', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Skills'),
        ]),
        SectionLayoutBuilder.build('experience', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Experience'),
        ]),
        SectionLayoutBuilder.build('resume', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Resume'),
        ]),
        SectionLayoutBuilder.build('projects', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Projects'),
        ]),
        SectionLayoutBuilder.build('education', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Education'),
        ]),
      ]),
      FooterLayoutBuilder.build([
        SectionLayoutBuilder.build('contact', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Contact'),
        ]),
        SectionLayoutBuilder.build('copyright', [
          TextControlBuilder.build('h3', 'Header 3'),
          TextControlBuilder.build('p', 'Copyright'),
        ]),
      ]),
    ]),
  ];
}
