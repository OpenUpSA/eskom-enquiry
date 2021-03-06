import { endpoint } from 'src/app/api';
import asyncActionCreator from './asyncActionCreator';


export const fetchAlerts = asyncActionCreator(() => async dispatch => {
  const params = {limit: 9999};
  const response = await endpoint.get('alerts', {params: params});
  return { alerts: response.data };
}, { name: 'FETCH_ALERTS' });

export const deleteAlert = asyncActionCreator((id) => async dispatch => {
  const response = await endpoint.delete(`alerts/${id}`);
  return response.data;
}, { name: 'DELETE_ALERT' });

export const addAlert = asyncActionCreator((alert) => async dispatch => {
  const response = await endpoint.post('alerts', alert);
  return response.data;
}, { name: 'ADD_ALERT' });
