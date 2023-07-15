package com.vrj.airportweather.model;

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

}
