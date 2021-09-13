export class Car {
  private _id:number;
  private _name:string;
  private _modele:string;
  private _picture:string;
  private _status:string;

  static voitureLength = 1


  constructor(name: string, modele: string, picture: string, status: string) {
    this._id = Car.voitureLength;
    this._name = name;
    this._modele = modele;
    this._picture = picture;
    this._status = status;

    Car.voitureLength++
  }

  get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get modele(): string {
        return this._modele;
    }

    set modele(value: string) {
        this._modele = value;
    }

    get picture(): string {
        return this._picture;
    }

    set picture(value: string) {
        this._picture = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}
