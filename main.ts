basic.forever(function () {
    led.plotBarGraph(
    2,
    4
    )
    if (input.buttonIsPressed(Button.A)) {
        let temperatura = 0
        basic.showNumber(temperatura)
    }
})
