# Airport Weather Information System
Website that reports the weather status of two cities involved in a trip.

## Resources

Se han usando distintos recursos entre ellos:
- [OpenWeatherMap](https://openweathermap.org/api): para solicitar el estado de tiempo de las ciudades.
- [ The Global Airport Database](https://www.partow.net/miscellaneous/airportdatabase/): para obtener la base de datos de los aeropuertos del mundo, cabe destacar que esta información es hasta el 2021. Así que puede que nuevos aeropuertos no se encuentren.
- [Flaticon](https://www.flaticon.com/): provee los iconos utilizados en este proyecto.
- [DATAHUB](https://datahub.io/core/geo-countries#resource-countries): provee el archivo [countries.geojson](https://github.com/vrosalesjaimes/AirportWeatherInformationSystem/blob/main/Frontend/src/assets/countries.geo.json) para dibujar el mapa correspondiente.
## Ejecución
Para usar la aplicación primero es necesario generar una llave valida para llamar a [OpenWeatherMap](https://openweathermap.org/api): para solicitar el estado de tiempo de las ciudades. La puedes generar en la misma página.  Una vez con tu llave debemos, desde la carpeta Frontend crear la carpeta environments que contendra la información de la llave de la api.  

Desde la carpera raiz Abremos la terminal o linea de comandos y nos movemos a la carpeta Frontend## Resources

Various resources have been used for this project:

- [OpenWeatherMap](https://openweathermap.org/api): used to request weather information for the cities.
- [The Global Airport Database](https://www.partow.net/miscellaneous/airportdatabase/): provides the database of airports worldwide. Note that this information is up to 2021, so newer airports may not be included.
- [Flaticon](https://www.flaticon.com/): provides the icons used in this project.
- [DATAHUB](https://datahub.io/core/geo-countries#resource-countries): provides the [countries.geojson](https://github.com/vrosalesjaimes/AirportWeatherInformationSystem/blob/main/Frontend/src/assets/countries.geo.json) file for drawing the corresponding map.

## Execution

To use the application, first, you need to generate a valid key to call [OpenWeatherMap API](https://openweathermap.org/api) to request weather information for the cities. You can generate the key on the same page. Once you have your key, you must create the `environments` folder inside the `Frontend` directory to store the API key information.

From the project's root folder, open the terminal or command prompt and navigate to the `Frontend` folder:
:

    cd Frontend
 
 Once inside the `Frontend` folder, create the `environments` folder:
 

    ng generate environments
This command will generate two files:

  

    environments/environment.ts
    environments/environment.development.ts

Inside the *environment.ts* file, place the following content:

    export  const  environment  = {
	    production: true,
	    openWeatherMapApiKey: {your-api-key},
	    apiUrl: 'https://api.openweathermap.org/data/3.0/onecall'
    };
And in the *environment.development.ts* file:

    export  const  environment  = {
	    production:  false,
	    openWeatherMapApiKey:  '5aac2dc7618e3fd43f31263400bc1788',
	    apiUrl:  'https://api.openweathermap.org/data/3.0/onecall'
    };

Replace `{your-api-key}` in the `environment.ts` file with your actual OpenWeatherMap API key.

Now, the servers are ready to be launched. You can choose to use Docker or launch them individually from the command line.

### Using Docker

From the project's root folder, simply run the following command:
   

     docker compose up


### Without Docker

Make sure you have [Maven](https://maven.apache.org/), [Java](https://www.java.com/es/) y [Angular](https://angular.io/) installed. From the project's root folder, first, start the backend:

    cd Backend
    mvn package && java -jar target/*.jar

Then, start the Frontend:

    cd ../Frontend
    npm start

This will have the project up and running.
