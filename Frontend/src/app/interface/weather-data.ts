export interface WeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    temp: number;
    feels_like: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
}
