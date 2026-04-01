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
    RootLayoutBuilder.build('primary', [
      HeaderLayoutBuilder.build('primary', [
        SectionLayoutBuilder.build('primary', 'navigation', [
          TextControlBuilder.build('primary', 'Header 1', 'h1'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'home', [
          TextControlBuilder.build('primary', 'Header 2', 'h2'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
      ]),
      MainLayoutBuilder.build('primary', [
        SectionLayoutBuilder.build('primary', 'about-me', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'technologies', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'skills', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'experience', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'resume', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'projects', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'education', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
      ]),
      FooterLayoutBuilder.build('primary', [
        SectionLayoutBuilder.build('primary', 'contact', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
        SectionLayoutBuilder.build('primary', 'copyright', [
          TextControlBuilder.build('primary', 'Header 3', 'h3'),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'p',
          ),
          TextControlBuilder.build(
            'primary',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare sit amet justo quis porttitor. Vivamus volutpat, velit in cursus tempor, enim lectus viverra augue, non bibendum leo nisl non arcu. Aenean dapibus metus tellus, at viverra ipsum posuere quis. Sed diam enim, sollicitudin at orci id, venenatis fringilla neque. Etiam pellentesque eget purus eu ultricies. Praesent tristique elit mauris, nec rutrum elit condimentum et. Ut vel lectus eros. Morbi auctor sit amet leo eu lacinia. Duis mattis quam non consequat porttitor. Sed sodales sit amet libero vitae eleifend.',
            'small',
          ),
        ]),
      ]),
    ]),
  ];
}
