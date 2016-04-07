var authConfigs = {
  googleAuth: {
    clientID: 'need google code',
    clientSecret: 'need google secret',
    callbackUrl: 'http://localhost:8000/auth/google/callback'
  },

  sessionVars: {
    secret: ''
  }
};

module.exports= authConfigs;
