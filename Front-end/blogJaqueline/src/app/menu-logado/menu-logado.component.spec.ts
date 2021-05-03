import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogadoComponent } from './menu-logado.component';

describe('MenuLogadoComponent', () => {
  let component: MenuLogadoComponent;
  let fixture: ComponentFixture<MenuLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
