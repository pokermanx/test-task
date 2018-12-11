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
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/717RzqkS5GL._SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61Ne3h1KQ8L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71gY4wc2ugL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61XjFZcJmRL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81y8AsLkj2L._SL1500_.jpg"],
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
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/71Iu-6R6UPL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61wJjt-IGDL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61aUaQdkbLL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71AslHejpEL._SL1500_.jpg"],
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
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/6188bLRU64L._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71r5yiYW3nL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71LirOdu88L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71R4yfSBy8L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71I2y5Ei3EL._SL1500_.jpg"],
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
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61hvA0gCGsL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/516MiURgwGL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51sTdnbCIKL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/615J6KePC7L._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41UF9XnUXkL._SL1000_.jpg"],
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
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/817b3yOWqEL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41-C2DVhGkL.jpg", "https://images-na.ssl-images-amazon.com/images/I/5176DX8vUqL.jpg", "https://images-na.ssl-images-amazon.com/images/I/31dwBQiJHRL.jpg", "https://images-na.ssl-images-amazon.com/images/I/61NevWyvZxL._SL1500_.jpg"],
        date: '2016-01-01T05:23:38+00:00'
    },
    {
      id: 5,
        title: "VANKYO Leisure 3 (Upgraded Version) LED Portable Projector with Carrying Bag",
        description: `SUPERIOR WATCHING EXPERIENCE: Leisure 3 Projector is Powered by MStar Advanced Color Engine. Supporting 1920x1080 resolution, 2000:1 contrast ration which is ideal for home entertainment. Not recommend for PPT or office presentation.
        MULTIMEDIA PORTABLE PROJECTOR: VANKYO Leisure 3 projectors is fit for playing videos, TV series, photos sharing, football matches etc. It can be easily connected with your smartphone, PS3, PS4, X-Box ONE or Wii to enjoy BIG games. A customized bag is designed for you to carry and store it easily.
        BIG SCREEN SIZE EXPERIENCE: It provides a wa  tching size from 32” to 176” with the projection distance between 4.9ft to 16.4ft. A projection distance of about 6.5 ft is the recommended viewing distance.
        FAN NOISE SUPPRESSION SYSTEM: VANKYO projectors are equipped with an innovative cooling system with heat dispersion, as well as a noise suppression technology which cuts fan sound in half
        3-YEAR WARRANTY (100% MONEY BACK GUARANTEE): We offer our customers a 3-year 100% Money Back Guarantee and professional customer service & technical support. Please feel free to contact our customer service if you have any problems.`,
        price: "$62.99",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61FoZ-04YTL._SL1001_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61Rh%2B-sqPpL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61tb7S9tHaL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61VYKd49jzL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61Ja%2Bpx0ucL._SL1000_.jpg"],
        date: '2016-01-31T05:23:38+00:00'
    },
    {
      id: 6,
        title: "Nintendo Switch – Neon Red and Neon Blue Joy-Con",
        description: `Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.

        PLAY ANYWHERE
        
        Home Gaming System
        
        At home the main unit rests in the Nintendo Switch dock, which connects the system to the TV and lets you play with family and friends in the comfort of your living room.
        
        On-the-Go
        
        Lift Nintendo Switch from the dock and instantly transition to handheld mode for on-the-go gaming. By sharing Joy-Con, players can go head-to-head while away from home. You can also enjoy the same great games in tabletop mode by using the included stand to prop the system up.`,
        price: "$299.99",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/51vxQVTdVVL._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61ecsEuu6-L._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71tdXgn9LzL._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/617jLYKWctL._AC_.jpg"],
        date: '2016-06-16T05:23:38+00:00'
    },
    {
      id: 7,
        title: `Apple iMac 21.5" 2.7GHz Core i5 (ME086LL/A) All In One Desktop, 8GB Memory, 1TB Hard Drive, MacOS 10.12 Sierra (Refurbished)`,
        description: `Renewed products look and work like new. These pre-owned products have been inspected and tested by Amazon-qualified suppliers, which typically perform a full diagnostic test, replacement of any defective parts, and a thorough cleaning process. Packaging and accessories may be generic. All products on Amazon Renewed come with a minimum 90-day supplier-backed warranty.
        Intel Iris Pro Graphics;2.7 GHz Quad-Core Intel Core i5 Processor (Turbo Boost up to 3.2 GHz) with 6MB L3 cache
        21.5-inch (Diagonal) LED-backlit Display with IPS Technology; 1920-by-1080 Resolution
        1TB Hard Drive, 8 GB (Two 4 GB) of 1600MHz DDR3 Memory`,
        price: "$669.98",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/41-yNUof08L.jpg", "https://images-na.ssl-images-amazon.com/images/I/413oogt1noL.jpg", "https://images-na.ssl-images-amazon.com/images/I/31c7T9F5uvL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41LVK2G7koL.jpg"],
        date: '2016-02-16T05:23:38+00:00'
    },
    {
      id: 8,
        title: "Yamaha WX-021 MusicCast 20 Wireless Speaker, Alexa Voice Control, Black",
        description: `Fits any space and style of room, even wall Mountable
        Stream your favorite music through Wi-Fi, Bluetooth, airplay or Spotify connect
        Completes your wireless MusicCast stereo or multi-room setup. Stream and control multiple rooms with the MusicCast app for iOS and Android
        MusicCast stereo/surround-capable. Add a pair to a MusicCast surround-capable AV receiver to provide wireless Surrounds for a 5.1-Channel home theater system
        Voice control with Alexa via any echo device`,
        price: "$199.95",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/81RqeOGhWQL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71ge%2BfnxztL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81Wa3Ki-kTL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81Iv1LTV8qL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81y6KT27hdL._SL1500_.jpg"],
        date: '2016-01-02T05:23:38+00:00'
    },
    {
      id: 9,
        title: "TP-Link AC1750 Smart WiFi Router - 5GHz Dual Band Gigabit Wireless Internet Routers for Home, Works with Alexa, Parental Control&QoS(Archer A7)",
        description: `Wireless internet router works with Alexa, compatible with all Wi-Fi devices, 802.11ac and older
        Dual band router upgrades to 1750 Mbps high speed internet(450Mbps for 2.4GHz + 1300Mbps for 5GHz), reducing buffering and ideal for 4K streaming comparable to the router Netgear R6700
        3 external antennas for long range wifi
        Gigabit router with 4 gigabit LAN ports, fast access to multiple connected wired devices, ideal as a gaming router
        Integrated USB port acts as a media server, easily share your USB drive content
        TP-Link Tether app - Easily set up and remotely manage your home network
        Industry leading 2-year warranty and FREE 24/7 technical support. Amazon Dedicated Email: Support.Amazon@tp-link.com
        J.D. Power Ranked TP-Link Highest in Customer Satisfaction for Wireless Routers`,
        price: "$69.99",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61lOTXr9B1L._SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61PigjKeFqL._SL1267_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71HCacvh5cL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71qQePTWx7L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71W3UqMuO6L._SL1500_.jpg"],
        date: '2016-12-16T05:23:38+00:00'
    },
    {
      id: 10,
        title: "NETGEAR Orbi Ultra-Performance Whole Home Mesh WiFi System - fastest WiFi router and single satellite extender with speeds up to 3 Gbps over 5,000 sq. feet, AC3000 (RBK50)",
        description: `Ultra-performance Mesh WiFi network blankets every inch of your home in super fast and seamless WiFi connectivity — room to room, wall to wall, floor to floor
        Up to 161% faster than the leading brands, as certified by an independent study, makes Orbi the highest performance Mesh WiFi system on the market
        Eliminates WiFi dead zones and buffering — 5,000 square feet of consistent coverage — with speeds up to 3.0 Gbps
        The most award-winning Mesh WiFi system on the planet: PC Mag, CNET, Wirecutter, Forbes, SmallNetBuilder
        Maintains speed even as more devices use your WiFi at the same time, thanks to patented tri-band technology
        4 Ethernet ports on both router and satellite provide ultimate flexibility and connectivity for your Smart TV, game console, streaming player, and more
        Simple setup with the Orbi app — create guest network, access parental controls, perform speed tests, and more right from the app`,
        price: "$317.97",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/51ZfpSi62iL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/718pBY3xkAL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71Q3qVCscsL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81UjvCXl4QL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61QMhQNuUEL._SL1500_.jpg"],
        date: '2016-01-06T05:23:38+00:00'
    },
    {
      id: 11,
        title: "Huion H610 Pro V2 Graphic Drawing Tablet Tilt Function Battery-Free Stylus and 8192 Pen Pressure with 8 Pen Nibs",
        description: `Innovative Tilt Control System - Provide you better pressure detection and accurate cursor positioning with different angles, restore the true feeling of painting.
        Battery-free Stylus - Say goodbye to the pen charging cable，you can get rid of any unexpected interruptions when working.
        8192 Levels of Pressure Sensitivity - Outfitted with Huion's latest battery-free stylus PW100 of 10mm reading heights; 5080LPI in resolution and 233RPS in reading rates, which offers more accurate and natural drawing experience.
        Customizable Shortcut Keys - 8 Customized Press Keys + 16 Customized Soft Keys, all customizable and easy to set up; With the two pen buttons, you can set it to the function like eraser as you want;10×6.25 inches sufficient compact working area.
        Compatibility - Well compatible with Windows 7 or later, Mac 10.11 or later versions and other mainstream drawing applications; Huion provides one year warranty on this product and its accessories.`,
        price: "$62.07",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/71Ygt%2BF36bL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81SRk4AzM1L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71wsnEqkdXL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71c2B9FAKKL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71G8BEtTrmL._SL1500_.jpg"],
        date: '2016-01-12T05:23:38+00:00'
    },

  ];

  getData(): Item[] {
    return this.data;
  }
}
