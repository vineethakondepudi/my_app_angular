import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirclenavbarComponent } from './mirclenavbar.component';

describe('MirclenavbarComponent', () => {
  let component: MirclenavbarComponent;
  let fixture: ComponentFixture<MirclenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirclenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirclenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
