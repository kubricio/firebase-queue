import { INVALID_KEY_REGEX } from "./constants";
import _ from "lodash";

export const validateFirebaseKey = (key = '') => key.replace(INVALID_KEY_REGEX, '_');

export const getAppTypeKey = (app, type) => `${app}:${type}`;

export const getIndexKey = (indexId, indexField) => `${!_.isUndefined(indexField) ? `${indexField}:` : ''}${indexId || ''}`;