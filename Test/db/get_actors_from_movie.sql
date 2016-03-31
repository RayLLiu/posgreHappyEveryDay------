SET SEARCH_PATH='moviedb';


Select distinct A.First_name,A.Last_name,A.DateOfBirth,R.name
From Actor A, Role R, Movie M, ActorPlays Ap
    Where (M.name = $1)
    AND (M.MovieID = Ap.movieid)
    AND (Ap.ActorID = A.ActorID)
    AND (Ap.RoleID = R.RoleID);
