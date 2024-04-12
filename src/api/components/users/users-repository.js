const { User } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  return User.create({
    name,
    email,
    password,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}


/**
 * Check if email exists in the database
 * @param {string} email - Email
 * @returns {Promise<boolean>}
 */
async function emailExists(email) {
  const existingUser = await User.findOne({ email });
  return !!existingUser;
}


/**
 * Check if email exists for other users in the database
 * @param {string} email - Email
 * @param {string} userId - User ID to exclude
 * @returns {Promise<boolean>}
 */
async function emailExistsForOtherUser(email, userId) {
  const existingUser = await User.findOne({ email, _id: { $ne: userId } });
  return !!existingUser;
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  emailExists,
  emailExistsForOtherUser,
};
