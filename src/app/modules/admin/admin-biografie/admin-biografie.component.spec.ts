import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBiografieComponent } from './admin-biografie.component';

describe('AdminBiografieComponent', () => {
  let component: AdminBiografieComponent;
  let fixture: ComponentFixture<AdminBiografieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBiografieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBiografieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
