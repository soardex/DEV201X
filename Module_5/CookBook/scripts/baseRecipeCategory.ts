class BaseRecipeCategory {
    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    public get name(): string {
        return this._name;
    }

    public set name(_name: string) {
        this._name = _name;
    }

    public get foodGroups(): FoodGroup[]{
        return this._foodGroups;
    }

    public set foodGroups(_foodGroups: FoodGroup[]) {
        this._foodGroups = _foodGroups;
    }
} 