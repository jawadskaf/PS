import axios from 'axios';

const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "http://localhost";
const portApi = process.env.NODE_ENV === "development" ? 3001 : 3001;

const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;


async function getUsers() {
  const url = `${baseURLApi}/users/users`;
  return await axios.get(url).then(response => response.data.data);
}

async function getUser(id) {
  const url = `${baseURLApi}/users/user`;
  return await axios.post(url, id).then(response => response.data);
}

async function createUser(data)
{
  const url = `${baseURLApi}/users/addUser`;
  return await axios.post(url, data).then(response => response.data);
}

async function registerUser(data)
{
  const url = `${baseURLApi}/users/register`;
  return await axios.post(url, data).then(response => response.data);
}

async function create(data)
{
  const url = `${baseURLApi}/users/create`;
  return await axios.post(url, data).then(response => response.data);
}

async function deleteUser(data)
{
  console.log(data);
  const url = `${baseURLApi}/users/deleteUser`;
  return await axios.post(url, {userid: data}).then(response => response.data);
}

async function deleteMedOrder(data)
{
  const url = `${baseURLApi}/users/deleteMedOrder`;
  return await axios.post(url, {medicineid: data}).then(response => response.data);
}

async function updateUser(data)
{
  console.log(data)
  const url = `${baseURLApi}/users/updateUser`;
  return await axios.post(url, data).then(response => response.data);
}

async function addMedOrder(data)
{
  const url = `${baseURLApi}/users/addMedOrder`;
  return await axios.post(url, data).then(response => response.data);
}

async function getOrders() {
  const url = `${baseURLApi}/users/orders`;
  return await axios.get(url).then(response => response.data.data);
}

async function updateMedOrder(data)
{
  console.log(data)
  const url = `${baseURLApi}/users/updateMedOrder`;
  return await axios.post(url, data).then(response => response.data);
}
async function logIn(data)
{
  const url = `${baseURLApi}/users/logIn`;
  return await axios.post(url, data).then(response => response.data);
}

async function addLabTest(data)
{
  const url = `${baseURLApi}/users/addLabTest`;
  return await axios.post(url, data).then(response => response.data);
}

async function getLabTest() {
  const url = `${baseURLApi}/users/getLabTest`;
  return await axios.get(url).then(response => response.data.data);
}

async function deleteLabTest(data)
{
  const url = `${baseURLApi}/users/deleteLabTest`;
  return await axios.post(url, {labtestid: data}).then(response => response.data);
}

async function updateLabTest(data)
{
  const url = `${baseURLApi}/users/updateLabTest`;
  return await axios.post(url, data).then(response => response.data);
}

async function addHealthcareProduct(data)
{
  const url = `${baseURLApi}/users/addHealthcareProduct`;
  return await axios.post(url, data).then(response => response.data);
}

async function getHealthcareProduct() {
  const url = `${baseURLApi}/users/getHealthcareProduct`;
  return await axios.get(url).then(response => response.data.data);
}

async function deleteHealthcareProduct(data)
{
  const url = `${baseURLApi}/users/deleteHealthcareProduct`;
  return await axios.post(url, {healthcareid: data}).then(response => response.data);
}

async function updateHealthcareProduct(data)
{
  const url = `${baseURLApi}/users/updateHealthcareProduct`;
  return await axios.post(url, data).then(response => response.data);
}

async function loadInfo(data)
{
  const url = `${baseURLApi}/users/loadInfo`;
  return await axios.post(url,data).then(response => response.data);
}

async function addImage(data)
{
  
  console.log(data);
  const url = `${baseURLApi}/users/addImage`;
  return await axios.post(url, data).then(response => response.data);
}

async function getImage() {
  const url = `${baseURLApi}/users/getImage`;
  return await axios.get(url).then(response => response.data.data);
}

async function getDogs() {
  const url = `${baseURLApi}/users/getDogs`;
  return await axios.get(url).then(response => response.data.data);
}

async function adoptDog(data)
{
  const url = `${baseURLApi}/users/adoptDog`;
  return await axios.post(url, data).then(response => response.data);
}

async function getCats() {
  const url = `${baseURLApi}/users/getCats`;
  return await axios.get(url).then(response => response.data.data);
}

async function adoptCat(data)
{
  const url = `${baseURLApi}/users/adoptCat`;
  return await axios.post(url, data).then(response => response.data);
}

async function getLostPets() {
  const url = `${baseURLApi}/users/getLostPets`;
  return await axios.get(url).then(response => response.data.data);
}

async function reportPet(data)
{
  const url = `${baseURLApi}/users/reportPet`;
  return await axios.post(url, data).then(response => response.data);
}
export {
  getUsers,
  getUser,
  createUser,
  registerUser,
  create,
  deleteUser,
  updateUser,
  addMedOrder,
  getOrders,
  deleteMedOrder,
  updateMedOrder,
  logIn,
  addLabTest,
  getLabTest,
  deleteLabTest,
  updateLabTest,
  addHealthcareProduct,
  getHealthcareProduct,
  deleteHealthcareProduct,
  updateHealthcareProduct,
  loadInfo,
  addImage,
  getImage,
  getDogs,
  adoptDog,
  getCats,
  adoptCat,
  getLostPets,
  reportPet,
};