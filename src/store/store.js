import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    events: [
      {
        image: require("../slike/infogamer.png"),
        title: "REBOOT INFOGAMER 2019 POWERED BY A1",
        details: "12.-17.11.2019.  ZAGREB, UTO – NED 10.00 – 20.00",
        selectedSubject: "Event"
      },
      {
        image: require("../slike/fatboyslim.jpg"),
        title: "Fatboy Slim",
        details: "07.03.2020. u 21:00h Zagrebački velesajam",
        selectedSubject: "Place"
      }
    ]
  },
  getters: {
    getEvents: (state) => {
      return state.events.map((event) => {
        event.user,
          event.image,
          event.title,
          event.details,
          event.email,
          event.selectedSubject,
          event.selectedRegion;
      });
    }
  },
  mutations: {
    addNewEvent(state, event) {
      state.events.push(event);
    }
  }
});
