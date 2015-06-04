## Setup the database

Create:
* a database called ```taxi_trip```
* a user called ```taxi_dude``` who can access this database using the password ```taxi```

Here is a script you can customize to create the database and the user:

```
CREATE DATABASE database_name;
CREATE USER username@localhost IDENTIFIED BY 'a password to use...';
GRANT ALL PRIVILEGES ON database_name.* TO username@localhost;
FLUSH PRIVILEGES;
```

##Create the tables

Create these tables in the database taxi_trip database, the columns are described below.

To create tables you will need a script like this:

```

```

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

## Add data

Add the data below to the database

###Locations
	* Bellville
	* Parow
	* Goodwood
	* Woodstock
	* Cape Town
	* Langa
	* Khayelitsha
	* Delft

###Routes
	* Bellville -> Parow - R5
	* Bellville -> Goodwood - R8
	* Bellville -> Cape Town - R15

	* Parow -> Woodstock - R7.50
	* Parow -> Cape Town - R12
	* Parow -> Langa - R7
	
	* Goodwood -> Langa - R9
	* Goodwood -> Delft - R9
	* Goodwood -> Cape Town - R12
	
	* Woodstock -> Cape Town - R5
	* Woodstock -> Parow - R12
	* Woodstock -> Langa - R8
	
###Trips
	* id - int - primary key - auto_increment
	* started_at - datetime
	* ended_at - datetime
	* route_id - int - foreign key to Routes
	* driver_id - int - foreign key to Drivers
	* load int
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

