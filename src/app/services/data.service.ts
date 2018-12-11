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
    {
      id: 12,
        title: "Nintendo Switch Pro Controller",
        description: `Take your game sessions up a notch with the Nintendo Switch Pro Controller.
        Includes motion controls, HD rumble, built-in amiibo functionality, and more.
        Comes with charging cable (USB-C to USB-A)`,
        price: "$52.79",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/71w61HvlGeL._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/7166--AaJIL._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71CbYcn-kZL._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81GutZPdWiL._AC_.jpg"],
        date: '2016-01-16T05:01:38+00:00'
    },
    {
      id: 13,
        title: "Bluetooth Headphones TaoTronics Wireless 4.2 Magnetic Earbuds Snug Fit for Sports with Built in Mic TT-BH07 (IPX6 Waterproof aptX Stereo 6-8 Hours Playtime) Blue",
        description: `Perfect workout headphones that are snug and secure so the headphones stay put while running, biking or at the gym.
        Built-in magnets let you attach the two headphones together when not using, and wear like a necklace around your neck, a convenient way to carry around when you don't need them.
        The rechargeable long battery life means you get 6-8 hours of continuous music, or can relax with 80 hours of standby time when powered with a 5V external charger.
        cVc 6.0 Noise Cancelling Microphone reduces outside noises, enable clearer microphone sound.
        TT-BH07 Earbuds that work with the latest Bluetooth 4.2 technology; easy and fast pairing; aptX codec provides pure, CD-like high quality sound for compatible devices`,
        price: "$21.99",
        imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/51-uSQg6cjL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71oYpNZU4LL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61KjGpWsIPL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61ZqmURazKL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71WjO1fzRbL._SL1000_.jpg"],
        date: "2016-01-16T05:02:38+00:00"
      },
      {
        id: 14,
          title: "Nintendo Joy-Con (L/R) - Neon Red/Neon Blue",
          description: `Introducing Joy-Con, controllers that make new kinds of gaming possible, for use with Nintendo Switch.
          The versatile Joy-Con offer multiple surprising new ways for players to have fun.Battery life Approximately 20 hours
          Two Joy-Con can be used independently in each hand, or together as one game controller when attached to the Joy-Con grip.
          They can also attach to the main console for use in handheld mode, or be shared with friends to enjoy two-player action in supported games.
          Each Joy-Con has a full set of buttons and can act as a standalone controller, and each includes an accelerometer and gyro-sensor, making independent left and right motion control possible.`,
          price: "$66.64",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/71UtjHT65EL._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51X3ss9GezL._AC_.jpg"],
          date: "2016-01-16T05:11:38+00:00"
      },
      {
        id: 15,
          title: "First Alert 1039102 One Link Safe & Sound Smart Speaker with Amazon Alexa Smoke + Carbon Monoxide Alarm, Onelink",
          description: `First Alert introduces the Onelink Safe & Sound, an all-new, Alexa-enabled, Apple HomeKit-compatible hardwired photoelectric smoke and electrochemical carbon monoxide alarm, featuring a state-of-the-art, omni-directional speaker backed by First Alert’s unparalleled reliability and equipped with the power of Alexa
          Optimal ceiling placement enhances the speaker’s acoustic quality and provides crisp vocals and deep, rich bass that resonate throughout the room; make installation fast and easy by using the included AC adapter plugs to replace your existing hardwire alarms without rewiring (AC power is required for Onelink Safe & Sound)
          You can talk to Alexa on your Safe & Sound. Just ask Alexa to play music, fill you in on the news, check weather, control smart home devices, and more. Alexa’s always adding skills, so it gets smarter over time
          Just ask for a song, artist, or genre from Amazon Music, Spotify, Pandora, and more. Onelink can also play Audible audiobooks, radio stations, news, and more
          Get remote notifications of an emergency in your home, track carbon monoxide levels, and customize a nightlight using First Alert’s Onelink Home app`,
          price: "$185.00",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/81LqUU2vHTL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81LFSpx4H4L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/91DIS%2BBvhLL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/91uFmnF0cSL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81rCmOQc1VL._SL1500_.jpg"],
          date: "2016-01-16T05:01:32+00:00"
      },
      {
        id: 16,
          title: "Ooma Butterfleye Smart Security Camera with Battery Backup, 7 Days of Free Storage, and 16GB of Internal Storage, Indoor",
          description: `Watch over your home from anywhere with 24/7 streaming and recording.
          7 days of FREE cloud storage.
          Optional facial recognition identifies people coming and going and gives smart alerts.
          Continues to work during Internet and power outages with built-in storage and battery backup.
          Built-in speaker to talk and listen, and automatic arm/disarm (optional)
          Full HD video with instant video capture.
          Compatible with Ooma Home Security for whole house protection.`,
          price: "$149.99",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61JbrJPCiKL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71itQqOiAUL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61JNQVrMN5L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71dLCrRepbL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/715YQEmg64L._SL1500_.jpg"],
          date: "2016-01-16T08:01:38+00:00"
      },
      {
        id: 17,
          title: `2018 Acer 15.6" HD Premium Business Chromebook-Intel Dual-Core Celeron N3060 up to 2.48Ghz Processor, 2GB RAM, 16GB SSD, Intel HD Graphics, HDMI, WiFi, Bluetooth, Chrome OS-(Certified Refurbished)`,
          description: `This Certified Refurbishd product is tested and certified to look and work like new. The refurbishing process includes functionality testing, basic cleaning, inspection, and repackaging. The product ships with all relevant accessories, a minimum 90-day waranty, and may arrive in a generic box. Only select sellers who maintain a high performance bar may offer Certified Refurbishd products on Amazon.com
          Intel Dual-Core Celeron N3060 (Up to 2.48GHz, 2MB Cache), Intel HD Graphics 400
          15.6" HD Backlit LED Display (1366 x 768) with ComfyView Technology, Integrated HD Webcam
          2GB LPDDR3 SDRAM, 16GB eMMC SSD, Multi-Format Media Reader, Integrated Stereo Speakers and Microphone, NO Optical Drive
          802.11a/b/g/n/ac, WiFi, Bluetooth 4.0, 2x USB 3.0, 1x HDMI, Chrome OS, 3-Cell Battery, Classic Black Color`,
          price: "$163.00",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/418NprUVzFL.jpg", "https://images-na.ssl-images-amazon.com/images/I/419FNR6M%2B0L.jpg", "https://images-na.ssl-images-amazon.com/images/I/41P3lxLs24L.jpg", "https://images-na.ssl-images-amazon.com/images/I/61WIazJlRbL._SL1293_.jpg", "https://images-na.ssl-images-amazon.com/images/I/31m-RMzIRsL.jpg"],
          date: "2010-01-16T05:01:38+00:00"
      },
      {
        id: 18,
          title: `Acer R11 Convertible 2-in-1 Chromebook, 11.6" HD Touchscreen, Intel Quad-Core N3150 1.6Ghz, 4GB Memory, 32GB SSD, Bluetooth, Webcam, Chrome OS (Certified Refurbished)`,
          description: `This Certified Refurbished product is tested and certified to look and work like new. The refurbishing process includes functionality testing, basic cleaning, inspection, and repackaging. The product ships with all relevant accessories, a minimum 90-day warranty, and may arrive in a generic box. Only select sellers who maintain a high performance bar may offer Certified Refurbished products on Amazon.com
          Intel Celeron N3150 Quad-Core Processor 1.6GHz with Intel Burst Technology up to 2.08GHz,
          Chrome, 11.6" HD Widescreen LED-backlit Display (1366x768 resolution; 16:9 aspect ratio), Multi-touch screen, supporting 10 finger touch,
          Intel HD Graphics, 4GB DDR3L Memory, 32GB Solid State Drive (SSD) internal storage
          Bluetooth 4.0, Built-In HD Webcam,1 USB 3.0 Port, 1 USB 2.0 Port, HDMI Port, 3-cell Li-ion Battery (3220 mAh), Up to 10-hours. 45 W`,
          price: "$245.00",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/71KqV42X-zL._SL1159_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71r0GBONd9L._SL1229_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51Sg-hVKt6L._SL1159_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51MQXxHCa2L._SL1284_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51C2Z7lQ9HL._SL1500_.jpg"],
          date: "2006-01-16T05:01:38+00:00"
      },
      {
        id: 19,
          title: "SanDisk 64GB Ultra microSDXC UHS-I Memory Card with Adapter - 100MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUAR-064G-GN6MA",
          description: `Ideal for Android-based smartphones and tablets
          Transfer read speeds of up to 100MB/s (Based on internal testing; performance may be lower depending on host device, interface, usage conditions and other factors.)
          Rated A1 for faster app performance (Results may vary based on host device, app type and other factors.)
          UHS Speed Class U1 and Speed Class 10 for Full HD video recording and playback (Full HD (1920x1080) video support may vary based upon host device, file attributes, and other factors.)
          Shockproof, temperature-proof, waterproof, and X-ray-proof (Card only)
          10-year limited manufacturer warranty`,
          price: "$9.99",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61TPoMI1NZL._SL1100_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61IWJpxxaXL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61Q0Lib8hDL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51cNtpuJGhL.jpg", "https://images-na.ssl-images-amazon.com/images/I/81fFqsoyKfL._SL1500_.jpg"],
          date: "2016-01-16T05:01:32+10:00"
      },
      {
        id: 20,
          title: "2.1 Channel Bluetooth Sound Bar, Wohome TV Soundbar with Built-in Subwoofer(Wireless Home Theater Speaker,32-Inch, 60W, 3 Drivers, Remote Control, Wall Mountable, Model S05)",
          description: `32-Inch TV Sound Bar：with built-in subwoofer provides powerful bass, enhance home-audio systems, great for small environments, suit for 32" or above TVs including Samsung/Vizio/TCL/LG/Sharp/Philips/Sony and many more TVs.
          2.1 Channel Soundbar: come with 2x 20w full-range speakers and 1x 20w sub-range speakers, output surround sound for all your movies, music and TV shows, powerful 60w, Enjoy 97 dB of room filling, crystal clear sound with less than 1% total harmonic distortion
          4 Sound Mode: designed with DSP Technology, support 4 sound modes including movie, news, music default sound mode, what's more, default mode can adjust bass and treble.
          Wired and Wireless: support wireless Bluetooth 4.0, supply optical cable and AUX cable for wired connection
          100% Satisfaction Service: One year warranty, 45 days money back guarantee, lifetime technical support, please feel free to contact us via Amazon message or refer to the user manual to find our service mail to contact us.`,
          price: "$42.39",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61vdVWmGMuL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71zh1bdwUKL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61VrcFRz3cL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71FL4faONQL._SL1500_.jpg", "https://www.amazon.com/Bluetooth-Soundbar-Subwoofer-Mountable-S05/dp/B07FDVPY9D/ref=gbps_img_m-6_13db_bd5efc30?smid=AFLAMQSJ9S7F2&pf_rd_p=f49ce844-2edc-44b9-aee5-a2735bd513db&pf_rd_s=merchandised-search-6&pf_rd_t=101&pf_rd_i=18445253011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=80EG23PTXH4B6BF117TQ"],
          date: "2016-01-16T02:01:38+00:00"
      },
      {
        id: 21,
          title: "Stylus Pens for Touch Screens, iPad Pencil Fine Point Active Smart Digital Pen for Tablet",
          description: `[Perfect Precision] This pencil is sensitive to pressure and tilt, so you can easily vary line weight, create subtle shading, it makes your iPad Pro even more powerful and can help you be more creative.
          [Universal Compatible] Works with any Touch Screen Tablets and Smartphones, such as iPad, iPhone, Samsung Dell and most popular tablets.
          [Long Battery Time] Built-in battery provides 8 hours active use, and with auto sleep function.
          No connection required, can be used directly
          Comes with: Stylus Pencil, usb cable, user's Guide`,
          price: "$27.99",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/51l6kvHXfZL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51J2ldb%2BEcL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51IXXUEJaaL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/6175l%2B3VXTL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71Vhq5wpaeL._SL1500_.jpg"],
          date: "2016-01-17T02:01:38+00:00"
      },
      {
        id: 22,
          title: "Victure 1080P FHD WiFi IP Camera Indoor Wireless Security Camera with Motion Detection Night Vision Home Surveillance Monitor with 2-Way Audio for Baby/Pet/Elder with iOS/Android",
          description: `[VIDEO ENCRYPTION TECHNOLOGY ] The unique encryption technology is adopted by this IP camera to save videos on micro SD card. Nobody can copy the SD card's video file through the card reader even when your camera or SD card is stolen.Video files in SD card can only be accessed by yourself in your own account.
          [STABLE WIFI CONNECTION ] Easy and Quick installation and stable 2.4GHz WIFI connection for Victure IP Camera, just follow steps in the manual with "IPC360" app. Adapt to iOS & Android. You can not only set several preset positions in each camera, but also add several cameras in different terminals.
          [1080P NIGHT VISION & MOTION DETECTION] 10 pcs 850nm IR LEDs technology extend the viewing distance up to 30 feet in pitch dark to offer you a super night vision experience. Wifi Camera will monitor movements and has the ability to send notifications to your mobile phone to help catch home invaders in action.`,
          price: "$31.99",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61vHEuyhgML._SL1001_.jpg", "https://images-na.ssl-images-amazon.com/images/I/610oJ%2BKVSNL._SL1001_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61lUcHUm4wL._SL1001_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71lGoVa5LUL._SL1001_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71eFoPBkmXL._SL1001_.jpg"],
          date: "2016-02-16T05:01:37+00:00"
      },
      {
        id: 23,
          title: `MSI GV62 8RD-200 15.6" Full HD Performance Gaming Laptop PC i5-8300H, GTX 1050Ti 4G, 8GB RAM, 16GB Intel Optane Memory + 1TB HDD, Win 10 64 bit, Black, Steelseries Red Backlit Keys`,
          description: `Display: 15.6" Full HD EDP IPS-Level | Operating System: Win 10 Multi-language
          Processor: New Intel 8th Gen Core i5-8300H 2.3 - 4.0GHz
          Graphics: NVIDIA GeForce GTX1050Ti 4G GDDR5
          Memory: 8GB DDR4 2400MHz 2 Sockets; Max Memory 32GB | Storage: New Intel Optane 16GB + 1TB (5400RPM)
          Special Features: 1 Year Limited warranty (Include 1 Year Global) | Intel Optane Memory (16GB): Launches programs faster, Powers quicker access to files, Loads game levels in an instant`,
          price: "$799.00",
          imgUrl: ["https://images-na.ssl-images-amazon.com/images/I/61wju0GHrOL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61c0m08MgAL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61fbbGMCnYL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61QrXHzXrzL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/711FKLzgirL._SL1000_.jpg"],
          date: "2016-11-16T05:11:38+00:00"
      },

  ];

  getData(): Item[] {
    return this.data;
  }
}
