# Pruebas de Carga

### linux
`sudo apt-get install k6`

### windows
https://dl.k6.io/msi/k6-latest-amd64.msi

`choco install k6`

Al ejecutar la prueba, K6 recolecta los resultados y los almacena en influxdb para luego poder ser revisados en un tablero como grafana
en http://localhost:3000.

## influxdb, Grafana
Inicializar el servidor de influxdb y grafana la primera vez
```
docker run --ulimit nofile=66000:66000 -d --name docker-statsd-influxdb-grafana -p 3003:3003 -p 3004:8888 -p 8086:8086 -p 8125:8125/udp samuelebistoletti/docker-statsd-influxdb-grafana:latest
```

Inicializar el servidor de influxdb y grafana
```
docker start docker-statsd-influxdb-grafana
```

Cuando se trata de la primera ejecución es importante crear el data source en la url
http://localhost:3003/datasources en ese formulario de creación es importante seleccionar los siguientes campos:

Name: Influx_db_challenge
URL: http://localhost:8086
DATABase:  K6DB

De igual manera es importante crear el dashboard, para eso se puede reutilizar algunos dashboard que ya existen, para ello se debe ir a http://localhost:3003/dashboard/import y pegar el contenido de
src/utils/k6-load-testing-results_rev3.json

# Ejecucion de prueba

Para cada uno de los endpoint es posible ejecutar la prueba con diferentes tipos de configuración:

"smoke_test", para simular una carga constante sobre el endpoint

"load_test":, para simular una carga alta similar a la carga maxima del sistema en PROD

"stress_test": para encontrar los puntos en los cuales el sistema se rompe, para conocer los limites del sistema

La ejecución de cada prueba se puede hacer con los sguientes lineas:
```
k6 run src/services/products/index.js
k6 run --out influxdb=http://localhost:8086/K6DB load-test.js
```

Para revisar los resultados:

http://localhost:3003/d/ReuNR5Aik/k6-load-testing-results?orgId=1
