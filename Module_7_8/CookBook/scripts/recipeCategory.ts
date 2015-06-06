//TODO:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
//HINT: refer to the work you did on this in Module 6 to get started 

class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory  {
    description: string;
    examples: Example[];

    constructor(param: IRecipeCategory) {
        super(param.name, param.foodGroups);
        this.description = param.description;
        this.examples = param.examples;
    }
} 