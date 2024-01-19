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