import { PonyracerPage } from './app.po';

describe('ponyracer App', function() {
  let page: PonyracerPage;

  beforeEach(() => {
    page = new PonyracerPage();
  });

  it('should display message saying that\'s always a pleasure to bet on ponies', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ponyracer Always a pleasure to bet on ponies');
  });
});
