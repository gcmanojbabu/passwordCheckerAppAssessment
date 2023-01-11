import { Request, Response, NextFunction } from "express";
const password = require("../models/IPassword.model");
import { v4 as uuidv4 } from "uuid";
const moment = require("moment");

export const addPasswordController = async (req: Request, res: Response) => {
  let password = req.body.password
  let responseData = {}
  const currentTimestamp = moment().format();
  const passwordId = uuidv4()

  try {

    const addPassword = {
      id: passwordId,
      password: password,
      date: currentTimestamp
    }
    let addPasswordResponse = await addPasswordInDB(addPassword);
    if (!addPasswordResponse) {
      console.log("Something went wrong in addPasswordResponse");
      return false;
    }

    responseData = addPasswordResponse

    res.status(200).send({ status: "Success", data: responseData, message: 'password successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error" });
  }
}

export const getPasswordController = async (req: Request, res: Response) => {
  const password = req.body.password
  let responseData = {}

  try {
    let getpasswordResponse = await getpasswordFromDB();
    if (!getpasswordResponse) {
      console.log("Something went wrong in password");
      return false;
    }
    responseData = getpasswordResponse

    res.status(200).send({ status: "Success", data: responseData, message: 'password successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error" });
  }
}

const addPasswordInDB = async (data: any) => {

  const newPost = new password(data);
  try {
    const addPasswordInDBResponse = await newPost.save();

    return addPasswordInDBResponse;
  } catch (error) {
    console.log("Unable to add password!");
    console.log(error);
    return false;
  }
}

const getpasswordFromDB = async () => {

  try {
    const getpasswordFromDBResponse = await password.find();

    return getpasswordFromDBResponse;
  } catch (error) {
    console.log("Unable to get password!");
    console.log(error);
    return false;
  }
}