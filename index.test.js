"use strict";
const fs = require('fs');
const subtitleComposer = require('./index.js');


test.skip('Subtitles composer, text input with punctuation', () => {
	
	var punctuationTextFile = './sample_data/Andrea_Ginzburg.webm_punctuation.txt';
	var punctuationTextContent = fs.readFileSync(punctuationTextFile).toString();

	//TODO: - _remove line breaks_

	var captionFileFormat = "srt";

	subtitleComposer({
		punctuationTextContent: punctuationTextContent,
		numberOfCharPerLine: 35,
		// where to save intermediate segmented text file needed for aeneas module 
		segmentedTextInput: './tmp/segmentedtext.tmp.txt',
		//audio or video file to use for aeneas alignement as original source 
		mediaFile: './sample_data/Andrea_Ginzburg.webm',
		outputCaptionFile: "./tmp/Andrea_Ginzburg."+captionFileFormat,
		audio_file_tail_length: 0,
		audio_file_head_length : 0,
		captionFileFormat : captionFileFormat,
		language: 'ita'

		}, 
		function(filePath){
			console.log('filePath', filePath);
			var result = fs.readFileSync(filePath).toString();
			console.log(result)
			//check content of file match expected content of composed srt file
			expect(result).toEqual(expectedOutput);
	});

});


test.skip('Subtitles composer - No punctuation text input', () => {
	
	var punctuationTextFile = './sample_data/Andrea_Ginzburg.webm_no-punctuation.txt';
	var punctuationTextContent = fs.readFileSync(punctuationTextFile).toString();

	var captionFileFormat = "srt";

	subtitleComposer({
		punctuationTextContent: punctuationTextContent,
		numberOfCharPerLine: 35,
		// where to save intermediate segmented text file needed for aeneas module 
		segmentedTextInput: './tmp/segmentedtext.no-punctuation.tmp.txt',
		//audio or video file to use for aeneas alignement as original source 
		mediaFile: './sample_data/Andrea_Ginzburg.webm',
		outputCaptionFile: "./tmp/Andrea_Ginzburg.no-punctuation."+captionFileFormat,
		audio_file_tail_length: 0,
		audio_file_head_length : 0,
		captionFileFormat : captionFileFormat,
		language: 'ita'

		}, 
		function(filePath){
			console.log('filePath', filePath);
			var result = fs.readFileSync(filePath).toString();
			console.log(result)
			//check content of file match expected content of composed srt file
			expect(result).toEqual(expectedOutput);
	});

});


var expectedOutput = `1
00:00:00,000 --> 00:00:07,440
Buonasera, a questo incontro con
il professore avrai leasing, che

2
00:00:07,440 --> 00:00:12,520
ringraziano di essere, non è di
aver, accettato dallo stupido per

3
00:00:12,520 --> 00:00:18,800
questa riflessione e stiamo
cercando di costruire scritti sui

4
00:00:18,800 --> 00:00:28,040
temi che che riguardano la nostra
situazione socio economica

5
00:00:28,040 --> 00:00:36,040
politica nella quale ci troviamo
tutti in questi, giorni nostri,

6
00:00:36,040 --> 00:00:40,680
Informa su tutte su facebook,
spessore ordinaria prospettive

7
00:00:40,680 --> 00:00:47,800
economiche, stato uno dei
fondatori della facoltà di

8
00:00:47,800 --> 00:00:58,160
economia e commercio di modena, si
è rassegnato politica economica

9
00:00:58,160 --> 00:01:04,560
perché negli.
Anni 70 si sia in altre facoltà

10
00:01:04,560 --> 00:01:11,440
sulla tra proprietà dei sensi
della comunicazione università di

11
00:01:11,440 --> 00:01:16,280
modena e nei suoi studi.
Si occupa forlì forme di

12
00:01:16,280 --> 00:01:21,080
continuità e cambiamento l'utile
con una particolare attenzione, a

13
00:01:21,080 --> 00:01:25,480
suggere internazionale numerosi
sono.

14
00:01:25,480 --> 00:01:30,800
I sostituti cani nazionale,
distretti industriali e sulla

15
00:01:30,800 --> 00:01:34,240
storia del riuscire con te su di
lui c'è stato.

16
00:01:34,240 --> 00:01:38,720
I nostri bicchieri l'economista
che è mercato, dicembre, dell'anno

17
00:01:38,720 --> 00:01:42,920
scorso non fa.
Che ha dato un contributo

18
00:01:42,920 --> 00:01:48,880
importante alla fondamentale alla
teoria dello sviluppo all'economia

19
00:01:48,880 --> 00:01:55,720
e stato un pensatore originale nel
quadro della rete ecologica stato

20
00:01:55,720 --> 00:02:00,200
capace di spezzare.
I confini classici tra diverse

21
00:02:00,200 --> 00:02:04,200
discipline per arrivare allo
schema progettuale con lettere

22
00:02:04,200 --> 00:02:11,760
economia sociologia cesa politica
tipologia per cercare nel cuore la

23
00:02:11,760 --> 00:02:20,280
pubblicità cercate nelle, more di
trovare una spiegazione alle 13

24
00:02:20,280 --> 00:02:27,360
per una dimensione individuale
economica e sociale ha promesso di

25
00:02:27,360 --> 00:02:33,040
wood, chiediamo di parlarci di per
Molti cioè se stesso che è la

26
00:02:33,040 --> 00:02:41,560
società di milano ce lo insegnano
oggi come vive; nel passato di

27
00:02:41,560 --> 00:02:47,240
moda in realtà nel settore, o di
simone altro questo chiediamo in

28
00:02:47,240 --> 00:02:55,280
questo sforzo di riuscire, a
portarselo nell'attività di oggi,

29
00:02:55,280 --> 00:03:02,320
nel vivo e nella lettura della
crisi economica che Stiamo vivendo

30
00:03:02,320 --> 00:03:06,960
grazie, quanto vorrei, partire,
dal, titolo, che mi, è, stato

31
00:03:06,960 --> 00:03:10,720
affidato l'attualità di un
dissidente e, come a dissidente

32
00:03:10,720 --> 00:03:18,440
rispetto a che cosa poi l'altro
concetto è l'idea di sviluppo ecco

33
00:03:18,440 --> 00:03:20,120
in che senso, io, schumann, ha
dato.

34
00:03:20,120 --> 00:03:25,040
Un contributo all'idea di sviluppo
e di questo ne due cose di cui mi

35
00:03:25,040 --> 00:03:30,880
proponi di parlare potrei dire
anche questo che mi chiedo in che

36
00:03:30,880 --> 00:03:34,680
modo l'idea di sviluppo e dirci ma
può essere associato all'idea di

37
00:03:34,680 --> 00:03:39,640
polis, cioè una struttura di
attiva, partecipazione degli

38
00:03:39,640 --> 00:03:44,160
abitanti liberi alla Vita politica
ecco i suoi iscritti tutti.

39
00:03:44,160 --> 00:03:48,520
I suoi scritti direi si propongono
di liberarci da gabbie mentali che

40
00:03:48,520 --> 00:03:53,200
costruisce con ostacoli alla
compressione della realtà quindi

41
00:03:53,200 --> 00:03:57,640
anche ostacolo nell'adozione su
decorazioni che sono necessarie

42
00:03:57,640 --> 00:04:01,720
per cambiare le situazioni di
disagio inaccettabile per

43
00:04:01,720 --> 00:04:07,960
costituire per costruire contrasti
non fondati, sulla retorica

44
00:04:07,960 --> 00:04:13,680
sull'emozione ma per quanto
possibile Sulla alimentazione

45
00:04:13,680 --> 00:04:18,190
ragionevole e avviare quindi
dialoghi costruttivi lui propone

46
00:04:18,190 --> 00:04:26,040
di espediente per sfuggire, a
questi costrutti glove altri mi

47
00:04:26,040 --> 00:04:31,360
chiami cioè ostacoli assoluti
dilemmi immaginari sequenze, che

48
00:04:31,360 --> 00:04:37,880
appaiono, obbligate e necessarie,
che invece posso, sono costruite

49
00:04:37,880 --> 00:04:45,560
la reversibili e core direi è
stato di certo, qualcosa ma dirà;

50
00:04:45,560 --> 00:04:49,920
Qualcuno alcune cose rapidissima
sulla vita di vita per capire

51
00:04:49,920 --> 00:04:56,040
meglio, il tipo di personaggio,
che abbiamo di fronte, ecco era;

52
00:04:56,040 --> 00:05:01,800
nato, a berlino da una famiglia,
ebrea era, stato attivo alla

53
00:05:01,800 --> 00:05:07,320
gioventù fino, a 18 anni nel
movimento giovani sui democratici

54
00:05:07,320 --> 00:05:12,440
anzi due la sorella, cota sorella,
russo Che ha avuto una parte,

55
00:05:12,440 --> 00:05:17,840
importante anche, nella sua
biografia, che racconta come nel

56
00:05:17,840 --> 00:05:21,960
gennaio dal 1833 nello stesso
giorno.

57
00:05:21,960 --> 00:05:27,000
In cui i nazisti hanno preso il
potere c'è stato l'incendio del

58
00:05:27,000 --> 00:05:31,080
rais, il ragazzo hirschmann
diciottenne e la sorella, un po

59
00:05:31,080 --> 00:05:35,500
più grande erano di fronte, al
palazzo dei comunisti dopo essere

60
00:05:35,500 --> 00:05:39,600
stati di fronte, a quello dei
socialisti in va perché non c'era,

61
00:05:39,600 --> 00:05:42,720
stato nessun segno di Rivolta sono
andate avanti ancora sono.

62
00:05:42,720 --> 00:05:47,240
I comunisti che sperando che ne
venisse fuori una una reazione

63
00:05:47,240 --> 00:05:51,240
qualcosa che qualche modo di
testimoniasse, la la volontà di

64
00:05:51,240 --> 00:05:56,400
respingere, l'assalto nazista di
fronte, al fatto, che invece

65
00:05:56,400 --> 00:05:59,240
prevalso allora diciamo l'idea di
non accettare provocazioni non

66
00:05:59,240 --> 00:06:05,720
reagire, perché questo, avrebbe,
dato, altre, nazioni eccetera, il

67
00:06:05,720 --> 00:06:09,040
cane Che era: stato anche
ricercata, dalla polizia, a

68
00:06:09,040 --> 00:06:14,200
scherzava fugge, a parigi, ed è,
quindi una vita, tutta fuori,

69
00:06:14,200 --> 00:06:21,080
dalla, germania e solo, negli,
anni ottanta credo ritorno in

70
00:06:21,080 --> 00:06:25,800
germania, non vuole, nemmeno
parlare in famiglia, il tedesco

71
00:06:25,800 --> 00:06:30,720
per mostrare la sua, distanza
rispetto, a questa esperienza

72
00:06:30,720 --> 00:06:35,280
drammatica nella Vissuto allora
diciamo ha studiato a parigi

73
00:06:35,280 --> 00:06:40,720
economia poi anche, a londra è
successo è stato anche volontaria

74
00:06:40,720 --> 00:06:46,160
la guerra di spagna, dove è,
stato, ferito e è stato attivo

75
00:06:46,160 --> 00:06:52,280
nella resistenza sia in italia,
attraverso, il suo cognato

76
00:06:52,280 --> 00:06:55,520
genitore un filosofo che che ha
avuto una influenza, molto

77
00:06:55,520 --> 00:07:00,040
Importante su riesch con il ne
parlerò se c'è il tempo e questo

78
00:07:00,040 --> 00:07:04,360
full che la circostanza per cui 10
con si lauro casualmente a trieste

79
00:07:04,360 --> 00:07:09,560
perché appunto colorni insegnava
in una scuola professionale, a

80
00:07:09,560 --> 00:07:14,240
trieste quindi insieme alla che ha
sposato la sorella, russia e

81
00:07:14,240 --> 00:07:22,480
appunto, si lavorato Quindi in
italia e poi dopo dopo, l'italia è

82
00:07:22,480 --> 00:07:31,120
andato in francia, aiutato
numerose persone, a fuggire negli

83
00:07:31,120 --> 00:07:36,000
stati uniti tra, cui erano
l'organizzazione che aiutato anche

84
00:07:36,000 --> 00:07:38,960
hannah arendt, a fuggire gli stati
uniti attraverso.

85
00:07:38,960 --> 00:07:46,480
I pmi e poi il portogallo e poi
nel 41 anche lui dopo aver fatto

86
00:07:46,480 --> 00:07:50,160
che fate, selice militare in
francia contro il i fascisti dc è

87
00:07:50,160 --> 00:08:03,200
emigrato negli stati uniti e nel,
45 ha pubblicato un libro

88
00:08:03,200 --> 00:08:07,680
importante che inizia con cui ha
iniziato poi una carriera di

89
00:08:07,680 --> 00:08:10,600
Questo libro poi cadono più
avanti, si chiama competenza

90
00:08:10,600 --> 00:08:14,840
nazionale, la scultura del
commercio, estero ecco dopodichè

91
00:08:14,840 --> 00:08:20,670
la sua, carriera continua, negli,
stati, uniti sia come funzionario

92
00:08:20,670 --> 00:08:25,600
prima del americano, che aveva
delegato, il piano marshall, nei

93
00:08:25,600 --> 00:08:33,520
nei, problemi, europei, anche,
italiani e successivamente però si

94
00:08:33,520 --> 00:08:37,280
è interessato dei Problemi de
rossi lui poi li ha pubblicato

95
00:08:37,280 --> 00:08:40,120
appunto qui ci sono questi.
I tre libri che noi col senno di

96
00:08:40,120 --> 00:08:44,760
poi ha chiamato una trilogia,
unificata ora la cosa, che volevo

97
00:08:44,760 --> 00:08:47,600
sottolineare questi libri sono
stati pensati diciamo in maniera

98
00:08:47,600 --> 00:08:53,760
indipendente l'uno, dall'altro,
però, ripensandoci, consegnati

99
00:08:53,760 --> 00:08:57,520
poli eletto ma in fondo è
attraverso queste tre di b, ho

100
00:08:57,520 --> 00:09:02,440
cercato di.
Dare un resoconto a tutto tondo di

101
00:09:02,440 --> 00:09:05,760
una epopea, che era quella della
industrializzazione dei paesi in

102
00:09:05,760 --> 00:09:09,600
via di sviluppo di quegli?
Anni e come la cosa, importante è,

103
00:09:09,600 --> 00:09:14,850
che uno di questi, libri e siamo,
il frutto di un'esperienza e

104
00:09:14,850 --> 00:09:19,120
questo è per così dire teorizzato
dai nel senso del primo libri più

105
00:09:19,120 --> 00:09:24,440
importante al 58 e saprai avvenuto
dopo quattro, anni di lavoro, sul

106
00:09:24,440 --> 00:09:28,600
campo e anche, il libro Successivo
è stato frutto di esperienze,

107
00:09:28,600 --> 00:09:31,800
osservazioni sul terreno in
america, latina e, il terzo

108
00:09:31,800 --> 00:09:35,360
riguarda l'analisi di parole, di
sviluppo, questo sviluppo erano in

109
00:09:35,360 --> 00:09:39,040
vari paesi.
I vari continenti america, latina

110
00:09:39,040 --> 00:09:42,920
asia, europa meridionale tra, cui
anche, il mezzogiorno italiano

111
00:09:42,920 --> 00:09:48,000
ecco che cosa vuol, dire questo
mobile che è un economista che in

112
00:09:48,000 --> 00:09:52,760
qualche, modo ha pensato che tutte
le elaborazioni teoriche hanno

113
00:09:52,760 --> 00:09:57,320
bisogno di partire da
un'esperienza concreta e infatti,

114
00:09:57,320 --> 00:10:01,600
nella propria, prima pagina Nella
prefazione di questo, libro

115
00:10:01,600 --> 00:10:05,560
strategia dello sviluppo economico
qui, cita questa frase del

116
00:10:05,560 --> 00:10:11,280
filosofo wide web che è secondo me
importante per capire anche la

117
00:10:11,280 --> 00:10:16,560
distanza di schwann, dagli altri
economisti e quindi, il suo primo

118
00:10:16,560 --> 00:10:21,840
dissenso perché qui, dice che in
realtà l'unica giustificazione di

119
00:10:21,840 --> 00:10:25,630
ogni, pensiero Quindi riguarda
l'economia ma lui se ne utilizzano

120
00:10:25,630 --> 00:10:29,960
futurista rigoni, a e la
delucidazione dell'esperienza

121
00:10:29,960 --> 00:10:33,920
immediata e quindi è il punto di
partenza è l'osservazione

122
00:10:33,920 --> 00:10:36,440
analitica delle componenti di
quell'esperienza.

123
00:10:36,440 --> 00:10:39,400
In effetti i suoi libri sono
costruiti, a partire sempre da

124
00:10:39,400 --> 00:10:44,360
un'osservazione concreta e in
tentativo di sviluppare, a partire

125
00:10:44,360 --> 00:10:48,960
dall'osservazione delle
considerazioni, che possono forse

126
00:10:48,960 --> 00:10:52,880
essere generalizzate ma forse la
generalizzazione di qualcosa, che

127
00:10:52,880 --> 00:10:57,320
si possa avere a priori ma dipende
dalla realtà quindi c'è una per

128
00:10:57,320 --> 00:11:02,520
così; Dire un'opzione di umiltà,
nei confronti della realtà realtà

129
00:11:02,520 --> 00:11:05,680
e la realtà, che ci dice come lo
aveva parlato, ria è una

130
00:11:05,680 --> 00:11:09,680
posizione, che richiama quella che
in filosofia si chiama posizione

131
00:11:09,680 --> 00:11:14,560
di ambizione è associata al tar,
battismo di pers per cio è il

132
00:11:14,560 --> 00:11:18,560
fatto che un ormone Che arriva
alla realtà con una grossissima

133
00:11:18,560 --> 00:11:24,040
armatura teorica per cui proietta
sulla realtà questa questa matura

134
00:11:24,040 --> 00:11:30,760
per vedere se convalida le proprie
opinioni a priori e il contrario

135
00:11:30,760 --> 00:11:35,360
uno osserva con accuratezza e da
li cerca naturalmente arriva con

136
00:11:35,360 --> 00:11:39,280
un bagaglio ma cerca di
consapevolmente di non far Pesare

137
00:11:39,280 --> 00:11:44,040
troppo il proprio bagaglio del
momento in cui fa; teoria e quindi

138
00:11:44,040 --> 00:11:48,920
questo punto è perché è importante
perché invece la teoria, economica

139
00:11:48,920 --> 00:11:52,080
è in grandissima, parte in
particolare, la teoria, cosiddetta

140
00:11:52,080 --> 00:11:56,160
ortodossa, marginalista una
classica così, il si voglia e

141
00:11:56,160 --> 00:12:03,240
invece basata sulla deduzione cioè
da alcuni Principi astratti che si

142
00:12:03,240 --> 00:12:09,600
considerano essere cruciali si
deducono via via delle

143
00:12:09,600 --> 00:12:15,000
proposizioni e poi si vanno a
verificare della realtà quindi è

144
00:12:15,000 --> 00:12:20,480
un apparato teorico in cui
l'aspetto induttivo è molto

145
00:12:20,480 --> 00:12:26,600
scarso, ed è, invece considerato,
quasi muta in piri, a quella di

146
00:12:26,600 --> 00:12:33,040
introdurre, delle giustificazioni
basate sull'esistenza Di ipotesi

147
00:12:33,040 --> 00:12:37,080
della realtà per esempio, il
monetarista più importante quello,

148
00:12:37,080 --> 00:12:40,680
che ha sviluppato in maniera più
estrema per posizione di cui

149
00:12:40,680 --> 00:12:44,520
parlavo.
Si chiama milton friedman sostiene

150
00:12:44,520 --> 00:12:49,750
che le ipotesi di partenza, non è
importante che siano realistiche

151
00:12:49,750 --> 00:12:53,480
possono essere anche del tutto,
astratta irrealistiche quello, che

152
00:12:53,480 --> 00:12:59,120
è importante è invece, che le
proposizioni, che essi derivano da

153
00:12:59,120 --> 00:13:04,240
quelle ipotesi anche astratte
siano diano luogo, a delle

154
00:13:04,240 --> 00:13:08,800
predizioni verificabili, ora
siccome Ne ne conosciamo come

155
00:13:08,800 --> 00:13:13,240
forse alcuni di voi sanno la
verificabilità, è una cosa

156
00:13:13,240 --> 00:13:16,920
estremamente controversa non
c'erano, strumenti offrì come

157
00:13:16,920 --> 00:13:20,400
possono, esserci delle scienze
dure in cui si producono gli

158
00:13:20,400 --> 00:13:25,640
esperimenti connessioni
controllate però questo vuol dire

159
00:13:25,640 --> 00:13:28,080
che questa posizione che il
teorico che schiava

160
00:13:28,080 --> 00:13:33,960
sperimentalista, che appunto
Affida alla verifica la validità

161
00:13:33,960 --> 00:13:41,400
delle ipotesi di partenza anche le
più pazze e siamo in realtà è un

162
00:13:41,400 --> 00:13:47,840
via libera per l'arbitrio più
assoluto ecco però io volevo

163
00:13:47,840 --> 00:13:52,240
parlare del dissenso ecco.
I dissensi di cui io voglio

164
00:13:52,240 --> 00:13:56,880
parlare del caso di air, france
sono in realtà 31 e, il dissenso

165
00:13:56,880 --> 00:14:01,660
rispetto alla posizione ortodossa
e qui c'è un punto che ho appena

166
00:14:01,660 --> 00:14:05,480
visto ma che vorrei sviluppare con
la contrapposizione fra, quello

167
00:14:05,480 --> 00:14:09,000
che si che dicono mischiano
crescita e quello Che invece si

168
00:14:09,000 --> 00:14:13,080
chiama sviluppo che sono due cose
diverse e, come lisa secondo

169
00:14:13,080 --> 00:14:18,720
dissenso di cui voglio parlare è
una discussione critica di firma,

170
00:14:18,720 --> 00:14:23,040
né con all'interno
dell'eterodossia e questa

171
00:14:23,040 --> 00:14:25,480
discussione si è svolta
all'interno di una

172
00:14:25,480 --> 00:14:31,570
contrapposizione fra, due concetti
sviluppo equilibrato e sviluppo

173
00:14:31,570 --> 00:14:35,480
squilibrato quindi questa È una
dire un dissenso interno, al

174
00:14:35,480 --> 00:14:39,480
dissenso, ma c'è una terza
posizione che secondo me quella

175
00:14:39,480 --> 00:14:46,080
più, interessante, è, che forse,
ci consente di arrivare, al cuore

176
00:14:46,080 --> 00:14:51,510
della importanza di questo, autore
e, il dissenso rispetto, a se

177
00:14:51,510 --> 00:14:57,760
stesso nel senso, che
continuamente la sua, vita ha

178
00:14:57,760 --> 00:15:02,040
rimesso.
In gioco le sue, proprie conquiste

179
00:15:02,040 --> 00:15:05,670
teoriche war, pierich e su proprie
osservazioni e quello, che lui ha

180
00:15:05,670 --> 00:15:11,120
chiamato il procedimento di auto
sovversione ora questo è qualcosa,

181
00:15:11,120 --> 00:15:15,520
che effettivamente diciamo, loro
rende, abbastanza spero tu,

182
00:15:15,520 --> 00:15:19,880
diciamo, ancora, più, intero,
dosso, vi, aiuterà rossi, perché,

183
00:15:19,880 --> 00:15:28,630
è, abbastanza, inconsueto, trovare
Una persona che in qualche modo è

184
00:15:28,630 --> 00:15:36,000
in grado di con coraggio rivedere
la propria, posizione e anche,

185
00:15:36,000 --> 00:15:40,160
addirittura rovesciarla e questo
in questo credo che, va, va vista

186
00:15:40,160 --> 00:15:44,240
la grande influenza, che ha
esercitato su di lui c è c è una

187
00:15:44,240 --> 00:15:49,360
cosa, che vorrei, dire rapidamente
e Che nella gioventù di 92 era,

188
00:15:49,360 --> 00:15:54,940
ancora ragazzo ha fatto letture
importante, che hanno,

189
00:15:54,940 --> 00:16:00,080
condizionato credo in maniera
significativa, il suo modo di

190
00:16:00,080 --> 00:16:06,320
ragionare di the year marx, simmel
e leighlin, che questi e questi

191
00:16:06,320 --> 00:16:09,480
autori sarebbe possibile
dimostrare, che hanno esercitato,

192
00:16:09,480 --> 00:16:14,640
un'influenza, anche, diciamolo,
manera, che critica, diciamo Ma

193
00:16:14,640 --> 00:16:19,480
però sicuramente importante è che
dirò qualcosa su questo contrasto,

194
00:16:19,480 --> 00:16:25,160
far crescita e sviluppo cercherò
di che finire un dissenso rispetto

195
00:16:25,160 --> 00:16:30,240
all'ortodossia ecco mi rivolgo
rapidissimamente agli economisti,

196
00:16:30,240 --> 00:16:35,440
che sono forse una minoranza, ma
però potrebbero per capire quando

197
00:16:35,440 --> 00:16:38,320
io parlo di crescita, far
riferimento a un articolo Di un

198
00:16:38,320 --> 00:16:42,640
economista schiava solo, che ha
scritto nel 57 un articolo che si

199
00:16:42,640 --> 00:16:46,720
chiama crescita aggregata il
progresso tecnico con il senno di

200
00:16:46,720 --> 00:16:52,640
poi si può dire che quella nozione
di crescita è diventata prevalente

201
00:16:52,640 --> 00:16:57,080
e purtroppo fan uno, va anche dei
paesi di sviluppo trova che

202
00:16:57,080 --> 00:17:00,080
ragionano.
Con questo schema è un disastro

203
00:17:00,080 --> 00:17:06,120
secondo me ma per così dire
stravinto la posizione, che invece

204
00:17:06,120 --> 00:17:11,120
proponeva hirschmann è stata
proposta, un anno dopo nel libro

205
00:17:11,120 --> 00:17:16,560
strategia dello sviluppo economico
allora lasciatemi, dire qualche

206
00:17:16,560 --> 00:17:21,950
cosa per chiarire questo questo
dissenso, a metà degli, anni

207
00:17:21,950 --> 00:17:26,000
cinquanta alcuni, economisti hanno
Cominciato, a dire ma, noi non

208
00:17:26,000 --> 00:17:30,400
possiamo, andare nei paesi in via
di sviluppo con la stessa teoria

209
00:17:30,400 --> 00:17:34,000
che voi ci proponete per i paesi
sviluppati perché, i problemi

210
00:17:34,000 --> 00:17:37,480
sommersi e allora hanno
cominciato, a dire formiamo una

211
00:17:37,480 --> 00:17:41,600
sotto disciplina che si chiama
economia dello sviluppo quindi si

212
00:17:41,600 --> 00:17:45,750
contrapponeva Almeno nei termini
l'economia dello sviluppo che la

213
00:17:45,750 --> 00:17:51,160
proposta per i paesi in sviluppo e
l'economia invece economics che si

214
00:17:51,160 --> 00:17:56,000
basava sulla crescita qual, è la
differenza ecco la crescita,

215
00:17:56,000 --> 00:18:01,320
intanto diciamo, un punto, che
poteva essere, apparentemente

216
00:18:01,320 --> 00:18:06,000
d'accordo fra in queste, due
scuole potrebbe essere questo, che

217
00:18:06,000 --> 00:18:07,800
io.
Lo sviluppo si occupa di problemi

218
00:18:07,800 --> 00:18:11,840
strutturali ma cosa non dire
problemi strutturali ecco si

219
00:18:11,840 --> 00:18:15,520
sosteneva allora gli ortodossi
sostenevano che i problemi

220
00:18:15,520 --> 00:18:21,520
strutturali erano descrivibili
come i problemi legati al

221
00:18:21,520 --> 00:18:25,880
passaggio di un'economia,
dall'agricoltura all'industria e

222
00:18:25,880 --> 00:18:29,960
poi, eventualmente al terziario,
quindi era, una di passaggio da un

223
00:18:29,960 --> 00:18:34,200
settore All'Altro e guardando
all'indietro la storia economica

224
00:18:34,200 --> 00:18:37,800
si diceva questa è una specie di
legge naturale che ci porta

225
00:18:37,800 --> 00:18:41,520
dall'agricoltura verso.
I servizi passando attraverso

226
00:18:41,520 --> 00:18:45,920
l'inizializzazione e gli ortodossi
dicevano, ma questo passaggio è

227
00:18:45,920 --> 00:18:49,560
sia ancora presente nei paesi di
sviluppo, ma noi non ce l'avevano

228
00:18:49,560 --> 00:18:51,360
più noi, che siamo paesi avanzati
quindi.

229
00:18:51,360 --> 00:18:57,360
I paesi avanzati non hanno più un
problema di sviluppo, ma hanno

230
00:18:57,360 --> 00:19:04,120
problema di crescita, cosa voleva
dire crescita voleva dire che in

231
00:19:04,120 --> 00:19:07,960
qualche modo i paesi sviluppati
avevano solo, il problema di

232
00:19:07,960 --> 00:19:13,400
espandersi, indipendentemente
dalle modifiche dei settori quindi

233
00:19:13,400 --> 00:19:18,000
in corso, il concetto anche legato
complessivo di prodotto Interno

234
00:19:18,000 --> 00:19:23,640
lordo pil diventava un modo per
descrivere l'andamento dei paesi

235
00:19:23,640 --> 00:19:26,440
in via di sviluppo mentre gli
altri deve paesi e che ha

236
00:19:26,440 --> 00:19:29,280
sviluppati perché appunto non
c'era, più un problema di

237
00:19:29,280 --> 00:19:34,120
composizione questi il problema
era di cercare di espandere,

238
00:19:34,120 --> 00:19:38,760
queste, economie, secondo, questo,
percorso, che era in Qualche modo

239
00:19:38,760 --> 00:19:43,210
prefissato dalla teoria, che
vedeva nella questo percorso come

240
00:19:43,210 --> 00:19:49,280
tracciato da due forze 1 l'aumento
della produttività del lavoro,

241
00:19:49,280 --> 00:19:55,840
cioè lui la quantità di prodotto
per ogni, lavoratore e questa era,

242
00:19:55,840 --> 00:19:59,880
una prima, forza trainante, la
seconda, forza trainante era,

243
00:19:59,880 --> 00:20:03,080
l'offerta di lavoro, cioè la
quantità di Lavoro che è

244
00:20:03,080 --> 00:20:08,400
disponibile, a lavorare e questo
concezione dei paesi sviluppati è

245
00:20:08,400 --> 00:20:12,440
tuttora loci dominante perciò se
quante volte vuoi aver, sentito,

246
00:20:12,440 --> 00:20:15,360
martellare, delle, orecchie, che
bisogna, aumentare la

247
00:20:15,360 --> 00:20:18,840
produttività, ma cosa vuol, dire
una terra bruciata vuol, dire

248
00:20:18,840 --> 00:20:24,160
aumentare di più, la stessa, cosa
cioè, lo stesso Prodotto deve

249
00:20:24,160 --> 00:20:29,400
essere aumentato per ogni unità di
ora lavorata per ogni unità di ha

250
00:20:29,400 --> 00:20:33,520
detto, ma è, lo stesso prodotto,
questa, è una, forza trainante,

251
00:20:33,520 --> 00:20:37,680
l'altra, forza frenante e lo
scongelamento dell'offerta di

252
00:20:37,680 --> 00:20:41,320
lavoro, ora siccome, si sostiene
che queste economie, dice la

253
00:20:41,320 --> 00:20:45,720
teoria, sono sempre, piene, piego,
Perché sono diciamo si basano su

254
00:20:45,720 --> 00:20:49,760
una flessibilità dei salari tali
per cui sia sempre per i piedi, a

255
00:20:49,760 --> 00:20:53,080
scongelare l'offerta di lavoro e
come si fa si fa per esempio,

256
00:20:53,080 --> 00:20:59,720
allungando l'età, prima della
pensione e quindi si scongela una

257
00:20:59,720 --> 00:21:04,080
parte di lavoratrici ora gli.
I lavoratori oppure.

258
00:21:04,080 --> 00:21:08,080
Si fa lavorare di più e come si fa
ad esempio abbassando.

259
00:21:08,080 --> 00:21:12,880
I salari si costringono le persone
a produrre di più da un lato ea

260
00:21:12,880 --> 00:21:17,760
mettere più ore, dall altro oppure
in teoria si potrebbero promuovere

261
00:21:17,760 --> 00:21:21,320
nascita e quindi quozienti
familiari che spenti spingono

262
00:21:21,320 --> 00:21:25,520
aumentare l'immagine ecco ma
comunque le forze sono questa

263
00:21:25,520 --> 00:21:29,320
specie di produttività che in
parte dr2 E legata allo sforzo si

264
00:21:29,320 --> 00:21:32,640
sostiene ma anche legata al
progresso, il decreto che non si

265
00:21:32,640 --> 00:21:36,000
sa mai da dove viene si chiama
manna dal cielo perché appunto

266
00:21:36,000 --> 00:21:39,400
esogeno non è, spiegato dalla
mente all'interno di questa,

267
00:21:39,400 --> 00:21:44,680
direzione c'è, il pieno impiego e
si spremono forze lavoro diciamo

268
00:21:44,680 --> 00:21:51,520
facendo Lavorare di più, o
riducendo il l'incentive la

269
00:21:51,520 --> 00:21:55,360
pensione cercando di aumentare,
quanto più possibile la durata

270
00:21:55,360 --> 00:22:02,860
lavorativa ecco questa è la la
nozione di crescita e in un certo

271
00:22:02,860 --> 00:22:11,560
senso questa teoria e assomiglia,
un po, a quelle teorie biologiche

272
00:22:11,560 --> 00:22:16,090
schiano prefor miste, che
consistono, nel pensare, che Tutto

273
00:22:16,090 --> 00:22:21,760
sommato i paesi possono essere
assimilati, a un neonato che copia

274
00:22:21,760 --> 00:22:28,120
in scala dell'adulto cioè il paese
che non è cresciuto e. I denti con

275
00:22:28,120 --> 00:22:32,440
l'adulto soltanto è che un po più
piccolo e quindi facciamo produce

276
00:22:32,440 --> 00:22:36,720
un pò meno ma è la stessa, cosa,
ma c'era un'altra teoria, che era;

277
00:22:36,720 --> 00:22:40,880
stata proposta molto, prima ad
aristotele, che invece è la

278
00:22:40,880 --> 00:22:47,160
teoria, epigenetica, che invece,
sostiene, che l'espansione e la

279
00:22:47,160 --> 00:22:51,720
crescita; Biologica è basata sulla
differenziazione sulla

280
00:22:51,720 --> 00:22:57,040
trasformazione ecco questa idea
della trasformazione è totalmente

281
00:22:57,040 --> 00:23:03,800
estranea agli economisti è come se
pensassero che la crescita è come

282
00:23:03,800 --> 00:23:07,880
avere un palloncino che si gonfia
per un poi sia un paese povero si

283
00:23:07,880 --> 00:23:10,640
gonfia faloppa di più, è sia un
paese come Sempre lo stesso

284
00:23:10,640 --> 00:23:14,440
palloncino perché produce sempre
la stessa, cosa solamente, con una

285
00:23:14,440 --> 00:23:19,360
produttività, un po maggiore e più
lavoratori, o lavoratrici insetti

286
00:23:19,360 --> 00:23:26,920
del sistema, quindi roubaix è, un
percorso prefissato che conduce un

287
00:23:27,920 --> 00:23:33,250
paese dall'arretratezza verso la
modernità, la ricchezza, sono

288
00:23:33,250 --> 00:23:38,510
stati, prefissati, ora, questo,
discorso, degli, stai, Prefissati

289
00:23:38,510 --> 00:23:44,120
è analogo a quello che stavolta si
dice che si chiama tellina cioè

290
00:23:44,120 --> 00:23:48,520
dell'anno alternatives, ci sono,
non ci, sono, alternative che è

291
00:23:48,520 --> 00:23:53,080
una specie di percorso naturale di
cui solo se noi beviamo dalle

292
00:23:53,080 --> 00:23:59,000
prescrizioni del palloncino, noi
beviamo ma se noi seguiamo invece

293
00:23:59,000 --> 00:24:02,720
quello che è. Il percorso
prefissato seguiamo il percorso

294
00:24:02,720 --> 00:24:06,360
dei paesi più ricchi allora è
sicuro che il paese povero

295
00:24:06,360 --> 00:24:11,760
arriverà al paese, ricco e com'è
che si dice che arriverà se per

296
00:24:11,760 --> 00:24:18,120
così dire produce, o forma o
costruisce.

297
00:24:18,120 --> 00:24:22,080
I prerequisiti dello sviluppo che
sono tratti dall'esperienza

298
00:24:22,080 --> 00:24:25,280
apparentemente dei paesi
sviluppati e cosa sono per

299
00:24:25,280 --> 00:24:29,160
esempio, il fatto che c'è una
buona scuola, il fatto che ci sono

300
00:24:29,160 --> 00:24:33,520
persone, che decidono sulla base
della razionalità e non invece,

301
00:24:33,520 --> 00:24:37,960
delle nazionalità, il fatto che ci
sia del molto, risparmio E quindi

302
00:24:37,960 --> 00:24:39,960
si possa accumulare questo
risparmio qui sono.

303
00:24:39,960 --> 00:24:43,760
I cosiddetti prerequisito e lo
sviluppo ecco adesso cambiamo

304
00:24:43,760 --> 00:24:47,200
scena e passiamo invece dire per
il proprio gruppo delusi della

305
00:24:47,200 --> 00:24:52,320
crescita vuol dire passiamo invece
allo sviluppo ecco ora il fatto di

306
00:24:52,320 --> 00:24:56,640
poter parlare di un paese in via
di sviluppo negli.

307
00:24:56,640 --> 00:24:59,840
Anni 50 e non dei paesi sviluppati
ha per così dire da qui la

308
00:24:59,840 --> 00:25:03,640
maggiore libertà di pensiero, a
questi economisti e per dossi

309
00:25:03,640 --> 00:25:10,760
perché son sentiti meno vincolati
da queste gabbie concettuali, cioè

310
00:25:10,760 --> 00:25:16,040
ha descritto e ha detto, ma questi
paesi in realtà funzionano sono

311
00:25:16,040 --> 00:25:23,200
basi di principio, Molto piazze e
c'è un'idea di edifici, ma è che

312
00:25:23,200 --> 00:25:28,010
nei paesi in via di sviluppo c'è
un mucchio di risorse che non

313
00:25:28,010 --> 00:25:39,040
sono, utilizzate e sono appunto lo
sviluppo dice non dipende, tanto

314
00:25:39,040 --> 00:25:44,040
da trovare combinazione ottimale
di risorse e fattori di

315
00:25:44,040 --> 00:25:48,520
produzione, dati, quanto darvi,
chiamare e Dalla rollare per lo

316
00:25:48,520 --> 00:25:52,920
sviluppo risorse e capacità,
nascoste disperse o male

317
00:25:52,920 --> 00:25:57,440
utilizzate ecco questo è, un punto
di vista completamente, diverso

318
00:25:57,440 --> 00:26:01,160
perché la seriosa diceva che le di
forse, erano pienamente utilizzate

319
00:26:01,160 --> 00:26:04,240
bisogna continuamente aumentarle,
mettere, nella fornace della

320
00:26:04,240 --> 00:26:07,800
crescita, sempre, nuovi,
lavoratori, fatto sommato, il

321
00:26:07,800 --> 00:26:11,880
mercato la Concorrenza utilizzava
tutti pienamente qui invece, dice,

322
00:26:11,880 --> 00:26:17,600
no qui c'è qualcosa che non
funziona c'è un meccanismo che non

323
00:26:17,600 --> 00:26:23,710
utilizza, pienamente tutte le
risorse, che sono, nascoste

324
00:26:23,710 --> 00:26:28,960
disperse o male utilizzate e ora
perché forse perché non ci, sono

325
00:26:28,960 --> 00:26:35,190
quei famosi per i requisiti in cui
siederanno detto, prima È che una

326
00:26:35,190 --> 00:26:40,020
parte della somma nell'argomento
critico di si, espanse e contrario

327
00:26:40,020 --> 00:26:46,040
in radice all'idea di pre,
requisito perché se ci fosse fosse

328
00:26:46,040 --> 00:26:51,000
da prendere sul serio preseguito
non potremmo, spiegare alcunché

329
00:26:51,000 --> 00:26:56,040
perché dopo la rivoluzione,
industriale inglese, si è prodotta

330
00:26:56,040 --> 00:26:58,670
una situazione che non aveva,
assolutamente nessun Precedente

331
00:26:58,670 --> 00:27:02,600
cioè era, avvenuta una storia, il
tempo si poteva per così dire

332
00:27:02,600 --> 00:27:06,600
utilizzare, il fatto che
l'inghilterra aveva introdotto dei

333
00:27:06,600 --> 00:27:10,560
cambiamenti per quanto riguarda
l'industria dei mac dei macchinari

334
00:27:10,560 --> 00:27:14,320
per esempio c'era quindi il paese
che viene dopo poteva per così,

335
00:27:14,320 --> 00:27:19,120
dire percorrere non era; obbligato
a ripercorrere La stessa strada e

336
00:27:19,120 --> 00:27:22,400
poteva inventare deve essere,
diverse c'era uno storico,

337
00:27:22,400 --> 00:27:25,240
economico molto importante, che ha
avuto un'influenza molto

338
00:27:25,240 --> 00:27:30,600
importanti su su 10 alessia magher
shukron che appunto ha argomentato

339
00:27:30,600 --> 00:27:35,120
che appunto, il tempo è qualcosa
che deve essere sempre preso in

340
00:27:35,120 --> 00:27:38,640
contrazione oltre che lo spazio e
Che gli economisti invece negano

341
00:27:38,640 --> 00:27:43,360
entrambi e cioè il fatto che ogni
paese si trova in ogni momento a

342
00:27:43,360 --> 00:27:48,320
poter utilizzare dei grandi
vantaggi dovuti al passare del

343
00:27:48,320 --> 00:27:52,120
tempo e anche magari essere
svantaggiato ora moltissima, parte

344
00:27:52,120 --> 00:27:55,440
non sarà tempo di parlarne, ma
molti da parte delle persone dice

345
00:27:55,440 --> 00:27:58,680
Non riguarda i vantaggi
dell'essere ultimo è anche gli

346
00:27:58,680 --> 00:28:05,120
svantaggi cioè una disamina,
attenta, ed cruda per così, dire

347
00:28:05,120 --> 00:28:07,760
di ciò, che vuol, dire essere
paesi in via di sviluppo, non è

348
00:28:07,760 --> 00:28:12,160
solo una disgrazia, ma ci possono
essere anche delle, possibili

349
00:28:12,160 --> 00:28:17,400
opportunità delle fortune questo
apre delle possibilità Di uscita

350
00:28:17,400 --> 00:28:20,320
dalla produzione il suo sviluppo
anche perché dobbiamo riflettere

351
00:28:20,320 --> 00:28:23,190
sul fatto, che nella storia
economica e scelte dal

352
00:28:23,190 --> 00:28:30,040
sottosviluppo nella storia umana
sono state numerose, quindi,

353
00:28:30,040 --> 00:28:35,800
questo, è, tutto, l'importante, è,
che qui, c'è, un punto che va

354
00:28:35,800 --> 00:28:41,280
chiarito quindi, perché, ci, sono,
queste, risorse, inutilizzate,

355
00:28:41,280 --> 00:28:47,640
disperse E non utilizzate ecco
l'ostacolo principale dice juan

356
00:28:47,640 --> 00:28:50,680
non è, l'assenza delle prime
predefiniti ma l'incapacità di

357
00:28:50,680 --> 00:28:54,480
prendere, decisioni da parte di
agenti pubblici e privati nella

358
00:28:54,480 --> 00:29:00,360
dimensione e nella tempistica
necessarie per sfruttare nella

359
00:29:00,360 --> 00:29:04,760
situazione data alle potenzialità
esistenti, i processi decisionali

360
00:29:04,760 --> 00:29:09,360
sono costati come dominati non
dalla Scarsità di fattori ma dalla

361
00:29:09,360 --> 00:29:15,120
confusione influenzati da segnali
ambigui e contraddittori e

362
00:29:15,120 --> 00:29:19,800
soprattutto dall incertezza su
come risolvere in sequenza i molti

363
00:29:19,800 --> 00:29:24,680
problemi tecnologici
amministrativi finanziarie di

364
00:29:24,680 --> 00:29:29,080
domani da con, a marsico quindi
l'incertezza è l'elemento cruciale

365
00:29:29,080 --> 00:29:34,360
è la strozzatura quello che che
manca veramente è la capacità Di

366
00:29:34,360 --> 00:29:37,080
pre decisioni ora voi capite, che
questa incertezza e capacità

367
00:29:37,080 --> 00:29:40,400
decisioni prese decisioni non è
una cosa, che riguarda gli alle 5

368
00:29:40,400 --> 00:29:44,760
dai paesi del gruppo, bano cosa
pervasiva, nel, capitalismo, ed è,

369
00:29:44,760 --> 00:29:48,960
particolarmente presente, con
potete, immaginare, nella,

370
00:29:48,960 --> 00:29:54,880
situazione, attuale e io credo che
questo rende in Ragionamenti e

371
00:29:54,880 --> 00:30:00,280
jean particolarmente attuali ecco
un altro punto importante che nel

372
00:30:00,280 --> 00:30:04,680
suo schema di ragionamento
figurano come variabili endogene

373
00:30:04,680 --> 00:30:09,600
dispiegabile all'interno del suo,
discorso sia variabili economiche,

374
00:30:09,600 --> 00:30:15,080
che politiche ora, questo ha delle
implicazioni importanti nel senso

375
00:30:15,080 --> 00:30:18,560
che lo stato non è considerato in
astratto come tutti.

376
00:30:18,560 --> 00:30:25,720
I libri di economia come o un
personaggio onnisciente e

377
00:30:25,720 --> 00:30:31,000
onnipotente oppure un cretino
cretino corrotto c'è arrivato da

378
00:30:31,000 --> 00:30:34,680
questi, due possibili né limone
libri di testo di economia più di

379
00:30:34,680 --> 00:30:40,680
destra, lo stato è sempre pessimo
protegge le rendite intrusivi, no

380
00:30:40,680 --> 00:30:44,160
le corruzioni, più terribili, che
parlasse anche Verba si può

381
00:30:44,160 --> 00:30:48,040
generalizzare questo e dall'altra
invece si dice che lo stato invece

382
00:30:48,040 --> 00:30:52,360
sa tutto completamente alieno dai
compiti interesse ora invece, il

383
00:30:52,360 --> 00:30:59,450
ragionamento di schwann e invece
di rendere in un doge né queste

384
00:30:59,450 --> 00:31:02,960
sia l'economia che la politica
ecco ora c'è uscita una biografia

385
00:31:02,960 --> 00:31:07,520
di su Riesca annunciato adelman
che dice, portò 100 pagine

386
00:31:07,520 --> 00:31:11,240
recentemente in cui viene fuori
una cosa interessante che però si

387
00:31:11,240 --> 00:31:14,640
poteva immaginare e cioè mentre
scriveva, a innescare quel libro

388
00:31:14,640 --> 00:31:21,960
del 58 furiosamente sottolineava
eleggeva hayek e anche alta e

389
00:31:21,960 --> 00:31:30,000
campione del conservatorismo e
anzi, mi ha terrorizzato questo,

390
00:31:30,000 --> 00:31:35,500
fatto Cioè c'è una bellissima
citazione di hip hop bourque e

391
00:31:35,500 --> 00:31:41,240
borgo, il conservatore inglese che
290 scritto un libro e quindi c'è

392
00:31:41,240 --> 00:31:45,280
la canalizzazione, francese era,
un disastro, che inghilterra

393
00:31:45,280 --> 00:31:49,360
poteva andare in rovina se
qualcuno di quei, principi

394
00:31:49,360 --> 00:31:54,240
fondesse passato la manica, ebbene
barche, c'era, il nostro

395
00:31:54,240 --> 00:31:59,680
antagonista E quello che ci aiuta
perché ci aguzza il nostro ingegno

396
00:31:59,680 --> 00:32:02,680
rinsalda.
I nostri nervi e in qualche modo

397
00:32:02,680 --> 00:32:06,000
ci fortifica e con questo punto è
un punto che.

398
00:32:06,000 --> 00:32:09,640
I team ispa ma sempre per così
riconsiderato e quindi per così

399
00:32:09,640 --> 00:32:15,280
dire si può leggere io credo quel
libro la stratorino rivolo come un

400
00:32:15,280 --> 00:32:20,240
tentativo di prendere sul serio
alcuni dei punti di hayek ma

401
00:32:20,240 --> 00:32:25,910
rifiutare completamente le sue
prescrizioni fatto vedere qualcosa

402
00:32:25,910 --> 00:32:31,460
su questo differenza che per
Sembra cruciale cosa va detto a

403
00:32:31,460 --> 00:32:37,120
year ecco era, uno di quelli, che
aveva criticato la possibilità di

404
00:32:37,120 --> 00:32:40,920
pianificare, centralmente
un'economia sostenendo, che era,

405
00:32:40,920 --> 00:32:45,760
impossibile calcolo economico, che
diciamo in sostanza, il motivo per

406
00:32:45,760 --> 00:32:49,840
cui non si poteva centralizzare
completamente dell'economia aveva

407
00:32:49,840 --> 00:32:52,920
con fanta non era.
Che fare con fatto che le

408
00:32:52,920 --> 00:32:56,520
conoscenze sono distribuite
disperse tra, le persone questo

409
00:32:56,520 --> 00:33:02,960
buon colpo e buon punto e vero è
che lo stato non possiede tutte le

410
00:33:02,960 --> 00:33:08,160
conoscenze, che una
pianificazione, centralizzata

411
00:33:08,160 --> 00:33:15,160
dovrebbe questo è, un osservazione
che però era; associata, a un

412
00:33:15,160 --> 00:33:19,760
ragionamento che invece molto Più
molto discutibile cioè lui diceva

413
00:33:20,800 --> 00:33:26,920
c'è però una possibilità di
utilizzare, tutte queste,

414
00:33:26,920 --> 00:33:31,920
conoscenze, disperse nella,
società, ed è, il mercato perché

415
00:33:31,920 --> 00:33:36,400
il mercato a questa funzione di
coordinamento delle cessioni e

416
00:33:36,400 --> 00:33:42,060
cioè le persone senza accorgersene
in realtà nel momento in cui

417
00:33:42,060 --> 00:33:46,600
massimizzano, il profitto in cui
Si rivolgono al consumo e quindi

418
00:33:46,600 --> 00:33:50,880
massimizzare l'utilità eccetera in
qualche, modo smettono in moto, un

419
00:33:50,880 --> 00:33:57,590
meccanismo di coordinamento dei
soggetti che hanno tutte, queste,

420
00:33:57,590 --> 00:34:03,400
conoscenze, disperse e riassumono
condensano le loro informazioni le

421
00:34:03,400 --> 00:34:07,440
loro conoscenze nei prezzi quindi.
I prezzi sono per così dire degli

422
00:34:07,440 --> 00:34:12,640
indicatori che sono contenitori di
conoscenze e quindi in qualche,

423
00:34:12,640 --> 00:34:20,400
modo un'economia che in qualche,
modo lascia libero, il mercato di

424
00:34:20,400 --> 00:34:25,180
muoversi liberamente coordina
senza bisogno di uno, stato tutte

425
00:34:25,180 --> 00:34:31,100
queste, decisioni e utilizza al
meglio, le conoscenze disperse

426
00:34:31,100 --> 00:34:38,720
ecco la tesi Di c'è una differenza
fra, lordo liberalismo e, il

427
00:34:38,720 --> 00:34:42,260
marginalismo perché, il lordo
liberalismo, a cui si rifà hayek

428
00:34:42,260 --> 00:34:47,170
che è quello, che è anche poi,
avuto grosso, peso germania senato

429
00:34:47,170 --> 00:34:51,640
germania, a friburgo e poi ha
tuttora molto presente e la

430
00:34:51,640 --> 00:34:55,760
formazione, degli economisti
tedeschi non è, contro Non è

431
00:34:55,760 --> 00:35:00,040
esattamente il sfr perché le sue,
farse dello stato minimo invece,

432
00:35:00,040 --> 00:35:04,640
il lordo che una variante della
colonia ortodossa dice lo stato

433
00:35:04,640 --> 00:35:09,280
deve essere forte per garantire
gli istituti che presidiano la

434
00:35:09,280 --> 00:35:15,120
concorrenza è qualcosa che in
qualche modo lo ripetiamo in

435
00:35:15,120 --> 00:35:19,020
controluce, quando vediamo, queste
autorete, Che secondo me sono

436
00:35:19,020 --> 00:35:23,840
praticamente inesistenti, che però
di fatto avrebbero lo scopo di

437
00:35:23,840 --> 00:35:27,760
presidiare, quello, che è
l'elemento principale, che

438
00:35:27,760 --> 00:35:32,440
secondo, questi, questa,
concezione cioè; il bene; supremo

439
00:35:32,440 --> 00:35:36,890
che è la concorrenza, a mora dice
chi chuan e buffo che in fondo

440
00:35:36,890 --> 00:35:43,030
questi economisti danno la
concorrenza; il Monopolio del

441
00:35:43,030 --> 00:35:45,630
coordinamento quindi c'è in questo
gioco di parole, fra, la

442
00:35:45,630 --> 00:35:49,720
concorrenza e, il fatto che la
conferenza diventato, il monopolio

443
00:35:49,720 --> 00:35:52,560
degli strumenti coordinamento ecco
l'idea dissi, ma è che la

444
00:35:52,560 --> 00:35:58,400
concorrenza, è uno strumento
troppo fragile per coordinare le

445
00:35:58,400 --> 00:36:02,400
decisioni all'inizio troppo
fragile per i paesi sviluppo Ma

446
00:36:02,400 --> 00:36:10,640
poi man, mano ha esteso il suo suo
ragionamento anche, ai paesi,

447
00:36:10,640 --> 00:36:15,680
sviluppati e rocchi con emily la
gente collante delle incisioni

448
00:36:15,680 --> 00:36:20,480
com'è che si può effettivamente
risolvere il problema diciamo che

449
00:36:20,480 --> 00:36:24,860
a aic aveva posto dell'assenza di
uno, stato centralizzato

450
00:36:24,860 --> 00:36:28,840
onnipotente di un'economia
sottosviluppata in cui c'è Bisogno

451
00:36:28,840 --> 00:36:33,400
però di un intervento pubblico per
smuovere la situazione ecco lui e

452
00:36:33,400 --> 00:36:37,950
di e sarà allora, a questo punto
propone questo concetto che sono

453
00:36:37,950 --> 00:36:44,680
le connessioni come agenti
collanti dello sviluppo cioè

454
00:36:44,680 --> 00:36:48,560
invece dei prezzi che non hanno,
questa funzione non riescono; a

455
00:36:48,560 --> 00:36:53,320
fare, questo questa operazione di
Incollamento delle relazioni e dei

456
00:36:53,320 --> 00:36:56,720
delle conoscenze lo sviluppo è
definito un problema di

457
00:36:56,720 --> 00:37:02,680
coordinamento di decisioni
sequenziali in una situazione di

458
00:37:02,680 --> 00:37:07,860
profonda incertezza e diffusa
inadeguatezza nella capacità di

459
00:37:07,860 --> 00:37:11,320
prendere decisioni ecco non
possono essere.

460
00:37:11,320 --> 00:37:17,280
I prezzi e latini come momento nel
astratta caso la mia capacità

461
00:37:17,280 --> 00:37:20,560
amministrative di uno, stato
centralizzato gli argenti collanti

462
00:37:20,560 --> 00:37:24,600
sono appunto le connessioni, con
sono queste connessioni sono

463
00:37:24,600 --> 00:37:29,440
forze, che generano investimenti e
diversificazione di prodotti, qui

464
00:37:29,440 --> 00:37:33,630
ci stiamo avvicinando all'idea
quindi non del palloncino ma di

465
00:37:33,630 --> 00:37:40,320
un'altra Cosa non un'espansione
della stessa cosa come dilatazione

466
00:37:40,320 --> 00:37:45,480
in scala di un embrione ma invece
un processo di diversificazione

467
00:37:45,480 --> 00:37:51,360
continua di variazione continua di
produzione di varietà di prodotti

468
00:37:51,360 --> 00:37:59,440
ecco vengono distinte quindi
queste queste forze in due

469
00:37:59,440 --> 00:38:03,600
inizialmente in due categorie cioè
si parla al fatto che in Economia

470
00:38:03,600 --> 00:38:09,280
si trovano a partire facciamo
faccio un esempio mi riferisco, a

471
00:38:09,280 --> 00:38:13,240
persona esempio supponiamo di
prendere una filiera che produce

472
00:38:13,240 --> 00:38:17,000
mobilio e abbiamo varie strade
nella meccanica poi, si fanno

473
00:38:17,000 --> 00:38:20,640
macchine al taglio, poi l'opera
l'operazione, che fanno, il taglio

474
00:38:20,640 --> 00:38:24,840
dei tronchi e poi c'è la signoria,
poi C'È il mobilio questa è una

475
00:38:24,840 --> 00:38:27,680
schematizzazione di questa, cosa
ma supponiamo di essere,

476
00:38:27,680 --> 00:38:31,200
un'economia sottosviluppata in cui
queste attività se ne presenti

477
00:38:31,200 --> 00:38:36,960
solamente una per esempio oppure
nessuno è semplicemente si stanno

478
00:38:36,960 --> 00:38:42,200
importando dai mobili dall'esterno
quello che dice, kidman è che se,

479
00:38:42,200 --> 00:38:45,720
si comincia in tua attuare Per
esempio con operare una

480
00:38:45,720 --> 00:38:50,560
un'attività che sostituisce le
importazioni e per esempio produce

481
00:38:50,560 --> 00:38:54,160
mobilio poi ci sono delle come
dire, forze abbastanza,

482
00:38:54,160 --> 00:39:01,960
automatiche, che spingono gli
imprenditori, a colmare il vuoto

483
00:39:01,960 --> 00:39:07,800
esistente facciamo costo
investendo nelle fasi, che sono, a

484
00:39:09,200 --> 00:39:13,600
monte e quindi queste frasi che
successo la Segheria e poi i tagli

485
00:39:13,600 --> 00:39:16,360
di tronchi e poi la macchina,
taglia poi la meccanica, sono per

486
00:39:16,360 --> 00:39:19,760
così, dire degli eventi
successivi, che inizialmente non

487
00:39:19,760 --> 00:39:22,440
c'erano che man, mano
costruiscono, la filiera,

488
00:39:22,440 --> 00:39:26,520
attraverso investimenti, cosa può
fare lo stato ecco gli economisti

489
00:39:26,520 --> 00:39:29,920
nei paesi di sviluppo, dicevano ma
dobbiamo.

490
00:39:29,920 --> 00:39:33,880
Prima fare gli investimenti in
infrastrutture in energia in

491
00:39:33,880 --> 00:39:38,960
strada eccetera energia, elettrica
e acciaio oppure dobbiamo partire

492
00:39:38,960 --> 00:39:44,920
invece da spese e investimenti
produttivi tipo mobili, o altre

493
00:39:44,920 --> 00:39:49,600
cose sono arrivati ceva ci sono
delle sequenze, che sono per così,

494
00:39:49,600 --> 00:39:54,960
dire più obbligate di anni, 3 più
cogenti e Allora se io facciamo

495
00:39:54,960 --> 00:40:00,080
aiuto, a costruire degli delle
filiere che risalgono la corrente

496
00:40:00,080 --> 00:40:03,200
per esempio dal mobilio vanno
indietro fino alla segheria

497
00:40:03,200 --> 00:40:08,140
eccetera c'è un risparmio di
quella, che è la canna, carenza

498
00:40:08,140 --> 00:40:12,720
fondamenta la capacità di
incisione, delle dei prenditori

499
00:40:12,720 --> 00:40:15,560
perché saranno, gli, stessi,
imprenditori e per Così dire

500
00:40:15,560 --> 00:40:19,920
svolgono, questa attività quindi
c'è una parte indotta alla parte

501
00:40:19,920 --> 00:40:24,800
per così dire automatica ora
questa differenza fra, sequenza e

502
00:40:24,800 --> 00:40:31,320
automatiche e sequenze per così
dire promosse, a discrezionale da

503
00:40:31,320 --> 00:40:35,040
parte lo stato è molto importante
perché ci aiuterebbe oggi per

504
00:40:35,040 --> 00:40:40,380
esempio, a capire il governo si
Sta mettendo delle iniziative di

505
00:40:40,380 --> 00:40:48,480
tipo come dire, certo automatico,
oppure, semplicemente, promuove

506
00:40:48,480 --> 00:40:54,320
delle possibilità io credo che per
quanto riguarda sfascio capito,

507
00:40:54,320 --> 00:40:58,080
sul moderno se noi viviamo
l'intervento, sul cuneo, fiscale,

508
00:40:58,080 --> 00:41:01,920
sul costo del lavoro, se noi
vediamo anche gli, interventi, sul

509
00:41:01,920 --> 00:41:04,880
mercato del lavoro, se ne vediamo
La stessa importanza attribuita la

510
00:41:04,880 --> 00:41:09,240
politica, monetaria tutti, questi,
sono degli interventi di tipo,

511
00:41:09,240 --> 00:41:14,520
indiretto, ma ha mediato nel
senso, che io devo aver bisogno

512
00:41:14,520 --> 00:41:20,770
già di una attività in atto, o di
una domanda perché questo possa

513
00:41:20,770 --> 00:41:24,000
sorgere si altrimenti non sto,
facendo altro che un regalo dei

514
00:41:24,000 --> 00:41:28,720
Soldi, a persone che, già stanno
attuando la loro, attività ma non

515
00:41:28,720 --> 00:41:32,760
sto, promuovendo una nuova, dieta,
che questo sarebbe, molto diverso

516
00:41:32,760 --> 00:41:36,560
se venissero attuate, misure tipo
new deal piquet new deal, come

517
00:41:36,560 --> 00:41:41,520
aveva proposto, il genere, o anche
da un pink ma insomma comunque

518
00:41:41,520 --> 00:41:45,040
creazione di lavoro, diretto
Perché lo saremmo sicuri che la

519
00:41:45,040 --> 00:41:51,200
connessione, la prima connessione
sarebbe efficace e poi sarebbero

520
00:41:52,360 --> 00:41:56,040
poi delle altre quindi, ritornare,
alle, connessioni e ne abbiamo,

521
00:41:56,040 --> 00:41:58,520
delle condizioni, a monte delle
connessioni, a valle nel senso che

522
00:41:58,520 --> 00:42:02,640
se io sono per esempio, a metà e
sto presentano delle macchina

523
00:42:02,640 --> 00:42:06,870
taglio Posso pensare che queste
macchina taglio possono servire, a

524
00:42:06,870 --> 00:42:09,960
promuovere iniziative che
utilizzano le macchine taglio e

525
00:42:09,960 --> 00:42:13,100
quindi, a valle il taglio dei
tronchi segherie in un video

526
00:42:13,100 --> 00:42:16,660
quindi, a seconda trovato indietro
avanti, o delle conoscerà, monte,

527
00:42:16,660 --> 00:42:19,600
ovale, ma ho anche delle
connessioni orizzontali e cioè,

528
00:42:19,600 --> 00:42:23,320
dalla meccanica Verso il mobilio
ma poi ci sono dei sottoprodotti

529
00:42:23,320 --> 00:42:28,060
trucioli carta oppure, ma che da
taglio caravaggio con le

530
00:42:28,060 --> 00:42:32,190
produzione alla fine e mi scuso
per l'inglese adesso abbiamo tutto

531
00:42:32,190 --> 00:42:37,200
il complesso abbiamo dei
connessioni orizzontali e

532
00:42:37,200 --> 00:42:42,720
verticali e quello che voglio
sottolineare è che quello, che è

533
00:42:44,800 --> 00:42:48,040
avvenuto Non è soltanto un
attività economica indifferenziata

534
00:42:48,040 --> 00:42:55,520
ma si sono prodotti delle nuove
produzioni e nuove competenze cioè

535
00:42:57,120 --> 00:42:59,520
l'attivazione di connessioni da
luogo alla lista di risolvere

536
00:43:01,680 --> 00:43:08,050
problemi e dell'attività anche le
competenze diner attivate cioè

537
00:43:08,050 --> 00:43:12,160
non, so se voi siete siete qualità
di quella discussione.

538
00:43:12,160 --> 00:43:18,840
I 60 digos che piace per quanto
riguarda chi precede chi se la

539
00:43:18,840 --> 00:43:23,000
pratica precede il pensiero e
piace, prima aveva detto ma prima

540
00:43:23,000 --> 00:43:27,940
si pensa e poi dopo se agisce dopo
che ricorsi il vento provare a

541
00:43:27,940 --> 00:43:32,320
dice contrario prima si agisce e
nell'azione si modifica il

542
00:43:32,320 --> 00:43:35,320
pensiero Ecco qui siamo
esattamente in questo mondo nel

543
00:43:35,320 --> 00:43:40,160
senso che se, si attivano della
delizia tive anche, il pensiero si

544
00:43:40,160 --> 00:43:43,600
mobilita anche qui siamo di fronte
in fondo all'idea

545
00:43:43,600 --> 00:43:48,520
dell'antagonista, che sollecita
abbiamo, un problema i propri

546
00:43:48,520 --> 00:43:53,800
soldi beh questo ci pizza.
I nostri focalizzare la nostra

547
00:43:53,800 --> 00:43:59,520
attenzione e su questo dobbiamo
concentrare la nostra competenza e

548
00:43:59,520 --> 00:44:04,120
quindi è questo che per così dire
da nuovo ad un risultato quindi

549
00:44:04,120 --> 00:44:10,080
l'idea di man e che lo sviluppo è
sì produzione di prodotti, nuovi

550
00:44:12,840 --> 00:44:18,040
quindi, varietà, ma anche
istruzioni accrescimento di

551
00:44:19,320 --> 00:44:23,770
competenza E questo che cambia
rispetto alla visione del

552
00:44:23,770 --> 00:44:30,320
palloncino tutte e, due le cose
sia il fatto che le competenze in

553
00:44:30,320 --> 00:44:34,520
qualche, modo possono
incontrollato svilupparsi proprio

554
00:44:34,520 --> 00:44:41,090
perché partono dall azione sia, il
fatto tutto la crescita se

555
00:44:41,090 --> 00:44:48,200
vogliamo meglio dire lo sviluppo è
qualcosa, che dà luogo, a Una

556
00:44:48,200 --> 00:44:52,840
varietà di prodotti ecco qui, a
trans fitte e stato per così, dire

557
00:44:52,840 --> 00:44:56,800
maltrattato perché gli economisti
ortodossi hanno preso di ha,

558
00:44:56,800 --> 00:45:01,160
trasmesso solo, un discorso nella
fabbrica, degli spilli della

559
00:45:01,160 --> 00:45:07,250
divisione del lavoro era; il
ricchissimo ha parlato anche del

560
00:45:07,250 --> 00:45:10,600
fatto, che più si specializza del
lavoro Più scrivente a cretini

561
00:45:10,600 --> 00:45:14,960
leccese pagina bellissima sul
fatto che è necessario invece

562
00:45:16,080 --> 00:45:20,580
cercare di far sì che le persone
possono in qualche, modo avere

563
00:45:20,580 --> 00:45:24,960
qualcosa in più della cura di
petina del lavoro, perché devono

564
00:45:24,960 --> 00:45:29,760
essere io di conversare e se,
necessario dice lui andare, a

565
00:45:29,760 --> 00:45:31,800
combattere per Difendere la
patria, quindi ci vuole in

566
00:45:31,800 --> 00:45:37,530
istruzione ha sempre, genova,
spremitura, delle, energie di

567
00:45:37,530 --> 00:45:42,880
attraverso, la fabbricazione, a
lasciarlo di compiti, sempre più

568
00:45:42,880 --> 00:45:47,320
suddivisi ci porterebbe malissimo
e, come linea, dentro anche questo

569
00:45:47,320 --> 00:45:50,340
che la grande moltiplicazione dei
prodotti tre le cose con stiamo

570
00:45:50,340 --> 00:45:55,710
parlando tutte le varie Arti in
conseguenza della divisione del

571
00:45:55,710 --> 00:45:58,240
lavoro, è all'origine di una,
società ben governata di una,

572
00:45:58,240 --> 00:46:01,640
generale prosperità, che sei dei,
suoi benefici fino alle classi più

573
00:46:01,640 --> 00:46:05,440
basse del popolo ecco quindi, che
cosa stiamo di fronte siamo di

574
00:46:05,440 --> 00:46:08,880
fronte ad una situazione in cui
invece di avere, un Palo città che

575
00:46:08,880 --> 00:46:12,840
si gonfia abbiamo invece una
specie di ventaglio di prodotti,

576
00:46:12,840 --> 00:46:15,680
che certo hanno la divisione del
lavoro, ma questo ventaglio di

577
00:46:15,680 --> 00:46:18,840
prodotti, si può verificare
occorrono si può verificare perché

578
00:46:18,840 --> 00:46:23,200
maledetto che quelle connessioni
che ho detto si verificano possono

579
00:46:23,200 --> 00:46:27,040
anche non verificarsi mai e allora
Rimarremo in un deserto di

580
00:46:27,040 --> 00:46:32,120
prodotti ma se invece queste
connessioni vengono per così, dire

581
00:46:32,120 --> 00:46:38,140
stimolate e sorrette allora
possiamo pensare di ecco, adesso

582
00:46:38,140 --> 00:46:44,680
vi, farò vedere una cosa, che
riguarda l'oggi e che sempre

583
00:46:44,680 --> 00:46:47,650
riguarda, il problema della
diversificazione e questa è una

584
00:46:47,650 --> 00:46:54,640
cosa, che io credo che Sia
importante cioè la

585
00:46:54,640 --> 00:46:59,860
diversificazione, a due dimensioni
possibili una e la

586
00:46:59,860 --> 00:47:05,160
diversificazione fra.
I prodotti ed è segnata sull'asse

587
00:47:05,160 --> 00:47:09,200
orizzontale sono, il numero delle
categorie dei prodotti esportati

588
00:47:09,200 --> 00:47:12,560
dai singoli paesi allora noi
vediamo che per esempio gli

589
00:47:12,560 --> 00:47:18,040
stabili, il paese sono diciamo
caratterizzati da ogni punto del

590
00:47:18,040 --> 00:47:21,680
paese allora gli stati uniti per
esempio hanno un'alta

591
00:47:21,680 --> 00:47:26,960
diversificazione fra.
I prodotti nel senso che riportano

592
00:47:26,960 --> 00:47:32,520
sia automobili che per eli da
barba che varie cose però

593
00:47:32,520 --> 00:47:37,080
sull'asse verticale c'è un'altra
cosa cioè, il numero quello che si

594
00:47:37,080 --> 00:47:41,240
chiama diversificazione verticale
cioè per ogni data, categoria per

595
00:47:41,240 --> 00:47:45,640
esempio automobili quante fifa e
di prodotti, ci sono c'è la panda,

596
00:47:45,640 --> 00:47:49,560
La smart da un lato la mercedes
eccetera e quindi c'è una

597
00:47:49,560 --> 00:47:53,720
diversificazione per così, dire
per fascia però quello che si vede

598
00:47:53,720 --> 00:47:56,240
è che.
I paesi più ricchi che sono sulla,

599
00:47:56,240 --> 00:48:02,720
parte destra sono quelli, che
hanno cumulato, si ha un'elevata

600
00:48:02,720 --> 00:48:06,860
diversificazione fra.
I prodotti ma anche entro.

601
00:48:06,860 --> 00:48:13,400
I prodotti questo cosa vuol dire
vuol dire che la concorrenza

602
00:48:13,400 --> 00:48:18,920
avviene per i paesi più ricchi
avviene soprattutto sulle fasce e

603
00:48:18,920 --> 00:48:24,760
quindi sulle qualità è tutto, il
contrario di quello, che ci diceva

604
00:48:24,760 --> 00:48:27,560
la teoria della crescita perché
l'ateneo cresce la diceva c'è la

605
00:48:27,560 --> 00:48:31,680
concorrenza di prezzo, dobbiamo
Produrre il primo pronto perché se

606
00:48:31,680 --> 00:48:34,310
abbiamo i prezzi più bassi
riusciamo, a vincere supplicare

607
00:48:34,310 --> 00:48:39,320
ci, dice un'altra cosa lo sviluppo
dei paesi avviene mediante la

608
00:48:39,320 --> 00:48:43,200
diversificazione; se si riesce a
farlo se non si riesce a farlo si

609
00:48:43,200 --> 00:48:46,720
rimane poveri quindi.
I paesi più poveri sono quelli che

610
00:48:46,720 --> 00:48:50,560
sono cd poco, a diversificarsi
quanto più ci si diversifica e il

611
00:48:50,560 --> 00:48:56,980
sistema diventa più complicato
anche diventa possibile, a

612
00:48:56,980 --> 00:49:01,800
moltiplicare le facce dei prodotti
possiamo anche dire che purtroppo

613
00:49:01,800 --> 00:49:05,600
è la divaricazione nella
disuguaglianza dei redditi che

614
00:49:05,600 --> 00:49:09,440
consente questa divaricazione di
Fascia c'è quello che compra il

615
00:49:09,440 --> 00:49:13,240
prodotto che costa poco e
quell'altra questo anche detto

616
00:49:13,240 --> 00:49:17,240
però comunque c'è una varietà, sia
dei prodotti che fa.

617
00:49:17,240 --> 00:49:20,240
I prodotti ecco.
I paesi più poveri invece che sono

618
00:49:20,240 --> 00:49:24,000
alla parte sinistra sono invece
quelli, che hanno bassa

619
00:49:24,000 --> 00:49:28,440
diversificazione, farai prodotti e
all'interno dei prodotti

620
00:49:28,440 --> 00:49:32,760
praticamente nulla ecco quindi
questo ci dà un'idea quindi come

621
00:49:32,760 --> 00:49:36,650
avviene la concorrenza, ed i quali
sarebbero come dire, le

622
00:49:36,650 --> 00:49:45,360
circostanze, che potrebbero essere
attuate nel Della sun che

623
00:49:45,360 --> 00:49:50,680
dell'associazione attuale perché è
un concetto di sviluppo, a

624
00:49:50,680 --> 00:49:54,180
differenza di una di crescita
punta proprio, l'attenzione sulla

625
00:49:54,180 --> 00:49:58,000
diversificazione dei prodotti e
sulla qualità dei prodotti quindi

626
00:49:58,000 --> 00:50:03,070
sulla concorrenza basata sono
guarita ecco volevo, prima di

627
00:50:03,070 --> 00:50:08,230
concludere, dire ancora due non
riuscirò; a dire una cosa Che mi

628
00:50:08,230 --> 00:50:12,800
stava, a cuore la pazienza, già
pur sempre e cioè dirò qualcosa

629
00:50:12,800 --> 00:50:21,280
sullo sviluppo equilibrato e
squilibrato ecco contro gli utero

630
00:50:21,280 --> 00:50:27,480
dossi, che appunto accettando
l'idea dello sviluppo contro la

631
00:50:27,480 --> 00:50:33,120
crescita; che si chiamavano lux e,
il rosario dow che proponevano di

632
00:50:33,120 --> 00:50:37,600
fare un piano di progettare;
Simultaneamente un intervento su

633
00:50:37,600 --> 00:50:40,960
una pluralità di settori e quindi
cercare in questa maniera di

634
00:50:40,960 --> 00:50:46,080
rompere la vetrata, con quello che
si chiamava bicus una grande

635
00:50:46,080 --> 00:50:50,880
spinta e sparisce ma noi non siamo
capaci di fare tutte le cose

636
00:50:50,880 --> 00:50:55,920
insieme perché le nostre
competenze è questo il punto di

637
00:50:55,920 --> 00:51:00,560
Partenza sono scarsa e quindi come
possiamo pensare di avere la

638
00:51:00,560 --> 00:51:03,420
possibilità di travo, piano
completo, quando siamo in una

639
00:51:03,420 --> 00:51:08,520
situazione così sia stata meglio
fare un passo alla volta e creare

640
00:51:08,520 --> 00:51:12,280
una situazione per cui si crea uno
squilibrio quindi lo sviluppo

641
00:51:12,280 --> 00:51:15,680
squilibrato e lo sviluppo
squilibrato in Qualche modo

642
00:51:15,680 --> 00:51:21,920
attiverà delle azioni che sono di
tipo, sia economico automatico,

643
00:51:21,920 --> 00:51:27,870
che anche politico per risolvere
la disuguaglianza, iniziale quindi

644
00:51:27,870 --> 00:51:32,920
c'è un idea, secondo cui lo
squilibrio nei limiti in cui si

645
00:51:32,920 --> 00:51:36,550
può pensare che sia autocorrettivo
e positivo è, il contrario

646
00:51:36,550 --> 00:51:42,640
dell'altra la teoria, che invece
dice Che l'equilibrio è un momento

647
00:51:42,640 --> 00:51:46,400
meraviglioso dell'economia qui
invece, no dobbiamo provocare

648
00:51:46,400 --> 00:51:50,230
degli squilibri e fa, l'esempio
per esempio provochiamo una

649
00:51:50,230 --> 00:51:54,360
industrializzazione su un settore
non su tutti.

650
00:51:54,360 --> 00:51:58,160
I settori che non siamo capaci ci
sarà poi una carenza di energia,

651
00:51:58,160 --> 00:52:01,320
elettrica a me: a quel punto ci
saranno delle forze che dicono

652
00:52:01,320 --> 00:52:05,280
dobbiamo per così, dire supplire,
a questa carenza e quindi facciamo

653
00:52:05,280 --> 00:52:08,680
le centrali ma se noi cominciamo,
a farne centrali poi chi è che

654
00:52:08,680 --> 00:52:13,620
Farà poi l'inizializzazione
nessuno siamo di fronte, ad una

655
00:52:13,620 --> 00:52:16,480
semplice, possibilità, ma non c'è,
nessuna urgenza assoluta di qui

656
00:52:17,800 --> 00:52:21,870
quindi la polemica, contro uno,
sviluppo, equilibrato ecco

657
00:52:21,870 --> 00:52:30,040
studiando, assoluto quindi; bravo,
squilibrato, gli ha dato una una,

658
00:52:30,040 --> 00:52:40,680
su una sofferenza perché, nel 69
c'è stato, un colpo di stato.

659
00:52:41,720 --> 00:52:48,580
In argentina e sono, generali è,
un sostenitore dei generali datori

660
00:52:48,580 --> 00:52:53,400
cimeli ed ecco pd, che anche noi
abbiamo seguito la strada di

661
00:52:53,400 --> 00:53:02,100
cecità, ci ha indicato e tu, ci,
volevano, sviluppo, squilibrato

662
00:53:02,100 --> 00:53:06,520
noi come come una giunta,
militare, stiamo, promuovendo la

663
00:53:06,520 --> 00:53:12,280
crescita, duramente, economica e
poi, dopo seguirà.

664
00:53:12,280 --> 00:53:16,820
Lo sviluppo delle ore di là, delle
libertà politiche, ma sarà una

665
00:53:16,820 --> 00:53:20,360
cosa, successiva allora lui
riflette su questo e allora diceva

666
00:53:20,360 --> 00:53:27,440
io avevo ragione allora, ma perché
e rifletto su questo è qui, il suo

667
00:53:27,440 --> 00:53:34,170
capacità di autocritica, allora
giorno, all'ora, ma parlavo di

668
00:53:34,170 --> 00:53:39,210
una, squilibrio interno, ai
Settori dell'economia in cui

669
00:53:39,210 --> 00:53:43,840
quello che teneva insieme.
I vari settori che potevano essere

670
00:53:43,840 --> 00:53:50,320
fra, loro collegati, dai dalle,
connessioni era, una relazione

671
00:53:50,320 --> 00:53:54,760
fra, fattoria prodotto cioè una
nazione, tecnologica c'era, un

672
00:53:54,760 --> 00:53:58,360
sistema per così, dire che poteva
funzionare meglio se aveva tutte

673
00:53:58,360 --> 00:54:03,100
questi stadi, precedenti e
successivi, ma nel terreno del

674
00:54:03,100 --> 00:54:07,400
passaggio, tra l'economia e la
Politica esiste la stessa,

675
00:54:07,400 --> 00:54:16,080
necessità per cui un'economia che
si sviluppa a poi necessariamente

676
00:54:16,080 --> 00:54:23,620
comportato uno sviluppo anche
della libertà e delle come dire,

677
00:54:23,620 --> 00:54:30,160
delle provvidenze sociali del
cordino spese per il welfare

678
00:54:30,160 --> 00:54:34,840
eccetera questo odio su 24 c'è un
articolo che tratta esattamente

679
00:54:34,840 --> 00:54:41,650
questo tema di iphone che Vuole
convincere la cina, a passare da

680
00:54:41,650 --> 00:54:45,920
una economia sicuramente basata
sugli investimenti sulla

681
00:54:45,920 --> 00:54:49,840
compressione dei consumi e delle
prede del welfare una fase di

682
00:54:49,840 --> 00:54:52,840
espansione, della domanda e diceva
guarda, come un fatto

683
00:54:52,840 --> 00:55:00,440
l'inghilterra che anche loro hanno
un certo punto sorpassati in

684
00:55:00,440 --> 00:55:07,490
maniera lieve dalla,
dall'economia, verso, L'Aumento

685
00:55:07,490 --> 00:55:12,140
del suffragio universale e poi il
primo dato luogo a tutele del

686
00:55:12,140 --> 00:55:19,480
welfare ha il caso è che la
l'inghilterra è un paese che per

687
00:55:19,480 --> 00:55:24,880
così dire essendo il primo che ho
in anticipo rispetto agli altri

688
00:55:24,880 --> 00:55:29,740
licei ocean ma in un altro tutto
questo all'interno dello

689
00:55:29,740 --> 00:55:35,720
stabilimento.
Dice uno dei potenti argomenti che

690
00:55:35,720 --> 00:55:40,860
ostacolano, il passaggio dalla
sviluppo economico, lo sviluppo

691
00:55:40,860 --> 00:55:44,000
politico, è l'argomento, che ha
usato, ai della cosiddetta messa,

692
00:55:44,000 --> 00:55:50,680
a repentaglio nel libro nella via
della schiavitù hayek nel 43

693
00:55:50,680 --> 00:55:55,680
diceva se noi appena lasciamo che
lo stato prenda, piede, subito ci

694
00:55:55,680 --> 00:55:59,240
troviamo.
Con la russia di stalin, quindi

695
00:55:59,240 --> 00:56:03,760
dobbiamo per così, dire quindi
evitare di passare, alle riforme

696
00:56:03,760 --> 00:56:09,960
sociali perché è una strada, senza
senza, fine per cui se noi

697
00:56:09,960 --> 00:56:16,720
introduciamo una libertà, nuova,
il welfare, diritti sociali

698
00:56:16,720 --> 00:56:23,790
perdiamo le libertà, individuali e
suffragio universale quindi la

699
00:56:23,790 --> 00:56:26,320
tesi, che riesce, a Discutere nel
libro che io vi, consiglio molto,

700
00:56:26,320 --> 00:56:29,520
schiava, retorica,
dell'intransigenza, è, appunto la

701
00:56:29,520 --> 00:56:33,610
cui attesa della messa, a
repentaglio che se io introdurre

702
00:56:33,610 --> 00:56:38,040
una riforma, su uno su un terreno
quello per esempio del welfare

703
00:56:38,040 --> 00:56:42,200
devono per forza necessariamente
rinunciare, a qualcos'altro ecco

704
00:56:43,760 --> 00:56:47,800
in realtà questa, accoglienza,
cioè, È un argomento retorico dice

705
00:56:47,800 --> 00:56:53,040
ma che non ha nulla di razionare,
ma altrettanto non è nulla di

706
00:56:53,040 --> 00:56:57,920
evitabile e, il fatto che
un'economia passi da uno sviluppo

707
00:56:57,920 --> 00:57:02,360
economico sotto la giunta militare
alla copertura della libertà

708
00:57:02,360 --> 00:57:05,640
politica e perché qui non siamo di
fronte come nel, caso delle

709
00:57:05,640 --> 00:57:10,600
Connessioni, a una specie di
struttura di sistema, che deve

710
00:57:10,600 --> 00:57:15,640
stare, insieme compattamente
perché possiamo avere, appunto uno

711
00:57:15,640 --> 00:57:20,320
sviluppo, dell'economia
eventualmente, ma

712
00:57:20,320 --> 00:57:25,320
contemporaneamente possiamo avere
argomenti, c'è qualcuno, che dice,

713
00:57:25,320 --> 00:57:28,520
già ma non siamo, ancora
abbastanza solidi, rimandiamo

714
00:57:28,520 --> 00:57:32,640
ancora non siamo, pronti che
esattamente la speciale che si fa

715
00:57:32,640 --> 00:57:35,920
In cina, ed avremo domani la
cosiddetta, politica dei due tempi

716
00:57:35,920 --> 00:57:38,600
che noi riconosciamo in altri
facciamo questo lei poi dopo,

717
00:57:38,600 --> 00:57:41,050
faremo, quest'altro, mancato,
questo, può, essere, prorogato,

718
00:57:41,050 --> 00:57:44,810
all'infinito quindi, dice jursone
in realtà, quella radio,

719
00:57:44,810 --> 00:57:49,510
ragionamento dello, sviluppo
squilibrato non può, essere

720
00:57:49,510 --> 00:57:54,560
pensato come un discorso astratto
generalizzabile Ma deve essere

721
00:57:54,560 --> 00:58:00,270
contestualizzato bisogna vedere se
ci sono effettivamente le forze,

722
00:58:00,270 --> 00:58:06,300
che spingono nella direzione del
recupero, degli automatismi oppure

723
00:58:06,300 --> 00:58:13,520
possiamo, realizzarlo e allora se
voglio concludere con questo punto

724
00:58:13,520 --> 00:58:18,400
c'è un un'idea di base, che noi
troviamo in tutti, gli scritti,

725
00:58:18,400 --> 00:58:23,160
riesce, anche secondo me va
recuperata, Cioè l'idea di non

726
00:58:23,160 --> 00:58:26,960
rimanere imprigionati in un
sistema rigido anche inserito da

727
00:58:28,680 --> 00:58:35,400
lui stesso costrutto perché lì
l'influenza dei colori è stata

728
00:58:35,400 --> 00:58:39,360
importante colonia scritto libro,
che è, stato, pubblicato colpito

729
00:58:39,360 --> 00:58:44,600
la mattina, la malattia, della
metafisica, qual, è, la tendenza,

730
00:58:44,600 --> 00:58:50,750
umana spiegabile, ma con cui
dobbiamo combattere.

731
00:58:50,750 --> 00:58:54,840
Con gli stessi quello di
perquisire, proiettare sulla

732
00:58:54,840 --> 00:59:00,250
realtà, i nostri desideri quindi
uno che volesse per così, dire

733
00:59:00,250 --> 00:59:08,120
vedere nella dittatura fase
temporanea è destinato, a cui

734
00:59:08,120 --> 00:59:13,550
rilascio farà valutare la
necessità cogente che porta dalla

735
00:59:13,550 --> 00:59:20,080
dittatura alla libertà quando
questa necessità dovrebbe essere

736
00:59:20,080 --> 00:59:24,880
verificata in concreto ma Non può
essere data in astratto se dove la

737
00:59:24,880 --> 00:59:28,120
la concepiamo in astratto, si
chiama in realtà proiettando sulla

738
00:59:28,120 --> 00:59:33,110
realtà.
I nostri desideri e questo dice il

739
00:59:33,110 --> 00:59:38,800
sun è qualcosa che è all'origine
di ogni, errore umano cioè cita

740
00:59:38,800 --> 00:59:42,240
una frase di kafka, che è,
bellissima, forse, sono qui, ma

741
00:59:45,680 --> 00:59:50,120
ecco questo in fondo tutti gli
errori, umani, sono dovuti al

742
00:59:50,120 --> 00:59:54,520
impazienza, ad un'interruzione
prematura dei procedimenti

743
00:59:54,520 --> 01:00:00,400
metodici ecco Questa intenzione
prematura perché avviene perché in

744
01:00:00,400 --> 01:00:03,730
qualche modo uno, come dire.
Si accontenta di poco si

745
01:00:03,730 --> 01:00:08,080
accontenta di de lieto fine mi
piace perché si può pure le

746
01:00:08,080 --> 01:00:11,360
venature anche del contrario
raccontare la situazione

747
01:00:11,360 --> 01:00:15,100
completamente catastrofica da qui
però si può uscire solo con la

748
01:00:15,100 --> 01:00:19,440
rivoluzione quindi di cui in
realtà critica entrambe questa,

749
01:00:19,440 --> 01:00:23,120
posizione, sia, quella pseudo
ottimistica.

750
01:00:23,120 --> 01:00:27,800
Che non si ferma nel punto
dell'ottimismo e non va oltre per

751
01:00:27,800 --> 01:00:30,920
vedere le controtendenze sia
quella ultra pessimistica che si

752
01:00:30,920 --> 01:00:35,240
ferma quando vede la catastrofe
per esempio critica se spesso la

753
01:00:35,240 --> 01:00:40,000
giovane, che aveva per così, dire
raccontato la storia, dell'arte

754
01:00:40,000 --> 01:00:43,640
rapporto, centro, varie,
proposito, fra, centro e Periferia

755
01:00:43,640 --> 01:00:48,040
diceva questi sono solamente una
un momento dell'analisi dobbiamo

756
01:00:48,040 --> 01:00:52,360
invece andare oltre vedere se dati
rapporti di potere asimmetrico,

757
01:00:52,360 --> 01:00:55,840
far centro in periferia non ci,
sono delle forze, che operano nel

758
01:00:55,840 --> 01:01:02,240
suo controtendenza ecco questa
abitudine, a vedere le forze in

759
01:01:02,240 --> 01:01:06,430
controtendenza è una cosa, che
secondo me Non è diffusa e credo

760
01:01:06,430 --> 01:01:10,100
che a questo forse dovremmo
cercare di ritornare sia per

761
01:01:10,100 --> 01:01:14,520
vedere per non raccontarci delle
balle sia positive sia per non

762
01:01:14,520 --> 01:01:19,310
raccontarci delle catastrofi che
qualche modo anche loro cc,

763
01:01:19,310 --> 01:01:23,320
rassicuro nelle nostre convinzioni
più profonde in realtà, le nostre

764
01:01:23,320 --> 01:01:26,920
missioni più, profondo, devono,
Essere messe in gioco dalla realtà

765
01:01:26,920 --> 01:01:30,730
che per così dire esterna al
nostro occhio per così, dire

766
01:01:30,730 --> 01:01:41,960
questo occhio esterno per così,
dire recuperarlo

`;