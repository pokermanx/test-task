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
        title: "Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120-K (Black) Dynamic Crystal Clear Sound, Ergonomic Comfort-Fit",
        description: `Wired In-Ear Headphones: Perfect for exercising; With three sets of earpads (S/M/L), headphones stay in your ears while keeping surrounding noise out
        ErgoFit Design for Perfect Fit: Black, ultra-soft ErgoFit in-ear earbud headphones conform instantly to your ears (S/M/L earpads included for a perfect fit)
        Smartphone Compatible: Panasonic in-ear headphones with integrated microphone and remote are compatible with Apple (iPhone / iPod / iPad), Android and Blackberry Audio devices
        In-Ear Stereo Audio: Tonally balanced audio with crisp highs and deep low notes, plus wider frequency response and lively sound quality for recorded audio
        Extended Headphone Cord: Long, 3.6-ft cord threads comfortably through clothing and bags making it easy to connect`,
        price: "$6.48",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71Iu-6R6UPL._SL1500_.jpg",
        date: '2016-01-17T05:23:38+00:00'
    },
    {
      id: 2,
        title: "Bose SoundLink around-ear wireless headphones II Black",
        description: `Deep, immersive sound, improved eq-best-in-class performance for wireless headphones. Connectivity Technology: Wired/Wireless
        Latest Bluetooth technology for easy connectivity and seamless audio/video syncs. Wireless range up to 9 m (30 feet)
        Advanced microphone system, HD voice for clear calls in windy or noisy environments.Recharge Time 3.0 Hours
        Up to 15 hours play time with rechargeable lithium-ion battery,Ear cushion:9.6 cm H x 7.4 cm W
        Switch between two Bluetooth devices so you can watch a video while staying connected to your smartphone`,
        price: "$199.00",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/6188bLRU64L._SL1000_.jpg",
        date: '2016-03-12T05:23:38+00:00'
    },
    {
      id: 3,
        title: "Insignia NS-39DF510NA19 39-inch 1080p Full HD Smart LED TV- Fire TV Edition",
        description: `Insignia Full HD Smart TV – Fire TV Edition delivers 1080p picture quality for lifelike detail, rich contrast, and brilliant colors.
        With the Fire TV experience built-in, enjoy tens of thousands of channels, apps, and Alexa skills, including Netflix, Prime Video, Hulu, HBO, SHOWTIME, STARZ, and more.
        Fire TV Edition seamlessly integrates live over-the-air TV and streaming channels on a unified home screen (HD antenna required).
        Easily control your TV with the included Voice Remote with Alexa—plus, launch apps, search for titles, play music, switch inputs, control smart home devices, and more, using just your voice.
        Dimensions (W x H x D): TV without stand: 34.8” x 20.6” x 3.2”, TV with stand: 34.8” x 22.3” x 8.9”. Multiple device input/output options: 3 HDMI including 1 with ARC, USB, composite input, antenna/cable input, digital output (optical), audio output, Ethernet.`,
        price: "$179.99",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61hvA0gCGsL._SL1000_.jpg",
        date: '2016-01-10T05:23:38+00:00'
    },
    {
      id: 4,
        title: "Dell UltraSharp U2715H 27-Inch Screen LED-Lit Monitor",
        description: `Refresh existing 27" Dell Ultra Sharp monitor with new and improved features to drive productivity and dual or multi-monitor usage
        A 27" QHD resolution 16:9 aspect ratio monitor with an ultra-thin bezel. In-plane switching, anti glare with hard coat 3H
        Fully adjustable features like tilt, swivel, height adjust including pivoting both 90 Degree clockwise or counter-clockwise, allowing the thinnest possible edges to be placed side by side
        Has an arsenic-free glass and mercury-free LED panel. Compatibility- All Operating System`,
        price: "$329.00",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/817b3yOWqEL._SL1500_.jpg",
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
