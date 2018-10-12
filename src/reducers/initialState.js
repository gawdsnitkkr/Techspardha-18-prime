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
  isLoading: true,
};

export default initialState;
