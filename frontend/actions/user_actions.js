import { ajaxFetchAllUsers,
         ajaxFetchSingleUser } from "../util/user_api_util";

 export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';


 //synchronous action creators

 export const receiveAllUsers = users => {

   return({
     type: RECEIVE_ALL_USERS,
     byId: users
   });
 };


 //asynchronous action creators

 export const fetchAllUsers = () => dispatch => {

   return ajaxFetchAllUsers()
     .then( returnedUsers => (dispatch(receiveAllUsers(returnedUsers)))
   );
 };
