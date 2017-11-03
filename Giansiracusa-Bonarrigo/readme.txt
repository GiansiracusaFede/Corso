                                    Gestione Prenotazione Esami ReadMe File

	CONTENUTI

I.	Descrizione Generale
II.	Setup
III.	Funzionalità e Guida all'utilizzo
IV.	Credits


===============================
==  I. Descrizione Generale  ==
===============================

L'applicazione permette di effettuare facilmente la prenotazioni di esami unversitari.
L'utente che utilizza il software può gestire:
-La prenotazione di uno o più corsi appartenenti a una determinata facoltà.
-La lista degli studenti, inserendo o eliminando uno Studente. 
-La lista dei corsi, inserendo o eliminando un Corso.

=================
==  II. Setup  ==
=================

L'applicazione Gestione Prenotazioni Esami è una Web Application, quindi la sua interfaccia 
utente viene visualizzata attraverso browser.

Per poter eseguire correttamente l'applicazione occorre:

•Xampp
•Visual Studio 2017
•.NET Core 2.0
•node.js

per quanto riguarda xampp sarà necessario installare:

•Apache: web server
•Mysql: database relazionale
•phpMyAdmin: gestore di database
•Libreria PHP:linguaggio di programmazione (necessario per avviare phpMyAdmin)

All'interno della cartella dell'applicazione ci sono due applicazioni e il database:

- Service API: che contiene il Rest Service e il DAL;
- Super Cool App: che contiene il Presentation Layer;
- prenotazioni.xml 

per far partire entrambe le applicazione è necessario eseguire con visual studio i file .sln 
posizionati all'interno delle cartelle delle applicazioni.

==============================================
==  III. Funzionalità e Guida all'utilizzo  ==
==============================================
Per utilizzare al meglio l'applicazione i passi da eseguire sono i seguent:

1)Avviare l'applicazione Service Api, verrà aperto il browser e sarà possibile attraverso setup creare il database.

2) Attraverso phpMyadmin bisogna importare il database in formato XML che si trova all'interno della cartella
con il nome prenotazione.xml 

3)Avviare SuperCoolApp

Appena avviata l'applicazione, apparirà un menù che permette di selezionare la voce Students e Materie.
Attraverso la voce Students verrà visualizzata la lista di studenti presenti all'interno 
del database,e sarà possibile inserirne di nuovi, oppure, attraverso l'Id eliminarne uno esistente.

Selezionando uno studente apparirà la lista delle Materie Prenotabili e quella delle Materie Prenotate.
Cliccando su una materia tra quelle prenotabili sarà possibile prenotarsi per quella materia, questa operazione comporta 
l'aggiornamento delle liste Materie Prenotabili e Materie Prenotate.

Uno studente potrà prenotarsi solo ai corsi presenti per il suo corso di laurea, e dove ancora non risulta nessuna prenotazione.

Attraverso la voce Materie sarà possibile visualizzare la lista delle materie caricate sul database, 
aggiungerne di nuove o eliminarle atraverso L'id.


===================
==  IV. Credits  ==
===================

Realizzato da: 

Federico Giansiracusa developer Angular
Simone Bonarrigo developer rest service