

#used an old version of mysql image as the latest image supports sha2 auth, while 
#the mysql npm package doesn't support this new default authentication method of the latest MySQL, yet.
# https://medium.com/codespace69/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server-consider-8afadc2385e2

FROM mysql:5.7

#ENV MYSQL_ROOT_PASSWORD Passw0rd
#ENV MYSQL_DATABASE todos
#ENV MYSQL_USER admin
#ENV MYSQL_PASSWORD Passw0rd
#ENV DATABASE_HOST db

EXPOSE 3306

# we copy all files in the scripts folder and not the folder itself
COPY ./scripts /docker-entrypoint-initdb.d/