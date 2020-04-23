import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKontaktComponent } from './admin-kontakt.component';

describe('AdminKontaktComponent', () => {
  let component: AdminKontaktComponent;
  let fixture: ComponentFixture<AdminKontaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKontaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
