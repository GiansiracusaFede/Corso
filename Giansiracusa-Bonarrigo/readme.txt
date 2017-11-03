                                    Gestione Prenotazione Esami ReadMe File

	CONTENUTI

I.	Descrizione Generale
II.	Setup
III.	Funzionalit� e Guida all'utilizzo
IV.	Credits


===============================
==  I. Descrizione Generale  ==
===============================

L'applicazione permette di effettuare facilmente la prenotazioni di esami unversitari.
L'utente che utilizza il software pu� gestire:
-La prenotazione di uno o pi� corsi appartenenti a una determinata facolt�.
-La lista degli studenti, inserendo o eliminando uno Studente. 
-La lista dei corsi, inserendo o eliminando un Corso.

=================
==  II. Setup  ==
=================

L'applicazione Gestione Prenotazioni Esami � una Web Application, quindi la sua interfaccia 
utente viene visualizzata attraverso browser.

Per poter eseguire correttamente l'applicazione occorre:

�Xampp
�Visual Studio 2017
�.NET Core 2.0
�node.js

per quanto riguarda xampp sar� necessario installare:

�Apache: web server
�Mysql: database relazionale
�phpMyAdmin: gestore di database
�Libreria PHP:linguaggio di programmazione (necessario per avviare phpMyAdmin)

All'interno della cartella dell'applicazione ci sono due applicazioni e il database:

- Service API: che contiene il Rest Service e il DAL;
- Super Cool App: che contiene il Presentation Layer;
- prenotazioni.xml 

per far partire entrambe le applicazione � necessario eseguire con visual studio i file .sln 
posizionati all'interno delle cartelle delle applicazioni.

==============================================
==  III. Funzionalit� e Guida all'utilizzo  ==
==============================================
Per utilizzare al meglio l'applicazione i passi da eseguire sono i seguent:

1)Avviare l'applicazione Service Api, verr� aperto il browser e sar� possibile attraverso setup creare il database.

2) Attraverso phpMyadmin bisogna importare il database in formato XML che si trova all'interno della cartella
con il nome prenotazione.xml 

3)Avviare SuperCoolApp

Appena avviata l'applicazione, apparir� un men� che permette di selezionare la voce Students e Materie.
Attraverso la voce Students verr� visualizzata la lista di studenti presenti all'interno 
del database,e sar� possibile inserirne di nuovi, oppure, attraverso l'Id eliminarne uno esistente.

Selezionando uno studente apparir� la lista delle Materie Prenotabili e quella delle Materie Prenotate.
Cliccando su una materia tra quelle prenotabili sar� possibile prenotarsi per quella materia, questa operazione comporta 
l'aggiornamento delle liste Materie Prenotabili e Materie Prenotate.

Uno studente potr� prenotarsi solo ai corsi presenti per il suo corso di laurea, e dove ancora non risulta nessuna prenotazione.

Attraverso la voce Materie sar� possibile visualizzare la lista delle materie caricate sul database, 
aggiungerne di nuove o eliminarle atraverso L'id.


===================
==  IV. Credits  ==
===================

Realizzato da: 

Federico Giansiracusa developer Angular
Simone Bonarrigo developer rest service