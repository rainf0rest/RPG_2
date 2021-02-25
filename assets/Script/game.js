cc.Class({
    extends: cc.Component,

    properties: {
        enemyNode: cc.Node,
        playerNode: cc.Node,
        scoreNode: cc.Node,
    },

    // use this for initialization
    onLoad() {
        this.enemy = this.enemyNode.getComponent('enemyCard');
        this.player = this.playerNode.getComponent('playerCard');
        this.score = this.scoreNode.getComponent('score');
    },

    playGame() {
        let cn = 52;
        this.score.print("test");
        this.enemy.productValues(cn);
        this.player.productValues(cn);
    },


});
