import { getItemCountInCart } from '../utils/getItemCountInCart';

const cart = [{
    "id": 27,
    "count": 3,
    "details": {
        "id": 27,
        "name": "Buggy Crazon Action FPV 4WD RTR 1:18",
        "model": "Action FPV",
        "brand": "Crazon",
        "class": "Buggy",
        "color": "Green",
        "size": "Small",
        "price": 85,
        "weight": 630,
        "engine": "Electric",
        "protection": "Full",
        "year": "2013",
        "remote": "Yes",
        "radius": "90m",
        "headless": "Yes",
        "remoteBattery": "AA - 2 pcs",
        "fpv": "Yes",
        "camera": "Yes",
        "stock": 61,
        "photo": [
            "./assets/img/products/p27/1.jpg",
            "./assets/img/products/p27/2.jpg",
            "./assets/img/products/p27/3.jpg"
        ],
        "description": "This 1/18 scale 4WD RC buggy with a brushed electric motor is equipped with a FPV WiFi 0.3MP camera that shows real-time image on the screen of your smartphone, which guarantees an unforgettable experience and feels like you are in the cockpit of a real sports car. A powerful motor and a well-thought-out chassis design allow the car to accelerate to a speed of 20 km / h!"
    }
},
{
    "id": 9,
    "count": 4,
    "details": {
        "id": 9,
        "name": "Buggy Feiyue Desert Eagle 4WD RTR 1:12",
        "model": "Desert Eagle",
        "brand": "Feiyue",
        "class": "Buggy",
        "color": "Red",
        "size": "Medium",
        "price": 145,
        "weight": 1800,
        "engine": "Electro",
        "protection": "Partial",
        "year": "2020",
        "remote": "Yes",
        "radius": "100m",
        "headless": "No",
        "remoteBattery": "AAA - 4 pcs",
        "fpv": "No",
        "camera": "No",
        "stock": 5,
        "photo": [
            "./assets/img/products/p9/1.jpg",
            "./assets/img/products/p9/2.jpg",
            "./assets/img/products/p9/3.jpg"
        ],
        "description": "Feiyue RC cars are a great choice for beginner modellers. Traditionally, the main features are high quality and excellent price. Also, the indisputable advantages of Feiyue radio-controlled cars include the 4WD all-wheel drive system and convenient (for both right-handed and left-handed) control equipment with a frequency of 2.4 GHz (the steering wheel is moved to a convenient side with just one click). Feiyue machines are delivered fully assembled and ready to use right out of the box. Lithium battery and charger are also included, you need to purchase 4pcs. \"AA\" type batteries."
    }
},
{
    "id": 2,
    "count": 3,
    "details": {
        "id": 2,
        "name": "Buggy Feiyue Horn 4WD RTR 1:10",
        "model": "Horn",
        "brand": "Feiyue",
        "class": "Buggy",
        "color": "Blue",
        "size": "Medium",
        "price": 65,
        "weight": 2090,
        "engine": "Electro",
        "protection": "Partial",
        "year": "2018",
        "remote": "Yes",
        "radius": "70m",
        "headless": "No",
        "remoteBattery": "AAA - 3 pcs",
        "fpv": "No",
        "camera": "No",
        "stock": 5,
        "photo": [
            "./assets/img/products/p2/1.jpg",
            "./assets/img/products/p2/2.jpg",
            "./assets/img/products/p2/3.jpg"
        ],
        "description": "RC Crawler MZ Climbing Car 1:10 - MZ-2837  is a RC 4WD trophy car. The machine has excellent cross-country ability and high quality workmanship.Completely finished radio-controlled crawler model. The model is equipped with an electric motor and is made in 1:10 scale. Everything you need to get started is included. The model is equipped with all-wheel drive and long-travel suspension, which ensures excellent cross-country ability."
    }
},
{
    "id": 6,
    "count": 1,
    "details": {
        "id": 6,
        "name": "Buggy Himoto Spino 4WD RTR 1:18",
        "model": "Spino",
        "brand": "Himoto",
        "class": "Buggy",
        "color": "Black",
        "size": "Small",
        "price": 90,
        "weight": 516,
        "engine": "Electro",
        "protection": "Partial",
        "year": "2017",
        "remote": "Yes",
        "radius": "75m",
        "headless": "No",
        "remoteBattery": "AAA - 4 pcs",
        "fpv": "No",
        "camera": "No",
        "stock": 22,
        "photo": [
            "./assets/img/products/p6/1.jpg",
            "./assets/img/products/p6/2.jpg",
            "./assets/img/products/p6/3.jpg"
        ],
        "description": "Radio-controlled model of all-wheel drive mini buggy Himoto Spino 4WD in 1:18 scale with a commutator electric motor, a moisture-proof speed controller and 2.4 GHz control equipment. The body in this model is very low in order to accommodate all the electronics, the receiver is placed outside. The machine is designed to ride at home, in the yard, at work, etc. The small dimensions of the buggy allow you to take it with you anywhere."
    }
}
]
test('getItemCountInCart: Test items count from , existing item', () => {
    expect(getItemCountInCart(cart, 27)).toEqual(3);
    expect(getItemCountInCart(cart, 9)).toEqual(4);

});
test('getItemCountInCart: Test items count, should be 0 on not existing item', () => {

    expect(getItemCountInCart(cart, 100)).toEqual(0);
});