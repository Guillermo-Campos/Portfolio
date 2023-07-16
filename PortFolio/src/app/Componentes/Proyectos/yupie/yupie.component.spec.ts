import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YupieComponent } from './yupie.component';

describe('YupieComponent', () => {
  let component: YupieComponent;
  let fixture: ComponentFixture<YupieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YupieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YupieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
