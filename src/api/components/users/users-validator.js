const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      oldPassword: Joi.string().min(6).max(32).required().label('Old Password'),
      newPassword: Joi.string().min(6).max(32).required().label('New Password'),
      confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required().label('Confirm Password'),
    },
  },
};
