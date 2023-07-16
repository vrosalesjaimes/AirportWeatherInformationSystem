package com.vrj.airportweather.model;

import com.vrj.airportweather.dto.AirportDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "airport")
public class Airport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String icaoCode;
    private String iataCode;
    private String airportName;
    private String city;
    private String country;
    private Double latitude;
    private Double longitude;

    public AirportDTO toDTO(){
        AirportDTO airportDTO = new AirportDTO();
        airportDTO.setAirportName(this.getAirportName());
        airportDTO.setCity(this.getCity());
        airportDTO.setCountry(this.getCountry());
        airportDTO.setLatitude(this.getLatitude().toString());
        airportDTO.setLongitude(this.getLongitude().toString());
        return airportDTO;
    }

}
