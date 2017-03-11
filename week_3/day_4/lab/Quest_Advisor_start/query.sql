SELECT l.*, v.* FROM locations l
INNER JOIN visits v
ON l.id = v.location_id
WHERE v.user_id = 10;