export class Student {
    id: number;
    
    private _name: string = "";
    private _faculty: string;
    private _dateOfBirth: Date;


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

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }
    set dateOfBirth(d: Date) {
        this._dateOfBirth = d;
    }


    public toJSON() {
        return {
            id: this.id,
            name: this._name,
            faculty: this._faculty,
            credits: this._dateOfBirth

        };
    }
}
