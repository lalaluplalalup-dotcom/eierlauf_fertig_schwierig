input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sch += 1
    basic.showNumber(sch)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sch = 1
    basic.showNumber(sch)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let led_y = 0
let led_x = 0
let sch = 0
sch = 1
basic.showNumber(sch)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    led.unplot(led_x, led_y)
    led_x = Math.map(input.acceleration(Dimension.X) * sch, -1023, 1023, -1, 5)
    led_y = Math.map(input.acceleration(Dimension.Y) * sch, -1023, 1023, -1, 5)
    led.plot(led_x, led_y)
    if (led_y > 4 || led_x > 4 || (led_y < 0 || led_x < 0)) {
        music.play(music.stringPlayable("C C5 C C5 C G C A ", 1000), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
