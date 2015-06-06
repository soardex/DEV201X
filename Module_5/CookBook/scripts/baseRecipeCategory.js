var BaseRecipeCategory = (function () {
    function BaseRecipeCategory() {
        this._foodGroups = [];
    }
    Object.defineProperty(BaseRecipeCategory.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRecipeCategory.prototype, "foodGroups", {
        get: function () {
            return this._foodGroups;
        },
        set: function (_foodGroups) {
            this._foodGroups = _foodGroups;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRecipeCategory;
})();
//# sourceMappingURL=baseRecipeCategory.js.map