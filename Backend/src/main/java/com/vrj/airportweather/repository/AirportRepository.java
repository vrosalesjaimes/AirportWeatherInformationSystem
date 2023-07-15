package com.vrj.airportweather.repository;

import com.vrj.airportweather.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {
    List<Airport> findByCity(String city);
    List<Airport> findByCountry(String country);
    List<Airport> findByAirportName(String airportName);
    List<Airport> findByCityAndCountryAndAirportName(String city, String country, String airportName);
}