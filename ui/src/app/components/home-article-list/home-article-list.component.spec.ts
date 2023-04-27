import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticleListComponent } from './home-article-list.component';

describe('HomeArticleListComponent', () => {
  let component: HomeArticleListComponent;
  let fixture: ComponentFixture<HomeArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeArticleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
