DROP TABLE lightsabers;

DROP TABLE jedi;

CREATE TABLE jedi (
  name VARCHAR(255), 
  id SERIAL8 primary key,
  darkside BOOLEAN,
  age INT2
);

CREATE TABLE lightsabers (
  id SERIAL8 primary key,
  hilt_metal VARCHAR(255) not null,
  colour VARCHAR(255) not null,
  owner_id INT8 references jedi(id)
);

-- SELECT * FROM jedi;

INSERT INTO jedi (name, darkside, age) VALUES ('luke', false, 21);
INSERT INTO jedi (name, age) VALUES ('obiwan', 33);
INSERT INTO jedi (name, darkside, age) VALUES ('anakin', false, 12);


-- SELECT count(*) FROM jedi;

UPDATE jedi SET darkside = true;

UPDATE jedi SET darkside = false WHERE name = 'luke';

UPDATE jedi 
SET darkside = false 
WHERE name = 'obiwan' 
AND age = 33;

UPDATE jedi
SET darkside = true, age = 22
WHERE name = 'anakin';

--DELETE FROM jedi
--WHERE name = 'luke';

INSERT INTO jedi (name, darkside, age) VALUES ('mace windooo', false, 54);

--DELETE FROM jedi
--WHERE name = 'mace windooo';


INSERT INTO jedi (name, darkside, age) VALUES ('obiwan', false, 32);

UPDATE jedi SET age = 33
WHERE name = 'obiwan'
AND age = 32;

UPDATE jedi SET age = 33
WHERE id = 2;


SELECT * FROM jedi;

INSERT INTO lightsabers (hilt_metal, colour, owner_id) 
VALUES ('magnesium', 'purple', '4');

INSERT INTO lightsabers (hilt_metal, colour, owner_id)
VALUES ('silver', 'red', '3');

--UPDATE lightsabers SET id = 1;

SELECT * FROM lightsabers;





