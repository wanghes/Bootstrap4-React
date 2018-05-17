const api_url = "http://test.com"
import api from './../service/api.js'

export function updatePostsAction(items){
    return { type: 'posts_list', items }
}

export function getPostsAction() {
    return dispatch => {
        api.fetchData('/api/posts').then(res => {
            return res.articles;
        }).then(items => {
            return dispatch(updatePostsAction(items))
        });
    };
}
