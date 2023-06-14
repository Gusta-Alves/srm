import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluirComponent } from './concluir.component';

describe('ConcluirComponent', () => {
  let component: ConcluirComponent;
  let fixture: ComponentFixture<ConcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
