const fs = require('fs');
const prepText =require("./aeneas_subtitles_lines_prep_script.js");

var punctuationTextFile = './sample_data/Andrea_Ginzburg.webm_punctuation.txt';
var punctuationTextContent = fs.readFileSync(punctuationTextFile).toString();

var numberOfCharPerLine = 35;

test('Aeneas subtitles lines prep script - test', () => {
	
	prepText({
		punctuationTextContent:punctuationTextContent,
		numberOfCharPerLine: numberOfCharPerLine
		}, 
		function(text){
			
			expect(text).toEqual(expectedOutput);
	});

});


var expectedOutput = `Buonasera, a questo incontro con
  il professore avrai leasing, che

  ringraziano di essere, non è di
  aver, accettato dallo stupido per

  questa riflessione e stiamo
  cercando di costruire scritti sui

  temi che che riguardano la nostra
  situazione socio economica

  politica nella quale ci troviamo
  tutti in questi, giorni nostri,

  Informa su tutte su facebook,
  spessore ordinaria prospettive

  economiche, stato uno dei
  fondatori della facoltà di

  economia e commercio di modena, si
  è rassegnato politica economica

  perché negli.
  Anni 70 si sia in altre facoltà

  sulla tra proprietà dei sensi
  della comunicazione università di

  modena e nei suoi studi.
  Si occupa forlì forme di

  continuità e cambiamento l'utile
  con una particolare attenzione, a

  suggere internazionale numerosi
  sono.

  I sostituti cani nazionale,
  distretti industriali e sulla

  storia del riuscire con te su di
  lui c'è stato.

  I nostri bicchieri l'economista
  che è mercato, dicembre, dell'anno

  scorso non fa.
  Che ha dato un contributo

  importante alla fondamentale alla
  teoria dello sviluppo all'economia

  e stato un pensatore originale nel
  quadro della rete ecologica stato

  capace di spezzare.
  I confini classici tra diverse

  discipline per arrivare allo
  schema progettuale con lettere

  economia sociologia cesa politica
  tipologia per cercare nel cuore la

  pubblicità cercate nelle, more di
  trovare una spiegazione alle 13

  per una dimensione individuale
  economica e sociale ha promesso di

  wood, chiediamo di parlarci di per
  Molti cioè se stesso che è la

  società di milano ce lo insegnano
  oggi come vive; nel passato di

  moda in realtà nel settore, o di
  simone altro questo chiediamo in

  questo sforzo di riuscire, a
  portarselo nell'attività di oggi,

  nel vivo e nella lettura della
  crisi economica che Stiamo vivendo

  grazie, quanto vorrei, partire,
  dal, titolo, che mi, è, stato

  affidato l'attualità di un
  dissidente e, come a dissidente

  rispetto a che cosa poi l'altro
  concetto è l'idea di sviluppo ecco

  in che senso, io, schumann, ha
  dato.

  Un contributo all'idea di sviluppo
  e di questo ne due cose di cui mi

  proponi di parlare potrei dire
  anche questo che mi chiedo in che

  modo l'idea di sviluppo e dirci ma
  può essere associato all'idea di

  polis, cioè una struttura di
  attiva, partecipazione degli

  abitanti liberi alla Vita politica
  ecco i suoi iscritti tutti.

  I suoi scritti direi si propongono
  di liberarci da gabbie mentali che

  costruisce con ostacoli alla
  compressione della realtà quindi

  anche ostacolo nell'adozione su
  decorazioni che sono necessarie

  per cambiare le situazioni di
  disagio inaccettabile per

  costituire per costruire contrasti
  non fondati, sulla retorica

  sull'emozione ma per quanto
  possibile Sulla alimentazione

  ragionevole e avviare quindi
  dialoghi costruttivi lui propone

  di espediente per sfuggire, a
  questi costrutti glove altri mi

  chiami cioè ostacoli assoluti
  dilemmi immaginari sequenze, che

  appaiono, obbligate e necessarie,
  che invece posso, sono costruite

  la reversibili e core direi è
  stato di certo, qualcosa ma dirà;

  Qualcuno alcune cose rapidissima
  sulla vita di vita per capire

  meglio, il tipo di personaggio,
  che abbiamo di fronte, ecco era;

  nato, a berlino da una famiglia,
  ebrea era, stato attivo alla

  gioventù fino, a 18 anni nel
  movimento giovani sui democratici

  anzi due la sorella, cota sorella,
  russo Che ha avuto una parte,

  importante anche, nella sua
  biografia, che racconta come nel

  gennaio dal 1833 nello stesso
  giorno.

  In cui i nazisti hanno preso il
  potere c'è stato l'incendio del

  rais, il ragazzo hirschmann
  diciottenne e la sorella, un po

  più grande erano di fronte, al
  palazzo dei comunisti dopo essere

  stati di fronte, a quello dei
  socialisti in va perché non c'era,

  stato nessun segno di Rivolta sono
  andate avanti ancora sono.

  I comunisti che sperando che ne
  venisse fuori una una reazione

  qualcosa che qualche modo di
  testimoniasse, la la volontà di

  respingere, l'assalto nazista di
  fronte, al fatto, che invece

  prevalso allora diciamo l'idea di
  non accettare provocazioni non

  reagire, perché questo, avrebbe,
  dato, altre, nazioni eccetera, il

  cane Che era: stato anche
  ricercata, dalla polizia, a

  scherzava fugge, a parigi, ed è,
  quindi una vita, tutta fuori,

  dalla, germania e solo, negli,
  anni ottanta credo ritorno in

  germania, non vuole, nemmeno
  parlare in famiglia, il tedesco

  per mostrare la sua, distanza
  rispetto, a questa esperienza

  drammatica nella Vissuto allora
  diciamo ha studiato a parigi

  economia poi anche, a londra è
  successo è stato anche volontaria

  la guerra di spagna, dove è,
  stato, ferito e è stato attivo

  nella resistenza sia in italia,
  attraverso, il suo cognato

  genitore un filosofo che che ha
  avuto una influenza, molto

  Importante su riesch con il ne
  parlerò se c'è il tempo e questo

  full che la circostanza per cui 10
  con si lauro casualmente a trieste

  perché appunto colorni insegnava
  in una scuola professionale, a

  trieste quindi insieme alla che ha
  sposato la sorella, russia e

  appunto, si lavorato Quindi in
  italia e poi dopo dopo, l'italia è

  andato in francia, aiutato
  numerose persone, a fuggire negli

  stati uniti tra, cui erano
  l'organizzazione che aiutato anche

  hannah arendt, a fuggire gli stati
  uniti attraverso.

  I pmi e poi il portogallo e poi
  nel 41 anche lui dopo aver fatto

  che fate, selice militare in
  francia contro il i fascisti dc è

  emigrato negli stati uniti e nel,
  45 ha pubblicato un libro

  importante che inizia con cui ha
  iniziato poi una carriera di

  Questo libro poi cadono più
  avanti, si chiama competenza

  nazionale, la scultura del
  commercio, estero ecco dopodichè

  la sua, carriera continua, negli,
  stati, uniti sia come funzionario

  prima del americano, che aveva
  delegato, il piano marshall, nei

  nei, problemi, europei, anche,
  italiani e successivamente però si

  è interessato dei Problemi de
  rossi lui poi li ha pubblicato

  appunto qui ci sono questi.
  I tre libri che noi col senno di

  poi ha chiamato una trilogia,
  unificata ora la cosa, che volevo

  sottolineare questi libri sono
  stati pensati diciamo in maniera

  indipendente l'uno, dall'altro,
  però, ripensandoci, consegnati

  poli eletto ma in fondo è
  attraverso queste tre di b, ho

  cercato di.
  Dare un resoconto a tutto tondo di

  una epopea, che era quella della
  industrializzazione dei paesi in

  via di sviluppo di quegli?
  Anni e come la cosa, importante è,

  che uno di questi, libri e siamo,
  il frutto di un'esperienza e

  questo è per così dire teorizzato
  dai nel senso del primo libri più

  importante al 58 e saprai avvenuto
  dopo quattro, anni di lavoro, sul

  campo e anche, il libro Successivo
  è stato frutto di esperienze,

  osservazioni sul terreno in
  america, latina e, il terzo

  riguarda l'analisi di parole, di
  sviluppo, questo sviluppo erano in

  vari paesi.
  I vari continenti america, latina

  asia, europa meridionale tra, cui
  anche, il mezzogiorno italiano

  ecco che cosa vuol, dire questo
  mobile che è un economista che in

  qualche, modo ha pensato che tutte
  le elaborazioni teoriche hanno

  bisogno di partire da
  un'esperienza concreta e infatti,

  nella propria, prima pagina Nella
  prefazione di questo, libro

  strategia dello sviluppo economico
  qui, cita questa frase del

  filosofo wide web che è secondo me
  importante per capire anche la

  distanza di schwann, dagli altri
  economisti e quindi, il suo primo

  dissenso perché qui, dice che in
  realtà l'unica giustificazione di

  ogni, pensiero Quindi riguarda
  l'economia ma lui se ne utilizzano

  futurista rigoni, a e la
  delucidazione dell'esperienza

  immediata e quindi è il punto di
  partenza è l'osservazione

  analitica delle componenti di
  quell'esperienza.

  In effetti i suoi libri sono
  costruiti, a partire sempre da

  un'osservazione concreta e in
  tentativo di sviluppare, a partire

  dall'osservazione delle
  considerazioni, che possono forse

  essere generalizzate ma forse la
  generalizzazione di qualcosa, che

  si possa avere a priori ma dipende
  dalla realtà quindi c'è una per

  così; Dire un'opzione di umiltà,
  nei confronti della realtà realtà

  e la realtà, che ci dice come lo
  aveva parlato, ria è una

  posizione, che richiama quella che
  in filosofia si chiama posizione

  di ambizione è associata al tar,
  battismo di pers per cio è il

  fatto che un ormone Che arriva
  alla realtà con una grossissima

  armatura teorica per cui proietta
  sulla realtà questa questa matura

  per vedere se convalida le proprie
  opinioni a priori e il contrario

  uno osserva con accuratezza e da
  li cerca naturalmente arriva con

  un bagaglio ma cerca di
  consapevolmente di non far Pesare

  troppo il proprio bagaglio del
  momento in cui fa; teoria e quindi

  questo punto è perché è importante
  perché invece la teoria, economica

  è in grandissima, parte in
  particolare, la teoria, cosiddetta

  ortodossa, marginalista una
  classica così, il si voglia e

  invece basata sulla deduzione cioè
  da alcuni Principi astratti che si

  considerano essere cruciali si
  deducono via via delle

  proposizioni e poi si vanno a
  verificare della realtà quindi è

  un apparato teorico in cui
  l'aspetto induttivo è molto

  scarso, ed è, invece considerato,
  quasi muta in piri, a quella di

  introdurre, delle giustificazioni
  basate sull'esistenza Di ipotesi

  della realtà per esempio, il
  monetarista più importante quello,

  che ha sviluppato in maniera più
  estrema per posizione di cui

  parlavo.
  Si chiama milton friedman sostiene

  che le ipotesi di partenza, non è
  importante che siano realistiche

  possono essere anche del tutto,
  astratta irrealistiche quello, che

  è importante è invece, che le
  proposizioni, che essi derivano da

  quelle ipotesi anche astratte
  siano diano luogo, a delle

  predizioni verificabili, ora
  siccome Ne ne conosciamo come

  forse alcuni di voi sanno la
  verificabilità, è una cosa

  estremamente controversa non
  c'erano, strumenti offrì come

  possono, esserci delle scienze
  dure in cui si producono gli

  esperimenti connessioni
  controllate però questo vuol dire

  che questa posizione che il
  teorico che schiava

  sperimentalista, che appunto
  Affida alla verifica la validità

  delle ipotesi di partenza anche le
  più pazze e siamo in realtà è un

  via libera per l'arbitrio più
  assoluto ecco però io volevo

  parlare del dissenso ecco.
  I dissensi di cui io voglio

  parlare del caso di air, france
  sono in realtà 31 e, il dissenso

  rispetto alla posizione ortodossa
  e qui c'è un punto che ho appena

  visto ma che vorrei sviluppare con
  la contrapposizione fra, quello

  che si che dicono mischiano
  crescita e quello Che invece si

  chiama sviluppo che sono due cose
  diverse e, come lisa secondo

  dissenso di cui voglio parlare è
  una discussione critica di firma,

  né con all'interno
  dell'eterodossia e questa

  discussione si è svolta
  all'interno di una

  contrapposizione fra, due concetti
  sviluppo equilibrato e sviluppo

  squilibrato quindi questa È una
  dire un dissenso interno, al

  dissenso, ma c'è una terza
  posizione che secondo me quella

  più, interessante, è, che forse,
  ci consente di arrivare, al cuore

  della importanza di questo, autore
  e, il dissenso rispetto, a se

  stesso nel senso, che
  continuamente la sua, vita ha

  rimesso.
  In gioco le sue, proprie conquiste

  teoriche war, pierich e su proprie
  osservazioni e quello, che lui ha

  chiamato il procedimento di auto
  sovversione ora questo è qualcosa,

  che effettivamente diciamo, loro
  rende, abbastanza spero tu,

  diciamo, ancora, più, intero,
  dosso, vi, aiuterà rossi, perché,

  è, abbastanza, inconsueto, trovare
  Una persona che in qualche modo è

  in grado di con coraggio rivedere
  la propria, posizione e anche,

  addirittura rovesciarla e questo
  in questo credo che, va, va vista

  la grande influenza, che ha
  esercitato su di lui c è c è una

  cosa, che vorrei, dire rapidamente
  e Che nella gioventù di 92 era,

  ancora ragazzo ha fatto letture
  importante, che hanno,

  condizionato credo in maniera
  significativa, il suo modo di

  ragionare di the year marx, simmel
  e leighlin, che questi e questi

  autori sarebbe possibile
  dimostrare, che hanno esercitato,

  un'influenza, anche, diciamolo,
  manera, che critica, diciamo Ma

  però sicuramente importante è che
  dirò qualcosa su questo contrasto,

  far crescita e sviluppo cercherò
  di che finire un dissenso rispetto

  all'ortodossia ecco mi rivolgo
  rapidissimamente agli economisti,

  che sono forse una minoranza, ma
  però potrebbero per capire quando

  io parlo di crescita, far
  riferimento a un articolo Di un

  economista schiava solo, che ha
  scritto nel 57 un articolo che si

  chiama crescita aggregata il
  progresso tecnico con il senno di

  poi si può dire che quella nozione
  di crescita è diventata prevalente

  e purtroppo fan uno, va anche dei
  paesi di sviluppo trova che

  ragionano.
  Con questo schema è un disastro

  secondo me ma per così dire
  stravinto la posizione, che invece

  proponeva hirschmann è stata
  proposta, un anno dopo nel libro

  strategia dello sviluppo economico
  allora lasciatemi, dire qualche

  cosa per chiarire questo questo
  dissenso, a metà degli, anni

  cinquanta alcuni, economisti hanno
  Cominciato, a dire ma, noi non

  possiamo, andare nei paesi in via
  di sviluppo con la stessa teoria

  che voi ci proponete per i paesi
  sviluppati perché, i problemi

  sommersi e allora hanno
  cominciato, a dire formiamo una

  sotto disciplina che si chiama
  economia dello sviluppo quindi si

  contrapponeva Almeno nei termini
  l'economia dello sviluppo che la

  proposta per i paesi in sviluppo e
  l'economia invece economics che si

  basava sulla crescita qual, è la
  differenza ecco la crescita,

  intanto diciamo, un punto, che
  poteva essere, apparentemente

  d'accordo fra in queste, due
  scuole potrebbe essere questo, che

  io.
  Lo sviluppo si occupa di problemi

  strutturali ma cosa non dire
  problemi strutturali ecco si

  sosteneva allora gli ortodossi
  sostenevano che i problemi

  strutturali erano descrivibili
  come i problemi legati al

  passaggio di un'economia,
  dall'agricoltura all'industria e

  poi, eventualmente al terziario,
  quindi era, una di passaggio da un

  settore All'Altro e guardando
  all'indietro la storia economica

  si diceva questa è una specie di
  legge naturale che ci porta

  dall'agricoltura verso.
  I servizi passando attraverso

  l'inizializzazione e gli ortodossi
  dicevano, ma questo passaggio è

  sia ancora presente nei paesi di
  sviluppo, ma noi non ce l'avevano

  più noi, che siamo paesi avanzati
  quindi.

  I paesi avanzati non hanno più un
  problema di sviluppo, ma hanno

  problema di crescita, cosa voleva
  dire crescita voleva dire che in

  qualche modo i paesi sviluppati
  avevano solo, il problema di

  espandersi, indipendentemente
  dalle modifiche dei settori quindi

  in corso, il concetto anche legato
  complessivo di prodotto Interno

  lordo pil diventava un modo per
  descrivere l'andamento dei paesi

  in via di sviluppo mentre gli
  altri deve paesi e che ha

  sviluppati perché appunto non
  c'era, più un problema di

  composizione questi il problema
  era di cercare di espandere,

  queste, economie, secondo, questo,
  percorso, che era in Qualche modo

  prefissato dalla teoria, che
  vedeva nella questo percorso come

  tracciato da due forze 1 l'aumento
  della produttività del lavoro,

  cioè lui la quantità di prodotto
  per ogni, lavoratore e questa era,

  una prima, forza trainante, la
  seconda, forza trainante era,

  l'offerta di lavoro, cioè la
  quantità di Lavoro che è

  disponibile, a lavorare e questo
  concezione dei paesi sviluppati è

  tuttora loci dominante perciò se
  quante volte vuoi aver, sentito,

  martellare, delle, orecchie, che
  bisogna, aumentare la

  produttività, ma cosa vuol, dire
  una terra bruciata vuol, dire

  aumentare di più, la stessa, cosa
  cioè, lo stesso Prodotto deve

  essere aumentato per ogni unità di
  ora lavorata per ogni unità di ha

  detto, ma è, lo stesso prodotto,
  questa, è una, forza trainante,

  l'altra, forza frenante e lo
  scongelamento dell'offerta di

  lavoro, ora siccome, si sostiene
  che queste economie, dice la

  teoria, sono sempre, piene, piego,
  Perché sono diciamo si basano su

  una flessibilità dei salari tali
  per cui sia sempre per i piedi, a

  scongelare l'offerta di lavoro e
  come si fa si fa per esempio,

  allungando l'età, prima della
  pensione e quindi si scongela una

  parte di lavoratrici ora gli.
  I lavoratori oppure.

  Si fa lavorare di più e come si fa
  ad esempio abbassando.

  I salari si costringono le persone
  a produrre di più da un lato ea

  mettere più ore, dall altro oppure
  in teoria si potrebbero promuovere

  nascita e quindi quozienti
  familiari che spenti spingono

  aumentare l'immagine ecco ma
  comunque le forze sono questa

  specie di produttività che in
  parte dr2 E legata allo sforzo si

  sostiene ma anche legata al
  progresso, il decreto che non si

  sa mai da dove viene si chiama
  manna dal cielo perché appunto

  esogeno non è, spiegato dalla
  mente all'interno di questa,

  direzione c'è, il pieno impiego e
  si spremono forze lavoro diciamo

  facendo Lavorare di più, o
  riducendo il l'incentive la

  pensione cercando di aumentare,
  quanto più possibile la durata

  lavorativa ecco questa è la la
  nozione di crescita e in un certo

  senso questa teoria e assomiglia,
  un po, a quelle teorie biologiche

  schiano prefor miste, che
  consistono, nel pensare, che Tutto

  sommato i paesi possono essere
  assimilati, a un neonato che copia

  in scala dell'adulto cioè il paese
  che non è cresciuto e. I denti con

  l'adulto soltanto è che un po più
  piccolo e quindi facciamo produce

  un pò meno ma è la stessa, cosa,
  ma c'era un'altra teoria, che era;

  stata proposta molto, prima ad
  aristotele, che invece è la

  teoria, epigenetica, che invece,
  sostiene, che l'espansione e la

  crescita; Biologica è basata sulla
  differenziazione sulla

  trasformazione ecco questa idea
  della trasformazione è totalmente

  estranea agli economisti è come se
  pensassero che la crescita è come

  avere un palloncino che si gonfia
  per un poi sia un paese povero si

  gonfia faloppa di più, è sia un
  paese come Sempre lo stesso

  palloncino perché produce sempre
  la stessa, cosa solamente, con una

  produttività, un po maggiore e più
  lavoratori, o lavoratrici insetti

  del sistema, quindi roubaix è, un
  percorso prefissato che conduce un

  paese dall'arretratezza verso la
  modernità, la ricchezza, sono

  stati, prefissati, ora, questo,
  discorso, degli, stai, Prefissati

  è analogo a quello che stavolta si
  dice che si chiama tellina cioè

  dell'anno alternatives, ci sono,
  non ci, sono, alternative che è

  una specie di percorso naturale di
  cui solo se noi beviamo dalle

  prescrizioni del palloncino, noi
  beviamo ma se noi seguiamo invece

  quello che è. Il percorso
  prefissato seguiamo il percorso

  dei paesi più ricchi allora è
  sicuro che il paese povero

  arriverà al paese, ricco e com'è
  che si dice che arriverà se per

  così dire produce, o forma o
  costruisce.

  I prerequisiti dello sviluppo che
  sono tratti dall'esperienza

  apparentemente dei paesi
  sviluppati e cosa sono per

  esempio, il fatto che c'è una
  buona scuola, il fatto che ci sono

  persone, che decidono sulla base
  della razionalità e non invece,

  delle nazionalità, il fatto che ci
  sia del molto, risparmio E quindi

  si possa accumulare questo
  risparmio qui sono.

  I cosiddetti prerequisito e lo
  sviluppo ecco adesso cambiamo

  scena e passiamo invece dire per
  il proprio gruppo delusi della

  crescita vuol dire passiamo invece
  allo sviluppo ecco ora il fatto di

  poter parlare di un paese in via
  di sviluppo negli.

  Anni 50 e non dei paesi sviluppati
  ha per così dire da qui la

  maggiore libertà di pensiero, a
  questi economisti e per dossi

  perché son sentiti meno vincolati
  da queste gabbie concettuali, cioè

  ha descritto e ha detto, ma questi
  paesi in realtà funzionano sono

  basi di principio, Molto piazze e
  c'è un'idea di edifici, ma è che

  nei paesi in via di sviluppo c'è
  un mucchio di risorse che non

  sono, utilizzate e sono appunto lo
  sviluppo dice non dipende, tanto

  da trovare combinazione ottimale
  di risorse e fattori di

  produzione, dati, quanto darvi,
  chiamare e Dalla rollare per lo

  sviluppo risorse e capacità,
  nascoste disperse o male

  utilizzate ecco questo è, un punto
  di vista completamente, diverso

  perché la seriosa diceva che le di
  forse, erano pienamente utilizzate

  bisogna continuamente aumentarle,
  mettere, nella fornace della

  crescita, sempre, nuovi,
  lavoratori, fatto sommato, il

  mercato la Concorrenza utilizzava
  tutti pienamente qui invece, dice,

  no qui c'è qualcosa che non
  funziona c'è un meccanismo che non

  utilizza, pienamente tutte le
  risorse, che sono, nascoste

  disperse o male utilizzate e ora
  perché forse perché non ci, sono

  quei famosi per i requisiti in cui
  siederanno detto, prima È che una

  parte della somma nell'argomento
  critico di si, espanse e contrario

  in radice all'idea di pre,
  requisito perché se ci fosse fosse

  da prendere sul serio preseguito
  non potremmo, spiegare alcunché

  perché dopo la rivoluzione,
  industriale inglese, si è prodotta

  una situazione che non aveva,
  assolutamente nessun Precedente

  cioè era, avvenuta una storia, il
  tempo si poteva per così dire

  utilizzare, il fatto che
  l'inghilterra aveva introdotto dei

  cambiamenti per quanto riguarda
  l'industria dei mac dei macchinari

  per esempio c'era quindi il paese
  che viene dopo poteva per così,

  dire percorrere non era; obbligato
  a ripercorrere La stessa strada e

  poteva inventare deve essere,
  diverse c'era uno storico,

  economico molto importante, che ha
  avuto un'influenza molto

  importanti su su 10 alessia magher
  shukron che appunto ha argomentato

  che appunto, il tempo è qualcosa
  che deve essere sempre preso in

  contrazione oltre che lo spazio e
  Che gli economisti invece negano

  entrambi e cioè il fatto che ogni
  paese si trova in ogni momento a

  poter utilizzare dei grandi
  vantaggi dovuti al passare del

  tempo e anche magari essere
  svantaggiato ora moltissima, parte

  non sarà tempo di parlarne, ma
  molti da parte delle persone dice

  Non riguarda i vantaggi
  dell'essere ultimo è anche gli

  svantaggi cioè una disamina,
  attenta, ed cruda per così, dire

  di ciò, che vuol, dire essere
  paesi in via di sviluppo, non è

  solo una disgrazia, ma ci possono
  essere anche delle, possibili

  opportunità delle fortune questo
  apre delle possibilità Di uscita

  dalla produzione il suo sviluppo
  anche perché dobbiamo riflettere

  sul fatto, che nella storia
  economica e scelte dal

  sottosviluppo nella storia umana
  sono state numerose, quindi,

  questo, è, tutto, l'importante, è,
  che qui, c'è, un punto che va

  chiarito quindi, perché, ci, sono,
  queste, risorse, inutilizzate,

  disperse E non utilizzate ecco
  l'ostacolo principale dice juan

  non è, l'assenza delle prime
  predefiniti ma l'incapacità di

  prendere, decisioni da parte di
  agenti pubblici e privati nella

  dimensione e nella tempistica
  necessarie per sfruttare nella

  situazione data alle potenzialità
  esistenti, i processi decisionali

  sono costati come dominati non
  dalla Scarsità di fattori ma dalla

  confusione influenzati da segnali
  ambigui e contraddittori e

  soprattutto dall incertezza su
  come risolvere in sequenza i molti

  problemi tecnologici
  amministrativi finanziarie di

  domani da con, a marsico quindi
  l'incertezza è l'elemento cruciale

  è la strozzatura quello che che
  manca veramente è la capacità Di

  pre decisioni ora voi capite, che
  questa incertezza e capacità

  decisioni prese decisioni non è
  una cosa, che riguarda gli alle 5

  dai paesi del gruppo, bano cosa
  pervasiva, nel, capitalismo, ed è,

  particolarmente presente, con
  potete, immaginare, nella,

  situazione, attuale e io credo che
  questo rende in Ragionamenti e

  jean particolarmente attuali ecco
  un altro punto importante che nel

  suo schema di ragionamento
  figurano come variabili endogene

  dispiegabile all'interno del suo,
  discorso sia variabili economiche,

  che politiche ora, questo ha delle
  implicazioni importanti nel senso

  che lo stato non è considerato in
  astratto come tutti.

  I libri di economia come o un
  personaggio onnisciente e

  onnipotente oppure un cretino
  cretino corrotto c'è arrivato da

  questi, due possibili né limone
  libri di testo di economia più di

  destra, lo stato è sempre pessimo
  protegge le rendite intrusivi, no

  le corruzioni, più terribili, che
  parlasse anche Verba si può

  generalizzare questo e dall'altra
  invece si dice che lo stato invece

  sa tutto completamente alieno dai
  compiti interesse ora invece, il

  ragionamento di schwann e invece
  di rendere in un doge né queste

  sia l'economia che la politica
  ecco ora c'è uscita una biografia

  di su Riesca annunciato adelman
  che dice, portò 100 pagine

  recentemente in cui viene fuori
  una cosa interessante che però si

  poteva immaginare e cioè mentre
  scriveva, a innescare quel libro

  del 58 furiosamente sottolineava
  eleggeva hayek e anche alta e

  campione del conservatorismo e
  anzi, mi ha terrorizzato questo,

  fatto Cioè c'è una bellissima
  citazione di hip hop bourque e

  borgo, il conservatore inglese che
  290 scritto un libro e quindi c'è

  la canalizzazione, francese era,
  un disastro, che inghilterra

  poteva andare in rovina se
  qualcuno di quei, principi

  fondesse passato la manica, ebbene
  barche, c'era, il nostro

  antagonista E quello che ci aiuta
  perché ci aguzza il nostro ingegno

  rinsalda.
  I nostri nervi e in qualche modo

  ci fortifica e con questo punto è
  un punto che.

  I team ispa ma sempre per così
  riconsiderato e quindi per così

  dire si può leggere io credo quel
  libro la stratorino rivolo come un

  tentativo di prendere sul serio
  alcuni dei punti di hayek ma

  rifiutare completamente le sue
  prescrizioni fatto vedere qualcosa

  su questo differenza che per
  Sembra cruciale cosa va detto a

  year ecco era, uno di quelli, che
  aveva criticato la possibilità di

  pianificare, centralmente
  un'economia sostenendo, che era,

  impossibile calcolo economico, che
  diciamo in sostanza, il motivo per

  cui non si poteva centralizzare
  completamente dell'economia aveva

  con fanta non era.
  Che fare con fatto che le

  conoscenze sono distribuite
  disperse tra, le persone questo

  buon colpo e buon punto e vero è
  che lo stato non possiede tutte le

  conoscenze, che una
  pianificazione, centralizzata

  dovrebbe questo è, un osservazione
  che però era; associata, a un

  ragionamento che invece molto Più
  molto discutibile cioè lui diceva

  c'è però una possibilità di
  utilizzare, tutte queste,

  conoscenze, disperse nella,
  società, ed è, il mercato perché

  il mercato a questa funzione di
  coordinamento delle cessioni e

  cioè le persone senza accorgersene
  in realtà nel momento in cui

  massimizzano, il profitto in cui
  Si rivolgono al consumo e quindi

  massimizzare l'utilità eccetera in
  qualche, modo smettono in moto, un

  meccanismo di coordinamento dei
  soggetti che hanno tutte, queste,

  conoscenze, disperse e riassumono
  condensano le loro informazioni le

  loro conoscenze nei prezzi quindi.
  I prezzi sono per così dire degli

  indicatori che sono contenitori di
  conoscenze e quindi in qualche,

  modo un'economia che in qualche,
  modo lascia libero, il mercato di

  muoversi liberamente coordina
  senza bisogno di uno, stato tutte

  queste, decisioni e utilizza al
  meglio, le conoscenze disperse

  ecco la tesi Di c'è una differenza
  fra, lordo liberalismo e, il

  marginalismo perché, il lordo
  liberalismo, a cui si rifà hayek

  che è quello, che è anche poi,
  avuto grosso, peso germania senato

  germania, a friburgo e poi ha
  tuttora molto presente e la

  formazione, degli economisti
  tedeschi non è, contro Non è

  esattamente il sfr perché le sue,
  farse dello stato minimo invece,

  il lordo che una variante della
  colonia ortodossa dice lo stato

  deve essere forte per garantire
  gli istituti che presidiano la

  concorrenza è qualcosa che in
  qualche modo lo ripetiamo in

  controluce, quando vediamo, queste
  autorete, Che secondo me sono

  praticamente inesistenti, che però
  di fatto avrebbero lo scopo di

  presidiare, quello, che è
  l'elemento principale, che

  secondo, questi, questa,
  concezione cioè; il bene; supremo

  che è la concorrenza, a mora dice
  chi chuan e buffo che in fondo

  questi economisti danno la
  concorrenza; il Monopolio del

  coordinamento quindi c'è in questo
  gioco di parole, fra, la

  concorrenza e, il fatto che la
  conferenza diventato, il monopolio

  degli strumenti coordinamento ecco
  l'idea dissi, ma è che la

  concorrenza, è uno strumento
  troppo fragile per coordinare le

  decisioni all'inizio troppo
  fragile per i paesi sviluppo Ma

  poi man, mano ha esteso il suo suo
  ragionamento anche, ai paesi,

  sviluppati e rocchi con emily la
  gente collante delle incisioni

  com'è che si può effettivamente
  risolvere il problema diciamo che

  a aic aveva posto dell'assenza di
  uno, stato centralizzato

  onnipotente di un'economia
  sottosviluppata in cui c'è Bisogno

  però di un intervento pubblico per
  smuovere la situazione ecco lui e

  di e sarà allora, a questo punto
  propone questo concetto che sono

  le connessioni come agenti
  collanti dello sviluppo cioè

  invece dei prezzi che non hanno,
  questa funzione non riescono; a

  fare, questo questa operazione di
  Incollamento delle relazioni e dei

  delle conoscenze lo sviluppo è
  definito un problema di

  coordinamento di decisioni
  sequenziali in una situazione di

  profonda incertezza e diffusa
  inadeguatezza nella capacità di

  prendere decisioni ecco non
  possono essere.

  I prezzi e latini come momento nel
  astratta caso la mia capacità

  amministrative di uno, stato
  centralizzato gli argenti collanti

  sono appunto le connessioni, con
  sono queste connessioni sono

  forze, che generano investimenti e
  diversificazione di prodotti, qui

  ci stiamo avvicinando all'idea
  quindi non del palloncino ma di

  un'altra Cosa non un'espansione
  della stessa cosa come dilatazione

  in scala di un embrione ma invece
  un processo di diversificazione

  continua di variazione continua di
  produzione di varietà di prodotti

  ecco vengono distinte quindi
  queste queste forze in due

  inizialmente in due categorie cioè
  si parla al fatto che in Economia

  si trovano a partire facciamo
  faccio un esempio mi riferisco, a

  persona esempio supponiamo di
  prendere una filiera che produce

  mobilio e abbiamo varie strade
  nella meccanica poi, si fanno

  macchine al taglio, poi l'opera
  l'operazione, che fanno, il taglio

  dei tronchi e poi c'è la signoria,
  poi C'È il mobilio questa è una

  schematizzazione di questa, cosa
  ma supponiamo di essere,

  un'economia sottosviluppata in cui
  queste attività se ne presenti

  solamente una per esempio oppure
  nessuno è semplicemente si stanno

  importando dai mobili dall'esterno
  quello che dice, kidman è che se,

  si comincia in tua attuare Per
  esempio con operare una

  un'attività che sostituisce le
  importazioni e per esempio produce

  mobilio poi ci sono delle come
  dire, forze abbastanza,

  automatiche, che spingono gli
  imprenditori, a colmare il vuoto

  esistente facciamo costo
  investendo nelle fasi, che sono, a

  monte e quindi queste frasi che
  successo la Segheria e poi i tagli

  di tronchi e poi la macchina,
  taglia poi la meccanica, sono per

  così, dire degli eventi
  successivi, che inizialmente non

  c'erano che man, mano
  costruiscono, la filiera,

  attraverso investimenti, cosa può
  fare lo stato ecco gli economisti

  nei paesi di sviluppo, dicevano ma
  dobbiamo.

  Prima fare gli investimenti in
  infrastrutture in energia in

  strada eccetera energia, elettrica
  e acciaio oppure dobbiamo partire

  invece da spese e investimenti
  produttivi tipo mobili, o altre

  cose sono arrivati ceva ci sono
  delle sequenze, che sono per così,

  dire più obbligate di anni, 3 più
  cogenti e Allora se io facciamo

  aiuto, a costruire degli delle
  filiere che risalgono la corrente

  per esempio dal mobilio vanno
  indietro fino alla segheria

  eccetera c'è un risparmio di
  quella, che è la canna, carenza

  fondamenta la capacità di
  incisione, delle dei prenditori

  perché saranno, gli, stessi,
  imprenditori e per Così dire

  svolgono, questa attività quindi
  c'è una parte indotta alla parte

  per così dire automatica ora
  questa differenza fra, sequenza e

  automatiche e sequenze per così
  dire promosse, a discrezionale da

  parte lo stato è molto importante
  perché ci aiuterebbe oggi per

  esempio, a capire il governo si
  Sta mettendo delle iniziative di

  tipo come dire, certo automatico,
  oppure, semplicemente, promuove

  delle possibilità io credo che per
  quanto riguarda sfascio capito,

  sul moderno se noi viviamo
  l'intervento, sul cuneo, fiscale,

  sul costo del lavoro, se noi
  vediamo anche gli, interventi, sul

  mercato del lavoro, se ne vediamo
  La stessa importanza attribuita la

  politica, monetaria tutti, questi,
  sono degli interventi di tipo,

  indiretto, ma ha mediato nel
  senso, che io devo aver bisogno

  già di una attività in atto, o di
  una domanda perché questo possa

  sorgere si altrimenti non sto,
  facendo altro che un regalo dei

  Soldi, a persone che, già stanno
  attuando la loro, attività ma non

  sto, promuovendo una nuova, dieta,
  che questo sarebbe, molto diverso

  se venissero attuate, misure tipo
  new deal piquet new deal, come

  aveva proposto, il genere, o anche
  da un pink ma insomma comunque

  creazione di lavoro, diretto
  Perché lo saremmo sicuri che la

  connessione, la prima connessione
  sarebbe efficace e poi sarebbero

  poi delle altre quindi, ritornare,
  alle, connessioni e ne abbiamo,

  delle condizioni, a monte delle
  connessioni, a valle nel senso che

  se io sono per esempio, a metà e
  sto presentano delle macchina

  taglio Posso pensare che queste
  macchina taglio possono servire, a

  promuovere iniziative che
  utilizzano le macchine taglio e

  quindi, a valle il taglio dei
  tronchi segherie in un video

  quindi, a seconda trovato indietro
  avanti, o delle conoscerà, monte,

  ovale, ma ho anche delle
  connessioni orizzontali e cioè,

  dalla meccanica Verso il mobilio
  ma poi ci sono dei sottoprodotti

  trucioli carta oppure, ma che da
  taglio caravaggio con le

  produzione alla fine e mi scuso
  per l'inglese adesso abbiamo tutto

  il complesso abbiamo dei
  connessioni orizzontali e

  verticali e quello che voglio
  sottolineare è che quello, che è

  avvenuto Non è soltanto un
  attività economica indifferenziata

  ma si sono prodotti delle nuove
  produzioni e nuove competenze cioè

  l'attivazione di connessioni da
  luogo alla lista di risolvere

  problemi e dell'attività anche le
  competenze diner attivate cioè

  non, so se voi siete siete qualità
  di quella discussione.

  I 60 digos che piace per quanto
  riguarda chi precede chi se la

  pratica precede il pensiero e
  piace, prima aveva detto ma prima

  si pensa e poi dopo se agisce dopo
  che ricorsi il vento provare a

  dice contrario prima si agisce e
  nell'azione si modifica il

  pensiero Ecco qui siamo
  esattamente in questo mondo nel

  senso che se, si attivano della
  delizia tive anche, il pensiero si

  mobilita anche qui siamo di fronte
  in fondo all'idea

  dell'antagonista, che sollecita
  abbiamo, un problema i propri

  soldi beh questo ci pizza.
  I nostri focalizzare la nostra

  attenzione e su questo dobbiamo
  concentrare la nostra competenza e

  quindi è questo che per così dire
  da nuovo ad un risultato quindi

  l'idea di man e che lo sviluppo è
  sì produzione di prodotti, nuovi

  quindi, varietà, ma anche
  istruzioni accrescimento di

  competenza E questo che cambia
  rispetto alla visione del

  palloncino tutte e, due le cose
  sia il fatto che le competenze in

  qualche, modo possono
  incontrollato svilupparsi proprio

  perché partono dall azione sia, il
  fatto tutto la crescita se

  vogliamo meglio dire lo sviluppo è
  qualcosa, che dà luogo, a Una

  varietà di prodotti ecco qui, a
  trans fitte e stato per così, dire

  maltrattato perché gli economisti
  ortodossi hanno preso di ha,

  trasmesso solo, un discorso nella
  fabbrica, degli spilli della

  divisione del lavoro era; il
  ricchissimo ha parlato anche del

  fatto, che più si specializza del
  lavoro Più scrivente a cretini

  leccese pagina bellissima sul
  fatto che è necessario invece

  cercare di far sì che le persone
  possono in qualche, modo avere

  qualcosa in più della cura di
  petina del lavoro, perché devono

  essere io di conversare e se,
  necessario dice lui andare, a

  combattere per Difendere la
  patria, quindi ci vuole in

  istruzione ha sempre, genova,
  spremitura, delle, energie di

  attraverso, la fabbricazione, a
  lasciarlo di compiti, sempre più

  suddivisi ci porterebbe malissimo
  e, come linea, dentro anche questo

  che la grande moltiplicazione dei
  prodotti tre le cose con stiamo

  parlando tutte le varie Arti in
  conseguenza della divisione del

  lavoro, è all'origine di una,
  società ben governata di una,

  generale prosperità, che sei dei,
  suoi benefici fino alle classi più

  basse del popolo ecco quindi, che
  cosa stiamo di fronte siamo di

  fronte ad una situazione in cui
  invece di avere, un Palo città che

  si gonfia abbiamo invece una
  specie di ventaglio di prodotti,

  che certo hanno la divisione del
  lavoro, ma questo ventaglio di

  prodotti, si può verificare
  occorrono si può verificare perché

  maledetto che quelle connessioni
  che ho detto si verificano possono

  anche non verificarsi mai e allora
  Rimarremo in un deserto di

  prodotti ma se invece queste
  connessioni vengono per così, dire

  stimolate e sorrette allora
  possiamo pensare di ecco, adesso

  vi, farò vedere una cosa, che
  riguarda l'oggi e che sempre

  riguarda, il problema della
  diversificazione e questa è una

  cosa, che io credo che Sia
  importante cioè la

  diversificazione, a due dimensioni
  possibili una e la

  diversificazione fra.
  I prodotti ed è segnata sull'asse

  orizzontale sono, il numero delle
  categorie dei prodotti esportati

  dai singoli paesi allora noi
  vediamo che per esempio gli

  stabili, il paese sono diciamo
  caratterizzati da ogni punto del

  paese allora gli stati uniti per
  esempio hanno un'alta

  diversificazione fra.
  I prodotti nel senso che riportano

  sia automobili che per eli da
  barba che varie cose però

  sull'asse verticale c'è un'altra
  cosa cioè, il numero quello che si

  chiama diversificazione verticale
  cioè per ogni data, categoria per

  esempio automobili quante fifa e
  di prodotti, ci sono c'è la panda,

  La smart da un lato la mercedes
  eccetera e quindi c'è una

  diversificazione per così, dire
  per fascia però quello che si vede

  è che.
  I paesi più ricchi che sono sulla,

  parte destra sono quelli, che
  hanno cumulato, si ha un'elevata

  diversificazione fra.
  I prodotti ma anche entro.

  I prodotti questo cosa vuol dire
  vuol dire che la concorrenza

  avviene per i paesi più ricchi
  avviene soprattutto sulle fasce e

  quindi sulle qualità è tutto, il
  contrario di quello, che ci diceva

  la teoria della crescita perché
  l'ateneo cresce la diceva c'è la

  concorrenza di prezzo, dobbiamo
  Produrre il primo pronto perché se

  abbiamo i prezzi più bassi
  riusciamo, a vincere supplicare

  ci, dice un'altra cosa lo sviluppo
  dei paesi avviene mediante la

  diversificazione; se si riesce a
  farlo se non si riesce a farlo si

  rimane poveri quindi.
  I paesi più poveri sono quelli che

  sono cd poco, a diversificarsi
  quanto più ci si diversifica e il

  sistema diventa più complicato
  anche diventa possibile, a

  moltiplicare le facce dei prodotti
  possiamo anche dire che purtroppo

  è la divaricazione nella
  disuguaglianza dei redditi che

  consente questa divaricazione di
  Fascia c'è quello che compra il

  prodotto che costa poco e
  quell'altra questo anche detto

  però comunque c'è una varietà, sia
  dei prodotti che fa.

  I prodotti ecco.
  I paesi più poveri invece che sono

  alla parte sinistra sono invece
  quelli, che hanno bassa

  diversificazione, farai prodotti e
  all'interno dei prodotti

  praticamente nulla ecco quindi
  questo ci dà un'idea quindi come

  avviene la concorrenza, ed i quali
  sarebbero come dire, le

  circostanze, che potrebbero essere
  attuate nel Della sun che

  dell'associazione attuale perché è
  un concetto di sviluppo, a

  differenza di una di crescita
  punta proprio, l'attenzione sulla

  diversificazione dei prodotti e
  sulla qualità dei prodotti quindi

  sulla concorrenza basata sono
  guarita ecco volevo, prima di

  concludere, dire ancora due non
  riuscirò; a dire una cosa Che mi

  stava, a cuore la pazienza, già
  pur sempre e cioè dirò qualcosa

  sullo sviluppo equilibrato e
  squilibrato ecco contro gli utero

  dossi, che appunto accettando
  l'idea dello sviluppo contro la

  crescita; che si chiamavano lux e,
  il rosario dow che proponevano di

  fare un piano di progettare;
  Simultaneamente un intervento su

  una pluralità di settori e quindi
  cercare in questa maniera di

  rompere la vetrata, con quello che
  si chiamava bicus una grande

  spinta e sparisce ma noi non siamo
  capaci di fare tutte le cose

  insieme perché le nostre
  competenze è questo il punto di

  Partenza sono scarsa e quindi come
  possiamo pensare di avere la

  possibilità di travo, piano
  completo, quando siamo in una

  situazione così sia stata meglio
  fare un passo alla volta e creare

  una situazione per cui si crea uno
  squilibrio quindi lo sviluppo

  squilibrato e lo sviluppo
  squilibrato in Qualche modo

  attiverà delle azioni che sono di
  tipo, sia economico automatico,

  che anche politico per risolvere
  la disuguaglianza, iniziale quindi

  c'è un idea, secondo cui lo
  squilibrio nei limiti in cui si

  può pensare che sia autocorrettivo
  e positivo è, il contrario

  dell'altra la teoria, che invece
  dice Che l'equilibrio è un momento

  meraviglioso dell'economia qui
  invece, no dobbiamo provocare

  degli squilibri e fa, l'esempio
  per esempio provochiamo una

  industrializzazione su un settore
  non su tutti.

  I settori che non siamo capaci ci
  sarà poi una carenza di energia,

  elettrica a me: a quel punto ci
  saranno delle forze che dicono

  dobbiamo per così, dire supplire,
  a questa carenza e quindi facciamo

  le centrali ma se noi cominciamo,
  a farne centrali poi chi è che

  Farà poi l'inizializzazione
  nessuno siamo di fronte, ad una

  semplice, possibilità, ma non c'è,
  nessuna urgenza assoluta di qui

  quindi la polemica, contro uno,
  sviluppo, equilibrato ecco

  studiando, assoluto quindi; bravo,
  squilibrato, gli ha dato una una,

  su una sofferenza perché, nel 69
  c'è stato, un colpo di stato.

  In argentina e sono, generali è,
  un sostenitore dei generali datori

  cimeli ed ecco pd, che anche noi
  abbiamo seguito la strada di

  cecità, ci ha indicato e tu, ci,
  volevano, sviluppo, squilibrato

  noi come come una giunta,
  militare, stiamo, promuovendo la

  crescita, duramente, economica e
  poi, dopo seguirà.

  Lo sviluppo delle ore di là, delle
  libertà politiche, ma sarà una

  cosa, successiva allora lui
  riflette su questo e allora diceva

  io avevo ragione allora, ma perché
  e rifletto su questo è qui, il suo

  capacità di autocritica, allora
  giorno, all'ora, ma parlavo di

  una, squilibrio interno, ai
  Settori dell'economia in cui

  quello che teneva insieme.
  I vari settori che potevano essere

  fra, loro collegati, dai dalle,
  connessioni era, una relazione

  fra, fattoria prodotto cioè una
  nazione, tecnologica c'era, un

  sistema per così, dire che poteva
  funzionare meglio se aveva tutte

  questi stadi, precedenti e
  successivi, ma nel terreno del

  passaggio, tra l'economia e la
  Politica esiste la stessa,

  necessità per cui un'economia che
  si sviluppa a poi necessariamente

  comportato uno sviluppo anche
  della libertà e delle come dire,

  delle provvidenze sociali del
  cordino spese per il welfare

  eccetera questo odio su 24 c'è un
  articolo che tratta esattamente

  questo tema di iphone che Vuole
  convincere la cina, a passare da

  una economia sicuramente basata
  sugli investimenti sulla

  compressione dei consumi e delle
  prede del welfare una fase di

  espansione, della domanda e diceva
  guarda, come un fatto

  l'inghilterra che anche loro hanno
  un certo punto sorpassati in

  maniera lieve dalla,
  dall'economia, verso, L'Aumento

  del suffragio universale e poi il
  primo dato luogo a tutele del

  welfare ha il caso è che la
  l'inghilterra è un paese che per

  così dire essendo il primo che ho
  in anticipo rispetto agli altri

  licei ocean ma in un altro tutto
  questo all'interno dello

  stabilimento.
  Dice uno dei potenti argomenti che

  ostacolano, il passaggio dalla
  sviluppo economico, lo sviluppo

  politico, è l'argomento, che ha
  usato, ai della cosiddetta messa,

  a repentaglio nel libro nella via
  della schiavitù hayek nel 43

  diceva se noi appena lasciamo che
  lo stato prenda, piede, subito ci

  troviamo.
  Con la russia di stalin, quindi

  dobbiamo per così, dire quindi
  evitare di passare, alle riforme

  sociali perché è una strada, senza
  senza, fine per cui se noi

  introduciamo una libertà, nuova,
  il welfare, diritti sociali

  perdiamo le libertà, individuali e
  suffragio universale quindi la

  tesi, che riesce, a Discutere nel
  libro che io vi, consiglio molto,

  schiava, retorica,
  dell'intransigenza, è, appunto la

  cui attesa della messa, a
  repentaglio che se io introdurre

  una riforma, su uno su un terreno
  quello per esempio del welfare

  devono per forza necessariamente
  rinunciare, a qualcos'altro ecco

  in realtà questa, accoglienza,
  cioè, È un argomento retorico dice

  ma che non ha nulla di razionare,
  ma altrettanto non è nulla di

  evitabile e, il fatto che
  un'economia passi da uno sviluppo

  economico sotto la giunta militare
  alla copertura della libertà

  politica e perché qui non siamo di
  fronte come nel, caso delle

  Connessioni, a una specie di
  struttura di sistema, che deve

  stare, insieme compattamente
  perché possiamo avere, appunto uno

  sviluppo, dell'economia
  eventualmente, ma

  contemporaneamente possiamo avere
  argomenti, c'è qualcuno, che dice,

  già ma non siamo, ancora
  abbastanza solidi, rimandiamo

  ancora non siamo, pronti che
  esattamente la speciale che si fa

  In cina, ed avremo domani la
  cosiddetta, politica dei due tempi

  che noi riconosciamo in altri
  facciamo questo lei poi dopo,

  faremo, quest'altro, mancato,
  questo, può, essere, prorogato,

  all'infinito quindi, dice jursone
  in realtà, quella radio,

  ragionamento dello, sviluppo
  squilibrato non può, essere

  pensato come un discorso astratto
  generalizzabile Ma deve essere

  contestualizzato bisogna vedere se
  ci sono effettivamente le forze,

  che spingono nella direzione del
  recupero, degli automatismi oppure

  possiamo, realizzarlo e allora se
  voglio concludere con questo punto

  c'è un un'idea di base, che noi
  troviamo in tutti, gli scritti,

  riesce, anche secondo me va
  recuperata, Cioè l'idea di non

  rimanere imprigionati in un
  sistema rigido anche inserito da

  lui stesso costrutto perché lì
  l'influenza dei colori è stata

  importante colonia scritto libro,
  che è, stato, pubblicato colpito

  la mattina, la malattia, della
  metafisica, qual, è, la tendenza,

  umana spiegabile, ma con cui
  dobbiamo combattere.

  Con gli stessi quello di
  perquisire, proiettare sulla

  realtà, i nostri desideri quindi
  uno che volesse per così, dire

  vedere nella dittatura fase
  temporanea è destinato, a cui

  rilascio farà valutare la
  necessità cogente che porta dalla

  dittatura alla libertà quando
  questa necessità dovrebbe essere

  verificata in concreto ma Non può
  essere data in astratto se dove la

  la concepiamo in astratto, si
  chiama in realtà proiettando sulla

  realtà.
  I nostri desideri e questo dice il

  sun è qualcosa che è all'origine
  di ogni, errore umano cioè cita

  una frase di kafka, che è,
  bellissima, forse, sono qui, ma

  ecco questo in fondo tutti gli
  errori, umani, sono dovuti al

  impazienza, ad un'interruzione
  prematura dei procedimenti

  metodici ecco Questa intenzione
  prematura perché avviene perché in

  qualche modo uno, come dire.
  Si accontenta di poco si

  accontenta di de lieto fine mi
  piace perché si può pure le

  venature anche del contrario
  raccontare la situazione

  completamente catastrofica da qui
  però si può uscire solo con la

  rivoluzione quindi di cui in
  realtà critica entrambe questa,

  posizione, sia, quella pseudo
  ottimistica.

  Che non si ferma nel punto
  dell'ottimismo e non va oltre per

  vedere le controtendenze sia
  quella ultra pessimistica che si

  ferma quando vede la catastrofe
  per esempio critica se spesso la

  giovane, che aveva per così, dire
  raccontato la storia, dell'arte

  rapporto, centro, varie,
  proposito, fra, centro e Periferia

  diceva questi sono solamente una
  un momento dell'analisi dobbiamo

  invece andare oltre vedere se dati
  rapporti di potere asimmetrico,

  far centro in periferia non ci,
  sono delle forze, che operano nel

  suo controtendenza ecco questa
  abitudine, a vedere le forze in

  controtendenza è una cosa, che
  secondo me Non è diffusa e credo

  che a questo forse dovremmo
  cercare di ritornare sia per

  vedere per non raccontarci delle
  balle sia positive sia per non

  raccontarci delle catastrofi che
  qualche modo anche loro cc,

  rassicuro nelle nostre convinzioni
  più profonde in realtà, le nostre

  missioni più, profondo, devono,
  Essere messe in gioco dalla realtà

  che per così dire esterna al
  nostro occhio per così, dire

  questo occhio esterno per così,
  dire recuperarlo`;


