import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return {
      button2: {
        label: 'button2',
      },
    };
  }
}
