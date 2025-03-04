input.onPinTouchEvent(TouchPin.P2, input.buttonEventValue(ButtonEvent.Hold), function () {
    basic.showIcon(IconNames.Angry)
    basic.setLedColor(0x00ffff)
    music.playMelody("G F G A - F E D ", 120)
})
input.onPinTouchEvent(TouchPin.P1, input.buttonEventValue(ButtonEvent.Hold), function () {
    basic.showIcon(IconNames.Confused)
    basic.setLedColor(0xff9da5)
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventValue(ButtonEvent.Hold), function () {
    basic.showIcon(IconNames.Happy)
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventValue(ButtonEvent.Hold), function () {
    basic.showIcon(IconNames.Scissors)
    music.playMelody("C5 B A G F E D C ", 120)
})
