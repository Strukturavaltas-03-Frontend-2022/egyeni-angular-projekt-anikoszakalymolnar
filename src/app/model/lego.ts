/*
    "id": 1,
    "title": "LEGO® Brickheadz Aranyhal",
    "description": "Az aranyhal és a bébihal ikonikus BrickHeadz alaplapokon ülnek, készen arra, hogy buborékokat fújjanak a víz alatt.",
    "category": "Brickheadz ",
    "code": 40442,
    "age": "8+",
    "year": 2021,
    "piece": 186,
    "price": 5480,
    "stars": 5,
    "discont": true,
    "img": "/assets/img/40442.jpg"
 */
export class Lego {
    [x: string]: any;
    id: number = 0;
    title: string = '';
    description: string = '';
    category: number = 0;
    code: string = '';
    age: string = '';
    year: number = 0;
    piece: number = 0;
    price: number = 0;
    stars: number = 0;
    new: boolean = false;
    discont: number = 0;
    stock: number = 0;
    img: string = '';
}
