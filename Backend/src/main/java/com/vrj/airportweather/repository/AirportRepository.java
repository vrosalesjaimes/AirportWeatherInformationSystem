package com.vrj.airportweather.repository;

import com.vrj.airportweather.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface AirportRepository extends JpaRepository<Airport, Long> {
    Set<Airport> findByCity(String city);
    Set<Airport> findByCountry(String country);
    Set<Airport> findByAirportName(String airportName);
    Set<Airport> findByCityAndCountryAndAirportName(String city, String country, String airportName);
}