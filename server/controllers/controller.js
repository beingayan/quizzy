import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";
import JWTHandler from "../models/authSchema.js";
import { v4 as uuidv4 } from "uuid";

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
  try {
    //     const jwtHandler = new JWTHandler("quizzy_auth_token_key");
    const { email, firstName } = req.body;
    const payload = { userId: uuidv4(), username: email, firstName };

    //     const token = jwtHandler.generateToken(payload);
    console.log("token-->", req.headers);
    //     await res.json({ token: token, payload });
    await res.json({ token: "test", payload });
  } catch (error) {
    console.log("error-->", error);
  }
}
