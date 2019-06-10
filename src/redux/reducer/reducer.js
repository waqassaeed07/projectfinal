import { action } from "../action/action";

var initialState = {
 data:{
    
 }
};

function Alldata(state = initialState, action) {
  switch (action.type) {
    
    case 'adddata':{

      console.log('data at reducre',action.data);

      return {
        ...state,
        data:action.data
      }
      

    }
    default:
      return state;
  }
}

export default Alldata;
