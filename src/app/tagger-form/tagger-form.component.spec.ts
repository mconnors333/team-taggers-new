import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggerFormComponent } from './tagger-form.component';

describe('TaggerFormComponent', () => {
  let component: TaggerFormComponent;
  let fixture: ComponentFixture<TaggerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaggerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
