import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiracaltopbarComponent } from './miracaltopbar.component';

describe('MiracaltopbarComponent', () => {
  let component: MiracaltopbarComponent;
  let fixture: ComponentFixture<MiracaltopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiracaltopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiracaltopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
