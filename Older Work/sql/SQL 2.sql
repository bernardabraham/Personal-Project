Question 1 
Select first_name from actor
Question 2
select * from actor where first_name="John"
Question 3
select * from actor where last_name="Neeson"
Question 4
select * from actor where actor_id%10=0;
Question 5
select description from film where film_id=100;
Question 6
select * from film where rating="r";
Question 7
select * from film where rating!="r";
Question 8
select *, min(length) from film group by length limit 5;
Question 9
Select title from film;
Question 10
select * from film where special_features like "%Deleted Scenes%";
Question 11
Select * from (SELECT last_name, count(last_name) AS cln FROM actor GROUP BY last_name) AS count_table where cln = 1;
Question 12
Select * from (SELECT last_name, count(last_name) AS cln FROM actor GROUP BY last_name) AS count_table where cln > 1;
Question 13
Select * from (SELECT last_name, count(last_name) AS cln FROM actor GROUP BY last_name)AS highest order by cln desc limit 1;
Question 14
select * from inventory where film_id=(select film_id from film where title="academy dinosaur");
Question 15
when is academy dinosaur due
Question 16
select avg(length) from film;
Question 17 average runtime by category
 select category_id from category, avg(length) from film GROUP BY category_id ORDER BY AVG(length);
 select rating, avg(length) from film GROUP BY rating ORDER BY AVG(length);
 
 join customer_id onto film_category onto category and print category&avg(length)
 
 JOIN film_category f1 JOIN category c1 ON f1.category_id=c1.category_id
 
 SELECT  name, avg(film.length) from film join (film_category f1 JOIN category c1 ON f1.category_id=c1.category_id) on film.film_id=f1.film_id group by name;
 
 question 18
 select count(description) from film where description like "%robot%";
 question 19
  select length, title from film where length=(select max(length) from film) limit 50;
  question 20 # movies in 2010
  select count(release_year), title from film where release_year="2010";
  question 21
 SELECT  name, title from film join (film_category f1 JOIN category c1 ON f1.category_id=c1.category_id) on film.film_id=f1.film_id where name="horror";
  
  question 22
  select concat (first_name,' ',last_name) as full_name from staff where staff_id=1
  question 23
  actor_id, actor, film
  
  SELECT  first_name, title from film join (film_actor a1 JOIN actor a2 ON a1.actor_id=a2.actor_id) on film.film_id=a1.film_id where concat (first_name,' ',last_name)="fred costner";
  question 24
  store, address, film, inventory
  film id 103
  
  select *, count(film_id) as count_films from inventory WHERE film_id = 35 GROUP BY store_id order by count_films DESC LIMIT 1;
  
  question 25 how many distinct countries
  
  
  
  