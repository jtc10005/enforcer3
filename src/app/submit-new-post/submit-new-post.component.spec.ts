import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNewPostComponent } from './submit-new-post.component';

describe('SubmitNewPostComponent', () => {
  let component: SubmitNewPostComponent;
  let fixture: ComponentFixture<SubmitNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
