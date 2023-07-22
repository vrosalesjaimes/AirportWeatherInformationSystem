package com.vrj.airportweather.repository;

import com.vrj.airportweather.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface AirportRepository extends JpaRepository<Airport, Long> {
    @Query("SELECT DISTINCT a.country FROM Airport a ORDER BY a.country")
    Set<String> getAllCountryNames();
    @Query("SELECT DISTINCT a.city FROM Airport a WHERE a.country = :country ORDER BY a.city")
    Set<String> getCitiesByCountry(String country);
    @Query("SELECT DISTINCT a.airportName FROM Airport a WHERE a.city = :city ORDER BY a.airportName")
    Set<String> getAirportsByCity(String city);
    Airport findByAirportName(String airportName);
}