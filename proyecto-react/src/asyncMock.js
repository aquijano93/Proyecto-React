const products =  [
    { 
        id: '1', 
        name: 'Mast Tour Pro', 
        price: 200, 
        category: 'Machine', 
        img:'/Images/MastTourPro.png', 
        stock: 10, 
        description:'Description of Mast Tour Pro '
    },
    { id: '2', name: 'Mast Saber', price: 425, category: 'Machine', img:'/Images/MastSaber.png', stock: 6, description:'Description of Mast Saber'},
    { id: '3', name: 'Mast Archer', price: 580, category: 'Machine', img:'/Images/MastArcher.png', stock: 7, description:'Description of Mast Archer'},
    { id: '4', name: 'Mast Needles WJX', price: 19, category: 'Needles', img:'/Images/MastWJX.png', stock: 50, description:'Description of Mast WJX'},
    { id: '5', name: 'Mast Needles EO', price: 21, category: 'Needles', img:'/Images/MastEO.png', stock: 33, description:'Description of Mast EO'},
    { id: '6', name: 'Inmortal Ink Black', price: 7, category: 'Ink', img:'/Images/InmortalBlack.png', stock: 17, description:'Description of Inmortal black ink'},
    { id: '7', name: 'Inmortal Ink Color Set', price: 45, category: 'Ink', img:'/Images/Inmortalink.png', stock: 12, description:'Description of Inmortal colored ink'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}