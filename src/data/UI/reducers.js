import * as actions from './actions'

let assign = (state, next) => Object.assign({}, state, next)

const INITIAL_STATE = {
  bitcoinDisplayed: true,
  dropdownLanguageDisplayed: false,
  exploreMenuDisplayed: false,
  navigationDisplayed: false,
  securityCenterMenuDisplayed: false
}

const ui = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SHOW_EXPLORE_MENU: {
      return assign(INITIAL_STATE, { exploreMenuDisplayed: true })
    }
    case actions.HIDE_EXPLORE_MENU: {
      return assign(INITIAL_STATE, { exploreMenuDisplayed: false })
    }
    case actions.TOGGLE_EXPLORE_MENU: {
      return assign(INITIAL_STATE, { exploreMenuDisplayed: !state.exploreMenuDisplayed })
    }
    case actions.SHOW_SECURITY_CENTER_MENU: {
      return assign(INITIAL_STATE, { securityCenterMenuDisplayed: true })
    }
    case actions.HIDE_SECURITY_CENTER_MENU: {
      return assign(INITIAL_STATE, { securityCenterMenuDisplayed: false })
    }
    case actions.TOGGLE_SECURITY_CENTER_MENU: {
      return assign(INITIAL_STATE, { securityCenterMenuDisplayed: !state.securityCenterMenuDisplayed })
    }
    case actions.TOGGLE_CURRENCY_DISPLAY: {
      return assign(INITIAL_STATE, { bitcoinDisplayed: !state.bitcoinDisplayed })
    }
    case actions.TOGGLE_DROPDOWN_LANGUAGE: {
      return assign(INITIAL_STATE, { dropdownLanguageDisplayed: !state.dropdownLanguageDisplayed })
    }
    default:
      return state
  }
}

export default ui
