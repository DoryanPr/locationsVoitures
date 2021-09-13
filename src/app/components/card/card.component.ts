import {Component, Input, OnInit} from '@angular/core';
import {CarService} from "../../services/car/car.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id: string;
  @Input() brandName: string;
  @Input() modelName: string;
  @Input() status: string;

  imgPath: string;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {

    // Generate image path for model name
    this.imgPath = '/assets/img/' + this.modelName.toLocaleLowerCase().split(' ').join('_') + '.jpg';
  }

  /**
   *
   */
  onClickChangeCarStatus() {
    this.carService.changeCarStatus(+this.id);
  }
}
