import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockViewComponent } from './mock-view.component';

describe('MockViewComponent', () => {
  let component: MockViewComponent;
  let fixture: ComponentFixture<MockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
