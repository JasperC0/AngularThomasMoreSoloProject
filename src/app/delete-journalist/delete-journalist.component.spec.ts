import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJournalistComponent } from './delete-journalist.component';

describe('DeleteJournalistComponent', () => {
  let component: DeleteJournalistComponent;
  let fixture: ComponentFixture<DeleteJournalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJournalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJournalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
