import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundcomponentComponent } from './notfoundcomponent.component';

describe('NotfoundcomponentComponent', () => {
  let component: NotfoundcomponentComponent;
  let fixture: ComponentFixture<NotfoundcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundcomponentComponent]
    });
    fixture = TestBed.createComponent(NotfoundcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
