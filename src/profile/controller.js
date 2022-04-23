const Profile = require("./model");

async function update(req) {
  try {
    return await Profile.updateById(req.params.id, req.body);
  } catch (error) {
    console.error("Error controller update (profile)");
  }
}

module.exports = {
  update,
};
