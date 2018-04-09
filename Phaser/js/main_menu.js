
function main_menu (){



    var Billy = game.add.sprite(25,100,"bosseur");
    var Teemo = game.add.sprite(225,100,"gaffeur");
    var Jeanne = game.add.sprite(425,100,"susceptible");
    var Ed = game.add.sprite(625,100,"manipulateur");
    

    Billy.scale.setTo(0.5,0.5);
    Teemo.scale.setTo(0.5,0.5);
    Jeanne.scale.setTo(0.5,0.5)
    Ed.scale.setTo(0.5,0.5);


    Billy.animations.add('jump');
    Billy.animations.play('jump', 12, true);

    Teemo.animations.add('jump');
    Teemo.animations.play('jump', 12, true);
    
    Jeanne.animations.add('jump');
    Jeanne.animations.play('jump', 12, true);

    Ed.animations.add('jump');
    Ed.animations.play('jump', 12, true);
    
    



    var arcade = game.add.button(game.world.centerX - 250 - 100, game.world.centerY +100 ,"boutons", startArcade, this);
    arcade.scale.setTo(0.5,0.5);
    arcade.setFrames(2,0,1);

    var histoire = game.add.button(game.world.centerX +100 , game.world.centerY +100 ,"boutons", startHistory);
    histoire.scale.setTo(0.5,0.5);
    histoire.setFrames(11,9,10);


    /*
    description : passe en plein ecran
    argument : none
    return : none
    */
    function gofull() {
        if (game.scale.isFullScreen){
            game.scale.stopFullScreen();
        }
        else{
            game.scale.startFullScreen(false);
        }
    };


    /*
    description : nettoie la scene et lance le mode arcade
    argument : none
    return : none
    */
    function startArcade (){
        Billy.destroy();
        Teemo.destroy();
        Jeanne.destroy();
        Ed.destroy();
        histoire.destroy();
        arcade.destroy();
        gofull();
        game.state.add("game", leJeu);
        game.state.start('game');
    };


    /*
    description : nettoie la scene et lance le mode histoire
    argument : none
    return : none
    */
    function startHistory (){

    };


}

