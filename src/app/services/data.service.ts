import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class DataService {

  constructor() { }

  public data: Item[] = [
    {
      id: 0,
        title: "Bose SoundLink Micro Bluetooth speaker - Black",
        description: "CRISP, BALANCED SOUND and unmatched bass for a Bluetooth speaker its size, plays loud & clear outdoors—for beach days or camping trips WATERPROOF spea CRISP, BALANCED SOUND and unmatched bass for a Bluetooth speaker its size, plays loud & clear outdoors—for beach days or camping trips WATERPROOF spea",
        price: "$79.00",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/717RzqkS5GL._SX679_.jpg",
        date: '2016-01-16T05:23:38+00:00'
    },
    {
      id: 1,
        title: "Car2",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-01-17T05:23:38+00:00'
    },
    {
      id: 2,
        title: "Car3",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-03-12T05:23:38+00:00'
    },
    {
      id: 3,
        title: "Car4",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-01-10T05:23:38+00:00'
    },
    {
      id: 4,
        title: "Car5",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-01-01T05:23:38+00:00'
    },
    {
      id: 5,
        title: "Car6",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-01-31T05:23:38+00:00'
    },
    {
      id: 6,
        title: "Car7",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-06-16T05:23:38+00:00'
    },
    {
      id: 7,
        title: "Car8",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-02-16T05:23:38+00:00'
    },
    {
      id: 8,
        title: "Car9",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-01-02T05:23:38+00:00'
    },
    {
      id: 9,
        title: "Car10",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-12-16T05:23:38+00:00'
    },
    {
      id: 10,
        title: "Car11",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-01-06T05:23:38+00:00'
    },
    {
      id: 11,
        title: "Car12",
        description: "Some kind of Car",
        price: "20000$",
        imgUrl: "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248333860.png",
        date: '2016-01-12T05:23:38+00:00'
    }
  ];

  getData(): Item[] {
    return this.data;
  }
}
