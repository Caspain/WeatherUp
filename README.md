# WeatherUp
a weather application for sending out weather forecasts to employees. within a given area kingston or montego bay jamaiaca. It parses an xml weather forecast file from http://api.openweathermap.org/ , from both the aforementioned locations. The server utilizes the concept of linux cron jobs to similate a job scheduler for the parsing and extraction of weather forecast such as rainy or clear sky.


The server is hosted on https://weather-up.herokuapp.com/ . The server is currently load balanced with seven cores to handle concurrency of tasks.

Database - NoSQl(MongoSb)
Server - Node.js
Cache Sever - Redis.

Improvements, consider web application accelerators such as Varnish or Nginx, Varnish performs really, really well. It is usually bound by the speed of the network, effectively turning performance into a non-issue. 


If you want to make any changes please email me at : remariorich@gmail.com



