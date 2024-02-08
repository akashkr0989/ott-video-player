/**
 * Environment variables
 */
const Env = {
    MODE: process.env.NODE_ENV || 'development',
    API_BASE_URL: process.env.REACT_API_BASE_URL,
    MUVI_SECRET_KEY: process.env.REACT_SECRET_KEY || '',
    MUVI_APP_ID: process.env.REACT_APP_ID || '',
  };
  export default Env;
  