cc.Class({
    extends: cc.Component,

    properties: {
        pc1: cc.Label,
        pc2: cc.Label,
        pc3: cc.Label,
    },

    // use this for initialization
    onLoad() {

    },

    productValues(m) {
        let num = this.makeRandom(m);
        this.cnumber1 = num;
        this.value1 = num % 13;
        this.type1 = this.judgeType(num);
        this.pc1.string = this.type1 + this.value1;

        num = this.makeRandom(m);
        this.cnumber2 = num;
        this.value2 = num % 13;
        this.type2 = this.judgeType(num);
        this.pc2.string = this.type2 + this.value2;

        num = this.makeRandom(m);
        this.cnumber3 = num;
        this.value3 = num % 13;
        this.type3 = this.judgeType(num);
        this.pc3.string = this.type3 + this.value3;
    },

    makeRandom(m) {
        let num = Math.random()*1000;
        num = Math.round(num);
        num = num%m + 2;
        return num;
    },

    judgeType(m) {
        let type = "无色";
        if(m >= 1 && m <= 13) {
            type = "红桃";
        }else if(m >= 14 && m <= 26) {
            type = "黑桃";
        }else if(m >= 27 && m <= 39) {
            type = "梅花";
        }else if(m >= 40 && m <= 52) {
            type = "方片";
        }
        return type;
    },

});
