import '../layout/copyright/copyright.layout';

export const generatorInit = () => {
  return {
    provide: 'GENERATOR_INIT',
    useFactory: () => {
      console.log('Generator initialized!');
    },
    multi: true,
  };
};
