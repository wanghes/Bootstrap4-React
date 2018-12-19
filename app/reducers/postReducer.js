const initalstate = {
    items: null,
    listGroup: null
};
export default function post(state = initalstate, action) {
    switch(action.type){
        case 'posts_list':
        	return { ...state, items: action.items  };
        break;
        case 'listGroup':
            return { ...state, listGroup: action.items };
        default:
          return state;
    }
}
