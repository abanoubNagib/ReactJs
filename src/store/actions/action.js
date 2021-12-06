export function AddtoFavourites(data){
    return {
        type : 'ADD',
        payload : data
    }
}

export function Deletefavourite(data){
    return{
        type : 'DELETE',
        payload : data
    }
}