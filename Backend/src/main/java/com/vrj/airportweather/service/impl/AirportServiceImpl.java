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
    public Set<String> getAllCountryNames() {
        return airportRepository.getAllCountryNames();
    }

    @Override
    public Set<String> getCitiesByCountry(String country) {
        return airportRepository.getCitiesByCountry(country);
    }

    @Override
    public Set<String> getAirportNameByCity(String city) {
        return airportRepository.getAirportsByCity(city);
    }

    @Override
    public AirportDTO findByAirportName(String airportName) {
        return airportRepository.findByAirportName(airportName).toDTO();
    }
}
