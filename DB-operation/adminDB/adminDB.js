const { AdminModel } = require("../../Model/index");

class adminDB {
  async createAdmin(username, email) {
    try {
      let check = await AdminModel.findOne({ email: email });

      if (check) {
        return false;
      }

      let create = await AdminModel.create({
        email: email,
        username: username,
      });

      return create;
    } catch (error) {
        console.log(error);
        return false;
    }
  }
}

module.exports = new adminDB();
