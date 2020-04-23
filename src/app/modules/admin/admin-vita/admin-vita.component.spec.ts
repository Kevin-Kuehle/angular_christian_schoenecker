import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVitaComponent } from './admin-vita.component';

describe('AdminVitaComponent', () => {
  let component: AdminVitaComponent;
  let fixture: ComponentFixture<AdminVitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
