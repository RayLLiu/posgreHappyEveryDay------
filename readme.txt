前端后端已经完成。

如果需要在你的数据库上面测试, Please go to SQL File folder, open pgadmin and restore the "moviedb back up" file.

After you loaded the schema called moviedb into your database, go to Test FOLDER, open app.js

configure the following line:
var connectionString = 'postgres://rliu040:8439L177Lr@@web0.site.uottawa.ca:15432/rliu040';

to

var connectionString = 'postgres://(uottawa umail before @):(here goes password)@web0.site.uottawa.ca:15432/(uottawa umail before @)';

replace any thing in the bracket.

All the best!

Ray.
