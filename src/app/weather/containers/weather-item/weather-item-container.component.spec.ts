import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherItemContainerComponent } from './weather-item-container.component';

describe('WeatherItemContainerComponent', () => {
    let component: WeatherItemContainerComponent;
    let fixture: ComponentFixture<WeatherItemContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ WeatherItemContainerComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherItemContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
