// Observable interface
interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

// Observer interface
interface Observer {
  handleEvent(vacancies: string[]): void;
}

// Concrete Observable
class JobSite implements Observable {
  private vacancies: string[] = [];
  private observers: Observer[] = [];

  public addVacancy(vacancy: string): void {
    this.vacancies.push(vacancy);
    this.notify();
  }

  public removeVacancy(vacancy: string): void {
    this.vacancies = this.vacancies.filter((v) => v === vacancy);
    this.notify();
  }

  public subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify() {
    for (let observer of this.observers) {
      observer.handleEvent(this.vacancies);
    }
  }
}

// Concrete Observer
class Developer implements Observer {
  constructor(public name: string) {}

  handleEvent(vacancies: string[]) {
    console.log(
      `${this.name} receiving vacancies: ${JSON.stringify(vacancies)}`
    );
  }
}

// usage
const jobSite = new JobSite();
const dev1 = new Developer('Dev 1');
const dev2 = new Developer('Dev 2');

jobSite.subscribe(dev1);
jobSite.subscribe(dev2);

jobSite.addVacancy('React dev');
jobSite.addVacancy('Angular dev');

jobSite.removeVacancy('React dev');

jobSite.unsubscribe(dev1);

jobSite.removeVacancy('Angular dev');
