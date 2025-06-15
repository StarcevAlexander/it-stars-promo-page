import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ContactLocation } from "./contactLocation.interface";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map: any;
  private ymaps: any;

  public contacts: ContactLocation[] = [
    {
      city: 'Иркутск',
      address: 'мн. Юбилейный, 117/1',
      desc: 'вход со стороны школы',
      phone: '8 914 913 2611',
      telegram: 'all_it_stars',
      whatsapp: '+79149132611',
      coords: [52.222139, 104.298276]
    },
    {
      city: 'Иркутск',
      address: 'ул. Пискунова, 142/6',
      desc: 'вход со двора',
      phone: '8 914 913 2611',
      telegram: 'all_it_stars',
      whatsapp: '+79149132611',
      coords: [52.271499, 104.337398]
    }
  ];

  public activeLocation: ContactLocation | null = null;

  ngAfterViewInit(): void {
    this.loadYandexMaps();
  }

  private loadYandexMaps(): void {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=7d79c97c-d64c-4ebb-8983-3295ff667ccd&lang=ru_RU';
    script.onload = () => {
      // @ts-ignore
      this.ymaps = window.ymaps;
    };
    document.body.appendChild(script);
  }

  private initMap(): void {
    if (!this.activeLocation) return;

    this.ymaps.ready(() => {
      this.map = new this.ymaps.Map(this.mapContainer.nativeElement, {
        center: this.activeLocation!.coords,
        zoom: 15,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
      });

      this.addPlacemark(this.activeLocation!);
    });
  }

  private addPlacemark(location: ContactLocation): void {
    if (!this.map) return;

    this.map.geoObjects.removeAll();

    const placemark = new this.ymaps.Placemark(
      location.coords,
      {
        hintContent: location.city,
        balloonContent: `
          <strong>${location.address}</strong><br>
          ${location.desc}<br><br>
          <a href="tel:${location.phone}">${location.phone}</a>
        `
      },
      {
        preset: 'islands#blueDotIcon',
        iconColor: '#0095b6'
      }
    );

    this.map.geoObjects.add(placemark);
    this.map.setCenter(location.coords, 15);
  }

  changeLocation(location: ContactLocation | null): void {
    this.activeLocation = location;

    if (location) {
      // Если карта уже инициализирована - обновляем метку
      if (this.map) {
        this.addPlacemark(location);
      }
      // Если карта не инициализирована - инициализируем
      else if (this.ymaps) {
        this.initMap();
      }
    }
  }

  // Добавляем метод для сброса выбора
  resetLocation(): void {
    this.activeLocation = null;
  }
}
