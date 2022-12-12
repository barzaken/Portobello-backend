const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const router = express.Router()
const configuration = new Configuration({
  apiKey: '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'
});
const openai = new OpenAIApi(configuration);

router.get('/', getChecklist)

async function getChecklist(req,res){
  try{
    const item = req.query.item
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Can you create to checklist to create a ${item}`,
      temperature:0.9,
      max_tokens:2048,
    });
    res.status(200).json({ result: response.data.choices[0].text });
  }catch(err){
    console.log(err);
  }
}

module.exports = router

