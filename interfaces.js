var rect1 = {
    id: '123123123123',
    size: {
        width: 20,
        height: 30
    },
    color: '#eee'
};
var rect2 = {
    id: '123123123123',
    size: {
        width: 20,
        height: 30
    }
};
rect2.color = '#fff';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date;
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
