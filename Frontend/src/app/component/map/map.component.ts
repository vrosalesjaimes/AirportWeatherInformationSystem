import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { WeatherData } from 'src/app/interface/weather-data';
import { Airport } from 'src/app/objects/airport';
import { DataSharingService } from 'src/app/service/data-sharing.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private weatherData: Airport[];

  constructor(private elementRef: ElementRef, private sharedService: DataSharingService) {
    this.weatherData = this.sharedService.getSharedData();
   }

  ngOnInit(): void {
    this.generateMap();
  }

  generateMap(): void {
    const width = 600;
    const height = 400;

    const originAirport = this.weatherData[0];
    const destinationAirport = this.weatherData[1];

    const originLat =  Number(originAirport.latitude);
    const originLon =  Number(originAirport.longitude);
    const destinationLat =  Number(destinationAirport.latitude);
    const destinationLon =  Number(destinationAirport.longitude);

    this.svg = d3.select(this.elementRef.nativeElement.querySelector('#mapContainer'))
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background-color', '#f5f5f5')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const centerLatitude = (originLat + destinationLon) / 2;
    const centerLongitude = (originLon + destinationLon) / 2;

    const projection = d3.geoMercator()
      .center([centerLongitude, centerLatitude]) // Ajusta el centro de la proyección
      .scale(100) // Ajusta la escala de la proyección
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Coordenadas límites
    const bounds = [
      [originLat, originLon],
      [destinationLat, destinationLon]
    ];

    // Carga el archivo GeoJSON del mapa del mundo
    d3.json('/assets/countries.geo.json').then((data: any) => {
      this.svg.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', (d: any) => path(d) || '')
        .attr('stroke', 'black')
        .attr('fill', 'lightgray');

      const subFeatures = data.features.filter((feature: any) => {
        const coordinates = feature.geometry.coordinates;
        return (
          coordinates[0] >= bounds[0][1] &&
          coordinates[0] <= bounds[1][1] &&
          coordinates[1] >= bounds[0][0] &&
          coordinates[1] <= bounds[1][0]
        );
      });

      const subData = {
        type: 'FeatureCollection',
        features: subFeatures
      };

      this.svg.selectAll('path')
        .data(subData.features)
        .enter()
        .append('path')
        .attr('d', (d: any) => path(d) || '')
        .attr('stroke', 'black')
        .attr('fill', 'lightgray');

      // Marcar los puntos de los aeropuertos
      this.svg.append('circle')
        .attr('cx', projection([originLon, originLat])?.[0] || 0)
        .attr('cy', projection([originLon, originLat])?.[1] || 0)
        .attr('r', 5)
        .attr('fill', 'red');

      this.svg.append('circle')
        .attr('cx', projection([destinationLon, destinationLat])?.[0] || 0)
        .attr('cy', projection([destinationLon, destinationLat])?.[1] || 0)
        .attr('r', 5)
        .attr('fill', 'blue');

      // Unir los puntos de los aeropuertos con una línea punteada
      const line = d3.line()([
        projection([originLon, originLat]) || [0, 0],
        projection([destinationLon, destinationLat]) || [0, 0]
      ]);

      const lineN = this.svg.append('path')
        .attr('d', line)
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
        .attr('fill', 'none')
        .attr('stroke-dasharray', '5,5');

      const lineNode = lineN.node();
      if (lineNode) {
        const lineLength = lineNode.getTotalLength();
        const planePosition = lineNode.getPointAtLength(lineLength / 2);

        this.svg.append('text')
          .attr('x', planePosition.x)
          .attr('y', planePosition.y)
          .attr('text-anchor', 'middle')
          .attr('font-size', '40px')
          .text('\u2708');
      }
    });
  }
}
