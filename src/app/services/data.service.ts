import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class DataService {

  constructor() { }

  public data: Item[] = [
    {
      id: 0,
        title: "Car1",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 1,
        title: "Car2",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 2,
        title: "Car3",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 3,
        title: "Car4",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 4,
        title: "Car5",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 5,
        title: "Car6",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 6,
        title: "Car7",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 7,
        title: "Car8",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 8,
        title: "Car9",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 9,
        title: "Car10",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 10,
        title: "Car11",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 11,
        title: "Car12",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    }
  ];

  getData(): Item[] {
    return this.data;
  }
}
