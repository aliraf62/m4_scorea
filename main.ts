let teamAScore = 0
radio.setGroup(1)

radio.onReceivedValue(function (name, value) {
    if (name == "TeamAScore" && value == 1) {
        teamAScore += 1
        if (teamAScore == 3) {
            // Celebrate victory
            for (let index = 0; index < 3; index++) {
                music.playMelody("C D E F G A B C5 ", 120)
                basic.showIcon(IconNames.Happy)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(500)
            }
            // Reset for the next game
            teamAScore = 0
        } else {
            basic.showNumber(teamAScore)
        }
    }
})

// Regularly show the current score
basic.forever(function () {
    basic.showNumber(teamAScore)
    basic.pause(2000)
})
