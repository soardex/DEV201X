//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    function RecipeCategory(param) {
        _super.call(this, param.name, param.foodGroups);
        this.description = param.description;
        this.examples = param.examples;
    }
    return RecipeCategory;
})(BaseRecipeCategory);
//# sourceMappingURL=recipeCategory.js.map