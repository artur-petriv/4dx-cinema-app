import { $authHost, $host } from "./index";

export const createTickets = async (placesSelected, sessionId) => {
  const { data } = await $authHost.post("api/ticket", {
    placesSelected,
    sessionId,
  });

  return data;
};

export const fetchTickets = async (sessionId) => {
  const { data } = await $host.get("api/ticket/", {
    params: {
      sessionId,
    },
  });
  return data;
};
