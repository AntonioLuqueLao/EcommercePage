import ACTIONS from "./Actions";

const Reducer=(state={}, action)=> {
    switch (action.type) {
        case ACTIONS.log:
            
            return {
                estado: true
            };
        case ACTIONS.unlog:
            
            return {
                estado: false
            };
    
        default:
            return state;
    }
}

export default Reducer;