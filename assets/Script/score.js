cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,

    },

    init(num) {
        this.number = num;
        this.scoreLabel.string = this.number;
    },

    onLoad() {

    },

    print(s) {
        this.scoreLabel.string = s;
    },
});
