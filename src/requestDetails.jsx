import axios from "axios";
const BASE_URL = "https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/BookRecord";
const TOKEN = "00DDo000000JB9H!ARkAQEQvZoSm7kclU9ji31lQpb2EWR.FRAXpyRpCLKKPl9hWpps523YMoZGarhPH3_WdgsKGmW.aevKKJkLXHPKh6fnGTRs3";

export const publicRequest = axios.create({
  baseURL :BASE_URL,
});

export const userRequest = axios.create({
  baseURL :BASE_URL,
  header:{token:`Bearer ${TOKEN}`},
});