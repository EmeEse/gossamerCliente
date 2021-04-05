import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrWindwComponent } from './err-windw.component';

describe('ErrWindwComponent', () => {
  let component: ErrWindwComponent;
  let fixture: ComponentFixture<ErrWindwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrWindwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrWindwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
