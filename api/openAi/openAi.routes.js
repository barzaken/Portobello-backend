const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const router = express.Router()
const configuration = new Configuration({
<<<<<<< HEAD
  apiKey: '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'
=======
  apiKey: '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'
>>>>>>> 2164991b85de9b6be3a483fd900d4863fdb1a7b9
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

