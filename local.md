To run locally.

1. Install heroku CLI
2. Run `heroku login`
3. Build project
4. Run `heroku config:get DATABASE_URL -a kanbang -s >> .env` to get the database URL (this might need to be updated later)
5. Run `heroku local`
