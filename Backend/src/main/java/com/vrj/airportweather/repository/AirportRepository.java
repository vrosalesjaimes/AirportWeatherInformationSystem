package com.vrj.airportweather.repository;

import com.vrj.airportweather.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {
    Set<Airport> findByCity(String city);
    Set<Airport> findByCountry(String country);
    Set<Airport> findByAirportName(String airportName);
    Set<Airport> findByCityAndCountryAndAirportName(String city, String country, String airportName);
}