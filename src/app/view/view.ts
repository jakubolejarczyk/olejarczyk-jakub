import { Component } from '@angular/core';
import { StoreCore } from '../store/store.core';
import { GeneratorComponent } from '../../component/generator/generator.component';
import { TreeModel } from '../../core/model/tree.model';
import { RootViewComponent } from '../../component/view/root/root-view.component';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  imports: [GeneratorComponent],
})
export class View extends StoreCore {
  tree: TreeModel = [
    {
      component: RootViewComponent,
      children: [
        {
          component: RootViewComponent,
          children: [
            {
              component: RootViewComponent,
              children: [],
            },
          ],
        },
        {
          component: RootViewComponent,
          children: [],
        },
      ],
    },
    {
      component: RootViewComponent,
      children: [
        {
          component: RootViewComponent,
          children: [],
        },
        {
          component: RootViewComponent,
          children: [],
        },
      ],
    },
    {
      component: RootViewComponent,
      children: [
        {
          component: RootViewComponent,
          children: [
            {
              component: RootViewComponent,
              children: [
                {
                  component: RootViewComponent,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      component: RootViewComponent,
      children: [],
    },
  ];

  // views = this.store.selectSignal((state) => {
  //   return Object.values(state.group)
  //     .sort((prev, next) => prev.order - next.order)
  //     .map((item) => item.view);
  // });
}
