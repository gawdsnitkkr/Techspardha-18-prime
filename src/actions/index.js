import services from '../services';
import SweetAlert from '../components/SweetAlert';

const success = (type, data) => ({
  type,
  data,
});

const failure = (type, data) => ({
  type,
  data,
});

const login = token => (dispatch) => {
  services.login(token).then((data) => {
    if (data.success && !data.onBoard) {
      dispatch(failure('SIGNUP_REQUIRED', data));
    } else if (data.success && data.onBoard) {
      dispatch(success('SUCCESS_LOGIN', data));
    } else {
    }
  });
};

const signup = formData => (dispatch) => {
  services.signup(formData).then((data) => {
    if (data.success) {
      dispatch(failure('ONBOARD_SUCCESS', data));
    } else {
      dispatch(success('ONBOARD_FAILURE', data));
    }
  });
};

const getEvents = () => (dispatch) => {
  services.events().then((data) => {
    if (data.success) {
      dispatch(failure('EVENTS_FETCH_SUCCESS', data));
    } else {
      dispatch(success('EVENTS_FETCH_FAILURE', data));
    }
  });
};

const getCategories = () => (dispatch) => {
  services.categories().then((data) => {
    if (data.success) {
      dispatch(failure('CATEGORIES_FETCH_SUCCESS', data));
    } else {
      dispatch(success('CATEGORIES_FETCH_FAILURE', data));
    }
  });
};

const getTimeline = () => (dispatch) => {
  services.timeline().then((data) => {
    if (data.success) {
      dispatch(failure('TIMELINE_FETCH_SUCCESS', data));
    } else {
      dispatch(success('TIMELINE_FETCH_FAILURE', data));
    }
  });
};

const createEvent = formData => (dispatch) => {
  services.postEvents(formData).then((data) => {
    if (!data.success) {
      dispatch(failure('EVENT_CREATED_SUCCESS', data));
    } else {
      dispatch(success('EVENT_CREATED_FAILURE', data));
    }
  });
};

const getRegisteredEvents = () => (dispatch) => {
  services.registeredEvents().then((data) => {
    if (data.success) {
      dispatch(failure('USER_REGISTERED_EVENTS_SUCCESS', data));
    } else {
      dispatch(success('USER_REGISTERED_EVENTS_FAILURE', data));
    }
  });
};

const registerEvent = formData => (dispatch) => {
  services.registerEvent(formData).then((data) => {
    if (data.success) {
      dispatch(success('EVENT_REGISTERED_SUCCESS', data));
      SweetAlert('Registered SuccessFully', 'success');
      dispatch(getRegisteredEvents());
    } else {
      dispatch(failure('EVENT_REGISTERED_FAILURE', data));
    }
  });
};

const getFacts = () => (dispatch) => {
  services.getFacts().then((data) => {
    if (data.success) {
      dispatch(failure('FETCH_FACTS_SUCCESS', data));
    } else {
      dispatch(success('FETCH_FACTS_FAILURE', data));
    }
  });
};

const getVideos = () => (dispatch) => {
  services.getVideos().then((data) => {
    if (!data.success) {
      dispatch(success('FETCH_VIDEOS_SUCCESS', data));
    } else {
      dispatch(failure('FETCH_VIDEOS_FAILURE', data));
    }
  });
};

const getCurrentEvents = timestamp => (dispatch) => {
  services.getCurrentEvents(timestamp).then((data) => {
    if (data.success) {
      dispatch(success('FETCH_CURRENT_EVENTS_SUCCESS', data));
    } else {
      dispatch(failure('FETCH_CURRENT_EVENTS_FAILURE', data));
    }
  });
};

const getTimestamp = () => (dispatch) => {
  services.timestamp().then((data) => {
    dispatch(getCurrentEvents(data.timestamp));
    dispatch(success('TIMESTAMP_SUCCESS', data));
  });
};

const createQuery = formData => (dispatch) => {
  services.query(formData).then((data) => {
    if (data.success) {
      dispatch(failure('QUERY_CREATED_SUCCESS', data));
    } else {
      dispatch(success('QUERY_CREATED_FAILURE', data));
    }
  });
};

const getEventsByCategory = categoryName => dispatch => new Promise((resolve, reject) => {
  services.getEventsByCategory(categoryName).then((data) => {
    if (data.success) {
      dispatch(failure('CATEGORY_EVENTS_SUCCESS', data));
      resolve('action completed');
    } else {
      dispatch(success('CATEGORY_EVENTS_FAILURE', data));
      reject('action incomplete');
    }
  });
});

const loading = isLoading => (dispatch) => {
  if (isLoading) {
    dispatch(success('LOADING_STARTS', {}));
  } else {
    dispatch(failure('LOADING_OVER', {}));
  }
};

export default {
  login,
  signup,
  getEvents,
  getCategories,
  getTimeline,
  createEvent,
  getRegisteredEvents,
  registerEvent,
  getFacts,
  getVideos,
  createQuery,
  getTimestamp,
  getEventsByCategory,
  loading,
};
