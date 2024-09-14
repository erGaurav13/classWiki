const { adminDB } = require("../../DB-operation/index");

class adminController {
  async createAdmin(req, res) {
    const { username, email } = req.body;

    try {
      const create = await adminDB.createAdmin(username, email);
      if (create) {
        return  res.send("True");
      }
      console.log(create)
      res.send("False");
    } catch (error) {
      console.log(error);
      return res.send("error");
    }
  }
}

module.exports = new adminController();
