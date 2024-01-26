# MySQL Database Connection with JavaScript

## Prerequisites

- Node.js installed on your system
- MySQL database installed and running

## Installation

1. Install the `mysql` package by running the following command in your terminal:
npm install mysql

2. Create a new JavaScript file (e.g., `index.js`) and import the `mysql` package: const mysql = require('mysql');

3. Create a new connection to the MySQL database by using the `createConnection` method and passing in the connection details:
const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: 'pass@123', database: 'database_name' });

Replace the `host`, `user`, `password`, and `database` fields with your own MySQL database details.

4. Connect to the MySQL database by using the `connect` method:
connection.connect((error) => { if (error) { console.error('Error connecting to MySQL database:', error); } else { console.log('Connected to MySQL database!'); } });

5. Close the MySQL connection by using the `end` method: connection.end();


6. Run the JavaScript file by using the following command in your terminal: node index.js



Replace `index.js` with the name of your JavaScript file.

This will connect to the MySQL database and log a message to the console if the connection is successful. You can then use the `connection` object to execute queries and perform other database operations.

## License

This project is licensed under the MIT License.



Aufgabenstellung:

Es soll eine Anwendung erstellt werden, die es Mitarbeitern ermöglicht, sich im HomeOffice anzumelden und die automatisch die Zeiten an das Personalbüro übermittelt.
Dazu soll der Mitarbeiter sich zuerst einloggen, dann die Möglichkeit haben seine HomeOffice Zeit zu starten, sie wieder zu stoppen und sich für verschiedene Tag eine Übersicht ausgeben zu lassen. Beim Stoppen der HomeOffice-Tätigkeit soll automatisch eine Mail an das Personalbüro verschickt werden.

Voraussetzungen:

Es soll eine Anwendung erstellt werden, die sich aus drei Teilen zusammensetzt:
1. Als Grundlage der Datenhaltung dient eine Datenbank (SQLServer|MongoDB).
2. Ein Webservice (ASP.NET WebAPI|NodeJS] dient zum Bereitstellen und Ändern der Daten in
der Datenbank.
3. Das Frontend zur Anzeige bildet eine einfache [HTML-Anwendung|WPF-
Anwendung|Angular-Anwendung|App].

Anforderungen:
1. Es ist ein Datenmodell der genutzten Datentypen zu erstellen. Auf diesem sollte die Datenbank beruhen.
2. Der Webservice muss einen Login zur Verfügung stellen. Dieser Webservice kann entweder ein REST-Service oder ein GraphQL-Service sein.
3. Die Konfiguration der Personalbüro-Mail-Adresse soll im Webservice hinterlegt sein. Allerdings soll sie nicht im Code liegen, sondern eine Konfigurationsdatei nutzen!
4. User werden als gegeben in der Datenbank vorausgesetzt. Das bedeutet sie können per Import oder Skript in die DB eingespielt werden. Es ist keine eigene Nutzerverwaltung zu erstellen!
5. Der Mailversand soll über ein einzubindendes Paket aus einem der Technologie zugrunde liegenden Paketmanager realisiert werden.
6. Design spielt keine Rolle.