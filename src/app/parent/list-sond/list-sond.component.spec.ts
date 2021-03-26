import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSondComponent } from './list-sond.component';

describe('ListSondComponent', () => {
  let component: ListSondComponent;
  let fixture: ComponentFixture<ListSondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
