import { MyNgCliAppPage } from './app.po';

describe('my-ng-cli-app App', function() {
  let page: MyNgCliAppPage;

  beforeEach(() => {
    page = new MyNgCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
