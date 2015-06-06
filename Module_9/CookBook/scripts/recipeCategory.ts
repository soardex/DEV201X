//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory

class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
    description: string;
    examples: Example[];

    constructor(param: IRecipeCategory) {
        super(param.name, param.foodGroups);
        this.description = param.description;
        this.examples = param.examples;
    }
} 