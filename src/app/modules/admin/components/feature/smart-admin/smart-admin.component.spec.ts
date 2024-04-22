import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAdminComponent } from './smart-admin.component';

describe('SmartAdminComponent', () => {
  let component: SmartAdminComponent;
  let fixture: ComponentFixture<SmartAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
