import Hazelcupcake from './images/Menu/nutscupcake.jpg'
import Crinkle from './images/Menu/crinkle.jpg'
import StrawPuff from './images/Menu/strawberrypuff.jpg'
import CherryTart from './images/Menu/cherryblossomtart.jpg'
import CaramelTart from './images/Menu/saltedcaramel.jpg'
import HoneyPuff from './images/Menu/honeycreampuff.jpg'
import Croissant from './images/Menu/crossaint.jpg'
import MilkBread from './images/Menu/milbread.jpg'
import PecanBread from './images/Menu/peacanbanabread.jpg'

const pastryData = [
    {
        id:1,
        title: 'Hazelnut Cupcake',
        img: Hazelcupcake,
        description: 'Experience nutty bliss with our Hazelnut Cupcake. Moist, flavorful, and topped with creamy hazelnut frosting. Pure delight in every bite.',
        price: '$5.99',
    },
    {
        id:2,
        title: 'Crinkle Cookies',
        img: Crinkle,
        description: 'Enjoy the perfect blend of chocolate or vanilla in our Crinkles. Soft, chewy cookies with a delightful dusting of powdered sugar. Pure bliss in every bite',
        price: '$1.99',
    },
    {
        id:3,
        title: 'Strawberry Puffs',
        img: StrawPuff,
        description: 'Delight in a burst of fruity sweetness with our Strawberry Puff. Fluffy pastry filled with luscious strawberry cream.',
        price: '$3.99',
    },
    {
        id:4,
        title: 'Cherry Blossom Tart',
        img: CherryTart,
        description: 'Experience the essence of spring with our Cherry Blossom Tart. A delicate pastry shell filled with a smooth cherry blossom-infused cream, topped with a scattering of edible pink petals.',
        price: '$5.99',
    },
    {
        id:5,
        title: 'Salted Caramel Tart',
        img: CaramelTart,
        description: 'Indulge in the perfect balance of sweet and salty with our Salted Caramel Tart. A buttery pastry crust cradling a luscious caramel filling, topped with a sprinkle of sea salt.',
        price: '$4.99',
    },
    {
        id:6,
        title: 'Honey Glazed Cream Puff',
        img: HoneyPuff,
        description: 'Delicate choux pastry shells filled with a light and creamy honey-infused filling, crowned with a luscious honey glaze. ',
        price: '$2.99',
    },

]

const breadData = [
    {
        id:91,
        title: 'Signature Croissant',
        img: Croissant,
        description: 'Our signature croissant. Flaky and golden on the outside, soft and airy on the inside, these freshly baked pastries are the epitome of perfection. ',
        price: ' $4.99 '
    },
    {
        id: 92,
        title: 'Milk Bread',
        img: MilkBread,
        description: 'Indulge in the softest, fluffiest treat with our Milk Bread. Made with a special recipe that includes rich, creamy milk, this bread is incredibly tender and has a delicate sweetness.',
        price: '$9.99'
    },
    {
        id: 93,
        title: 'Pecan Banana Bread',
        img: PecanBread,
        description: 'Experience a harmonious blend of flavors with our Pecan Banana Bread. Moist and tender, this classic treat is infused with the natural sweetness of ripe bananas and complemented by the rich, nutty crunch of pecans.',
        price: '$14.99'
    },
]

export { pastryData, breadData };
