const fs = require("fs");
const path = require("path");
const Piscina = require("piscina");
const gradient = require("gradient-string");
let threads = parseInt(fs.readFileSync("./threads.txt", "utf-8"));
const prompts = require("prompts");
const piscina = new Piscina({
  maxThreads: threads + 1,
  filename: path.resolve(__dirname, "main.js"),
});
const generatePaddedNums = (n) =>
  Array.from({ length: n }, (_, i) =>
    i.toString().padStart((n - 1).toString().length, "0")
  );
var numbers = generatePaddedNums(10000);

async function logo() {
  console.log(
    gradient.retro(`
    ██████╗  ██████╗  ██████╗ ███████╗████████╗██╗   ██╗
    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝╚══██╔══╝╚██╗ ██╔╝
    ██████╔╝██║   ██║██║   ██║███████╗   ██║    ╚████╔╝ 
    ██╔══██╗██║   ██║██║   ██║╚════██║   ██║     ╚██╔╝  
    ██████╔╝╚██████╔╝╚██████╔╝███████║   ██║      ██║   
    ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝      ╚═╝
            Made by Summer | Enjoy
`)
  );
}

function chunk(items, size) {
  const chunks = [];
  items = [].concat(...items);

  while (items.length) {
    chunks.push(items.splice(0, size));
  }

  return chunks;
}

(async function () {
  logo();
  const response = await prompts({
    type: "text",
    name: "link",
    message: "What is the server invite link",
  });
  const response2 = await prompts({
    type: "text",
    name: "token",
    message: "What is the token you would like to use?",
  });
  console.clear();

  let arrayThreads = chunk(numbers, parseInt(numbers.length / threads));

  for (var i = 0; i < arrayThreads.length; i++) {
    try {
      piscina.run({
        combinationsx: arrayThreads[i],
        linkx: response.link,
        tokenx: response2.token,
        index: i,
      });
    } catch (e) {
      piscina.run({
        combinationsx: arrayThreads[i],
        linkx: response.link,
        tokenx: response2.token,
        index: i,
      });
    } finally {
    }
  }
})();
