import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { homePageGoogle } from '@pages/HomePage';
import { resultPage } from '@pages/ResultsPage';
import { wikipediaPage } from '@pages/WikipediaPage';


When('When I do a google search on {string}', (text) => {
  homePageGoogle.load();
  homePageGoogle.search(text);
});

When("I choose the result from wikipedia, where I look up the history of automatización",  () => {
  resultPage.clickInTheResultWikipedia();
  wikipediaPage.clickOnTheIndex("Historia");
});

Then("i should see that in the history of automation the first automation was in {string}",  (text) => {
  expect(wikipediaPage.elements.text(text)).to.exist;
  wikipediaPage.screenshotPage();
});

