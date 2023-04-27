import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUpdaterComponent } from './article-updater.component';

describe('ArticleUpdaterComponent', () => {
  let component: ArticleUpdaterComponent;
  let fixture: ComponentFixture<ArticleUpdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleUpdaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
