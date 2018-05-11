export default function couterReducer(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 };
        case 'decrease':
            if (count == 0) return {
                count: 0
            };
            return { count: count - 1 };
        default:
            return state
    }
}

