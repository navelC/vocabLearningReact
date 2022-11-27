import { instance } from "./api-base";

export async function Get(table) {
  return await instance.get(`v1/`+table)
}
export async function GetById(table, id) {
  return await instance.get(`v1/`+table+'/'+id)
}
export async function Post(table, data) {
  return instance.post(`v1/`+table, data);
}
export async function Update(table, data) {
  return await instance.post(`v1/`+table, data);
}