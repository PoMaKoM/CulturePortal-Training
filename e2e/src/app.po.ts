import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): Promise<string> {
    return browser.get(browser.baseUrl) as Promise<string>;
  }

  public getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
