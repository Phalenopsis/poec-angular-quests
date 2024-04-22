import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartUserComponent } from './smart-user.component';

describe('SmartUserComponent', () => {
  let component: SmartUserComponent;
  let fixture: ComponentFixture<SmartUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
