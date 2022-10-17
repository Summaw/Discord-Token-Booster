const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const clc = require("cli-color");
const gradient = require("gradient-string");
const setTitle = require("console-title");
puppeteer.use(StealthPlugin());

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

function sleep(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

module.exports = async ({ combinationsx, index, linkx, tokenx }) => {
  return new Promise(async (resolve, reject) => {
    async function main() {
      setTitle(`Discord Token Booster | Made by Summer | Enjoy`);
      logo();
      const tokkenxx = tokenx;
      await puppeteer
        .launch({
          headless: false,
          executablePath:
            "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe",
        })
        .then(async (browser) => {
          var page = await browser.newPage();
          await page.goto("https://discord.com/login", {
            waitUntil: "networkidle0",
            timeout: 60 * 1000,
          });
          await page.evaluate((tokkenxx) => {
            document.body.appendChild(
              document.createElement`iframe`
            ).contentWindow.localStorage.token = `"${tokkenxx}"`;
          }, tokkenxx);
          await page.reload();
          await page.waitForSelector(
            "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > nav > ul > div.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt > div.tutorialContainer-2jwoiB > div > div > div > svg > foreignObject > div",
            { timeout: 80 * 1000 }
          );
          await page.evaluate(() => {
            return document
              .querySelector(
                "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > nav > ul > div.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt > div.tutorialContainer-2jwoiB > div > div > div > svg > foreignObject > div"
              )
              .click();
          });
          await page.waitForSelector(
            "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div > div > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footer-3ie9JP.footerSeparator-VzAYwb > button",
            { timeout: 80 * 1000 }
          );
          await page.evaluate(() => {
            return document
              .querySelector(
                "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div > div > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footer-3ie9JP.footerSeparator-VzAYwb > button"
              )
              .click();
          });
          await page.waitForSelector(
            "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div > div > div > div > div > div.content-2hZxGK.thin-31rlnD.scrollerBase-_bVAAt > form > div > div > input",
            { timeout: 80 * 1000 }
          );
          await page.type(
            "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div > div > div > div > div > div.content-2hZxGK.thin-31rlnD.scrollerBase-_bVAAt > form > div > div > input",
            `${linkx}`
          );
          await page.waitForSelector(
            "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div > div > div > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footer-3_2BuU.footerSeparator-VzAYwb > button.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeMedium-2bFIHr.grow-2sR_-F",
            { timeout: 80 * 1000 }
          );
          await page.evaluate(() => {
            return document
              .querySelector(
                "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div > div > div > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footer-3_2BuU.footerSeparator-VzAYwb > button.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeMedium-2bFIHr.grow-2sR_-F"
              )
              .click();
          });
          await page.waitForSelector(".header-3OsQeK", { timeout: 180 * 1000 });
          await page.evaluate(() => {
            return document.querySelector(".header-3OsQeK").click();
          });
          await page.waitForSelector(
            "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div.content-1SgpWY > div.sidebar-1tnWFu.hasNotice-1s68so > nav > div.container-1-ERn5.clickable-vvKY2q > header > div",
            { timeout: 80 * 1000 }
          );
          await page.evaluate(() => {
            return document
              .querySelector(
                "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div.content-1SgpWY > div.sidebar-1tnWFu.hasNotice-1s68so > nav > div.container-1-ERn5.clickable-vvKY2q > header > div"
              )
              .click();
          });
          await page.waitForSelector(
            ".lineClamp1-1iDPU7.text-md-semibold-3xVVGu.name-3Uvkvr",
            { timeout: 180 * 1000 }
          );
          await page.evaluate(() => {
            return document
              .querySelector(
                ".lineClamp1-1iDPU7.text-md-semibold-3xVVGu.name-3Uvkvr"
              )
              .click();
          });
          await page.waitForSelector("#guild-header-popout-premium-subscribe", {
            timeout: 80 * 1000,
          });
          await page.evaluate(() => {
            return document
              .querySelector("#guild-header-popout-premium-subscribe")
              .click();
          });
          await sleep(3000);
          await page.waitForSelector(
            "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div > div.perksModal-CLcR1c.auto-2K3UW5.scrollerBase-_bVAAt > div.perksModalContentWrapper-3RHugb > div:nth-child(1) > div.ctaBar-Nhk8yY > div.actions-b9dB88 > button.shinyButton-2Q9MDB.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeSmall-wU2dO-.grow-2sR_-F",
            { timeout: 10 * 1000 }
          );
          await page.evaluate(() => {
            return document
              .querySelector(
                "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div > div.perksModal-CLcR1c.auto-2K3UW5.scrollerBase-_bVAAt > div.perksModalContentWrapper-3RHugb > div:nth-child(1) > div.ctaBar-Nhk8yY > div.actions-b9dB88 > button.shinyButton-2Q9MDB.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeSmall-wU2dO-.grow-2sR_-F"
              )
              .click();
          });
          try {
            await page.waitForSelector(
              "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footerSeparator-VzAYwb > button.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeMedium-2bFIHr.grow-2sR_-F",
              { timeout: 10 * 1000 }
            );
            await page.evaluate(() => {
              return document
                .querySelector(
                  "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footerSeparator-VzAYwb > button.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeMedium-2bFIHr.grow-2sR_-F"
                )
                .click();
            });
          } catch (error) {
            console.log(clc.yellowBright("[!] Token is out of boosts!"));
            await sleep(5000);
            await browser.close();
          }
          try {
            await page.waitForSelector(".confirmationContainer-3owksx", {
              timeout: 20 * 1000,
            });
            console.log("[+] Successfully boosted the server!");
            await sleep(3000);
            await browser.close();
          } catch {
            console.log(clc.redBright("[!] An Error Occured"));
            await sleep(3000);
            await browser.close();
          }
        });
    }

    main();
  });
};
