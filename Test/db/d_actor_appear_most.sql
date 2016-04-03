Select distinct A.First_name,A.Last_name,A.Date_Of_Birth, D.first_name,D.last_name,D.country,S.name,S.country
From Actor A, Director D,Studio S, Sponsors Sp,ActorPlays Ap,Directs Ds
Where (A.Actor_ID in (Select Actor_ID
                    From (SELECT AAp.Actor_ID,COUNT(AAp.Actor_ID) AS occurrence
                          FROM ActorPlays AAp
                          GROUP BY AAp.Actor_ID
                          ORDER BY occurrence DESC
                          LIMIT 1)
                    As most_actor))
 AND (A.Actor_ID = Ap.Actor_ID)
 AND (Sp.movie_id = Ap.Movie_ID)
 AND (S.studio_id = Sp.studio_id)
 AND (Ds.movie_id = Ap.Movie_ID);
