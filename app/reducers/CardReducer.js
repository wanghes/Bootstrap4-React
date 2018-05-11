const initalstate = {
    items: null
};
export default function post(state = initalstate, action) {
    switch(action.type){
        case 'cards_list':
            return { items: action.items };
        break;
        default:
          return state;
    }
}
