export const addNewUser = (payload) => ({
  type: "ADD_NEW_USER",
  payload,
});

export const addTransfer = (payload) => ({
  type: "ADD_TRANSFER",
  payload,
});

export const addMoneyWallet = (payload) => ({
  type: "ADD_MONEY_WALLET",
  payload,
});

export const removeMoneyWallet = (payload) => ({
  type: "REMOVE_MONEY_WALLET",
  payload,
});

export const addHistory = (payload) => ({
  type: "ADD_HISTORY",
  payload,
});

export const openSession = (payload) => ({
  type: "OPEN_SESSION",
  payload,
});

export const closeSession = (payload) => ({
  type: "CLOSE_SESSION",
  payload,
});

export const addMonopolyPlayer = payload => ({
  type: "ADD_MONOPOLY_PLAYER",
  payload
})

export const closeMonopolyPlayer = payload => ({
  type: "CLOSE_MONOPOLY_PLAYER",
  payload
})

export const addRemoveMoneyMonopoly = payload => ({
  type: "ADD_REMOVE_MONEY_MONOPOLY",
  payload
})