import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsComponent } from './referrals.component';

describe('ReferralsComponent', () => {
  let component: ReferralsComponent;
  let fixture: ComponentFixture<ReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
