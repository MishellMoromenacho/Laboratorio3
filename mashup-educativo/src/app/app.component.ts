// app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClimateInfoComponent } from './climate-info/climate-info.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ClimateInfoComponent, GoogleMapsComponent],  // Ahora se puede importar correctamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mashup-educativo';
}