input.onButtonPressed(Button.A, function () {
    basic.showNumber(totale)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    totale = 0
    parziale = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(parziale)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Chessboard)
    inizio = input.runningTime()
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.clearScreen()
    parziale = Math.trunc((input.runningTime() - inizio) / 1000)
    totale += parziale
})
let inizio = 0
let parziale = 0
let totale = 0
basic.clearScreen()
totale = 0
parziale = 0
