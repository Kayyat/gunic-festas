import React, { useState} from "react";
import "../styles.css"; 

const themes = [
  { "id": 1, "img": "/images/15-anos-1.jpg", "title": "15 ANOS 1", "price": "A partir de R$ 145,00" },
  { "id": 2, "img": "/images/15-anos-2.jpg", "title": "15 ANOS 2", "price": "A partir de R$ 145,00" },
  { "id": 3, "img": "/images/15-anos-lilás.jpg", "title": "15 ANOS LILÁS", "price": "A partir de R$ 145,00" },
  { "id": 4, "img": "/images/15-anos-rosa.jpg", "title": "15 ANOS ROSA", "price": "A partir de R$ 145,00" },
  { "id": 5, "img": "/images/18-rosa.jpg", "title": "18 ROSA", "price": "A partir de R$ 145,00" },
  { "id": 6, "img": "/images/18tão.jpg", "title": "18TÃO", "price": "A partir de R$ 145,00" },
  { "id": 7, "img": "/images/3-porquinhos.jpg", "title": "3 PORQUINHOS", "price": "A partir de R$ 145,00" },
  { "id": 8, "img": "/images/a-dama-e-o-vagabundo.jpg", "title": "A DAMA E O VAGABUNDO", "price": "A partir de R$ 145,00" },
  { "id": 9, "img": "/images/a-mae-ta-on.jpg", "title": "A MÃE TÁ ON", "price": "A partir de R$ 145,00" },
  { "id": 10, "img": "/images/abelhinha.jpg", "title": "ABELHINHA", "price": "A partir de R$ 145,00" },
  { "id": 11, "img": "/images/aladdin.jpg", "title": "ALADDIN", "price": "A partir de R$ 145,00" },
  { "id": 12, "img": "/images/alice-no-país-das-maravilhas.jpg", "title": "ALICE NO PAÍS DAS MARAVILHAS", "price": "A partir de R$ 145,00" },
  { "id": 13, "img": "/images/alice.jpg", "title": "ALICE", "price": "A partir de R$ 145,00" },
  { "id": 14, "img": "/images/aloha.jpg", "title": "ALOHA", "price": "A partir de R$ 145,00" },
  { "id": 15, "img": "/images/among-us.jpg", "title": "AMONG US", "price": "A partir de R$ 145,00" },
  { "id": 16, "img": "/images/amor.jpg", "title": "AMOR", "price": "A partir de R$ 145,00" },
  { "id": 17, "img": "/images/angry-birds.jpg", "title": "ANGRY BIRDS", "price": "A partir de R$ 145,00" },
  { "id": 18, "img": "/images/anos-70.jpg", "title": "ANOS 70", "price": "A partir de R$ 145,00" },
  { "id": 19, "img": "/images/anos-80.jpg", "title": "ANOS 80", "price": "A partir de R$ 145,00" },
  { "id": 20, "img": "/images/arlequina-baby.jpg", "title": "ARLEQUINA BABY", "price": "A partir de R$ 145,00" },
  { "id": 21, "img": "/images/arlequina.jpg", "title": "ARLEQUINA", "price": "A partir de R$ 145,00" },
  { "id": 22, "img": "/images/astronauta-1.jpg", "title": "ASTRONAUTA 1", "price": "A partir de R$ 145,00" },
  { "id": 23, "img": "/images/astronauta-2.jpg", "title": "ASTRONAUTA 2", "price": "A partir de R$ 145,00" },
  { "id": 24, "img": "/images/aviador.jpg", "title": "AVIADOR", "price": "A partir de R$ 145,00" },
  { "id": 25, "img": "/images/baby shark.jpg", "title": "BABY SHARK", "price": "A partir de R$ 145,00" },
  { "id": 26, "img": "/images/babytube.jpg", "title": "BABYTUBE", "price": "A partir de R$ 145,00" },
  { "id": 27, "img": "/images/bailarina 1.jpg", "title": "BAILARINA 1", "price": "A partir de R$ 145,00" },
  { "id": 28, "img": "/images/bailarina 2.jpg", "title": "BAILARINA 2", "price": "A partir de R$ 145,00" },
  { "id": 29, "img": "/images/bailarina 3.jpg", "title": "BAILARINA 3", "price": "A partir de R$ 145,00" },
  { "id": 30, "img": "/images/baile funk.jpg", "title": "BAILE FUNK", "price": "A partir de R$ 145,00" },
  { "id": 31, "img": "/images/bambam.jpg", "title": "BAMBAM", "price": "A partir de R$ 145,00" },
  { "id": 32, "img": "/images/barbie 1.jpg", "title": "BARBIE 1", "price": "A partir de R$ 145,00" },
  { "id": 33, "img": "/images/barbie 2.jpg", "title": "BARBIE 2", "price": "A partir de R$ 145,00" },
  { "id": 34, "img": "/images/basquete.jpg", "title": "BASQUETE", "price": "A partir de R$ 145,00" },
  { "id": 35, "img": "/images/batizado menina.jpg", "title": "BATIZADO MENINA", "price": "A partir de R$ 145,00" },
  { "id": 36, "img": "/images/batizado menino.jpg", "title": "BATIZADO MENINO", "price": "A partir de R$ 145,00" },
  { "id": 37, "img": "/images/batman 2.jpg", "title": "BATMAN 2", "price": "A partir de R$ 145,00" },
  { "id": 38, "img": "/images/bela adormecida.jpg", "title": "BELA ADORMECIDA", "price": "A partir de R$ 145,00" },
  { "id": 40, "img": "/images/bela e a fera.jpg", "title": "BELA E A FERA", "price": "A partir de R$ 145,00" },
  { "id": 41, "img": "/images/ben 10.jpg", "title": "BEN 10", "price": "A partir de R$ 145,00" },
  { "id": 42, "img": "/images/big hero.jpg", "title": "BIG HERO", "price": "A partir de R$ 145,00" },
  { "id": 43, "img": "/images/bob esponja.jpg", "title": "BOB ESPONJA", "price": "A partir de R$ 145,00" },
  { "id": 44, "img": "/images/bob zoom.jpg", "title": "BOB ZOOM", "price": "A partir de R$ 145,00" },
  { "id": 45, "img": "/images/bodas de ouro.jpg", "title": "BODAS DE OURO", "price": "A partir de R$ 145,00" },
  { "id": 46, "img": "/images/boiadeira.jpg", "title": "BOIADEIRA", "price": "A partir de R$ 145,00" },
  { "id": 47, "img": "/images/bolofofofos 2.jpg", "title": "BOLOFOFOS 2", "price": "A partir de R$ 145,00" },
  { "id": 48, "img": "/images/bolofofos.jpg", "title": "BOLOFOFOS", "price": "A partir de R$ 145,00" },
  { "id": 49, "img": "/images/boo mostros sa.jpg", "title": "BOO MOSTROS SA", "price": "A partir de R$ 145,00" },
  { "id": 50, "img": "/images/borboleta 2.jpg", "title": "BORBOLETA 2", "price": "A partir de R$ 145,00" },
  { "id": 51, "img": "/images/borboleta.jpg", "title": "BORBOLETA", "price": "A partir de R$ 145,00" },
  { "id": 52, "img": "/images/boteco 2.jpg", "title": "BOTECO 2", "price": "A partir de R$ 145,00" },
  { "id": 53, "img": "/images/boteco.jpg", "title": "BOTECO", "price": "A partir de R$ 145,00" },
  { "id": 54, "img": "/images/branca de neve baby.jpg", "title": "BRANCA DE NEVE BABY", "price": "A partir de R$ 145,00" },
  { "id": 55, "img": "/images/branca de neve.jpg", "title": "BRANCA DE NEVE", "price": "A partir de R$ 145,00" },
  { "id": 56, "img": "/images/cachaceira mocinha.jpg", "title": "CACHACEIRA MOCINHA", "price": "A partir de R$ 145,00" },
  { "id": 57, "img": "/images/capitão america.jpg", "title": "CAPITÃO AMERICA", "price": "A partir de R$ 145,00" },
  { "id": 58, "img": "/images/carnaval 2.jpg", "title": "CARNAVAL 2", "price": "A partir de R$ 145,00" },
  { "id": 59, "img": "/images/carnaval.jpg", "title": "CARNAVAL", "price": "A partir de R$ 145,00" },
  { "id": 60, "img": "/images/casamento.jpg", "title": "CASAMENTO", "price": "A partir de R$ 145,00" },
  { "id": 61, "img": "/images/cbf.jpg", "title": "CBF", "price": "A partir de R$ 145,00" },
  { "id": 62, "img": "/images/cerveja.jpg", "title": "CERVEJA", "price": "A partir de R$ 145,00" },
  { "id": 63, "img": "/images/chá de bebê (tu vens azul).jpg", "title": "CHÁ DE BEBÊ (TU VENS AZUL)", "price": "A partir de R$ 145,00" },
  { "id": 64, "img": "/images/chá de bebê (tu vens).jpg", "title": "CHÁ DE BEBÊ (TU VENS)", "price": "A partir de R$ 145,00" },
  { "id": 65, "img": "/images/chá de bebê 1.jpg", "title": "CHÁ DE BEBÊ 1", "price": "A partir de R$ 145,00" },
  { "id": 66, "img": "/images/chá de casa nova.jpg", "title": "CHÁ DE CASA NOVA", "price": "A partir de R$ 145,00" },
  { "id": 67, "img": "/images/chá de cozinha 2.jpg", "title": "CHÁ DE COZINHA 2", "price": "A partir de R$ 145,00" },
  { "id": 68, "img": "/images/chá de cozinha.jpg", "title": "CHÁ DE COZINHA", "price": "A partir de R$ 145,00" },
  { "id": 69, "img": "/images/chá de lingerie.jpg", "title": "CHÁ DE LINGERIE", "price": "A partir de R$ 145,00" },
  { "id": 70, "img": "/images/chá revelação (stitch).jpg", "title": "CHÁ REVELAÇÃO (STITCH)", "price": "A partir de R$ 145,00" },
  { "id": 71, "img": "/images/chá revelação 1.jpg", "title": "CHÁ REVELAÇÃO 1", "price": "A partir de R$ 145,00" },
  { "id": 72, "img": "/images/chá revelação 2.jpg", "title": "CHÁ REVELAÇÃO 2", "price": "A partir de R$ 145,00" },
  { "id": 73, "img": "/images/chá revelação 3.jpg", "title": "CHÁ REVELAÇÃO 3", "price": "A partir de R$ 145,00" },
  { "id": 74, "img": "/images/chá revelação 4.jpg", "title": "CHÁ REVELAÇÃO 4", "price": "A partir de R$ 145,00" },
  { "id": 75, "img": "/images/chá revelação 5.jpg", "title": "CHÁ REVELAÇÃO 5", "price": "A partir de R$ 145,00" },
  { "id": 76, "img": "/images/chá revelação 6.jpg", "title": "CHÁ REVELAÇÃO 6", "price": "A partir de R$ 145,00" },
  { "id": 77, "img": "/images/chaves.jpg", "title": "CHAVES", "price": "A partir de R$ 145,00" },
  { "id": 78, "img": "/images/chiquinha.jpg", "title": "CHIQUINHA", "price": "A partir de R$ 145,00" },
  { "id": 79, "img": "/images/churrasco.jpg", "title": "CHURRASCO", "price": "A partir de R$ 145,00" },
  { "id": 80, "img": "/images/cinderela 1.jpg", "title": "CINDERELA 1", "price": "A partir de R$ 145,00" },
  { "id": 81, "img": "/images/cinderela 2.jpg", "title": "CINDERELA 2", "price": "A partir de R$ 145,00" },
  { "id": 82, "img": "/images/circo 2.jpg", "title": "CIRCO 2", "price": "A partir de R$ 145,00" },
  { "id": 83, "img": "/images/circo rosa.jpg", "title": "CIRCO ROSA", "price": "A partir de R$ 145,00" },
  { "id": 84, "img": "/images/coraline.jpg", "title": "CORALINE", "price": "A partir de R$ 145,00" },
  { "id": 85, "img": "/images/coringa.jpg", "title": "CORINGA", "price": "A partir de R$ 145,00" },
  { "id": 86, "img": "/images/corujinhas.jpg", "title": "CORUJINHAS", "price": "A partir de R$ 145,00" },
  { "id": 87, "img": "/images/cry babies.jpg", "title": "CRY BABIES", "price": "A partir de R$ 145,00" },
  { "id": 88, "img": "/images/cuphead.jpg", "title": "CUPHEAD", "price": "A partir de R$ 145,00" },
  { "id": 89, "img": "/images/de repente rosa.jpg", "title": "DE REPENTE ROSA", "price": "A partir de R$ 145,00" },
  { "id": 90, "img": "/images/dead pool.jpg", "title": "DEAD POOL", "price": "A partir de R$ 145,00" },
  { "id": 91, "img": "/images/dia das crianças.jpg", "title": "DIA DAS CRIANÇAS", "price": "A partir de R$ 145,00" },
  { "id": 92, "img": "/images/dinossauros 1.jpg", "title": "DINOSSAUROS 1", "price": "A partir de R$ 145,00" },
  { "id": 93, "img": "/images/dinossauros 2.jpg", "title": "DINOSSAUROS 2", "price": "A partir de R$ 145,00" },
  { "id": 94, "img": "/images/dinossauros baby.jpg", "title": "DINOSSAUROS BABY", "price": "A partir de R$ 145,00" },
  { "id": 95, "img": "/images/divertidamente 1.jpg", "title": "DIVERTIDAMENTE 1", "price": "A partir de R$ 145,00" },
  { "id": 96, "img": "/images/divertidamente 2.jpg", "title": "DIVERTIDAMENTE 2", "price": "A partir de R$ 145,00" },
  { "id": 97, "img": "/images/doutor estranho.jpg", "title": "DOUTOR ESTRANHO", "price": "A partir de R$ 145,00" },
  { "id": 98, "img": "/images/dragão.jpg", "title": "DRAGÃO", "price": "A partir de R$ 145,00" },
  { "id": 99, "img": "/images/elefante baby.jpg", "title": "ELEFANTE BABY", "price": "A partir de R$ 145,00" },
  { "id": 100, "img": "/images/elena de avalor.jpg", "title": "ELENA DE AVALOR", "price": "A partir de R$ 145,00" },
  { "id": 101, "img": "/images/emily vick.jpg", "title": "EMILY VICK", "price": "A partir de R$ 145,00" },
  { "id": 102, "img": "/images/encanto.jpg", "title": "ENCANTO", "price": "A partir de R$ 145,00" },
  { "id": 103, "img": "/images/enrolados 2.jpg", "title": "ENROLADOS 2", "price": "A partir de R$ 145,00" },
  { "id": 104, "img": "/images/enrolados.jpg", "title": "ENROLADOS", "price": "A partir de R$ 145,00" },
  { "id": 105, "img": "/images/farofa.jpg", "title": "FAROFA", "price": "A partir de R$ 145,00" },
  { "id": 106, "img": "/images/feliz aniversario colorido.jpg", "title": "FELIZ ANIVERSÁRIO COLORIDO", "price": "A partir de R$ 145,00" },
  { "id": 107, "img": "/images/festa junina 1.jpg", "title": "FESTA JUNINA 1", "price": "A partir de R$ 145,00" },
  { "id": 108, "img": "/images/festa junina 2.jpg", "title": "FESTA JUNINA 2", "price": "A partir de R$ 145,00" },
  { "id": 109, "img": "/images/festa junina 3.jpg", "title": "FESTA JUNINA 3", "price": "A partir de R$ 145,00" },
  { "id": 110, "img": "/images/fitness.jpg", "title": "FITNESS", "price": "A partir de R$ 145,00" },
  { "id": 111, "img": "/images/flamingo.jpg", "title": "FLAMINGO", "price": "A partir de R$ 145,00" },
  { "id": 112, "img": "/images/flash.jpg", "title": "FLASH", "price": "A partir de R$ 145,00" },
  { "id": 113, "img": "/images/floral 2.jpg", "title": "FLORAL 2", "price": "A partir de R$ 145,00" },
  { "id": 114, "img": "/images/floral.jpg", "title": "FLORAL", "price": "A partir de R$ 145,00" },
  { "id": 115, "img": "/images/flork.jpg", "title": "FLORK", "price": "A partir de R$ 145,00" },
  { "id": 116, "img": "/images/formandos.jpg", "title": "FORMANDOS", "price": "A partir de R$ 145,00" },
  { "id": 117, "img": "/images/fortnite.jpg", "title": "FORTNITE", "price": "A partir de R$ 145,00" },
  { "id": 118, "img": "/images/frozen 1.jpg", "title": "FROZEN 1", "price": "A partir de R$ 145,00" },
  { "id": 119, "img": "/images/frozen 2.jpg", "title": "FROZEN 2", "price": "A partir de R$ 145,00" },
  { "id": 120, "img": "/images/fundo do mar.jpg", "title": "FUNDO DO MAR", "price": "A partir de R$ 145,00" },
  { "id": 121, "img": "/images/futebol 1.jpg", "title": "FUTEBOL 1", "price": "A partir de R$ 145,00" },
  { "id": 122, "img": "/images/futebol 2.jpg", "title": "FUTEBOL 2", "price": "A partir de R$ 145,00" },
  { "id": 123, "img": "/images/galinha pintadinha 1.jpg", "title": "GALINHA PINTADINHA 1", "price": "A partir de R$ 145,00" },
  { "id": 124, "img": "/images/galinha pintadinha 2.jpg", "title": "GALINHA PINTADINHA 2", "price": "A partir de R$ 145,00" },
  { "id": 125, "img": "/images/games.jpg", "title": "GAMES", "price": "A partir de R$ 145,00" },
  { "id": 126, "img": "/images/garfield.jpg", "title": "GARFIELD", "price": "A partir de R$ 145,00" },
  { "id": 127, "img": "/images/gato de botas.jpg", "title": "GATO DE BOTAS", "price": "A partir de R$ 145,00" },
  { "id": 128, "img": "/images/gato galatico.jpg", "title": "GATO GALÁTICO", "price": "A partir de R$ 145,00" },
  { "id": 129, "img": "/images/glitter.jpg", "title": "GLITTER", "price": "A partir de R$ 145,00" },
  { "id": 130, "img": "/images/gta.jpg", "title": "GTA", "price": "A partir de R$ 145,00" },
  { "id": 131, "img": "/images/happy birthday lilas.jpg", "title": "HAPPY BIRTHDAY LILÁS", "price": "A partir de R$ 145,00" },
  { "id": 132, "img": "/images/happy birthday preto.jpg", "title": "HAPPY BIRTHDAY PRETO", "price": "A partir de R$ 145,00" },
  { "id": 133, "img": "/images/happy bityhday branco.jpg", "title": "HAPPY BIRTHDAY BRANCO", "price": "A partir de R$ 145,00" },
  { "id": 134, "img": "/images/harry potter.jpg", "title": "HARRY POTTER", "price": "A partir de R$ 145,00" },
  { "id": 135, "img": "/images/hello kit.jpg", "title": "HELLO KITTY", "price": "A partir de R$ 145,00" },
  { "id": 136, "img": "/images/herois baby.jpg", "title": "HERÓIS BABY", "price": "A partir de R$ 145,00" },
  { "id": 137, "img": "/images/homem aranha 2.jpg", "title": "HOMEM ARANHA 2", "price": "A partir de R$ 145,00" },
  { "id": 138, "img": "/images/homem aranha.jpg", "title": "HOMEM ARANHA", "price": "A partir de R$ 145,00" },
  { "id": 139, "img": "/images/homem de ferro 2.jpg", "title": "HOMEM DE FERRO 2", "price": "A partir de R$ 145,00" },
  { "id": 140, "img": "/images/homem de ferro.jpg", "title": "HOMEM DE FERRO", "price": "A partir de R$ 145,00" },
  { "id": 141, "img": "/images/hotel transilvaia 1.jpg", "title": "HOTEL TRANSILVÂNIA 1", "price": "A partir de R$ 145,00" },
  { "id": 142, "img": "/images/hotel transivalnia 2.jpg", "title": "HOTEL TRANSILVÂNIA 2", "price": "A partir de R$ 145,00" },
  { "id": 143, "img": "/images/hulk.jpg", "title": "HULK", "price": "A partir de R$ 145,00" },
  { "id": 144, "img": "/images/instagram.jpg", "title": "INSTAGRAM", "price": "A partir de R$ 145,00" },
  { "id": 145, "img": "/images/jardim 2.jpg", "title": "JARDIM 2", "price": "A partir de R$ 145,00" },
  { "id": 146, "img": "/images/jardim.jpg", "title": "JARDIM", "price": "A partir de R$ 145,00" },
  { "id": 147, "img": "/images/joao pe de feijão.jpg", "title": "JOÃO PÉ DE FEIJÃO", "price": "A partir de R$ 145,00" },
  { "id": 148, "img": "/images/kokeshi.jpg", "title": "KOKESHI", "price": "A partir de R$ 145,00" },
  { "id": 149, "img": "/images/lady bug.jpg", "title": "LADY BUG", "price": "A partir de R$ 145,00" },
  { "id": 150, "img": "/images/lgbt.jpg", "title": "LGBT", "price": "A partir de R$ 145,00" },
  { "id": 151, "img": "/images/lgbtq+ 1.jpg", "title": "LGBTQ+ 1", "price": "A partir de R$ 145,00" },
  { "id": 152, "img": "/images/liga da justiça.jpg", "title": "LIGA DA JUSTIÇA", "price": "A partir de R$ 145,00" },
  { "id": 153, "img": "/images/lilo e stitch.jpg", "title": "LILO E STITCH", "price": "A partir de R$ 145,00" },
  { "id": 154, "img": "/images/little pony.jpg", "title": "LITTLE PONY", "price": "A partir de R$ 145,00" },
  { "id": 155, "img": "/images/lool.jpg", "title": "LOL", "price": "A partir de R$ 145,00" },
  { "id": 156, "img": "/images/looney tunes.jpg", "title": "LOONEY TUNES", "price": "A partir de R$ 145,00" },
  { "id": 157, "img": "/images/lucas neto azul.jpg", "title": "LUCAS NETO AZUL", "price": "A partir de R$ 145,00" },
  { "id": 158, "img": "/images/lucas neto rosa.jpg", "title": "LUCAS NETO ROSA", "price": "A partir de R$ 145,00" },
  { "id": 159, "img": "/images/luluca.jpg", "title": "LULUCA", "price": "A partir de R$ 145,00" },
  { "id": 160, "img": "/images/m&ms.jpg", "title": "M&MS", "price": "A partir de R$ 145,00" },
  { "id": 161, "img": "/images/madagascar.jpg", "title": "MADAGASCAR", "price": "A partir de R$ 145,00" },
  { "id": 162, "img": "/images/magali.jpg", "title": "MAGALI", "price": "A partir de R$ 145,00" },
  { "id": 163, "img": "/images/maria clara e jp.jpg", "title": "MARIA CLARA E JP", "price": "A partir de R$ 145,00" },
  { "id": 164, "img": "/images/mario 1.jpg", "title": "MARIO 1", "price": "A partir de R$ 145,00" },
  { "id": 165, "img": "/images/mario 2.jpg", "title": "MARIO 2", "price": "A partir de R$ 145,00" },
  { "id": 166, "img": "/images/mcqueen.jpg", "title": "MCQUEEN", "price": "A partir de R$ 145,00" },
  { "id": 167, "img": "/images/meninas super poderosas.jpg", "title": "MENINAS SUPER PODEROSAS", "price": "A partir de R$ 145,00" },
  { "id": 168, "img": "/images/meu malvado favorito.jpg", "title": "MEU MALVADO FAVORITO", "price": "A partir de R$ 145,00" },
  { "id": 169, "img": "/images/mickey 1.jpg", "title": "MICKEY 1", "price": "A partir de R$ 145,00" },
  { "id": 170, "img": "/images/mickey 2.jpg", "title": "MICKEY 2", "price": "A partir de R$ 145,00" },
  { "id": 171, "img": "/images/mickey.jpg", "title": "MICKEY", "price": "A partir de R$ 145,00" },
  { "id": 172, "img": "/images/minecraft 1.jpg", "title": "MINECRAFT 1", "price": "A partir de R$ 145,00" },
  { "id": 173, "img": "/images/minecraft 2.jpg", "title": "MINECRAFT 2", "price": "A partir de R$ 145,00" },
  { "id": 174, "img": "/images/minions.jpg", "title": "MINIONS", "price": "A partir de R$ 145,00" },
  { "id": 175, "img": "/images/minnie 1.jpg", "title": "MINNIE 1", "price": "A partir de R$ 145,00" },
  { "id": 176, "img": "/images/minnie 2.jpg", "title": "MINNIE 2", "price": "A partir de R$ 145,00" },
  { "id": 177, "img": "/images/moana 1.jpg", "title": "MOANA 1", "price": "A partir de R$ 145,00" },
  { "id": 178, "img": "/images/moana 2.jpg", "title": "MOANA 2", "price": "A partir de R$ 145,00" },
  { "id": 179, "img": "/images/moana 3.jpg", "title": "MOANA 3", "price": "A partir de R$ 145,00" },
  { "id": 180, "img": "/images/monica.jpg", "title": "MÔNICA", "price": "A partir de R$ 145,00" },
  { "id": 181, "img": "/images/monster high.jpg", "title": "MONSTER HIGH", "price": "A partir de R$ 145,00" },
  { "id": 182, "img": "/images/monster trucks.jpg", "title": "MONSTER TRUCKS", "price": "A partir de R$ 145,00" },
  { "id": 183, "img": "/images/monsters university.jpg", "title": "MONSTERS UNIVERSITY", "price": "A partir de R$ 145,00" },
  { "id": 184, "img": "/images/monstros sa.jpg", "title": "MONSTROS SA", "price": "A partir de R$ 145,00" },
  { "id": 185, "img": "/images/moranguinho.jpg", "title": "MORANGUINHO", "price": "A partir de R$ 145,00" },
  { "id": 186, "img": "/images/mulan.jpg", "title": "MULAN", "price": "A partir de R$ 145,00" },
  { "id": 187, "img": "/images/mulher maravilha 1.jpg", "title": "MULHER MARAVILHA 1", "price": "A partir de R$ 145,00" },
  { "id": 188, "img": "/images/mulher maravilha 2.jpg", "title": "MULHER MARAVILHA 2", "price": "A partir de R$ 145,00" },
  { "id": 189, "img": "/images/mundo bita 1.jpg", "title": "MUNDO BITA 1", "price": "A partir de R$ 145,00" },
  { "id": 190, "img": "/images/mundo bita 2.jpg", "title": "MUNDO BITA 2", "price": "A partir de R$ 145,00" },
  { "id": 191, "img": "/images/naruto.jpg", "title": "NARUTO", "price": "A partir de R$ 145,00" },
  { "id": 192, "img": "/images/nemo 2.jpg", "title": "NEMO 2", "price": "A partir de R$ 145,00" },
  { "id": 193, "img": "/images/nemo.jpg", "title": "NEMO", "price": "A partir de R$ 145,00" },
  { "id": 194, "img": "/images/neon 2.jpg", "title": "NEON 2", "price": "A partir de R$ 145,00" },
  { "id": 195, "img": "/images/neon 3.jpg", "title": "NEON 3", "price": "A partir de R$ 145,00" },
  { "id": 196, "img": "/images/neon.jpg", "title": "NEON", "price": "A partir de R$ 145,00" },
  { "id": 197, "img": "/images/neon4.jpg", "title": "NEON 4", "price": "A partir de R$ 145,00" },
  { "id": 198, "img": "/images/o magico de oz.jpg", "title": "O MÁGICO DE OZ", "price": "A partir de R$ 145,00" },
  { "id": 199, "img": "/images/o pai ta on.jpg", "title": "O PAI TÁ ON", "price": "A partir de R$ 145,00" },
  { "id": 200, "img": "/images/octonautas.jpg", "title": "OCTONAUTAS", "price": "A partir de R$ 145,00" },
  { "id": 201, "img": "/images/omly fans.jpg", "title": "ONLY FANS", "price": "A partir de R$ 145,00" },
  { "id": 202, "img": "/images/outubro rosa.jpg", "title": "OUTUBRO ROSA", "price": "A partir de R$ 145,00" },
  { "id": 203, "img": "/images/padrinhos mágicos.jpg", "title": "PADRINHOS MÁGICOS", "price": "A partir de R$ 145,00" },
  { "id": 204, "img": "/images/pagodinho.jpg", "title": "PAGODINHO", "price": "A partir de R$ 145,00" },
  { "id": 205, "img": "/images/panda.jpg", "title": "PANDA", "price": "A partir de R$ 145,00" },
  { "id": 206, "img": "/images/pascoa 2.jpg", "title": "PÁSCOA 2", "price": "A partir de R$ 145,00" },
  { "id": 207, "img": "/images/pascoa 3.jpg", "title": "PÁSCOA 3", "price": "A partir de R$ 145,00" },
  { "id": 208, "img": "/images/pascoa.jpg", "title": "PÁSCOA", "price": "A partir de R$ 145,00" },
  { "id": 209, "img": "/images/passaros pasteis.jpg", "title": "PÁSSAROS PASTÉIS", "price": "A partir de R$ 145,00" },
  { "id": 210, "img": "/images/patati patata.jpg", "title": "PATATI PATATÁ", "price": "A partir de R$ 145,00" },
  { "id": 211, "img": "/images/patins.jpg", "title": "PATINS", "price": "A partir de R$ 145,00" },
  { "id": 212, "img": "/images/patrulha canina 1.jpg", "title": "PATRULHA CANINA 1", "price": "A partir de R$ 145,00" },
  { "id": 213, "img": "/images/patrulha canina 2.jpg", "title": "PATRULHA CANINA 2", "price": "A partir de R$ 145,00" },
  { "id": 214, "img": "/images/pedrita.jpg", "title": "PEDRITA", "price": "A partir de R$ 145,00" },
  { "id": 215, "img": "/images/peppa pig 1.jpg", "title": "PEPPA PIG 1", "price": "A partir de R$ 145,00" },
  { "id": 216, "img": "/images/peppa pig 2.jpg", "title": "PEPPA PIG 2", "price": "A partir de R$ 145,00" },
  { "id": 217, "img": "/images/pequena sereia 1.jpg", "title": "PEQUENA SEREIA 1", "price": "A partir de R$ 145,00" },
  { "id": 218, "img": "/images/pequena sereia 2.jpg", "title": "PEQUENA SEREIA 2", "price": "A partir de R$ 145,00" },
  { "id": 219, "img": "/images/pequeno principe.jpg", "title": "PEQUENO PRÍNCIPE", "price": "A partir de R$ 145,00" },
  { "id": 220, "img": "/images/pikachu.jpg", "title": "PIKACHU", "price": "A partir de R$ 145,00" },
  { "id": 221, "img": "/images/pin up.jpg", "title": "PIN UP", "price": "A partir de R$ 145,00" },
  { "id": 222, "img": "/images/pinguins de madagascar.jpg", "title": "PINGUINS DE MADAGASCAR", "price": "A partir de R$ 145,00" },
  { "id": 223, "img": "/images/pipas.jpg", "title": "PIPAS", "price": "A partir de R$ 145,00" },
  { "id": 224, "img": "/images/pirata.jpg", "title": "PIRATA", "price": "A partir de R$ 145,00" },
  { "id": 225, "img": "/images/pj masks.jpg", "title": "PJ MASKS", "price": "A partir de R$ 145,00" },
  { "id": 226, "img": "/images/pocoyo.jpg", "title": "POCOYO", "price": "A partir de R$ 145,00" },
  { "id": 227, "img": "/images/poderoso chefinho 1.jpg", "title": "PODEROSO CHEFINHO 1", "price": "A partir de R$ 145,00" },
  { "id": 228, "img": "/images/poderoso chefinho 2.jpg", "title": "PODEROSO CHEFINHO 2", "price": "A partir de R$ 145,00" },
  { "id": 229, "img": "/images/pokemon.jpg", "title": "POKEMON", "price": "A partir de R$ 145,00" },
  { "id": 230, "img": "/images/pool party 1.jpg", "title": "POOL PARTY 1", "price": "A partir de R$ 145,00" },
  { "id": 231, "img": "/images/pool party 2.jpg", "title": "POOL PARTY 2", "price": "A partir de R$ 145,00" },
  { "id": 232, "img": "/images/pool party infantil.jpg", "title": "POOL PARTY INFANTIL", "price": "A partir de R$ 145,00" },
  { "id": 233, "img": "/images/primeira comunhão.jpg", "title": "PRIMEIRA COMUNHÃO", "price": "A partir de R$ 145,00" },
  { "id": 234, "img": "/images/princesa e o sapo.jpg", "title": "PRINCESA E O SAPO", "price": "A partir de R$ 145,00" },
  { "id": 235, "img": "/images/princesa wish.jpg", "title": "PRINCESA WISH", "price": "A partir de R$ 145,00" },
  { "id": 236, "img": "/images/princesas baby.jpg", "title": "PRINCESAS BABY", "price": "A partir de R$ 145,00" },
  { "id": 237, "img": "/images/princesas.jpg", "title": "PRINCESAS", "price": "A partir de R$ 145,00" },
  { "id": 238, "img": "/images/rainbow.jpg", "title": "RAINBOW", "price": "A partir de R$ 145,00" },
  { "id": 239, "img": "/images/realeza azul.jpg", "title": "REALEZA AZUL", "price": "A partir de R$ 145,00" },
  { "id": 240, "img": "/images/realeza rosa.jpg", "title": "REALEZA ROSA", "price": "A partir de R$ 145,00" },
  { "id": 241, "img": "/images/rei leao 2.jpg", "title": "REI LEÃO 2", "price": "A partir de R$ 145,00" },
  { "id": 242, "img": "/images/rei leão.jpg", "title": "REI LEÃO", "price": "A partir de R$ 145,00" },
  { "id": 243, "img": "/images/rep bardei tiu iu.jpg", "title": "REP BARDEI TIU IU", "price": "A partir de R$ 145,00" },
  { "id": 244, "img": "/images/repente preto.jpg", "title": "DE REPENTE PRETO", "price": "A partir de R$ 145,00" },
  { "id": 245, "img": "/images/resenha.jpg", "title": "RESENHA", "price": "A partir de R$ 145,00" },
  { "id": 246, "img": "/images/revoada.jpg", "title": "REVOADA", "price": "A partir de R$ 145,00" },
  { "id": 247, "img": "/images/roblox 1.jpg", "title": "ROBLOX 1", "price": "A partir de R$ 145,00" },
  { "id": 248, "img": "/images/roblox 2.jpg", "title": "ROBLOX 2", "price": "A partir de R$ 145,00" },
  { "id": 249, "img": "/images/roda de samba.jpg", "title": "RODA DE SAMBA", "price": "A partir de R$ 145,00" },
  { "id": 250, "img": "/images/safari baby.jpg", "title": "SAFARI BABY", "price": "A partir de R$ 145,00" },
  { "id": 251, "img": "/images/safari rosa.jpg", "title": "SAFARI ROSA", "price": "A partir de R$ 145,00" },
  { "id": 252, "img": "/images/safari.jpg", "title": "SAFARI", "price": "A partir de R$ 145,00" },
  { "id": 253, "img": "/images/sereia 1.jpg", "title": "SEREIA 1", "price": "A partir de R$ 145,00" },
  { "id": 254, "img": "/images/sereia 2.jpg", "title": "SEREIA 2", "price": "A partir de R$ 145,00" },
  { "id": 255, "img": "/images/shrek.jpg", "title": "SHREK", "price": "A partir de R$ 145,00" },
  { "id": 256, "img": "/images/sininho.jpg", "title": "SININHO", "price": "A partir de R$ 145,00" },
  { "id": 257, "img": "/images/skate.jpg", "title": "SKATE", "price": "A partir de R$ 145,00" },
  { "id": 258, "img": "/images/skye patrulha canina.jpg", "title": "SKYE PATRULHA CANINA", "price": "A partir de R$ 145,00" },
  { "id": 259, "img": "/images/smiliguido.jpg", "title": "SMILINGUIDO", "price": "A partir de R$ 145,00" },
  { "id": 260, "img": "/images/smurfs.jpg", "title": "SMURFS", "price": "A partir de R$ 145,00" },
  { "id": 261, "img": "/images/snoopy.jpg", "title": "SNOOPY", "price": "A partir de R$ 145,00" },
  { "id": 262, "img": "/images/sonic 2.jpg", "title": "SONIC 2", "price": "A partir de R$ 145,00" },
  { "id": 263, "img": "/images/sonic 3.jpg", "title": "SONIC 3", "price": "A partir de R$ 145,00" },
  { "id": 264, "img": "/images/sonic.jpg", "title": "SONIC", "price": "A partir de R$ 145,00" },
  { "id": 265, "img": "/images/stitch 1.jpg", "title": "STITCH 1", "price": "A partir de R$ 145,00" },
  { "id": 266, "img": "/images/stitch 2.jpg", "title": "STITCH 2", "price": "A partir de R$ 145,00" },
  { "id": 267, "img": "/images/stitch 3.jpg", "title": "STITCH 3", "price": "A partir de R$ 145,00" },
  { "id": 268, "img": "/images/stitch 5.jpg", "title": "STITCH 5", "price": "A partir de R$ 145,00" },
  { "id": 269, "img": "/images/stitch guloso.jpg", "title": "STITCH GULOSO", "price": "A partir de R$ 145,00" },
  { "id": 270, "img": "/images/stitch4.jpg", "title": "STITCH 4", "price": "A partir de R$ 145,00" },
  { "id": 271, "img": "/images/stranger things 1.jpg", "title": "STRANGER THINGS 1", "price": "A partir de R$ 145,00" },
  { "id": 272, "img": "/images/stranger things 2.jpg", "title": "STRANGER THINGS 2", "price": "A partir de R$ 145,00" },
  { "id": 273, "img": "/images/stumble guys.jpg", "title": "STUMBLE GUYS", "price": "A partir de R$ 145,00" },
  { "id": 274, "img": "/images/summer.jpg", "title": "SUMMER", "price": "A partir de R$ 145,00" },
  { "id": 275, "img": "/images/super homem 2.jpg", "title": "SUPER HOMEM 2", "price": "A partir de R$ 145,00" },
  { "id": 276, "img": "/images/super homem.jpg", "title": "SUPER HOMEM", "price": "A partir de R$ 145,00" },
  { "id": 277, "img": "/images/tardezinha 1.jpg", "title": "TARDEZINHA 1", "price": "A partir de R$ 145,00" },
  { "id": 278, "img": "/images/tardezinha 2.jpg", "title": "TARDEZINHA 2", "price": "A partir de R$ 145,00" },
  { "id": 279, "img": "/images/tardezinha 3.jpg", "title": "TARDEZINHA 3", "price": "A partir de R$ 145,00" },
  { "id": 280, "img": "/images/tartaruga ninja.jpg", "title": "TARTARUGA NINJA", "price": "A partir de R$ 145,00" },
  { "id": 281, "img": "/images/thor.jpg", "title": "THOR", "price": "A partir de R$ 145,00" },
  { "id": 282, "img": "/images/tik tok.jpg", "title": "TIK TOK", "price": "A partir de R$ 145,00" },
  { "id": 283, "img": "/images/tom e jerry.jpg", "title": "TOM E JERRY", "price": "A partir de R$ 145,00" },
  { "id": 284, "img": "/images/toy story 1.jpg", "title": "TOY STORY 1", "price": "A partir de R$ 145,00" },
  { "id": 285, "img": "/images/toy story 2.jpg", "title": "TOY STORY 2", "price": "A partir de R$ 145,00" },
  { "id": 286, "img": "/images/treino fofo hello kit.jpg", "title": "TREINO FOFO HELLO KITTY", "price": "A partir de R$ 145,00" },
  { "id": 287, "img": "/images/trolls.jpg", "title": "TROLLS", "price": "A partir de R$ 145,00" },
  { "id": 288, "img": "/images/turma da mônica.jpg", "title": "TURMA DA MÔNICA", "price": "A partir de R$ 145,00" },
  { "id": 289, "img": "/images/unicornio floral.jpg", "title": "UNICÓRNIO FLORAL", "price": "A partir de R$ 145,00" },
  { "id": 290, "img": "/images/unicornio-estrela.jpg", "title": "UNICÓRNIO ESTRELA", "price": "A partir de R$ 145,00" },
  { "id": 291, "img": "/images/urinho pooh.jpg", "title": "URSINHO POOH", "price": "A partir de R$ 145,00" },
  { "id": 292, "img": "/images/ursinho aviador.jpg", "title": "URSINHO AVIADOR", "price": "A partir de R$ 145,00" },
  { "id": 293, "img": "/images/ursinho no balão.jpg", "title": "URSINHO NO BALÃO", "price": "A partir de R$ 145,00" },
  { "id": 294, "img": "/images/ursinhos carinhosos 1.jpg", "title": "URSINHOS CARINHOSOS 1", "price": "A partir de R$ 145,00" },
  { "id": 295, "img": "/images/ursinhos carinhosos 2.jpg", "title": "URSINHOS CARINHOSOS 2", "price": "A partir de R$ 145,00" },
  { "id": 296, "img": "/images/URSINHOS FUTEBOL.jpg", "title": "URSINHOS FUTEBOL", "price": "A partir de R$ 145,00" },
  { "id": 297, "img": "/images/ursinhos realeza.jpg", "title": "URSINHOS REALEZA", "price": "A partir de R$ 145,00" },
  { "id": 298, "img": "/images/valente.jpg", "title": "VALENTE", "price": "A partir de R$ 145,00" },
  { "id": 299, "img": "/images/vampirina.jpg", "title": "VAMPIRINA", "price": "A partir de R$ 145,00" },
  { "id": 300, "img": "/images/Vanelope.jpg", "title": "VANELOPE", "price": "A partir de R$ 145,00" },
  { "id": 301, "img": "/images/vingadores 2.jpg", "title": "VINGADORES 2", "price": "A partir de R$ 145,00" },
  { "id": 302, "img": "/images/Vingadores.jpg", "title": "VINGADORES", "price": "A partir de R$ 145,00" },
  { "id": 303, "img": "/images/wandinha 1.jpg", "title": "WANDINHA 1", "price": "A partir de R$ 145,00" },
  { "id": 304, "img": "/images/wandinha 2.jpg", "title": "WANDINHA 2", "price": "A partir de R$ 145,00" },
  { "id": 305, "img": "/images/wandinha 3.jpg", "title": "WANDINHA 3", "price": "A partir de R$ 145,00" },
  { "id": 306, "img": "/images/wolwerine.jpg", "title": "WOLVERINE", "price": "A partir de R$ 145,00" }

];

const Temas = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = (theme) => {
    setSelectedTheme(theme);
  };

  const handleCloseModal = () => {
    setSelectedTheme(null);
  };

// Filtrando temas com base no input
const filteredThemes = themes.filter((theme) =>
  theme.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="themes-container">
    <h2 className="section-title">Temas de Decoração</h2>

    {/* Campo de Pesquisa */}
    <input
      type="text"
      placeholder="Buscar por tema..."
      className="search-bar"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <div className="themes-grid">
      {filteredThemes.length > 0 ? (
        filteredThemes.map((theme) => (
          <div key={theme.id} className="theme-item">
            <img src={theme.img} alt={theme.title} className="theme-image" />
            <p className="theme-title">{theme.title}</p>
            <p className="theme-price">{theme.price}</p>
            <button className="saiba-mais-btn" onClick={() => handleOpenModal(theme)}>Saiba Mais</button>
          </div>
        ))
      ) : (
        <p className="no-results">Nenhum tema encontrado.</p>
      )}
    </div>

      {/* Pop-up (Modal) */}
      {selectedTheme && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedTheme.title}</h3>
            <p><strong>O que inclui:</strong></p>
            <ul>
              <li>1 painel redondo 1,50m</li>
              <li>3 cilindros</li>
              <li>Capas com o tema</li>
              <li>Bandejas decorativas</li>
            </ul>
            <p><strong>Opções de aluguel:</strong></p>
            <ul>
              <li><b>Pegue e Monte:</b> R$ 145,00</li>
              <li><b>Com entrega e retirada realizada pela GuNic:</b> R$ 190,00 (Verificar bairros de atendimento)</li>
              <li><b>Com entrega, retirada e montagem realizada pela GuNic:</b> R$ 220,00 (Verificar bairros de atendimento)</li>
            </ul>
            <button className="close-btn" onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Temas;