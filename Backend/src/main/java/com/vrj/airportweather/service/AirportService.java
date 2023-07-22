package com.vrj.airportweather.service;

import com.vrj.airportweather.dto.AirportDTO;

import java.util.Set;

public interface AirportService {
    Set<String> getAllCountryNames();
    Set<String> getCitiesByCountry(String country);
    Set<String> getAirportNameByCity(String city);
    AirportDTO findByAirportName(String airportName);
}
