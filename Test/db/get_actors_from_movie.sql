SET SEARCH_PATH='moviedb';

SELECT ACTOR.first_name,ACTOR.last_name,ROLE.name FROM ACTOR,ACTORPLAYS,MOVIE,ROLE
WHERE MOVIE.NAME=$1 AND MOVIE.movie_id=ACTORPLAYS.movie_id
                    AND ACTORPLAYS.actorid=ACTOR.actorid
                    AND ROLE.roleid=ACTORPLAYS.roleid;
