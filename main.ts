let note = 0
let speedUnplot = 0
let speedPlot = 0
let plotY = 0
let plotX = 0
input.onButtonPressed(Button.A, function () {
    note += 50
    speedUnplot += -5
    speedPlot += -5
})
input.onButtonPressed(Button.AB, function () {
    speedPlot = 10
    speedUnplot = 25
    note = 200
    for (let index = 0; index < 100; index++) {
        plotY = 0
        for (let index = 0; index < 5; index++) {
            plotX = 0
            for (let index = 0; index < 5; index++) {
                note += 24
                music.ringTone(note)
                led.plot(plotX, plotY)
                plotX += 1
                basic.pause(speedPlot)
            }
            plotY += 1
        }
        plotY = 0
        for (let index = 0; index < 5; index++) {
            plotX = 0
            for (let index = 0; index < 5; index++) {
                note += -24
                music.ringTone(note)
                led.unplot(plotX, plotY)
                plotX += 1
                basic.pause(speedUnplot)
            }
            plotY += 1
        }
    }
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    note += -50
    speedUnplot += 5
    speedPlot += 5
})
basic.forever(function () {
	
})
