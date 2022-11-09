import { Given, When, Then } from "@wdio/cucumber-framework";
import BasePage from "../../pageobjects/base.page";
import { ResultsPage } from "../../pageobjects/results.page";

const basePage: BasePage = new BasePage();
const resultsPage: ResultsPage = new ResultsPage();

When("I select {string} in the sports drop down menu", async (category: string) => {
    await resultsPage.selectSportDropDown(category);
  });

Then("I am on the results page for {string}", async (page: string) => {
  await expect(browser).toHaveUrlContaining(`/results/${page}`);
});

When("I use the date picker to select {string}, {string} and {string}", async (day: string, month: string, year: string) => {
    await resultsPage.selectCalendarDate(day, month, year);
  });
