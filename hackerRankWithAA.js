let puppeteer =  require("puppeteer");
let page;
let email = 'a2b6c12@gmail.com';
let password = '03032023';

const codeObj = require('./codeForHR');
 (async function(){
    try{
    let openbrowser = await puppeteer.launch({headless : false,
        args :['--start-maximized'],
        defaultViewport:null
        });
      let opentabArr = await openbrowser.pages();
      page  = opentabArr[0];
        await page.goto("https://www.hackerrank.com/auth/login");
        await page.type("input[type = 'text']",email);
      await  page.type("input[type = 'password']",password);
      await page.click('button[data-analytics="LoginPassword"]');
     await waitAndClick(".topic-name",page);
     await waitAndClick("input[value='warmup']",page);
    let questionsArr =  await page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");//return all questions
    console.log(questionsArr.length);
      await waitAndClick(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",page);
      let quesSolve = await questionSolver(questionsArr[0],page,codeObj.answers[0]);
    }catch(error){
        console.log(error);
    }
 })()

  async function waitAndClick(selector,page){
     await page.waitForSelector(selector);
     let ClickedSelector = page.click(selector);
     return ClickedSelector;
  }

  async function questionSolver(ques,page,answer){
       await waitAndClick(".monaco-editor.no-user-select.vs",page);
       await waitAndClick(".checkbox-input",page);
       await page.waitForSelector(".text-area");
      await page.type(".text-area",answer,{delay:10});
       await  page.keyboard.down("Control");
       await page.keyboard.press("A");
       await page.keyboard.press("X");
    await   page.keyboard.up("Control");
      let mainEditor = await waitAndClick(".monaco-editor.no-user-select.vs",page);
      await page.keyboard.down("Control");
      await page.keyboard.press("A");
      await page.keyboard.press("V");
     await  page.keyboard.up("Control");
     await waitAndClick(".hr-monaco-submit",page);

 }
  