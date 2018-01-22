/**
 * Created by Vladislav on 22.01.2018.
 */
import axios from 'axios';
import {apiPrefix} from '../../etc/config.json';

export default {
    loadNotes() {
        return axios.get('${apiPrefix}/comments');
    },
    createComment(comment){
        return axios.post('${apiPrefix}/comments', comment);
    },
    updateComment(commentID, commentNewValue) {
        return axios.post('${apiPrefix}/comments', commentID, commentNewValue );
    },
    deleteComment(commentID) {
        return axios.delete('${apiPrefix}/comments/${commentID}');
    }
};