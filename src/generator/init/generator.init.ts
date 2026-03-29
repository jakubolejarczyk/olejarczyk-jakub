import '../layout/copyright/copyright.layout';
import '../component/footer/footer.component';
import '../component/header/header.component';
import '../component/main/main.component';
import '../component/section/section.component';

export const generatorInit = () => {
  return {
    provide: 'GENERATOR_INIT',
    useFactory: () => {
      console.log('Generator initialized!');
    },
    multi: true,
  };
};
