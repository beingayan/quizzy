import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";
import JWTHandler from "../models/authSchema.js";
import { v4 as uuidv4 } from "uuid";
import signupSchema from "../models/signupSchema.js";
import { config } from 'dotenv';

config();
/** get all questions */
export async function getQuestions(req, res) {
  try {
    const q = await questions;

    const data = [
      {
        answers: answers,
        questions,
      },
    ];
    res.json(data);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers }, function (err, data) {
      res.json({ msg: "Data Saved Successfully...!" });
    });
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** get all result */
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

/** post all result */
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");

    Results.create(
      { username, result, attempts, points, achived },
      function (err, data) {
        res.json({ msg: "Result Saved Successfully...!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

/** delete all result */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function signup(req, res) {
  const rowData = {
    data: [],
    isSuccess: false,
    msg: "",
  };
  try {
    const jwtHandler = new JWTHandler(process.env.JWT_KEY || "quiz1212key123$$");
    
    const { email, firstName, password } = req.body.data;

    if (!email || !firstName || !password) throw new Error("Data not provided");

    const isDuplicateFlag = await signupSchema.find({ email });

    if (isDuplicateFlag.length > 0) throw new Error("User Already Exist !");
    const token = jwtHandler.generateToken({ email, firstName });

    if (!token) throw new Error("Signup failed");

    signupSchema.create(
      { email, firstName, password },
      async function (err, data) {
        rowData["data"] = { firstName: data, token };
        rowData["isSuccess"] = true;
        rowData["msg"] = "Signup successfull.";
        await res.status(201).json(rowData);
      }
    );
  } catch (error) {
    console.log("error-->", error);
    rowData["data"] = [];
    rowData["isSuccess"] = false;
    rowData["msg"] = error.message;
    await res.status(501).json(rowData);
  }
}
