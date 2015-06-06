var FoodGroup = (function () {
    function FoodGroup() {
    }
    Object.defineProperty(FoodGroup.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: true,
        configurable: true
    });
    return FoodGroup;
})();
//# sourceMappingURL=foodGroup.js.map