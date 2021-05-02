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


async function updateUser(data)
{
  console.log(data)
  const url = `${baseURLApi}/users/updateUser`;
  return await axios.post(url, data).then(response => response.data);
}


async function logIn(data)
{
  const url = `${baseURLApi}/users/logIn`;
  return await axios.post(url, data).then(response => response.data);
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

async function feedback(data)
{
  const url = `${baseURLApi}/users/feedback`;
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
  logIn,
  addImage,
  getImage,
  getDogs,
  adoptDog,
  getCats,
  adoptCat,
  getLostPets,
  reportPet,
  feedback,
};