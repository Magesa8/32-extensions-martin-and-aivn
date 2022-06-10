let Y = 2
let X = 2
let Xc = 2
let Yc = 2
radio.setGroup(27)
basic.clearScreen()
basic.forever(function () {
    radio.sendValue("Xc", Xc)
    radio.sendValue("Yc", Yc)
})
basic.forever(function () {
    led.plot(0, Yc)
    led.plot(1, Y)
    led.plot(3, X)
    led.plot(4, Xc)
})
loops.everyInterval(100, function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        Xc = X
        Yc = Y
    } else if (input.buttonIsPressed(Button.A)) {
        if (Y < 4) {
            Y += 1
        } else {
            Y = 0
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (X < 4) {
            X += 1
        } else {
            X = 0
        }
    } else if (input.logoIsPressed()) {
        Xc = 2
        Yc = 2
    }
})
loops.everyInterval(100, function () {
    basic.clearScreen()
})
