let products = [
    {
        id: '1',
        title: 'Skate 1',
        description: 'bla bla bla',
        price: '$15000',
        
    },
    {
        id: '2',
        title: 'Skate 2',
        description: 'la la lal ala lal a',
        price: '$20000',
        
    },
    {
        id: '3',
        title: 'Skate 2',
        description: 'pa pa pa papappapa',
        price: '$25000',
       
    },
];

    export const getFetch = () =>{
        return ( 
            new Promise( (resolve) =>{
                setTimeout(() =>{
                  resolve(products)
            },2000)

            })
    
        )
    }
    
    //export default getFetch;