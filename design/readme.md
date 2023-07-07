# Mapa del sitio

La siguiente imágen representa el mapa del sitio:

![Mapa del sitio](images/mapSite/siteMap.svg)

Como se puede observar existen dos caminos dependiendo del rol que se escogió.
Si escogió ser un anfitrión, este es dirigido a la sala de espera de su cuarto.
En caso de ser invitado, este debe ingresar un código de sala proporcionado por su anfitrión.
En ambos casos, el jugador tiene la posibilidad de devolverse a la página de inicio.

Al final, ambos roles culminan en la sala del juego, en la cual pueden jugar ***¡Muy lentos!*** con sus amigos.
Al final de la ronda, los jugadores los jugadores se enfrentan a una pantalla emergente que muestra si ganaron.
De aquí tienen la posibilidad de unirse nuevamente a la sala o devolverse a la página de inicio.

# Wireframes

A continuación se muestran los wireframes de las pantallas de juego.

## Página Principal

Esta es la primera pantalla que ve un usuario al ingresar al sitio web. En esta puede ver información acerca del juego y sus creadores y también podrá crear o unirse a una sala de juego.

Como se observa en la siguiente imágen, el usuario podrá crear o ingresar a una sala solamente si ya ingresó su apodo.

![Página principal con botones deshabilitados](images/wireframes/homeBasic.svg)

Una vez ingresado el apodo, se habilitan los botones como se evidencia en las siguientes secciones.

### Instruciones del juego

Al dar click en el botón "¿Cómo jugar?" de la barra, se podrán vizualizar las instrucciones del juego por medio de un video explicativo.

![Instrucciones](images/wireframes/homeInstructions.svg)

En la imágen anterior se muestra una ventana emergente que se despliega al hacer click sobre el botón de Unir a Sala.

Una imágen más detallada de esta ventana se muestra a continuación.

![PopUp ingresar código](images/wireframes/popup-codeEmpty.svg)

### Tabla de mejores puntajes

Al dar click en el botón "Clasificación" de la barra, se mostrara un historial de los 3 mejores puntajes que los jugadores han alcanzado en el juego.

Si el usuario pasa el mouse sobre el ícono de la i, puede conocer más acerca de la opción de crear o unirse a la sala. Esta información se muestra en la siguiente imágen.

![Mejores puntajes](images/wireframes/homeLeaderboard.svg)

En la imágen anterior se muestra la ventana emergente que se despliega al tratar de unirse a una sala existente.
Esta imágen muestra un ejemplo en el que el usuario ingresa un código de sala real, por lo que se le habilita el botón que le permite ingresar a la sala.

Una imágen más detallada de esta ventana se muestra a continuación.

![PopUp código correcto](images/wireframes/popup-codeCorrect.svg)

### Créditos

Al dar click en el botón "Créditos" de la barra, se mostrará la información relacionada a los desarrolladores del juego ***¡Muy lentos!*** y las debidas referencias de todo material de terceros utilizado para el desarrollo del mismo.

![Créditos](images/wireframes/homeCredits.svg)

En la imágen anterior se muestra la ventana emergente que se despliega al tratar de unirse a una sala que no existe.
Esta imágen muestra un ejemplo en el que el usuario ingresa un código incorrecto.
En este caso, se le indica al usuario que esa sala no existe, por lo que no se le puede habilitar el botón para ingresar a la sala.

Una imágen más detallada de esta ventana se muestra a continuación.

![PopUp código incorrecto](images/wireframes/popup-codeIncorrect.svg)

## Sala de Espera

Esta pantalla se le muestra a un usuario que desea participar de una sesión.
Esta pantalla tiene diferentes opciones que dependen del rol que el jugador escogió.

Al mantener el mouse sobre el ícono i, se muestra más información acerca las funcionalidades del juego y las configuraciones que se pueden realizar.
Ambos roles de la página (anfitrión e invitado) pueden ver esta información.

Esta información se muestra en la siguiente imágen.

![Sala de espera con más información](images/wireframes/waitingRoomHost.svg)

### Para un anfitrión

En caso de escoger alojar una sala, el usuario tiene la posibilidad de configurar el tiempo que va a durar la ronda, la cantidad de fichas en la mano del jugador, la cantidad de fichas durante la ronda y las modalidades de juego que desea activas.

Al hacer click en el botón de SALIR, terminará la sesión y los jugadores serán redireccionado a la página de inicio.

Al hacer click en el botón de COMENZAR, comienza la sesión de juego y los jugadores son redireccionados a la pantalla de juego.

![Sala de espera para anfitrión](images/wireframes/waitingRoomInit.svg)

### Para un invitado

En caso de escoger unirse a una sala existente, el usuario puede observar los cambios hechos por el anfitrióna a la configuración del juego en tiempo real.
Sin emabargo, no puede editar nada.

Al hacer click en el botón de SALIR, se saldrá de la sesión y será redireccionado a la página de inicio.

![Sala de espera para invitado](images/wireframes/waitingRoomGuest.svg)

## Sala de juego

Esta pantalla se muestra cuando el anfitrión decide iniciar el juego y contiene:

- Tablero con fichas: es compartido entre todos los jugadores y se actualiza conforme los jugadores hacen parejas.
- Mano del jugador actual: contiene la cantidad de fichas que se configuró antes de iniciar la ronda.
- El tiempo que durará la partida
- Los puntajes y posiciones de todos en la misma partida
- Si se activó la funcionalidad de los comodines, se mostrará si se aplicó alguno.

La siguiente pantalla es la sala de juego en su estado inicial.

![Pantalla de juego inicial](images/wireframes/initialGameScreen.svg)

En las siguientes pantalla se muestra el estado de la sala de juego luego de que 15 segundos pasaron. 

En esta partida se habilitó la funcionalidad de los comodines y la de los colores.

![Pantalla de juego avanzada usando funcionalidad de colores](images/wireframes/gameScreenColors.svg)

En esta partida se habilitó la funcionalidad de los colores y las palabras.

![Pantalla de juego avanzada usando funcionalidad de palabras](images/wireframes/gameScreenWords.svg)

En caso que el jugador desee abandonar una partida antes de que esta termine, se le muestra una ventana emergente.
El usuario puede escoger salirse o permanecer en la partida.
Si el anfitrión se sale, cierra la sala.

![Pantalla de juego donde el jugador pidió salirse de la partida](images/wireframes/exitGameScreen.svg)

A continuación una imágen más detallada de esta ventana.

![Ventana emergente al intentar salir de la partida](images/wireframes/popUpExitGame.svg)

Por último, al terminar la partida, se le muestra al usuario una ventana emergente personalizada según su estado como ganador o perdedor del juego.
El usuario puede escoger continuar con la partida o volver a la pantalla de inicio.
En este caso, si el anfitrión se sale, cierra la sala.

![PopUp perdedor](images/wireframes/popUpLoser.svg)

![PopUp ganador](images/wireframes/popUpWinner.svg)

# Protocolo de paso de mensajes

## Eventos en wireframes

### Para clientes

Los eventos principales para un cliente en cada pantalla de juego son:

#### Pantalla de inicio

1. enterNickname
2. closeTab
3. createSession
4. showCodePopUp

#### Room Code PopUp

1. checkRoomCode
2. handleCodeValidation
3. Cancelar
4. Unirse

#### Sala de espera

1. handleNewPlayer
2. removePlayer
3. Salir

##### Host

1. chooseCardsPerRound
2. chooseMaxTime
3. chooseCardsPerPlayer
4. chooseAdp1a
5. chooseAdp1b
6. chooseAdp2a
7. chooseAdp2b
8. chooseAdp3a
9. chooseAdp3b
10. Comenzar

##### Guest

1. handleMaxTime
2. handleCardsPerRound
3. handleCardsPerPlayer
4. handleAdp1a
5. handleAdp1b
6. handleAdp2a
7. handleAdp2b
8. handleAdp3a
9. handleAdp3b
10. handleStartGame

#### Game Page

1. match
2. handleMatchResponse
3. handleScores
4. handleTimesUp
5. applyBlur
6. handleBlur
7. applyExtraCards
8. handleExtraCards
9. handleCardsFinished
10. Salir

#### Exit to Main PopUp

1. Cancelar
2. Aceptar

#### Winner PopUp

1. Continuar partida
2. Ir a Inicio

#### Loser PopUp

1. Continuar partida
1. Ir a Inicio

### Para el servidor

#### Pantalla de inicio

1. closeConnection
2. validateCode
3. joinRoom

#### Sala de espera

1. setCardsPerRound
2. setMaxTime
3. setCardsPerPlayer
4. setAdp1a
5. setAdp1b
6. setAdp2a
7. setAdp2b
8. setAdp3a
9. setAdp3b
10. addPlayer
11. updatePlayers
12. startGame

#### Game Page

1. handleMatchResponse
2. receiveFinished
3. timesUp
4. applyExtraCards
5. applyBlur

## Catálogo de mensajes JSON

La estructura básica de los mensajes incluye siempre: el tipo de mensaje, el emisor y el receptor.
Además, los mensajes de los clientes incluyen la razón por la que se manda el mensaje.
En el caso del servidor, este puede mandarle un objeto html al cliente.

### Mensajes cliente

#### Página Principal

~~~ JSON
1. Cierre de conexión  
{  
    "Type": "closeTab",  
    "From": "client",  
    "To": "server",  
    "When": "when a client logs off"
}
~~~

~~~ JSON
2. Creación de sesión  
{  
    "Type": "createRoom",  
    "From": "client",  
    "To": "server",
    "When": "when a client presses the create room button with a valid nickname",  
    "Nickname": "player1"  
}
~~~

~~~ JSON
3. Revisión del código
{
    "Type": "checkRoomCode",
    "From": "client",
    "To": "server",
    "When": "when a client types a room code",
    "SessionCode": "1234"
}
~~~

~~~ JSON
4. Unión a una sala  
{  
    "Type": "joinSession",  
    "From": "client",  
    "To": "server",  
    "When": "when a client presses the join room button",  
    "Nickname": "player3",  
    "SessionCode": "1234"
}
~~~

#### Sala de espera

~~~ JSON
1. Escogencia de adaptación 1a
{
    "Type": "chooseAdp1a",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the adaptation 1a",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
2. Escogencia de adaptación 1b
{
    "Type": "chooseAdp1b",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the adaptation 1b",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
3. Escogencia de adaptación 2a
{
    "Type": "chooseAdp2a",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the adaptation 2a",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
4. Escogencia de adaptación 2b
{
    "Type": "chooseAdp2b",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the adaptation 2b",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
5. Escogencia de adaptación 3a
{
    "Type": "chooseAdp3a",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the adaptation 3a",
    "SessionCode": "1234"
}
~~~

~~~ JSON
6. Escogencia de adaptación 3b
{
    "Type": "chooseAdp3b",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the adaptation 3b",
    "SessionCode": "1234"
}
~~~

~~~ JSON
7. Escogencia de tiempo máximo de ronda
{
    "Type": "chooseMaxTime",
    "From": "client",
    "To": "server",
    "When": "when a host client change the max time",
    "MaxTime": "40",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
8. Escogencia de cartas en la manta
{
    "Type": "chooseCardsPerRound",
    "From": "client",
    "To": "server",
    "When": "when a host client change the amount of card per round",
    "CardsPerRound": "130",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
9. Escogencia de cartas por jugador
{
    "Type": "chooseCardsPerPlayer",
    "From": "client",
    "To": "server",
    "When": "when a host client change the cards per player",
    "CardsPerPlayer": "10",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
10. Retorno a página principal
{
    "Type": "returnToMain",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the leave botton",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
11. Comienzo de juego
{
    "Type": "startGame",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the start game botton",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~


#### Pantalla de juego

~~~ JSON
1. Emparejamiento de cartas
{
    "Type": "match",
    "From": "client",
    "To": "server",
    "When": "when a player makes a match",
    "Nickname": "player3",
    "SessionCode": "1234",
    "Column": 2,
    "Row": 4,
    "Card": "red bunny"
}
~~~

~~~ JSON
2. Aplicación de Blur
{
    "Type": "applyBlur",
    "From": "client",
    "To": "server",
    "When": "when a client applies blur to other players",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
4. Aplicación de Extra Cards
{
    "Type": "applyExtraCards",
    "From": "client",
    "To": "server",
    "When": "when a client adds cards to other players",
    "Nickname": "player3",
    "SessionCode": "1234",
    "newCard1": "blue dog",
    "newCard2": "red car",
    "newCardn": "... ..."
}
~~~

~~~ JSON
5. Finalización de cartas en la mano del jugador
{
    "Type": "handleCardsFinished",
    "From": "client",
    "To": "server",
    "When": "when player's cards run out",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

~~~ JSON
6. Continuación de la sesión
{
    "Type": "acceptReturnToMain",
    "From": "client",
    "To": "server",
    "When": "player wants to continue",
    "Nickname": "player3",
    "SessionCode": "1234"
}
~~~

### Mensajes Servidor

#### Página Principal

~~~ JSON
1. Validacion de código de sala  
{  
    "Type": "handleCodeValidation", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server validates room",
    "isValid": "true"
}
~~~

~~~ JSON
2. Aviso de nuevo jugador  
{  
    "Type": "handleNewPlayer", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets clients know a new player has been added", 
    "Nickname": "player1", 
    "SessionCode": "1234"
}
~~~

#### Sala de Espera

~~~ JSON
1. Aviso de selección de adaptación 1a
{
    "Type": "chooseAdp1a", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know adaptation 1a has been activated"
})
~~~

~~~ JSON
2. Aviso de selección de adaptación 1b
{
    "Type": "chooseAdp1b", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know adaptation 1b has been activated"
})
~~~

~~~ JSON
3. Aviso de selección de adaptación 2a
{
    "Type": "chooseAdp2a", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know adaptation 2a has been activated"
})
~~~

~~~ JSON
4. Aviso de selección de adaptación 2b
{
    "Type": "chooseAdp2b", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know adaptation 2b has been activated"
})
~~~

~~~ JSON
5. Aviso de selección de adaptación 3a
{
    "Type": "chooseAdp3a", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know adaptation 3a has been activated"
})
~~~

~~~ JSON
6. Aviso de selección de adaptación 3b
{
    "Type": "chooseAdp3b", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know adaptation 3b has been activated"
})
~~~

~~~ JSON
7. Aviso de selección de tiempo máximo de la sesión
{
    "Type": "chooseMaxTime", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know to change the max time", 
    "MaxTime": "30"
})
~~~

~~~ JSON
8. Aviso de selección de cartas por jugador
{
    "Type": "chooseCardsPerPlayer", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know to change the cards per player", 
    "CardsPerPlayer": "7"
})
~~~

~~~ JSON
9. Aviso de selección de cartas por ronda
{
    "Type": "chooseCardsPerPlayer", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know to change the cards per round", 
    "CardsPerRound": "100"
})
~~~

~~~ JSON
10. Aviso de pérdida de un jugador
{
    "Type": "removePlayer", 
    "From": "server", 
    "To": "player2", 
    "When": "When the server lets players know a player left the room",
    "Nickname": "player1"
})
~~~

#### Pantalla de juego

~~~ JSON
1. Aviso de comienzo de juego
{
    "Type": "handleStartGame", 
    "From": "server", 
    "To": "player2", 
    "When": "When the server lets players know game has started"
})
~~~

~~~ JSON
2. Aviso de finalización del tiempo
{
    "Type": "handleTimesUp", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know times up",
    "Ranking": 
        { "player1": "300",
          "player2": "200",
          "player3": "100"
        }
})
~~~

~~~ JSON
3. Aviso de finalización de cartas de un jugador
{
    "Type": "handleCardsFinished", 
    "From": "server", 
    "To": "player3", 
    "When": "When the server lets players know round is finished",
    "Ranking": 
        { "player1": "400",
          "player2": "350",
          "player3": "150"
        }
})
~~~

~~~ JSON
4. Respuesta a emparejamiento
{
    "Type": "handleMatchResponse", 
    "From": "server", 
    "To": "player2", 
    "When": "When the server tells player if their match was correct or not", 
    "Score": "350"
})
~~~

~~~ JSON
5. Aviso de actualización de puntaje
{
    "Type": "handleScores", 
    "From": "server", 
    "To": "player1", 
    "When": "When the server lets players know to update scores", 
    "Ranking": 
        { "player2": "350",
          "player1": "300",
          "player3": "100"
        }
~~~

~~~ JSON
6. Aviso de aplicación de blur
{
    "Type": "handleBlur", 
    "From": "server", 
    "To": "player2", 
    "When": "When the server lets players know to activate blur"
~~~

~~~ JSON
7. Aviso de aplicación de extra cards
{
    "Type": "handleExtraCards", 
    "From": "server", 
    "To": "player2", 
    "When": "When the server lets players know to apply extra cards", 
    "ExtraCards":
        { "player1": {"card1": "blue apple", "card2": "red dog"},
          "player2": {"card1": "blue car", "card2": "red tShirt"},
          "player3": {"card1": "red shoes", "card2": "red cat"}
        }
~~~

## Simulación de sesión de juego - texto

![Primera parte del mensaje](images/textProtocol/message1.svg)

![Segunda parte del mensaje](images/textProtocol/message2.svg)

![Tercera parte del mensaje](images/textProtocol/message3.svg)

![Cuarta parte del mensaje](images/textProtocol/message4.svg)

## Simulación de sesión de juego - JSON

![Primera parte del mensaje](images/jsonProtocol/captura1.svg)

![Segundo parte del mensaje](images/jsonProtocol/captura2.svg)

![Tercero parte del mensaje](images/jsonProtocol/captura3.svg)

![Cuarto parte del mensaje](images/jsonProtocol/captura4.svg)

![Quinta parte del mensaje](images/jsonProtocol/captura5.svg)

![Sexta parte del mensaje](images/jsonProtocol/captura6.svg)

![Sétima parte del mensaje](images/jsonProtocol/captura7.svg)

![Octava parte del mensaje](images/jsonProtocol/captura8.svg)

![Novena parte del mensaje](images/jsonProtocol/captura9.svg)

# Máquinas de estados

Las siguientes imágenes muestran las máquinas de estado del cliente y del servidor

## Para el servidor

![Máquina de estado Servidor](images/automata/automataServer.svg)

## Para el cliente

En el caso del cliente, este pasa por tres estados principales: la página principal, la sala de espera y la pantalla de juego.
Estas tres se representan con un color azul.

También pasa por estados más pequeños cuando se abre una ventana emergente o pop-up.
Estas se representan con un color morado.

![Máquina de estado Cliente](images/automata/automataClient.svg)

# Algoritmos de las transiciones de las máquinas de estados

## Del Cliente

### Página Principal

#### enterNickName(playerNickname)

~~~ js
nickname = playerNickname
btnCreateSession.enable
btnJoinSession.enable
~~~

#### closeTab()

~~~ js
sendMessage({
    "Type": "closeTab", 
    "From": "client", 
    "To": "server", 
    "When": "when a client logs off"
})
~~~

#### createSession(playerNickname)

~~~ js
sendMessage({
    "Type": "createSession", 
    "From": "client", 
    "To": "server", 
    "When": "when a client presses the create room button with a valid nickname", 
    "Nickname": playerNickname
})
// As a host
redirectTo(waitingRoomURL)
~~~

#### showCodePopUp()

~~~ js
codePopUP.show()
~~~

#### cancelCodePopUp()

~~~ js
codePopUP.hide()
~~~

#### checkRoomCode(code)

~~~ js
sendMessage({
    "Type": "checkRoomCode", 
    "From": "client", 
    "To": "server", 
    "When": "when a client types a room code", 
    "SessionCode": code
})
~~~

#### handleCodeValidation(codeExists)

~~~ js
if codeExists == true
    codePopUP.isCorrect()
    join-button.enable
else
    codePopUP.isWrong()
~~~

#### joinSession(name, code)

~~~ js
codePopUP.hide()
sendMessage({
    "Type": "joinSession", 
    "From": "client", 
    "To": "server", 
    "When": "when a client presses the join session button", 
    "Nickname": name, 
    "SessionCode": code
})
// As a guest
redirectTo(waitingRoomURL)
~~~

### Sala de espera

#### chooseAdp1a(name, code)

~~~ js
sendMessage({
    "Type": "chooseAdp1a", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client selects the adaptation 1a", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseAdp1b(name, code)

~~~ js
sendMessage({
    "Type": "chooseAdp1b", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client selects the adaptation 1b", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseAdp2a(name, code)

~~~ js
sendMessage({
    "Type": "chooseAdp2a", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client selects the adaptation 2a", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseAdp2b(name, code)

~~~ js
sendMessage({
    "Type": "chooseAdp2b", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client selects the adaptation 2b", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseAdp3a(name, code)

~~~ js
sendMessage({
    "Type": "chooseAdp3a", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client selects the adaptation 3a", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseAdp3b(name, code)

~~~ js
sendMessage({
    "Type": "chooseAdp3b", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client selects the adaptation 3b", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseMaxTime(time, name, code)

~~~ js
sendMessage({
    "Type": "chooseMaxTime", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client change the max time", 
    "MaxTime": time, 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseCardsPerRound(numCards, name, code)

~~~ js
sendMessage({
    "Type": "chooseCardsPerRound", 
    "From": "client", 
    "To": "server", 
    "When": "when a host client change the amount of card per round", 
    "CardsPerRound": numCards, 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### chooseCardsPerPlayer(numCards, name, code)

~~~ js
sendMessage({
    "Type": "chooseCardsPerPlayer",
    "From": "client",
    "To": "server",
    "When": "when a host client change the cards per player",
    "CardsPerPlayer": numCards,
    "Nickname": name,
    "SessionCode": code
})
~~~

#### handleNewPlayer(playerNickName)

~~~ js
players.push(playerNickName)
updatePlayerList()
~~~

#### removePlayer(playerNickName)

~~~ js
players.pop(playerNickName)
updatePlayerList()
~~~

#### handleCardsPerRound(numCards)

~~~ js
cardsPerRound = numCards
updateScreen()
~~~

#### handleCardsPerPlayer(numCards)

~~~ js
cardsPerPlayer = numCards
updateScreen()
~~~

#### handleMaxTime(time)

~~~ js
maxTime = time
updateScreen()
~~~

#### handleAdp1a()

~~~ js
adp1a = true
updateScreen()
~~~

#### handleAdp1b()

~~~ js
adp1b = true
updateScreen()
~~~

#### handleAdp2a()

~~~ js
adp2a = true
updateScreen()
~~~

#### handleAdp2b()

~~~ js
adp2b = true
updateScreen()
~~~

#### handleAdp3a()

~~~ js
adp3a = true
updateScreen()
~~~

#### handleAdp3b()

~~~ js
adp3b = true
updateScreen()
~~~

#### showExitPopUp()

~~~ js
exitPopUp.show()
~~~

#### returnToMain(name, code)

~~~ js
exitPopUp.hide()
sendMessage({
    "Type": "returnToMain",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the leave botton",
    "Nickname": name,
    "SessionCode": code
})
redirectTo(mainRoomURL)
~~~

#### cancelExitPopUp()

~~~ js
exitPopUp.hide()
~~~

#### startGame(name, code)

~~~ js
sendMessage({
    "Type": "startGame",
    "From": "client",
    "To": "server",
    "When": "when a host client selects the start game botton",
    "Nickname": name,
    "SessionCode": code
})
redirectTo(gamePageURL)
~~~

#### handleStartGame(gamePageURL)

~~~ js
redirectTo(gamePageURL)
~~~

### Pantalla de juego

#### match(playerCard, boardCard, name, code)

~~~ js    
sendMessage({
    "Type": "match",
    "From": "client",
    "To": "server",
    "When": "when a player makes a match",
    "Nickname": name,
    "SessionCode": code,
    "Column": boardCard.getColumn(),
    "Row": boardCard.getRow(),
    "Card": playerCard.getDescription()
})
~~~

#### handleMatchResponse(isCorrect, newScore, playerCard, oldBoardCard, newBoardCard)

~~~ js
playerScore = newScore
updateScore()
if isCorrect == true:
    hand.remove(playerCard)
    board.update(oldBoardCard, newBoardCard)
else
    showMistake()
~~~

#### applyBlur(name, code)
~~~ js    
sendMessage({
    "Type": "applyBlur",
    "From": "client",
    "To": "server",
    "When": "when a client applies blur to other players",
    "Nickname": name,
    "SessionCode": code
})
~~~

#### handleBlur()

~~~ js
gameTiles.makeBlurred()
~~~

#### applyExtraCards(name, code)

~~~ js
sendMessage({
    "Type": "applyExtraCards", 
    "From": "client", 
    "To": "server", 
    "When": "when a client adds cards to other players", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### handleExtraCards(extraCards[])

~~~ js
for card in extraCards
    playerCards.push(card)
    updatePlayerHand()
~~~

#### handleScores(scores[])

~~~ js
for playerIndex < playerAmount
    players[playerIndex].updateScore(scores[playerIndex])
~~~

#### handleTimesUp(ranking[])

~~~ js
if ranking[0] == playerName
    winnerPopUp.show(ranking)
else
    loserPopUp.show(ranking)
~~~

#### handleCardsFinished(name, code)

~~~ js
sendMessage({
    "Type": "handleCardsFinished", 
    "From": "client", 
    "To": "server", 
    "When": "when player's cards run out", 
    "Nickname": name, 
    "SessionCode": code
})
~~~

#### continueGame(name, code)

~~~ js
sendMessage({
    "Type": "continueGame", 
    "From": "client", 
    "To": "server", 
    "When": "player wants to continue", 
    "Nickname": name, 
    "SessionCode": code
})

redirectTo(waitingRoomURL)
~~~

## Del Servidor

### Página Principal

#### validateCode(client, room)

~~~ js
if code in availableRooms
    sendMessage({
        "Type": "handleCodeValidation", 
        "From": "server", 
        "To": client, 
        "When": "When the server validates room",
        "isValid": "true"
    })
else
    sendMessage({
        "Type": "handleCodeValidation", 
        "From": "server", 
        "To": client, 
        "When": "When the server validates room",
        "isValid": "false"
    })
~~~

#### createSession(nickname)

~~~ js
newRoom = createRoom()
newRoom.addHost(nickname)
// send waiting room
~~~

#### joinToSession(nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    sendMessage({
        "Type": "handleNewPlayer", 
        "From": "server", 
        "To": player, 
        "When": "When the server lets clients know a new player has been added", 
        "Nickname": nickname, 
        "SessionCode": roomCode
    })

rooms[roomCode].addPlayer(nickname)
// send waiting room
~~~

### Sala de Espera

#### setAdp1a(nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseAdp1a", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know adaptation 1a has been activated"
        })
~~~

#### setAdp1b(nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseAdp1b", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know adaptation 1b has been activated"
        })
~~~

#### setAdp2a(nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseAdp2a", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know adaptation 2a has been activated"
        })
~~~

#### setAdp2b(nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseAdp2b", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know adaptation 2b has been activated"
        })
~~~

#### setAdp3a(nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseAdp3a", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know adaptation 3a has been activated"
        })
~~~

#### setAdp3b(nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseAdp3b", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know adaptation 3b has been activated"
        })
~~~

#### setMaxTime(maxTime, nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseMaxTime", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know to change the max time", 
            "MaxTime": maxTime
        })
~~~

#### setCardsPerPlayer(cards, nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseCardsPerPlayer", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know to change the cards per player", 
            "CardsPerPlayer": cards
        })
~~~

#### setCardsPerRound(cards, nickname, roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "chooseCardsPerPlayer", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know to change the cards per round", 
            "CardsPerRound": cards
        })
~~~

#### updatePlayers(nickname, roomCode)

~~~ js
rooms[roomCode].removePlayer(nickname)
for player in rooms[roomCode].getPlayers()
    sendMessage({
        "Type": "removePlayer", 
        "From": "server", 
        "To": player, 
        "When": "When the server lets players know a player left the room",
        "Nickname": nickname
    })
~~~

### Pantalla de juego

#### startGame(roomCode)

~~~ js
for player in rooms[roomCode].getPlayers()
    sendMessage({
        "Type": "handleStartGame", 
        "From": "server", 
        "To": player, 
        "When": "When the server lets players know game has started"
~~~

#### timesUp()

~~~ js
when rooms[roomCode].getTime() == 0
    ranking = makeJSON(rooms[roomCode].getRanking())

    for player in rooms[roomCode].getPlayers()
        sendMessage({
            "Type": "handleTimesUp", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know times up",
            "Ranking": ranking
        }))
~~~

#### receiveFinished(nickname, roomCode)  

~~~ js
ranking = makeJSON(rooms[roomCode].getRanking())

for player in rooms[roomCode].getPlayers()
    sendMessage({
        "Type": "handleCardsFinished", 
        "From": "server", 
        "To": player, 
        "When": "When the server lets players know round is finished",
        "Ranking": ranking
    }))
~~~

#### isCorectMatch(player, roomCode, column, row, card)

~~~ js
if rooms[roomCode].getCard(column, row) == card
    rooms[roomCode].getPlayerScore(player) += 100
else
    rooms[roomCode].getPlayerScore(player) -= 50

sendMessage({
    "Type": "handleMatchResponse", 
    "From": "server", 
    "To": player, 
    "When": "When the server tells player if their match was correct or not", 
    "Score": rooms[roomCode].getPlayerScore(player)
})

ranking = makeJSON(rooms[roomCode].getRanking())
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "handleScores", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know to update scores", 
            "Ranking": ranking
        })
~~~

#### applyBlur(nickname, roomCode)  

~~~ js
for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "handleBlur", 
            "From": "server", 
            "To": nickname, 
            "When": "When the server lets players know to activate blur", 
        })
~~~

#### applyExtraCards(nickname, roomCode)  

~~~ js
for player in rooms[roomCode].getPlayers()
    cards = generateNewCards(roomCode)
    extraCards.add(player, cards)

for player in rooms[roomCode].getPlayers()
    if player != nickname
        sendMessage({
            "Type": "handleExtraCards", 
            "From": "server", 
            "To": player, 
            "When": "When the server lets players know to apply extra cards", 
            "ExtraCards": extraCards
        }))
~~~
