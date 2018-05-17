import api from './../service/api.js'

export function updateCardsAction(items){
    return { type: 'cards_list', items }
}

export function getCardsAction() {
    return dispatch => {
        api.fetchData('/api/cards').then(res => {
            return res.cards;
        }).then(items => {
            return dispatch(updateCardsAction(items))
        });
    };
}
