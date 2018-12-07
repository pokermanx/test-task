import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class DataService {

  constructor() { }

  public data: Item[] = [
    {
      id: 0,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 1,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 2,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 3,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 4,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 5,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 6,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 7,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 8,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 9,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 10,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    },
    {
      id: 11,
        title: "Car",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png"
    }
  ];

  getData(): Item[] {
    return this.data;
  }
}
