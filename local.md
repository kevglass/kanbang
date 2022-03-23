To run locally.

1) Install heroku CLI
2) Build project
3) Run `heroku config:get DATABASE_URL -a kanbang -s >> .env` to get the database URL (this might need to be updated later)
3) Run `heroku local`
