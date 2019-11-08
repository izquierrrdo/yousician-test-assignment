import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YousicianListComponent } from './yousician-list.component';

describe('YousicianListComponent', () => {
  let component: YousicianListComponent;
  let fixture: ComponentFixture<YousicianListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YousicianListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YousicianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
