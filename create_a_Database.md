## Setup the database

Create a database called taxi_trip
Create a use the taxi_dude who can access this database

## Create the tables

Create these tables in the database taxi_trip database, the columns are described below.

###Locations
	* id - int - primary key - autoincrement
	* name - char(60)

###Routes
	* id - int - primary key - auto_increment
	* start_location_id - int - foreign key to Location id
	* end_location_id - int - foreign key to Location id
	* fare_price - decimal(10,2)

###Trips
	* id - int - primary key - auto_increment
	* started_at - datetime
	* ended_at - datetime
	* route_id - int - foreign key to Routes
	* driver_id - int - foreign key to Drivers
	* fare_price - decimal(10,2)

###Taxi
	* id - int - primary key - auto_increment
	* registration_number char(15)
	* model - char(30)

###Drivers
	* id - int - primary key - auto_increment
	* firstname char(40)
	* surname char(40)
	* cellphone_number char(20)
	* rating int

###Refuels 
	* id - int - primary key - auto_increment
	* done_at - datetime
	* liters decimal(6,2)
	* cost decimal(10,2)
	* speedometer_reading int

