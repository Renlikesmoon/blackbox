const Blackbox = require("../lib/blackbox");
const ren = new Blackbox();

async function askQuestion() {
  try {
    let result = await ren.question({ ask: "Keep it simple... What is blackbox?" });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

askQuestion();
