let IS_PROD = true;
const server = IS_PROD
  ? "https://video-chat-2-2pzf.onrender.com"
  : "http://localhost:8080";
export default server;
