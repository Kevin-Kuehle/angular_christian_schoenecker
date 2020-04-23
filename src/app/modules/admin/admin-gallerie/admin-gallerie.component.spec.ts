import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGallerieComponent } from './admin-gallerie.component';

describe('AdminGallerieComponent', () => {
  let component: AdminGallerieComponent;
  let fixture: ComponentFixture<AdminGallerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGallerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
