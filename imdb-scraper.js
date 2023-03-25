const request = require("request-promise");
const cheerio = require("cheerio");

const URL = "https://www.imdb.com/title/tt0102926/";

(async () => {
  const response = await request(URL);

  let $ = cheerio.load(response);

  let title = $("h1[data-testid='hero__pageTitle']").text();
  let rating = $(
    "div[data-testid='hero-rating-bar__aggregate-rating__score'] > span"
  ).first().text();

  console.log(`Title: ${title}`);
  console.log(`Rating: ${rating}`);
})();
