// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100008080808080808080101010101010101050101010101010801010106010101010101010101010108010108010108010108080808080101080101080101080101010101010101010801010801010801010101010101010108010108010108010101010808080808080101080101080101010108080808080801010801010801010101010101010101010108010108010101010101010101010201080101080701080808080808080808080801010801010101010101010101010101010108010101010101010101010101010101080101040108080808080808080808080801010101010101010101010101010101010101010101010101010301010101010101`, img`
2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . 2 . . 2 . . 
2 2 2 2 2 . . 2 . . 2 . . 2 . . 
. . . . . . . 2 . . 2 . . 2 . . 
. . . . . . . 2 . . 2 . . 2 . . 
. . 2 2 2 2 2 2 . . 2 . . 2 . . 
. . 2 2 2 2 2 2 . . 2 . . 2 . . 
. . . . . . . . . . 2 . . 2 . . 
. . . . . . . . . . 2 . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.dungeon.collectibleInsignia,sprites.swamp.swampTile3,sprites.builtin.brick], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`1000100007070707070707070101010101010101050101010101010701010101010101010101010101010107010107010107010107070707070101070101070101070101010101010101010701010701010701010101010101010107010107010107010101010707070707070101070101070101010107070707070701010701010701010101010101010101010107010107010101010101010101010201070101070601070707070707070707070701010701010101010101010101010101010107010101010101010101010101010101070101040107070707070707070707070701010101010101010101010101010101010101010101010101010301010101010101`, img`
2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . 2 . . 2 . . 
2 2 2 2 2 . . 2 . . 2 . . 2 . . 
. . . . . . . 2 . . 2 . . 2 . . 
. . . . . . . 2 . . 2 . . 2 . . 
. . 2 2 2 2 2 2 . . 2 . . 2 . . 
. . 2 2 2 2 2 2 . . 2 . . 2 . . 
. . . . . . . . . . 2 . . 2 . . 
. . . . . . . . . . 2 . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.swamp.swampTile3,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
