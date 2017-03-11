-- -- -- SELECT l.colour as lightsaber_colour FROM lightsabers l;
-- SELECT j.*, l.* FROM jedi j
-- -- -- LEFT OUTER instead of INNER will bring in all of the jedi table even if they don't have a lightsaber
-- INNER JOIN lightsabers l
-- ON j.id = l.owner_id;

-- SELECT * FROM jedi
-- CROSS JOIN lightsabers

-- SELECT v.name as "victim name", 
-- b.infected_on as "din din date", 
-- z.name as "zombie name" 
-- FROM victims v
-- INNER JOIN bitings b
-- ON b.victim_id = v.id
-- INNER JOIN zombies z
-- ON z.id = b.zombie_id;

