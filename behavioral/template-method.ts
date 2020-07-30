// Abstract class
abstract class WebpageTemplate {
  public showPage(): void {
    console.log('Header');
    this.showPageContent();
    console.log('Footer');
  }

  public abstract showPageContent(): void;
}

// Concrete class
class WelcomePage extends WebpageTemplate {
  public showPageContent(): void {
    console.log('Welcome Page');
  }
}

// Concrete class
class NewsPage extends WebpageTemplate {
  public showPageContent(): void {
    console.log('News Page');
  }
}

// usage
const welcomePage = new WelcomePage();
const newsPage = new NewsPage();

welcomePage.showPage();
newsPage.showPage();
