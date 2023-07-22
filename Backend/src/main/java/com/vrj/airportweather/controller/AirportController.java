package com.vrj.airportweather.controller;

import com.vrj.airportweather.dto.AirportDTO;
import com.vrj.airportweather.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/airports")
@CrossOrigin("*")
public class AirportController {
    @Autowired
    private AirportService airportService;

    @GetMapping("/all-cities")
    public Set<String> getAllCountryNames() {
        return airportService.getAllCountryNames();
    }

    @GetMapping("/by-country")
    public Set<String> getByCountry(@RequestParam("country") String country) {
        return airportService.getCitiesByCountry(country);
    }

    @GetMapping("/by-city")
    public Set<String> getByAirportName(@RequestParam("city") String city) {
        return airportService.getAirportNameByCity(city);
    }

    @GetMapping("/search")
    public AirportDTO search(@RequestParam("name") String airportName) {
        return airportService.findByAirportName(airportName);
    }
}