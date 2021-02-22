/*this file is intended for 
* loading into database all tables below

* by command : psql dbname < /this/file/path/filename.sql
*/



/*table countries*/

CREATE TABLE IF NOT EXISTS countries(
id serial,
country_name varchar UNIQUE,
PRIMARY KEY(id)
);


/*table cities*/

CREATE TABLE IF NOT EXISTS cities(
id serial,
city_name varchar UNIQUE,
country int,
PRIMARY KEY(id),
FOREIGN KEY(country)
REFERENCES countries(id)
);

/*table users*/

CREATE TABLE IF NOT EXISTS users(
id serial,
email varchar UNIQUE NOT NULL,
password varchar NOT NULL,
phone varchar,
username varchar NOT NULL,
city varchar,
address varchar,
registered_on timestamp DEFAULT NOW(),
photo varchar DEFAULT '/img/profiles/default.png',
ad_amount INT DEFAULT 0,
PRIMARY KEY(id)

);

/*table sales*/

CREATE TABLE IF NOT EXISTS sales(
id serial,
sell boolean DEFAULT FALSE, 
buy boolean  DEFAULT FALSE,
sales_product varchar,
PRIMARY KEY(id)
);

/*table rent*/

CREATE TABLE IF NOT EXISTS rent(
id serial,
offer boolean DEFAULT FALSE,
demand boolean DEFAULT FALSE,
rent_product varchar,
PRIMARY KEY(id)
);

/*table lost_found*/

CREATE TABLE IF NOT EXISTS lost_found(
id serial,
lost boolean DEFAULT FALSE,
found boolean DEFAULT FALSE,
lost_found_product varchar,
PRIMARY KEY(id)
);

/*table categories*/

CREATE TABLE IF NOT EXISTS categories(
id serial,
category_name varchar NOT NULL,
amount int DEFAULT 0,
PRIMARY KEY(id)
);

/*table products*/

CREATE TABLE IF NOT EXISTS products(
id serial,
product_name varchar NOT NULL,
category_id int NOT NULL,
owner int NOT NULL,
product_description varchar,
PRIMARY KEY(id),

FOREIGN KEY(owner)
REFERENCES users(id),

FOREIGN KEY(category_id)
REFERENCES categories(id)
);




/*table ads*/

CREATE TABLE IF NOT EXISTS ads(
id serial,
title varchar,
ad_description varchar,
price FLOAT DEFAULT 0.00,
category_id int,
active boolean DEFAULT TRUE,
registered_on timestamp DEFAULT NOW(),
owner int,
city_id int,
PRIMARY KEY(id),

FOREIGN KEY(category_id)
REFERENCES categories(id),

FOREIGN KEY(owner)
REFERENCES users(id),

FOREIGN KEY(city_id)
REFERENCES cities(id)
);

/*saves ads which liked by somebody*/

CREATE TABLE IF NOT EXISTS ads_likes(
id serial,
ad int,
person int,
PRIMARY KEY(id),

FOREIGN KEY(ad)
REFERENCES ads(id),

FOREIGN KEY(person)
REFERENCES users(id)
);

/*saves all photos uploaded by users
which belongs to particular ad*/

CREATE TABLE IF NOT EXISTS photos(
id serial,
path varchar,
ad int,

PRIMARY KEY(id),

FOREIGN KEY(ad)
REFERENCES ads(id)
);


/*following commands initiates the necessary tables for start*/

INSERT INTO countries (country_name) VALUES ('Belarus'),('Russia');
INSERT INTO cities (city_name,country) VALUES ('Brest',1), ('Vitebsk',1), ('Gomel',1),
('Grodno',1), ('Minsk',1), ('Mogilev',1), ('Moscow',2), ('Saint-Petersburg',2);

INSERT INTO categories (category_name) VALUES ('auto'), ('housing'),
 ('household appliance'), ('furniture'), ('clothes'), ('media devices'),
 ('sports equipment'), ('domestic animals'), ('other');















