import { SET_DATA } from '../constants/Field';


export function setData(data) {

    return {
        type: SET_DATA,
        payload: data
    }

}
