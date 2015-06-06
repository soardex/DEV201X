class RecipeCategory extends BaseRecipeCategory {
    public description: string;

    constructor(name: string, foodGroups: FoodGroup[], description: string) {
        super(name, foodGroups);
        this.description = description;
    }
}