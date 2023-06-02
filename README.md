# Hedgehog Registry Development Docs

## Run project in development

1. Install [nvm](https://github.com/nvm-sh/nvm) node version manager
2. Run `nvm use` to use the version of node needed to run the project
3. Run `npm install` to install the projects dependencies
4. Install [docker](https://www.docker.com/)
5. Run `docker compose -f docker-compose.dev.yml up --build`
6. Open web browser to [http://localhost:3100](http://localhost:3100)

## Build components for production and deploy

1. Run `npm run build`
2. Commit changed to git
3. Push files using `git push origin master`
4. Login to the server and go to `/home/admin/web/hedgehog-registry`
5. Pull changes using `git pull origin master`
6. Deploy the new changes using `docker-compose up --build -d`
