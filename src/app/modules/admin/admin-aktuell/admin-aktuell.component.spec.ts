import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAktuellComponent } from './admin-aktuell.component';

describe('AdminAktuellComponent', () => {
  let component: AdminAktuellComponent;
  let fixture: ComponentFixture<AdminAktuellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAktuellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAktuellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
