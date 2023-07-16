package com.vrj.airportweather.service.impl;

import com.vrj.airportweather.dto.AirportDTO;
import com.vrj.airportweather.model.Airport;
import com.vrj.airportweather.repository.AirportRepository;
import com.vrj.airportweather.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AirportServiceImpl implements AirportService {
    
    @Autowired
    private AirportRepository airportRepository;

    @Override
    public Set<AirportDTO> findByCity(String city) {
        Set<Airport> airports = airportRepository.findByCity(city);
        return convertToDTOSet(airports);
    }

    @Override
    public Set<AirportDTO> findByCountry(String country) {
        Set<Airport> airports = airportRepository.findByCountry(country);
        return convertToDTOSet(airports);
    }

    @Override
    public Set<AirportDTO> findByAirportName(String airportName) {
        Set<Airport> airports = airportRepository.findByAirportName(airportName);
        return convertToDTOSet(airports);
    }

    @Override
    public Set<AirportDTO> findByCityCountryAndAirportName(String city, String country, String airportName) {
        Set<Airport> airports = airportRepository.findByCityAndCountryAndAirportName(city, country, airportName);
        return convertToDTOSet(airports);
    }

    private Set<AirportDTO> convertToDTOSet(Set<Airport> airports) {
        return airports.stream()
                .map(Airport::toDTO)
                .collect(Collectors.toSet());
    }
}
