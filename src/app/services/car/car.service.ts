import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Car} from "../../models/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Array<any>;

  constructor() {
    this.cars = [];

    this.cars.push({
      id: 0,
      brandName: 'Toyota',
      modelName: 'Prius',
      status: 'pas louée'
    });
    this.cars.push({
      id: 1,
      brandName: 'Tesla',
      modelName: 'Model X',
      status: 'pas louée'
    });
    this.cars.push({
      id: 2,
      brandName: 'Jaguar',
      modelName: 'F Space',
      status: 'pas louée'
    });
    this.cars.push({
      id: 3,
      brandName: 'Volvo',
      modelName: 'V50',
      status: 'pas louée'
    });
    this.cars.push({
      id: 4,
      brandName: 'Lexus',
      modelName: 'RX 350',
      status: 'pas louée'
    });
    this.cars.push({
      id: 5,
      brandName: 'Porsche',
      modelName: 'Taycan',
      status: 'pas louée'
    });
    this.cars.push({
      id: 6,
      brandName: 'Renault',
      modelName: '2 CV',
      status: 'pas louée'
    });
  }

  /**
   *
   * @param newStatus
   */
  changeAllCarsStatus(newStatus: any) {
    this.cars.forEach(car=> car.status = newStatus);
  }

  changeCarStatus(carId: any) {
    for (let i = 0; i<this.cars.length; i++) {
      if(this.cars[i].id === carId) {
        this.cars[i].status = this.cars[i].status === "louée" ? 'pas louée' : 'louée';
      }
    }
  }
}
