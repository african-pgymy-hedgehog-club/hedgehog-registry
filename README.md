# Hedgehog Registry Development Docs

## Run project in development

1. Run `npm install` to install the projects dependencies
2. Install [docker](https://www.docker.com/)
3. Run `docker compose -f docker-compose.dev.yml up --build`
4. Open web browser to [http://localhost:3100](http://localhost:3100)

## Build components for production and deploy

1. Run `npm run build`
2. Commit changed to git
3. Push files using `git push origin master
4. Go to `/home/admin/web/hedgehog-registry` and pull changes using `git pull origin master`
5. Deploy the new changes using `docker-compose up --build -d`
