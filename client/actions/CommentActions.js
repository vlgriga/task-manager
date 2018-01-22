/**
 * Created by Vladislav on 22.01.2018.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';
import api from '../api';

const CommentActions = {
    loadComments() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_COMMENTS_REQUEST
        });

        api.loadNotes()
        .then(({data}) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_COMMENTS_SUCCESS,
                comments : data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_COMMENTS_FAIL,
                error : err
            })
        );
    },

    createComment(comment) {
        api.createComment(comment)
        .then(() =>
            this.loadComments()
        )
        .catch(err =>
            console.log(err)
        );
    },

    updateComment(commentID, commentNewValue) {
        api.updateComment(commentID, commentNewValue)
            .then(() =>
                this.loadComments()
            )
            .catch(err =>
                console.log(err)
            );
    },

    deleteComment(commentID) {
        api.deleteComment(commentID)
            .then(() =>
                this.loadComments()
            )
            .catch(err =>
                console.log(err)
            );
    }
};