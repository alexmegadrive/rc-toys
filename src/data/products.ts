export type Product = {
  id: number;
  name: string;
  brand: string;
  model: string;
  class: string;
  color: string;
  size: string;
  price: number;
  weight: number;
  year: string;
  engine: string;
  protection: string;
  remote: string;
  radius: string;
  headless: string;
  remoteBattery: string;
  fpv: string;
  camera: string;
  stock: number;
  photo: Array<string>;
  description: string;
};
export type Products = Array<Product>;

export const products: Products = [
  {
    id: 1,
    name: 'Monster Traxxas RH1631 V2.0 4WD RTR 1:16',

    model: 'RH1631',
    brand: 'Traxxas',
    class: 'Monster',
    color: 'Purple',
    size: 'Small',
    price: 100,
    weight: 900,
    engine: 'Electro',
    protection: 'Full',

    remote: 'Yes',
    radius: '50m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',
    year: '2022',

    fpv: 'No',
    camera: 'No',

    stock: 7,
    photo: ['./assets/img/products/p1/1.webp', './assets/img/products/p1/2.webp', './assets/img/products/p1/3.webp'],
    description:
      'The RH1631 WD RTR is an all-wheel drive radio-controlled monster with a rear differential, which has a positive effect on flotation and handling. The modular chassis has excellent running characteristics and does not require complex maintenance. The body of the Traxxas RH1631 WD RTR SUV is made of impact-resistant alloy. It will pass any crash test without any damage.',
  },
  {
    id: 2,
    name: 'Buggy Feiyue Horn 4WD RTR 1:10',

    model: 'Horn',
    brand: 'Feiyue',
    class: 'Buggy',
    color: 'Blue',
    size: 'Medium',
    price: 65,
    weight: 2090,
    engine: 'Electro',
    protection: 'Partial',
    year: '2018',

    remote: 'Yes',
    radius: '70m',
    headless: 'No',
    remoteBattery: 'AAA - 3 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 5,
    photo: ['./assets/img/products/p2/1.webp', './assets/img/products/p2/2.webp', './assets/img/products/p2/3.webp'],
    description:
      'RC Crawler MZ Climbing Car 1:10 - MZ-2837  is a RC 4WD trophy car. The machine has excellent cross-country ability and high quality workmanship.Completely finished radio-controlled crawler model. The model is equipped with an electric motor and is made in 1:10 scale. Everything you need to get started is included. The model is equipped with all-wheel drive and long-travel suspension, which ensures excellent cross-country ability.',
  },
  {
    id: 3,
    name: 'Monster HPI Bullet ST 3.0 4WD RTR 1:10',

    model: 'Bullet ST',
    brand: 'HPI',
    class: 'Monster',
    color: 'Orange',
    size: 'Medium',
    price: 230,
    weight: 1750,
    engine: 'Nitro ICE',
    protection: 'Full',
    year: '2021',

    remote: 'Yes',
    radius: '70m',
    headless: 'No',
    remoteBattery: 'AAA - 6 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 7,
    photo: ['./assets/img/products/p3/1.webp', './assets/img/products/p3/2.webp', './assets/img/products/p3/3.webp'],
    description:
      'The updated HPI Bullet ST 3.0 is perfect for all off-road racing enthusiasts. Now the monster has received a waterproof battery compartment, waterproof servos with a force of 4.5kg / cm and a rain cover for the air filter. Bullet 3.0 is now a truly all-weather machine!The 1/10 scale monster is equipped with a powerful all-wheel drive transmission and a mighty HPI Nitro Star G3.0 glow engine with 2.2 horsepower, which allows Bullet 3.0 to overcome any terrain and the most difficult obstacles.The updated model is equipped with a convenient and versatile HPI 2.4 transmitter, a reliable and durable transmission, two shock absorbers per wheel and a two-deck aluminum chassis. You get a reliable monster with excellent off-road performance that you can only expect from the HPI Bullet!',
  },
  {
    id: 4,
    name: 'Rally Traxxas Racing DT5 N1 4WD RTR 1:10',

    model: 'DT5 N1',
    brand: 'Traxxas',
    class: 'Rally',
    color: 'Black',
    size: 'Large',
    price: 200,
    weight: 3220,
    engine: 'Nitro ICE',
    protection: 'Full',
    year: '2020',

    remote: 'Yes',
    radius: '100m',
    headless: 'Yes',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 10,
    photo: ['./assets/img/products/p4/1.webp', './assets/img/products/p4/2.webp', './assets/img/products/p4/3.webp'],
    description:
      'A radio-controlled model of a four-wheel drive short corsa with a powerful GO Engine 18, 2.4 GHz digital equipment and waterproof electronics. The model is assembled and ready for use!The model has a fully adjustable suspension that can be adjusted to any track and driving style. The models aluminum chassis adds extra strength! The receiver and onboard power supply of the model are located in the radio box. Large oil shock absorbers with fine adjustment of stiffness are made of aluminum. 3-jaw clutch provides the best dynamics!',
  },
  {
    id: 5,
    name: 'Truck WPL SUV *Ural* 6WD RTR 1:16',

    model: 'Ural',
    brand: 'WPL',
    class: 'Truck',
    color: 'Green',
    size: 'Large',
    price: 100,
    weight: 1200,
    engine: 'Electro',
    protection: 'None',
    year: '2015',

    remote: 'Yes',
    radius: '55m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 10,
    photo: ['./assets/img/products/p5/1.webp', './assets/img/products/p5/2.webp', './assets/img/products/p5/3.webp'],
    description:
      'The radio-controlled semi-copy of the legendary Soviet truck "Ural" is made in 1/16 scale, equipped with all-wheel drive, active spring suspension and a powerful collector electric motor. The radio-controlled "Ural" has a rich detail, in the cockpit you can see the steering wheel and the interior. Kung and cabin are made of durable ABS plastic and mounted on a solid frame. The 7.2V, 500mAh battery is hidden under the opening hood, where the motor is located on a real Ural car.Radio-controlled off-road truck "Ural" has a full cardan drive and differentials. Bridges are mounted on metal springs, which ensures comfortable driving on rough roads. Wheels with soft rubber tires with aggressive tread allow the miniature truck to overcome off-road and move rocks without any problems.',
  },

  {
    id: 6,
    name: 'Buggy Himoto Spino 4WD RTR 1:18',

    model: 'Spino',
    brand: 'Himoto',
    class: 'Buggy',
    color: 'Black',
    size: 'Small',
    price: 90,
    weight: 516,
    engine: 'Electro',
    protection: 'Partial',
    year: '2017',

    remote: 'Yes',
    radius: '75m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 22,
    photo: ['./assets/img/products/p6/1.webp', './assets/img/products/p6/2.webp', './assets/img/products/p6/3.webp'],
    description:
      'Radio-controlled model of all-wheel drive mini buggy Himoto Spino 4WD in 1:18 scale with a commutator electric motor, a moisture-proof speed controller and 2.4 GHz control equipment. The body in this model is very low in order to accommodate all the electronics, the receiver is placed outside. The machine is designed to ride at home, in the yard, at work, etc. The small dimensions of the buggy allow you to take it with you anywhere.',
  },

  {
    id: 7,
    name: 'Buggy Himoto Shootout 4WD RTR 1:8',

    model: 'Shootout',
    brand: 'Himoto',
    class: 'Buggy',
    color: 'Green',
    size: 'Large',
    price: 350,
    weight: 2600,
    engine: 'Electro',
    protection: 'None',
    year: '2019',

    remote: 'Yes',
    radius: '100m',
    headless: 'Yes',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 33,
    photo: ['./assets/img/products/p7/1.webp', './assets/img/products/p7/2.webp', './assets/img/products/p7/3.webp'],
    description:
      'Buggy model in 1:8 scale. The design of the model is beyond praise. Low, squat and aggressive. The chassis is made of composite and reinforced with metal parts. Tires are solid and have a special tread. The turning radius of the model is almost in place, it would be even better to slightly reduce the steering costs. The robust servo saver provides reliable response when cornering and helps you stay on course. 4 durable and resilient oil-filled shock absorbers take on all the bumps in the track and take care of the suspension when jumping. The power unit of the model accelerates it to breakneck speed, despite the fact that only one battery is used. The drive and main gear are metal and the entire block is located in the middle of the model. This gives a good balance in weight and has a positive effect on driving characteristics. In general, this is a great model and, most importantly, it is completely ready for launch.',
  },

  {
    id: 8,
    name: 'Buggy HSP X-STR 4WD RTR 1:10',

    model: 'X-STR',
    brand: 'HSP',
    class: 'Buggy',
    color: 'Orange',
    size: 'Small',
    price: 135,
    weight: 1400,
    engine: 'Electro',
    protection: 'Partial',
    year: '2019',

    remote: 'Yes',
    radius: '100m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'N0',

    stock: 44,
    photo: ['./assets/img/products/p8/1.webp', './assets/img/products/p8/2.webp', './assets/img/products/p8/3.webp'],
    description:
      'Sports car HSP X-STR with all-wheel drive is made in 1:10 scale. It appeared on the market of radio-controlled toys in 2012 and immediately entered the list of popular models. In addition to a powerful electric motor with a 7.2V battery, the model received an improved chassis, stability due to a wide base, front and rear wheels of different widths. Disc brakes improve handling, make the car obedient on the track. The stylish streamlined body of the HSP X-STR is built for high speeds and cuts through the air with ease. This is a real car that is ready for any challenge!',
  },

  {
    id: 9,
    name: 'Buggy Feiyue Desert Eagle 4WD RTR 1:12',

    model: 'Desert Eagle',
    brand: 'Feiyue',
    class: 'Buggy',
    color: 'Red',
    size: 'Medium',
    price: 145,
    weight: 1800,
    engine: 'Electro',
    protection: 'Partial',
    year: '2020',

    remote: 'Yes',
    radius: '100m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 5,
    photo: ['./assets/img/products/p9/1.webp', './assets/img/products/p9/2.webp', './assets/img/products/p9/3.webp'],
    description:
      'Feiyue RC cars are a great choice for beginner modellers. Traditionally, the main features are high quality and excellent price. Also, the indisputable advantages of Feiyue radio-controlled cars include the 4WD all-wheel drive system and convenient (for both right-handed and left-handed) control equipment with a frequency of 2.4 GHz (the steering wheel is moved to a convenient side with just one click). Feiyue machines are delivered fully assembled and ready to use right out of the box. Lithium battery and charger are also included, you need to purchase 4pcs. "AA" type batteries.',
  },

  {
    id: 10,
    name: 'Buggy Wineya Speed ​​Buggy KX7 2WD RTR 1:14',

    model: 'Speed ​​Buggy KX7',
    brand: 'Wineya',
    class: 'Buggy',
    color: 'Yellow',
    size: 'small',
    price: 40,
    weight: 150,
    engine: 'Electro',
    protection: 'No',
    year: '2016',

    remote: 'Yes',
    radius: '100m',
    headless: 'No',
    remoteBattery: 'AAA - 2 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 56,
    photo: ['./assets/img/products/p10/1.webp', './assets/img/products/p10/2.webp', './assets/img/products/p10/3.webp'],
    description:
      'Feiyue RC cars are a great choice for beginner modellers. Traditionally, the main features are high quality and excellent price. Also, the indisputable advantages of Feiyue radio-controlled cars include the 4WD all-wheel drive system and convenient (for both right-handed and left-handed) control equipment with a frequency of 2.4 GHz (the steering wheel is moved to a convenient side with just one click). Feiyue machines are delivered fully assembled and ready to use right out of the box. Lithium battery and charger are also included, you need to purchase 4pcs. "AA" type batteries.',
  },

  {
    id: 11,
    name: 'Buggy Wineya ADX-10 2WD RTR 1:10',

    model: 'ADX-10',
    brand: 'Wineya',
    class: 'Buggy',
    color: 'Red',
    size: 'Large',
    price: 780,
    weight: 7000,
    engine: 'Electro',
    protection: 'Partial',
    year: '2020',

    remote: 'Yes',
    radius: '100m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 2,
    photo: ['./assets/img/products/p11/1.webp', './assets/img/products/p11/2.webp', './assets/img/products/p11/3.webp'],
    description:
      'The rear gearbox is made of high-strength alloys, the central idle gear has an increased number of teeth and is mounted on an enlarged bearing, which contributes to the long-term operation of the gearbox under increased loads. Special dBoots rubber with a sporty tread gives the model excellent grip on all types of surfaces.',
  },

  {
    id: 12,
    name: 'Buggy HPI Trophy 3.5 RTR 4WD 1:8 ',

    model: 'Trophy 3.5',
    brand: 'HPI',
    class: 'Buggy',
    color: 'Red',
    size: 'Large',
    price: 710,
    weight: 6200,
    engine: 'Nitro ICE',
    protection: 'Full',
    year: '2021',

    remote: 'Yes',
    radius: '100m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 6,
    photo: ['./assets/img/products/p12/1.webp', './assets/img/products/p12/2.webp', './assets/img/products/p12/3.webp'],
    description:
      'HPI-Racing presents the updated Trophy 3.5 buggy. Now the model is equipped with modern control equipment with a frequency of 2.4GHz, waterproof servos and a sealed radio box! One of the most popular nitro models just got even better, and is now ready to cope with any operating conditions!The Trophy 3.5 buggy is a great way to dive into the world of 1:8 scale nitro buggies, one of the most popular and fastest growing classes of rc models in the world! In this kit you will find everything you need for off-road fun and conquer the tracks. Sturdy aluminum chassis, struts and shock absorbers are able to handle even the biggest jumps; while the powerful Nitro Star F3.5 engine, HB Proto tires, adjustable oil shock absorbers and adjustable geometry racing suspension will make the model feel great on the track with any type of road surface.',
  },

  {
    id: 13,
    name: 'Buggy HPI BAJA 5B RTR (BLACK) GP 1:5',

    model: 'BAJA 5B',
    brand: 'HPI',
    class: 'Buggy',
    color: 'Black',
    size: 'Large',
    price: 820,
    weight: 9600,
    engine: 'Nitro ICE',
    protection: 'Full',
    year: '2022',

    remote: 'Yes',
    radius: '100m',
    headless: 'No',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 3,
    photo: ['./assets/img/products/p13/1.webp', './assets/img/products/p13/2.webp', './assets/img/products/p13/3.webp'],
    description:
      'The RTR BAJA 5B 2.0 radio controlled car is equipped with a rear wheel drive and a 23 cm3 petrol engine. The model is made on a scale of 1:5.Thanks to the updated design, this car now consists of black and blued parts, has an elegant and completely unique appearance! Special attention should be paid to the new engine! This motor is similar in design to the original Fuelie 23, but is more powerful and easier to maintain and repair.The dynamic model RTR BAJA 5B 2.0 accelerates perfectly, is very stable in driving and attracts with its appearance!',
  },

  {
    id: 14,
    name: 'Monster HPI Bullet MT 3.0 4WD RTR Nitro 1:10',

    model: 'Bullet MT',
    brand: 'HPI',
    class: 'Monster',
    color: 'Red',
    size: 'Large',
    price: 630,
    weight: 4000,
    engine: 'Nitro ICE',
    protection: 'Full',
    year: '2019',

    remote: 'Yes',
    radius: '100m',
    headless: 'No',
    remoteBattery: 'AA - 8 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 13,
    photo: ['./assets/img/products/p14/1.webp', './assets/img/products/p14/2.webp', './assets/img/products/p14/3.webp'],
    description:
      'Radio-controlled monster HPI Bullet MT 3.0 has all-wheel drive, is equipped with a dynamic glow engine of 3.0 cm3. The model is made in 1:10 scale.The updated model is perfect for all off-road racing enthusiasts! The beast now has sealed 4.5kg/cm servos, a waterproof battery compartment, and a heavy-duty air filter case. Stable grippy tires, excellent transmission and stable handling allow you to overcome steep obstacles',
  },

  {
    id: 15,
    name: 'Monster HSP Savagery Nitro 4WD 1:8',

    model: 'Savagery',
    brand: 'HSP',
    class: 'Monster',
    color: 'Blue',
    size: 'Large',
    price: 520,
    weight: 6000,
    engine: 'Nitro ICE',
    protection: 'Full',
    year: '2014',

    remote: 'Yes',
    radius: '100m',
    headless: 'Yes',
    remoteBattery: 'AA - 8 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 44,
    photo: ['./assets/img/products/p15/1.webp', './assets/img/products/p15/2.webp', './assets/img/products/p15/3.webp'],
    description:
      'Love fast driving? Do not want to limit yourself in speed on extreme tracks? The radio-controlled monster will definitely satisfy your requirements. High-speed monster truck will pump your skills and turn a beginner into a real professional. This model is equipped with modern electronics with high performance, so the monster shows incredible results of speed and stability on any surface. The SUV develops speed up to 60 km per hour. Cushioning makes handling confident, and wide wheels with deep tread provide good traction. This model more confidently enters into turns and does not tip over during turns due to the metal suspension. Arrange extreme races with your friends and show them your skills. On such a monster, you definitely will not lose face!',
  },

  {
    id: 16,
    name: 'Monster HSP Wolverine PRO 4WD 1:10',

    model: 'Savagery',
    brand: 'HSP',
    class: 'Monster',
    color: 'Green',
    size: 'Medium',
    price: 460,
    weight: 4600,
    engine: 'Electric',
    protection: 'Partial',
    year: '2017',

    remote: 'Yes',
    radius: '70m',
    headless: 'Yes',
    remoteBattery: 'AAA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 27,
    photo: ['./assets/img/products/p16/1.webp', './assets/img/products/p16/2.webp', './assets/img/products/p16/3.webp'],
    description:
      'The Wolverine RC Car - HSP Electric Off-Road Car 4WD is the new product of 2017. The next generation of models after 94111. This example has proportional control and four-wheel drive, a brushless electric motor and a completely new suspension design. The model has a certificate of conformity EAC. All-wheel drive monster will suit both beginners and experienced pilots.',
  },

  {
    id: 17,
    name: 'Monster Traxxas Revo 3.3 Nitro 4WD 1:10',

    model: 'Revo 3.3',
    brand: 'Traxxas',
    class: 'Monster',
    color: 'Black',
    size: 'Large',
    price: 890,
    weight: 7540,
    engine: 'Nitro ICE',
    protection: 'Full',
    year: '2021',

    remote: 'Yes',
    radius: '100m',
    headless: 'Yes',
    remoteBattery: 'AA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 27,
    photo: ['./assets/img/products/p17/1.webp', './assets/img/products/p17/2.webp', './assets/img/products/p17/3.webp'],
    description:
      'The Traxxas Revo has been voted the best monster truck of the year by readers of RC Car magazine for nine years. We offer you the most up-to-date version with the 3.3 cc engine. The model is 10% larger than the previous Revo 3.3, has excellent cross-country ability and controllability, with proper running-in and engine tuning, without any design modifications, it can accelerate to 80 km/h! ',
  },

  {
    id: 18,
    name: 'Special Vehicles Timber hauler Huina 1570  1:14',

    model: 'Timber 1570',
    brand: 'Huina',
    class: 'Special Vehicles',
    color: 'Orange',
    size: 'Small',
    price: 70,
    weight: 2000,
    engine: 'Electric',
    protection: 'No',
    year: '2019',

    remote: 'Yes',
    radius: '50m',
    headless: 'No',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 58,
    photo: ['./assets/img/products/p18/1.webp', './assets/img/products/p18/2.webp', './assets/img/products/p18/3.webp'],
    description:
      'This model of a radio-controlled machine is a reduced copy of a real logging equipment. The model is able to move on various surfaces, overcome obstacles and move objects. The body of the model is made of high-quality durable plastic, available in a single version: yellow-black. Equipment dimensions: length - 60cm, height - 30cm. Tracks are made of rubber. The object holding device is made of metal.',
  },

  {
    id: 19,
    name: 'Special Vehicles Concrete mixer Huina 10CH 1:14',

    model: 'Concrete mixer 1455',
    brand: 'Huina',
    class: 'Special Vehicles',
    color: 'Yellow',
    size: 'Small',
    price: 120,
    weight: 2000,
    engine: 'Electric',
    protection: 'Partial',
    year: '2019',

    remote: 'Yes',
    radius: '50m',
    headless: 'No',
    remoteBattery: 'AA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 58,
    photo: ['./assets/img/products/p19/1.webp', './assets/img/products/p19/2.webp', './assets/img/products/p19/3.webp'],
    description:
      'Fully working and functional radio-controlled concrete mixer. This mixer can rotate the drum clockwise or counterclockwise, you can even fill the drum with rice or beans to mimic the real mix and mixing process. In this toy, everything is done very realistically, when moving, the model reproduces the sounds of a running car, its headlights glow. All movements are controlled completely from the remote control, which will allow your child to feel like a real driver of a construction vehicle.',
  },

  {
    id: 20,
    name: 'Special Vehicles Bulldozer HuiNa 1700 1:50',

    model: 'Bulldozer 1700',
    brand: 'Huina',
    class: 'Special Vehicles',
    color: 'Orange',
    size: 'Small',
    price: 80,
    weight: 1300,
    engine: 'Electric',
    protection: 'Partial',
    year: '2019',

    remote: 'Yes',
    radius: '50m',
    headless: 'No',
    remoteBattery: 'AA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 63,
    photo: ['./assets/img/products/p20/1.webp', './assets/img/products/p20/2.webp', './assets/img/products/p20/3.webp'],
    description:
      'The Huina bulldozer metal model in a gift box will be the best choice for true collectors and will be a great addition to the collection of small copies of special equipment. The model is made on a scale of 1:50 with a high accuracy of reproduction of the original proportions and design features. The color scheme of contrasting colors attracts attention. Through the transparent windows you can see the drivers cab, and the rotating parts will add interactivity to the game. By purchasing other equipment of this line, you can assemble a whole construction site!',
  },

  {
    id: 21,
    name: 'Truck WPL Soviet military PRO RTR 6WD 1:16',

    model: 'SMT PRO',
    brand: 'WPL',
    class: 'Truck',
    color: 'Green',
    size: 'Small',
    price: 100,
    weight: 1200,
    engine: 'Electric',
    protection: 'Full',
    year: '2018',

    remote: 'Yes',
    radius: '80m',
    headless: 'No',
    remoteBattery: 'AA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 20,
    photo: ['./assets/img/products/p21/1.webp', './assets/img/products/p21/2.webp', './assets/img/products/p21/3.webp'],
    description:
      '1:16 scale radio-controlled model of a military truck with 6x6 permanent all-wheel drive. The spacious body allows you to load it with various loads. Wear-resistant vacuum tires and high ground clearance provide excellent grip on various types of surfaces: sand, stones, mountain road highway. Even reliefs with sharp drops and irregularities (up to 45 degrees), the model is able to overcome without problems. And the included headlights allow you to operate the model in the dark.',
  },

  {
    id: 22,
    name: 'Truck WPL Gas 66  RTR 4WD 1:16',

    model: 'WPLB-24-R-Green',
    brand: 'WPL',
    class: 'Truck',
    color: 'Green',
    size: 'Small',
    price: 40,
    weight: 780,
    engine: 'Electric',
    protection: 'No',
    year: '2016',

    remote: 'Yes',
    radius: '80m',
    headless: 'No',
    remoteBattery: 'AA - 4 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 16,
    photo: ['./assets/img/products/p22/1.webp', './assets/img/products/p22/2.webp', './assets/img/products/p22/3.webp'],
    description:
      'The radio-controlled semi-copy of the legendary Soviet truck GAZ-66 is made in 1/16 scale, equipped with all-wheel drive, active spring suspension and a powerful collector electric motor. The radio-controlled GAZ-66 has rich detailing, many metal parts and luminous headlights. In the cockpit you can see the steering wheel and the interior. The body and cab are made of durable ABS plastic and mounted on a metal frame. NiCD battery 6V, 700mAh is hidden under the opening cab, where the real GAZ-66 has a motor.',
  },

  {
    id: 23,
    name: 'Special Vehicles Container ship Huina 1433A Arocs 1:20',

    model: 'Arocs 1433A',
    brand: 'Huina',
    class: 'Special Vehicles',
    color: 'Blue',
    size: 'Small',
    price: 75,
    weight: 970,
    engine: 'Electric',
    protection: 'No',
    year: '2016',

    remote: 'Yes',
    radius: '80m',
    headless: 'No',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'No',
    camera: 'No',

    stock: 16,
    photo: ['./assets/img/products/p23/1.webp', './assets/img/products/p23/2.webp', './assets/img/products/p23/3.webp'],
    description:
      'Arocs 1:20 2.4G RC Container Truck - E564-003 is a Mercedes-Benz RC truck with a trailer. The trailer can be fastened and unfastened, it can open the rear doors and transport goods. Sound accompaniment of starting the car, moving, reversing and stopping the tractor. The radio-controlled container ship will be a great addition to your kids car collection. With such a toy, you can arrange a variety of exciting games, it will allow you to create a real city of transport equipment. The radio-controlled trailer consists of a tractor and a trailer, made of safe materials. A feature of the container ship is that, if desired, you can easily unhook the trailer. The car moves with a remote control.',
  },

  {
    id: 24,
    name: 'Rally Crazon High End FPV 2WD RTR 1:10',

    model: 'High End FPV ',
    brand: 'Crazon',
    class: 'Rally',
    color: 'Red',
    size: 'Small',
    price: 50,
    weight: 690,
    engine: 'Electric',
    protection: 'Partial',
    year: '2015',

    remote: 'Yes',
    radius: '80m',
    headless: 'Yes',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'Yes',
    camera: 'Yes',

    stock: 33,
    photo: ['./assets/img/products/p24/1.webp', './assets/img/products/p24/2.webp', './assets/img/products/p24/3.webp'],
    description:
      'This innovative 1/10 scale rear-wheel drive RC drift car is equipped with a powerful commutator motor and a 0.3MP FPV WiFi camera that shows real-time images on your smartphone screen. FPV WiFi camera guarantees an unforgettable experience and the feeling of being in the cockpit of a real sports car. A powerful motor and a well-thought-out chassis design allow the model to accelerate to a speed of 15 km / h.',
  },

  {
    id: 25,
    name: 'Rally Crazon High End FPV 2WD RTR 1:10',

    model: 'High End FPV',
    brand: 'Crazon',
    class: 'Rally',
    color: 'Blue',
    size: 'Small',
    price: 65,
    weight: 690,
    engine: 'Electric',
    protection: 'Partial',
    year: '2015',

    remote: 'Yes',
    radius: '80m',
    headless: 'Yes',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'Yes',
    camera: 'Yes',

    stock: 32,
    photo: ['./assets/img/products/p25/1.webp', './assets/img/products/p25/2.webp', './assets/img/products/p25/3.webp'],
    description:
      'This innovative 1/10 scale rear-wheel drive RC drift car is equipped with a powerful commutator motor and a 0.3MP FPV WiFi camera that shows real-time images on your smartphone screen. FPV WiFi camera guarantees an unforgettable experience and the feeling of being in the cockpit of a real sports car. A powerful motor and a well-thought-out chassis design allow the model to accelerate to a speed of 15 km / h.',
  },

  {
    id: 26,
    name: 'Truck Eachine EAT01 RTR 4WD 1:16',

    model: 'EAT01',
    brand: 'Eachine',
    class: 'Truck',
    color: 'Black',
    size: 'Small',
    price: 70,
    weight: 860,
    engine: 'Electric',
    protection: 'Full',
    year: '2018',

    remote: 'Yes',
    radius: '80m',
    headless: 'Yes',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'Yes',
    camera: 'Yes',

    stock: 44,
    photo: ['./assets/img/products/p26/1.webp', './assets/img/products/p26/2.webp', './assets/img/products/p26/3.webp'],
    description:
      'Eachine EAT01  is a detailed replica of an American heavy military truck. Feel the power of a unique model with six driving wheels, capable of carrying up to one and a half kilograms of cargo! The high-capacity battery provides up to 60 minutes of continuous use. The exterior of the truck will impress you with a large number of replica parts, including moving ones, such as cab doors and tailgate. You can also buy an original realistic awning. The model is fully assembled and configured at the manufacturers factory, everything you need to run is included. Charge your battery and go off-road the day you buy it!',
  },

  {
    id: 27,
    name: 'Buggy Crazon Action FPV 4WD RTR 1:18',

    model: 'Action FPV',
    brand: 'Crazon',
    class: 'Buggy',
    color: 'Green',
    size: 'Small',
    price: 85,
    weight: 630,
    engine: 'Electric',
    protection: 'Full',
    year: '2013',

    remote: 'Yes',
    radius: '90m',
    headless: 'Yes',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'Yes',
    camera: 'Yes',

    stock: 61,
    photo: ['./assets/img/products/p27/1.webp', './assets/img/products/p27/2.webp', './assets/img/products/p27/3.webp'],
    description:
      'This 1/18 scale 4WD RC buggy with a brushed electric motor is equipped with a FPV WiFi 0.3MP camera that shows real-time image on the screen of your smartphone, which guarantees an unforgettable experience and feels like you are in the cockpit of a real sports car. A powerful motor and a well-thought-out chassis design allow the car to accelerate to a speed of 20 km / h!',
  },

  {
    id: 28,
    name: 'Rally Crazon Fierce FPV 4WD RTR 1:18',

    model: 'Fierce FPV',
    brand: 'Crazon',
    class: 'Rally',
    color: 'Blue',
    size: 'Small',
    price: 70,
    weight: 770,
    engine: 'Electric',
    protection: 'No',
    year: '2019',

    remote: 'Yes',
    radius: '90m',
    headless: 'Yes',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'Yes',
    camera: 'Yes',

    stock: 25,
    photo: ['./assets/img/products/p28/1.webp', './assets/img/products/p28/2.webp', './assets/img/products/p28/3.webp'],
    description:
      'This 1/18 scale 4WD RC RC rally car is equipped with a 0.3MP FPV WiFi camera that shows live images on your smartphone screen. The FPV WiFi camera guarantees an unforgettable experience and the feeling of being in the cockpit of a real rally car. A powerful motor and a well-thought-out chassis design allow the model to accelerate to a speed of 20 km / h!. The suspension structure of the RC car mimics that of real sports cars. Easily removable body, wide wheels with soft rubber tires with a tenacious tread and a special rear wing - everything is like a real sports car!',
  },

  {
    id: 29,
    name: 'Monster Crazon 4x4 Pickup FPV 2WD RTR 1:14',

    model: '4x4 Pickup FPV',
    brand: 'Crazon',
    class: 'Monster',
    color: 'Blue',
    size: 'Small',
    price: 50,
    weight: 900,
    engine: 'Electric',
    protection: 'Partial',
    year: '2020',

    remote: 'Yes',
    radius: '100m',
    headless: 'Yes',
    remoteBattery: 'AA - 2 pcs',

    fpv: 'Yes',
    camera: 'Yes',

    stock: 42,
    photo: ['./assets/img/products/p29/1.webp', './assets/img/products/p29/2.webp', './assets/img/products/p29/3.webp'],
    description:
      'The 1/14th scale Range Rover RC monster jeep with rear-wheel drive body is equipped with a powerful commutator engine and FPV WiFi 0.3MP camera, which transmits the image on the screen of your smartphone in real time. FPV WiFi camera guarantees an unforgettable experience and the feeling as if you are in the cockpit of a real SUV. Powerful motor and thoughtful chassis design allow the model to accelerate to a speed of 15 km/h. The rugged plastic bodywork is painted to mimic mud, as if the car had just crossed a ford. Through the open window you can see the steering wheel and front seats, and there is a transparent sunroof in the roof! Huge wheels with off-road tread guarantee excellent off-road flotation. Bright brutal design and high reliability give a lot of pleasant emotions while driving.',
  },

  {
    id: 30,
    name: 'Rally Traxxas Nitro TQ 2WD RTR 1:10',

    model: 'Nitro TQ',
    brand: 'Traxxas',
    class: 'Rally',
    color: 'Orange',
    size: 'Medium',
    price: 580,
    weight: 3500,
    engine: 'Nitro ICE',
    protection: 'Partial',
    year: '2013',

    remote: 'Yes',
    radius: '100m',
    headless: 'Yes',
    remoteBattery: 'AA - 8 pcs',

    fpv: 'Yes',
    camera: 'Yes',

    stock: 5,
    photo: ['./assets/img/products/p30/1.webp', './assets/img/products/p30/2.webp', './assets/img/products/p30/3.webp'],
    description:
      'New for 2013, Traxxas Nitro Slash radio-controlled rear-wheel drive Rally. The model is equipped with a TRX 3.3 engine, an electric engine start system and Traxxas TQ 2.4Ghz radio control equipment.Rally racing competitions consistently draw the attention of many thousands of spectators. High speed, excellent stability, power and impressive appearance are the main features of cars in this class. This combination will certainly not leave indifferent car modeler. Traxxas manufactures models under official license from the National Short-Course Association.',
  },
];
