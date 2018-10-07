import services from '../services';

const success = (type, data) => ({
  type,
  data,
});

const failure = (type, data) => ({
  type,
  data,
});

const login = (token, provider) => (dispatch) => {
  services.login(token, provider).then(
    (data) => {
      if (!data.success) {
        dispatch(failure('SIGNUP_REQUIRED', data));
      } else {
        dispatch(success('SUCCESS_LOGIN', data));
      }
    },
  );
};

const signup = formData => (dispatch) => {
  services.signup(formData).then(
    (data) => {
      if (!data.success) {
        dispatch(failure('ONBOARD_SUCCESS', data));
      } else {
        dispatch(success('ONBOARD_FAILURE', data));
      }
    },
  );
};

const getEvents = () => (dispatch) => {
  services.events().then(
    (data) => {
      if (!data.success) {
        dispatch(failure('EVENTS_FETCH_SUCCESS', data));
      } else {
        dispatch(success('EVENTS_FETCH_FAILURE', data));
      }
    },
  );
};

const getCategories = () => (dispatch) => {
  services.categories().then(
    (data) => {
      if (!data.success) {
        dispatch(failure('CATEGORIES_FETCH_SUCCESS', data));
      } else {
        dispatch(success('CATEGORIES_FETCH_FAILURE', data));
      }
    },
  );
};

const getTimeline = () => (dispatch) => {
  services.timeline().then(
    (data) => {
      if (!data.success) {
        dispatch(failure('TIMELINE_FETCH_SUCCESS', data));
      } else {
        dispatch(success('TIMELINE_FETCH_FAILURE', data));
      }
    },
  );
};

export default {
  login,
  signup,
  getEvents,
  getCategories,
  getTimeline,
};
