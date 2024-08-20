import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateInfoComponent } from './climate-info.component';

describe('ClimateInfoComponent', () => {
  let component: ClimateInfoComponent;
  let fixture: ComponentFixture<ClimateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimateInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
