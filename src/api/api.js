import axios from "axios";

const local = "http://localhost:5000";
const production = "https://route66auto-api.onrender.com";  // Mantém a barra no final

let api_url = '';
let mode = 'pro';

if (mode === 'pro') {
  api_url = production;
} else {
  api_url = local;
}

const api = axios.create({
  baseURL: `${api_url.replace(/\/$/, '')}/api`,  // Remove a barra final se houver antes de adicionar '/api'
  withCredentials: true
});

export default api;

