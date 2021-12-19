docker container rm gestion-de-proyectos-front
docker stop gestion-de-proyectos-front
docker build -t gestion-de-proyectos-front .
docker run -p 8080:8080 --name gestion-de-proyectos-front gestion-de-proyectos-front