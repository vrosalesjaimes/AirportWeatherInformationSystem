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
    private final AirportService airportService;

    @Autowired
    public AirportController(AirportService airportService) {
        this.airportService = airportService;
    }

    @GetMapping("/byCity")
    public Set<AirportDTO> getByCity(@RequestParam("city") String city) {
        return airportService.findByCity(city);
    }

    @GetMapping("/byCountry")
    public Set<AirportDTO> getByCountry(@RequestParam("country") String country) {
        return airportService.findByCountry(country);
    }

    @GetMapping("/byAirportName")
    public Set<AirportDTO> getByAirportName(@RequestParam("airportName") String airportName) {
        return airportService.findByAirportName(airportName);
    }

    @GetMapping("/search")
    public Set<AirportDTO> search(
            @RequestParam("city") String city,
            @RequestParam("country") String country,
            @RequestParam("airportName") String airportName
    ) {
        return airportService.findByCityCountryAndAirportName(city, country, airportName);
    }
}
