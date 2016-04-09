SELECT * FROM USERS JOIN PROFILE ON users.user_id=profile.user_id WHERE USERS.EMAIL=$1;
