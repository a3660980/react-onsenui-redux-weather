import iplay from '../api/iplay';

export const GET_GYM_LIST = 'GET_GYM_LIST';
export const IS_FETCHING = 'IS_FETCHING';
export const GET_POS = 'GET_POS';

export const getGymList = (data) => (dispatch) => {
  let x = false;
  dispatch({ type:IS_FETCHING, x })
  iplay.getGymList(data)
  .then(gyms => {
    dispatch({ type:GET_GYM_LIST, gyms })
    return gyms
  })
  .then((gyms)=> {
    let x = true;
    dispatch({ type:IS_FETCHING, x })
    return gyms
  })
  .catch(error => console.error(error))
}

export const getPos = () => (dispatch) => {
 iplay.getPos()
}