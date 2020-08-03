import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));
  test('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  test(`should have as title 'angular-jest-example'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hacker-news-clone');
  }));
  test(`should have emit a event hide post`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    jest.spyOn(fixture.componentInstance.hidePostClicked, 'emit');
    fixture.componentInstance.hidePost(1);
    expect(fixture.componentInstance.hidePostClicked.emit).toHaveBeenCalled();
  }));
});
