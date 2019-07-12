create database movielens;
use movielens;
source c:/users/admin/documents/movielens.sql;

question 1 - most common horror

genre id> id >
Id > name

select name, count(genre_id)as number_of_movies from genres 
join genres_movies gm on genres.id=gm.genre_id
group by name order by count(name) desc;

table1 t1 join table2 t2 on t1.field=t2.field 

select occupation, movie id, rating, genre 
join(join(join
(join(join(join genres_movies gm on genres.id=gm.genre_id) on genres.id=gm.genre_id)on genres.id=gm.genre_id )
on genres.id=gm.genre_id) on genres.id=gm.genre_id)
where genres.name="horror" order by count(movie id) desc limit 1

 
 

select g.name as genre, o.name as occupation,count(r.rating) as count_occ 
from ((movies m join genres_movies gm on m.id=gm.movie_id)
join genres g on gm.genre_id=g.id)
join (ratings r join users u on r.user_id=u.id)
join occupations o on o.id=u.occupation_id
where g.name = "Horror" group by o.name
order by count_occ desc limit 1;

SELECT id, count(movie_id) from genres_movies  
join (genres_movies g1 JOIN genres g2 ON g1.id=g2.id)
group by name limit 1;

question 2 - With which occupation is the Horror genre most frequently rated?