koi.koi_classified(function (classId) {
    basic.showIcon(IconNames.Heart)
    if ("" == "") {
        for (let index = 0; index <= 9; index++) {
            basic.showNumber(10 - index)
            basic.pause(1000)
        }
    } else {
        for (let index = 0; index <= 4; index++) {
            basic.showNumber(5 - index)
            basic.pause(1000)
        }
    }
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.B, function () {
    koi.koi_run()
    basic.pause(500)
})
basic.pause(10000)
koi.koi_init(SerialPin.P1, SerialPin.P2)
basic.pause(100)
basic.showIcon(IconNames.SmallHeart)
koi.koi_reset_cls()
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_cls_load("class.json")
