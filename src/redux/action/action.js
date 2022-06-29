

export const ADD = (item) =>{
    return{
        type: "ADD_CARD",
        payload:item
    }
}


// remove Item
export const DEL = (id) =>{
    return{
        type: "REMOVE_CARD",
        payload:id
    }
}

// remove indivisual item

export const REMOVE = (item)=>{
    return {
        type: "RMV_ONE",
        payload:item

    }
}