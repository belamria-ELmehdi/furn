import {BT_BLOCK,BT_TRANS2, BT_TRANS3} from './typeRud';

const initial = {
    // display: "none",
    transform: 'translateX(100%)',
    transform2:'translateX(100%)',
    transform3:'translateX(100%)',
}



export default function Reduxtes(state = initial , action) {
switch (action.type) {
    case BT_BLOCK:
       return{...state , transform:action.paload};

case BT_TRANS2:
    return {...state , transform2:action.paload};
case BT_TRANS3:
    return {...state , transform3:action.paload};




    default:
       return state
}
}
