import { httpGet } from '.';
import { IOrderTypes } from '../@interface';
const URL = '/orders';

export const getAllOrders = async (): Promise<IOrderTypes[]> => {
  const { data } = await httpGet(URL, '');
  return data;
};

export const getOrder = async (id: number): Promise<IOrderTypes[]> => {
  const { data } = await httpGet(`${URL}\${id}`, '');
  return data;
};