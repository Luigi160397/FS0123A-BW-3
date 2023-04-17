export const GET_PROFILE = "GET_PROFILE";

export const getProfileAction = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/me";
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_PROFILE, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
