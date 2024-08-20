import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Declarar 'google' como una variable global para TypeScript
declare var google: any;

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  address: string = '';

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  searchAddress(): void {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.address }, (results: any, status: any) => {
      if (status === 'OK' && results) {
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: results[0].geometry.location,
          zoom: 14,
        });
        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}