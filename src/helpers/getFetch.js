let products = [
    {
        id: '1',
        title: 'Skate 1',
        category: 'Skate',
        description: 'bla bla bla fjdhfkjahdfkjhdjkfhhdskjfhdkf',
        price: '$15000',
        Image: ''
        
    },
    {
        id: '2',
        title: 'Skate 2',
        category: 'Skate',
        description: 'la la lal ala lal a fdsfdfadhfkjhdkjfhkjadhskfh',
        price: '$20000',
        Image: ''
        
    },
    {
        id: '3',
        title: 'Skate 3',
        category: 'Skate',
        description: 'pa pa pa papappapa hakjsdhfjkshdfkjhaksjdfh',
        price: '$25000',
        Image: ''
       
    },
    {
        id: '4',
        title: 'Skate 4',
        category: 'Longboard',
        description: 'pa pa pa papappapa hadfajshdfkjhadskjhfkhasdkhf',
        price: '$25000',
        Image: ''
       
    },
];

    export const getFetch = (id) =>{
        return ( 
            new Promise( (resolve) =>{
                setTimeout(() =>{
                    if (id) {
                        resolve (products.find (product=> product.id === id))
                    } else {
                        resolve(products)   
                    }
                },2000)

            })
    
        )
    }
    
    //export default getFetch;