import log from "../services/logger/console";

export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    log({ success: false, msg: "error on load state persist", error: err });
    return undefined;
  }
};

export const saveState = async (key, state) => {
	try{
		const serializedState = JSON.stringify(state);
		localStorage.setItem(key, serializedState);
	}catch (err){
		log({success:false, msg:"on persist state", err})
	}
};

export const removeState = (key) => {
  try {
    const serializedState = localStorage.removeItem(key);
    if (!serializedState) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    log({ success: false, msg: "error on load state persist", error: err });
    return undefined;
  }
};