Select W.movie_id,U.user_id,count(W.rating) As Total_Number_Of_Rating,W.date
From Watches W
Left Join Users U
On U.user_id = W.user_id
Group by W.movie_id,U.user_id,W.date;
