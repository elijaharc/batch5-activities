-- ACTIVTY 0:
-- SELECT COUNT(DISTINCT inventory_id) as unique_inventory_rented, COUNT(r.inventory_id) as total_inventory_rented
-- FROM rental as r
-- LEFT JOIN inventory as i
-- ON r.inventory_id = i.inventory_id

-- rental : rental_id, inventory_id, 
-- inventory : film_id, store_id, inventory_id

-- ACTIVITY 1:
SELECT film.title, film.release_year, film.rating, CONCAT(actor.first_name, ' ', actor.last_name) as actor_full_name
FROM film
LEFT JOIN film_actor ON film.film_id = film_actor.film_id
LEFT JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Dan' AND (actor.last_name = 'Streep' OR actor.last_name = 'Torn')
ORDER BY film.title ASC

-- Dan Torn : 18
-- Dan Streep : 116

-- actor : actor_id
-- film_actor : actor_id, film_id
-- film : film_id, title

-- ACTIVITY 2:

SELECT CONCAT(actor.first_name, ' ', actor.last_name) as actor_full_name, film.title as film_title, category.name as category_name
FROM actor 
LEFT JOIN film_actor ON actor.actor_id = film_actor.actor_id
LEFT JOIN film_category ON film_actor.film_id = film_category.film_id
LEFT JOIN category ON category.category_id = film_category.category_id
LEFT JOIN film ON film.film_id = film_category.film_id
WHERE actor.last_name LIKE 'D%' AND category.name = 'Comedy'
ORDER BY actor_full_name ASC;

-- actor : actor_id, firstandlastname
-- film_actor : actor_id, film_id
-- film_category : film_id, category_id
-- category : category_id, name (name of category)
-- film : film_id, title

-- ACTIVITY 3:
SELECT CONCAT(sf.first_name, ' ', sf.last_name) staff_full_name, count(cc.country_id) customer_count
FROM staff sf
LEFT JOIN store sr ON sf.store_id = sr.store_id
LEFT JOIN address a ON a.address_id = sr.address_id
LEFT JOIN city ON city.city_id = a.city_id
LEFT JOIN country ON country.country_id = city.country_id
LEFT JOIN (SELECT country.country_id
			FROM customer c
			LEFT JOIN address a ON a.address_id = c.address_id
			LEFT JOIN city ON city.city_id = a.city_id
			LEFT JOIN country ON country.country_id = city.country_id) cc ON cc.country_id = country.country_id
GROUP BY CONCAT(sf.first_name, ' ', sf.last_name)

-- MIKE : staff_id = 1, address_id = 3, store_id = 1 (find cities where country_id = 20)
-- city_id = (179, 196, 300, 313, 383, 430, 565)

-- JON : staff_id = 2, address_id = 4, store_id = 2 (find cities where country_id = 8)
-- city_id = 576

-- customer : store_id, customer_id, address_id
-- staff : firstandlastname, address_id, store_id, staff_id
-- store : store_id, address_id, manager_staff_id
-- address : address_id, city_id
-- city : city_id, country_id
-- country : country_id, country (nameof)

-- ACTIVITY 4:
SELECT t.store_id, t.film_count as film_count, t.category_name
FROM (SELECT a.store_id, a.film_count as film_count, Rank () over ( partition by a.store_id ORDER BY a.film_count DESC ) as ranking, a.category_name
FROM
(SELECT r.staff_id as store_id, COUNT(r.staff_id) as film_count, category.name as category_name
FROM rental r
LEFT JOIN inventory i ON r.inventory_id = i.inventory_id
LEFT JOIN film_category ON film_category.film_id = i.film_id
LEFT JOIN category ON category.category_id = film_category.category_id
GROUP BY category.name, r.staff_id) as a) as t
WHERE t.ranking = 1

-- category : category_id, name
-- film_category : film_id, category_id
-- film : film_id
-- rental : rental_id, inventory_id, customer_id, staff_id
-- inventory : film_id, store_id, inventory_id
-- store : store_id

-- ACTIVITY 5:

-- SELECT t.store_id, t.film_count as film_count, t.category_name
-- FROM (SELECT a.store_id, a.film_count as film_count, Rank () over ( partition by a.store_id ORDER BY a.film_count DESC ) as ranking, a.category_name
-- FROM
-- (SELECT r.staff_id as store_id, COUNT(r.staff_id) as film_count, category.name as category_name
-- FROM rental r
-- LEFT JOIN inventory i ON r.inventory_id = i.inventory_id
-- LEFT JOIN film_category ON film_category.film_id = i.film_id
-- LEFT JOIN category ON category.category_id = film_category.category_id
-- GROUP BY category.name, r.staff_id) as a) as t
-- WHERE t.ranking = 1

-- select * from actor as a
-- left join film_actor as fa on a.actor_id = fa.actor_id
-- left join inventory as i on fa.film_id = i.film_id
-- left join rental as r on i.inventory_id = r.inventory_id
-- left join customer as c on r.customer_id = c.customer_id
-- left join address as add on c.address_id = add.address_id
-- left join city as ci on add.city_id = ci.city_id
-- left join country as coun on ci.country_id = coun.country_id

-- select film_id, count(film_id) as film_count from inventory group by film_id order by film_count desc
-- select b.actor_full_name, b.film_count, b.country, Rank () over ( partition by b.country ORDER BY b.film_count DESC ) as ranking from
-- (select CONCAT(a.first_name, ' ', a.last_name) as actor_full_name, count(fa.actor_id) as film_count, coun.country as country
-- from actor as a
-- left join film_actor as fa on fa.actor_id = a.actor_id
-- left join inventory as i on i.film_id = fa.film_id 
-- left join store as s on i.store_id = s.store_id
-- left join address as add on s.address_id = add.address_id
-- left join city as c on add.city_id = c.city_id
-- left join country as coun on c.country_id = coun.country_id
-- group by country, fa.actor_id, actor_full_name
-- order by film_count desc) as b

-- select t2.country, t2.actor_full_name, sum(t2.sum_of_rent_count) from
-- (select t.actor_full_name, sum(t.times_rented) as sum_of_rent_count, t.country as country from
-- (select i.film_id as film_id, r.inventory_id, CONCAT(a.first_name, ' ', a.last_name) as actor_full_name, count(r.inventory_id) as times_rented, coun.country as country
-- from rental as r
-- left join inventory as i on r.inventory_id = i.inventory_id
-- left join store as s on i.store_id = s.store_id
-- left join film_actor as fa on i.film_id = fa.film_id
-- left join actor as a on fa.actor_id = a.actor_id
-- left join address as add on s.address_id = add.address_id
-- left join city as c on add.city_id = c.city_id
-- left join country as coun on c.country_id = coun.country_id
-- where a.first_name LIKE 'Su%' AND country = 'Australia'
-- group by r.inventory_id, i.film_id, coun.country, actor_full_name
-- order by film_id desc) as t
-- where t.actor_full_name = 'Susan Davis' AND t.country = 'Australia'
-- group by country, t.film_id, t.actor_full_name
-- order by actor_full_name desc) as t2
-- group by t2.country, t2.actor_full_name 
-- order by sum desc

-- select t2.country, t2.actor_full_name, sum(t2.sum_of_rent_count) as rent_count from
-- (select t.actor_full_name, sum(t.times_rented) as sum_of_rent_count, t.country as country from
-- (select i.film_id as film_id, r.inventory_id, CONCAT(a.first_name, ' ', a.last_name) as actor_full_name, count(r.rental_id) as times_rented, coun.country as country
-- from rental as r
-- left join inventory as i on r.inventory_id = i.inventory_id
-- left join store as s on i.store_id = s.store_id
-- left join film_actor as fa on i.film_id = fa.film_id
-- left join actor as a on fa.actor_id = a.actor_id
-- left join address as add on s.address_id = add.address_id
-- left join city as c on add.city_id = c.city_id
-- left join country as coun on c.country_id = coun.country_id
-- group by r.inventory_id, i.film_id, coun.country, actor_full_name
-- order by film_id asc) as t
-- group by country, t.film_id, t.actor_full_name
-- order by actor_full_name desc) as t2
-- group by t2.country, t2.actor_full_name 
-- order by rent_count desc

-- select t.actor_full_name, sum(t.rent_count) as rent_count from

-- (select CONCAT(a.first_name, ' ', a.last_name) as actor_full_name, a.actor_id, fa.film_id, count(r.rental_id) as rent_count
-- from rental as r
-- left join inventory as i on r.inventory_id = i.inventory_id
-- left join film_actor as fa on i.film_id = fa.film_id
-- left join actor as a on fa.actor_id = a.actor_id
-- group by fa.film_id, a.actor_id
-- order by actor_full_name, film_id asc) as t

-- group by t.actor_full_name
-- order by rent_count desc
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- left join film_actor as fa on i.film_id = fa.film_id
-- left join actor as a on fa.actor_id = a.actor_id

-- rental : customer_id, inventory_id, rental_id, staff_id
-- inventory : inventory_id, film_id, store_id
-- film_actor : actor_id, film_id
-- actor : actor_id, first_name, last_name

-- store : store_id, address_id
-- address : address_id, city_id
-- city : city_id, city, country_id
-- country : country_id, country
