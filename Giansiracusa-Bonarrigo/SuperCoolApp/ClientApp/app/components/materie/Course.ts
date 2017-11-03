export class Course {
    id: number;

    private _name: string = "";
    private _faculty: string;
    private _credits: string;
    get name(): string {
        return this._name;
    }
    set name(n: string) {
        this._name = n;
    }

    get faculty(): string {
        return this._faculty;
    }
    set faculty(d: string) {
        this._faculty = d;
    }

    get credits(): string {
        return this._credits;
    }
    set credits(d: string) {
        this._credits = d;
    }


    public toJSON() {
        return {
            id: this.id,
            name: this._name,
            faculty: this._faculty,
            credits: this._credits

        };
    }
}
