import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMarcasComponent } from './modal-marcas.component';

describe('ModalMarcasComponent', () => {
  let component: ModalMarcasComponent;
  let fixture: ComponentFixture<ModalMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMarcasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
