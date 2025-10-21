function orange2 () {
    orange = game.askForString("Hvad hedder din lærer i dette fag?")
    if (orange == "Henrik") {
        game.splash("Tillykke - du må gå videre")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`level0`)
    } else {
        game.splash("Prøv igen")
        info.changeLifeBy(-1)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function () {
    orange2()
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let orange = ""
let mySprite = sprites.create(img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.Player)
mySprite.setPosition(12, 19)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
