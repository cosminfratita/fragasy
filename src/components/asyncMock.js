const products = [
    {
        id: '1',
        name:'Versace',
        price: 10,
        category: 'celullar',
        img: 'img/versace.jpg',
        stock: 25,
        description: 'Eros para Hombre EDT'
    },
    {
        id: '2',
        name:'Jean Paul Gaultier',
        price: 100,
        category: 'Hombre',
        img: 'img/jeanPaul.jpg',
        stock: 20,
        description: 'Le Beau EDT' 
    },
    {
        id: '3',
        name:'Prada',
        price: 10,
        category: 'Eau de toilette',
        img: 'img/prada.jpg',
        stock: 15,
        description: 'Luna Rossa Ocean EDT'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
       
    })
}