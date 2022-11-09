import { Given, When, Then} from '@wdio/cucumber-framework';
import BasePage from '../../pageobjects/base.page';
import { HomePage } from '../../pageobjects/home.page';

const basePage: BasePage = new BasePage();
const homePage: HomePage = new HomePage();

Given("I am on the homepage", async () => {
    await basePage.gotoBasePage();
});

Given("I open the login menu", async() => {
    await basePage.clickLoginMenu();
});

Given("The view more expander is present", async() => {
    await homePage.popluarBetViewMoreExists();
    await homePage.getPopularBetExcess();
});

When("I login with an invalid account", async() => {
    await basePage.loginAs('JohndoeTest', 'Password');
});

When("I click View more expander", async() => {
    await homePage.clickPopluarBetViewMore();
});

When("I click {string} on the sub navigation menu", async (page:string) => {
    await basePage.clickSubNavLink(page);
});

When("I click on {string} in popular links", async function(link:string) {
    await homePage.clickPopularLink(link);
});

Then("I should see a message stating the login attempt was unsuccessful", async() => {
    const errorMessage = await $('p=The username and password combination is not recognized. Please try again.');
    await expect(errorMessage).toExist();
});

Then("the amount of bets present should increase by the stated number", async() => {
    const count = await $$('.marketsList__item').length
    await expect(count).toEqual(await homePage.expectedPopluarBetsAmount());
})

Then("I am on the {string} page",async (page:string) => {
    await expect(browser).toHaveUrlContaining(page)
});

Then("I can see the results for today",async () => {
    const todaysDate = await basePage.todaysUnixDate()
    await expect(browser).toHaveUrlContaining(todaysDate)
});

Then("the radio button for today is selected",async () => {
    const today = $('#filter__lastDay').isSelected()
    await expect(today).toBeTruthy();
});


