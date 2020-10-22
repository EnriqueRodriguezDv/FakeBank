const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    case "ADD_TRANSFER":
      return {
        ...state,
        ...state.user.map((item) => {
          if (item.username === action.payload.to) {
            item.wallet += Number(action.payload.transfer);
          }
          if (item.isOnline) {
            item.wallet -= Number(action.payload.transfer);
          }
        }),
      };

    case "ADD_MONEY_WALLET":
      return {
        ...state,
        ...state.user.map((item) => {
          if (item.isOnline) {
            item.wallet += Number(action.payload);
          }
        }),
      };

    case "REMOVE_MONEY_WALLET":
      return {
        ...state,
        ...state.user.map((item) => {
          if (item.isOnline) {
            item.wallet -= Number(action.payload);
          }
        }),
      };

    case "ADD_HISTORY":
      return {
        ...state,
        ...state.user.map((item) => {
          if (item.username === action.payload.username) {
            item.history.push({
              date: action.payload.date,
              move: action.payload.move,
              wallet: action.payload.wallet,
              concept: action.payload.concept,
            });
          }
        }),
      };

    case "OPEN_SESSION":
      return {
        ...state,
        ...state.user.map((item) => {
          if (item.username === action.payload) {
            item.isOnline = true;
          }
        }),
      };

    case "CLOSE_SESSION":
      return {
        ...state,
        ...(state.user.find((item) => item.isOnline).isOnline = false),
      };

    case "ADD_MONOPOLY_PLAYER":
      return {
        ...state,
        ...state.user.find(item => item.username === action.payload).isPlayerMonopoly = true
      }

    case "CLOSE_MONOPOLY_PLAYER":
      return {
        ...state,
        ...(state.user.filter(item => item.isPlayerMonopoly = false))
      }

    case "ADD_REMOVE_MONEY_MONOPOLY":
      return {
        ...state,
        ...state.user.map(item => {
          if (item.username === action.payload.username) {
            if (action.payload.isToAdd) {
              item.wallet += Number(action.payload.move)
            }
            if (!action.payload.isToAdd) {
              item.wallet -= Number(action.payload.move)
            }
          }
        })
      }

    default:
      return state;
  }
};

export default reducer;
