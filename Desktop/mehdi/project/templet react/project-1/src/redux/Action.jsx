import {BT_BLOCK,BT_TRANS2, BT_TRANS3} from './typeRud';

export const by = (styles)=>{
    return{
        type:BT_BLOCK,
        paload: styles
    }
}

export const trans2 = (styles)=>{
    return{
        type:BT_TRANS2,
        paload:styles,
    }
}
export const trans3 = (styles)=>{
    return{
        type:BT_TRANS3,
        paload:styles,
    }
}