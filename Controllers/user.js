const userModel = require("../Models/users");
const Emailservice = require("../Notification/EmailService");

async function createUser(req, res, next) {
  try {
    let userDetail = req.body;
    let response = await userModel.insertMany(userDetail);
    let response1 = await Emailservice.sendMail({
      from: '"Jaydeep A khatri" <jaydeep.khatri23@gmail.com>', // sender address
      to: `${userDetail.email}`, // list of receivers
      subject: `Welcome to ABC system ${userDetail.first_name} ${userDetail.last_name}`, // Subject line
      text: `Hi ${userDetail.first_name},Please confirm your email address`, // plain text body
      html: `<b>Hi ${userDetail.first_name},Please confirm your email address</b>`, // html body
    });
    let response3 = await userModel.find({ type: "admin" });
    var list = "";
    response3.forEach((el, index) => {
      response3[index] = el.email;
    });

    response3 = response3.join(",");
    let response4 = await Emailservice.sendMail({
      from: '"Jaydeep A khatri" <jaydeep.khatri23@gmail.com>', // sender address
      to: `${response3}`, // list of receivers
      subject: ` ${userDetail.first_name} ${userDetail.last_name} has registered with us`, // Subject line
      text: `Hi ${userDetail.first_name},Please welcome`, // plain text body
      html: `<b>Hi ${userDetail.first_name},Please welcome</b>`, // html body
    });
    res.json(response4);
  } catch (error) {
    res.send(error);
  }
}
async function getAllUser(req, res, next) {
  try {
    let pageNo = req.query.pageNo;
    let pageSize = req.query.pageSize;
    let skip = (pageNo - 1) * pageSize || 0;
    let limit = req.query.limit;
    console.log(skip, limit);
    let response = await userModel.find({}).skip(skip).limit(limit);
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getAllUser,
  createUser,
};
