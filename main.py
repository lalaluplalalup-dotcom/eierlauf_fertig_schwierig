led_x = 0
led_y = 0

def on_forever():
    global led_x, led_y
    led.unplot(led_x, led_y)
    led_x = Math.map(input.acceleration(Dimension.X) * 1, -1023, 1023, -1, 5)
    led_y = Math.map(input.acceleration(Dimension.Y) * 1, -1023, 1023, -1, 5)
    led.plot(led_x, led_y)
    if led_y > 4 or led_x > 4 or (led_y < 0 or led_x < 0):
        basic.show_icon(IconNames.NO)
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
basic.forever(on_forever)
