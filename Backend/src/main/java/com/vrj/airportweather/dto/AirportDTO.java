package com.vrj.airportweather.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AirportDTO {
    private String airportName;
    private String city;
    private String country;
    private String latitude;
    private String longitude;
}
