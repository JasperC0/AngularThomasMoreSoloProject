import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishArticleDetailComponent } from './publish-article-detail.component';

describe('PublishArticleDetailComponent', () => {
  let component: PublishArticleDetailComponent;
  let fixture: ComponentFixture<PublishArticleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishArticleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
