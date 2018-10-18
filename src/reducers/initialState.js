const initialState = {
  user: {
    loggedIn: false,
    userData: {},
    onboard: false,
    registeredEvents: [],
    querySubmitted: false,
  },
  events: [],
  categories: [],
  timeline: [],
  fact: '',
  videos: [],
  timestamp: new Date().getTime(),
  currentEvents: [],
  loading: true,
  lectures: [],
  about: [],
  contact: [],
  sponsors: [],
};

export default initialState;
