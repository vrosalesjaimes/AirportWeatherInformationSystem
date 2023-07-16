package com.vrj.airportweather.service;

import com.vrj.airportweather.dto.AirportDTO;

import java.util.Set;

public interface AirportService {
    Set<AirportDTO> findByCity(String city);
    Set<AirportDTO> findByCountry(String country);
    Set<AirportDTO> findByAirportName(String airportName);
    Set<AirportDTO> findByCityCountryAndAirportName(String city, String country, String airportName);
}
