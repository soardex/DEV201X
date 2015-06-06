class FoodGroup {
    private _name: string;

    public get name(): string {
        return this._name;
    }

    public set name(_name: string) {
        this._name = _name;
    }
} 