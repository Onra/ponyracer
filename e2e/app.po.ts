export class PonyracerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ponyracer-app h1')).getText();
  }
}
