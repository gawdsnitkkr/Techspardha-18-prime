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

const createEvent = formData => (dispatch) => {
  services.postEvents(formData).then(
    (data) => {
      if (!data.success) {
        dispatch(failure('EVENT_CREATED_SUCCESS', data));
      } else {
        dispatch(success('EVENT_CREATED_FAILURE', data));
      }
    },
  );
};

const getRegisteredEvents = () => (dispatch) => {
  services.registeredEvents().then(
    (data) => {
      if (!data.success) {
        dispatch(failure('USER_REGISTERED_EVENTS_SUCCESS', data));
      } else {
        dispatch(success('USER_REGISTERED_EVENTS_FAILURE', data));
      }
    },
  );
};

const updateEvent = formData => (dispatch) => {
  services.putEvents(formData).then(
    (data) => {
      if (!data.success) {
        dispatch(failure('EVENT_UPDATED_SUCCESS', data));
      } else {
        dispatch(success('EVENT_UPDATED_FAILURE', data));
      }
    },
  );
};

const getFacts = () => (dispatch) => {
  services.getFacts().then(
    (data) => {
      if (!data.success) {
        dispatch(failure('FETCH_FACTS_SUCCESS', data));
      } else {
        dispatch(success('FETCH_FACTS_FAILURE', data));
      }
    },
  );
};

const getVideos = () => (dispatch) => {
  services.getVideos().then(
    (data) => {
      if (!data.success) {
        dispatch(failure('FETCH_VIDEOS_SUCCESS', data));
      } else {
        dispatch(success('FETCH_VIDEOS_FAILURE', data));
      }
    },
  );
};

const getTimestamp = () => (dispatch) => {
  services.timestamp().then(
    (data) => {
      if (!data.success) {
        dispatch(failure('TIMESTAMP_SUCCESS', data));
      } else {
        dispatch(success('TIMESTAMP_FAILURE', data));
      }
    },
  );
};

const createQuery = formData => (dispatch) => {
  services.query(formData).then(
    (data) => {
      if (!data.success) {
        dispatch(failure('QUERY_CREATED_SUCCESS', data));
      } else {
        dispatch(success('QUERY_CREATED_FAILURE', data));
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
  createEvent,
  getRegisteredEvents,
  updateEvent,
  getFacts,
  getVideos,
  createQuery,
  getTimestamp,
};
