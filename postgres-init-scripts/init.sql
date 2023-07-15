-- Crea la base de datos
CREATE DATABASE airport_db;

-- Selecciona la base de datos
\c airport_db

-- Crea la tabla "airport"
CREATE TABLE airport (
  id SERIAL PRIMARY KEY,
  icao_code VARCHAR(10),
  iata_code VARCHAR(10),
  airport_name VARCHAR(255),
  city VARCHAR(255),
  country VARCHAR(255),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION
);

COPY airport FROM '/docker-entrypoint-initdb.d/GlobalAirportDatabase.csv' DELIMITER ',' CSV HEADER;