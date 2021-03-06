import types from "./types";

const { INCREASE_COUNTER, RESET_COUNTER, TIMEOUT } = types;

const increaseCounter = () => ({
  type: INCREASE_COUNTER
});

const resetCounter = () => ({
  type: RESET_COUNTER
});

const timeout = () => ({
  type: TIMEOUT
});

export default {
  increaseCounter,
  resetCounter,
  timeout
};
