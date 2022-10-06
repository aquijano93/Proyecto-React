const products =  [
    { 
        id: '1', 
        name: 'mast tour pro', 
        price: 200, 
        category: 'tattoo machine', 
        img:'/Images/MastTourPro.png', 
        stock: 25, 
        description:'Description of Mast Tour Pro '
    },
    { id: '2', name: 'mast saber', price: 425, category: 'tattoo machine', img:'/Images/MastSaber.png', stock: 16, description:'Description of Mast Saber'},
    { id: '3', name: 'mast archer', price: 580, category: 'tattoo machine', img:'/Images/MastArcher.png', stock: 10, description:'Description of Mast Archer'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 2000)
    })
}