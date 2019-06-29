import {environment} from '../environments/environment';

const URL = environment.baseUrl;
const URL_CONFIG = {
  GET_MAKEUPS: URL + 'makeups',
  GET_MAKEUP_BY_ID: URL + 'makeup',
  SAVE_MAKEUP: URL + 'save/makeup',
  SAVE_ALL_MAKEUPS: URL + 'saveAll/makeup',
  DELETE_MAKEUP: URL + 'delete/makeup',
  GET_INVENTORY: URL + 'inventory',
  GET_ALL_MAKEUPS: URL + 'makeups-all'
};
export default URL_CONFIG;
