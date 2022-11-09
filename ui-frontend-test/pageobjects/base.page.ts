export default class BasePage {


    todaysUnixDate =async () => {
        let now: Date =  new Date();
        const todayDate = now.toDateString();
        const todayInMilliseconds = new Date(todayDate).getTime();
        return todayInMilliseconds.toString();
    };

    gotoBasePage = async() => {
        await browser.url(`https://www.pokerstars.uk/sports/#`);
        await browser.setTimeout({ 'pageLoad': 10000 });
    };

    acceptCookies = async() => {
        const acceptCookieButton = $('button=Accept All Cookies');
        await acceptCookieButton.click();   
    };

    clickLoginMenu = async () => {
        const loginButton = $('button=Login');
        await loginButton.click();
    };

    loginAs = async (username:string, password:string) => {
        const submitButton = $('[type="submit"]');
        const Username = $('input#userId');
        const Password = $('input#password');
        await Username.setValue(username);
        await Password.setValue(password);
        await submitButton.click();
    };

    clickSubNavLink = async (link:string) => {
        const subNavButton = $(`#link__${link}`)
        await subNavButton.click();
    };
}
