Um ein neues Angular-Projekt anzulegen, müssen Sie zunächst sicherstellen, dass Node.js und npm auf Ihrem System installiert sind. Wenn Sie diese noch nicht installiert haben, müssen Sie sie zuerst installieren. Dazu laden Sie die neueste Version von Node.js von der offiziellen Website (https://nodejs.org/en/) herunter und folgen den Installationsanweisungen. npm wird normalerweise zusammen mit Node.js installiert.

Sobald Sie Node.js und npm auf Ihrem System installiert haben, können Sie das Angular CLI-Tool (Command Line Interface) verwenden, um ein neues Projekt anzulegen. Führen Sie dazu die folgenden Schritte aus:

    1. Öffnen Sie die Befehlszeile (z.B. Terminal auf Mac oder Linux, Command Prompt auf Windows).
    2. Installieren Sie das Angular CLI-Tool, indem Sie den folgenden Befehl ausführen: 
        
        npm install -g @angular/cli
    
    Dieser Befehl installiert das Angular CLI-Tool global auf Ihrem System, damit Sie es von überall aus verwenden können.

    3. (Muss nur einer machen:) Legen Sie ein neues Angular-Projekt an, indem Sie den folgenden Befehl ausführen:

        ng new studdy-buddy

    Dieser Befehl legt ein neues Angular-Projekt mit der grundlegenden Struktur und den erforderlichen Dateien an.
    Anschließend in Projekt navigieren:

        cd project-name
    
    Starte den lokalen ENtwicklungsserver:

        ng serve

    Anwendung sollte sich direkt im Browser öffnen

    Zum erstellen von Komponenten in src/app den Befehl

        ng generate component component-name

    Danach kann in app.component.html de in component-name.module.ts unter selector angegebene Namen in app.component.html eingefügt werden

        <component-name></component-name>
