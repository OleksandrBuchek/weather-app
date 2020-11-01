import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListContainerComponent } from './weather-list-container.component';

describe('WeatherContainerComponent', () => {
    let component: WeatherListContainerComponent;
    let fixture: ComponentFixture<WeatherListContainerComponent>;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ WeatherListContainerComponent ]
    })
    .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherListContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
