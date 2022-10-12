const products =  [
    { 
        id: '1', 
        name: 'Mast Tour Pro', 
        price: 200, 
        category: 'tattoo machine', 
        img:'/Images/MastTourPro.png', 
        stock: 25, 
        description:'Description of Mast Tour Pro '
    },
    { id: '2', name: 'Mast Saber', price: 425, category: 'tattoo machine', img:'/Images/MastSaber.png', stock: 16, description:'Description of Mast Saber'},
    { id: '3', name: 'Mast Archer', price: 580, category: 'tattoo machine', img:'/Images/MastArcher.png', stock: 10, description:'Description of Mast Archer'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 2000)
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