import BasePage from './base.page';

const popularBetViewMore = $('footer.marketsList__footer');


export class HomePage extends BasePage {

    clickPopularLink = async (link:string) => {
        const popularLink = await $(`a.basicList__link=${link}`);
        await popularLink.click();
    }

    getPopularBetExcess = async () => {
    this.getPopularBetExcess = await $('.popularBets__excess').getText();
    }

    popluarBetViewMoreExists = async () => {
        await popularBetViewMore.isExisting();
        await popularBetViewMore.scrollIntoView();
    }
    
    clickPopluarBetViewMore =async () => {
        await popularBetViewMore.click();
    }

    expectedPopluarBetsAmount = () => {
        const defaultAmount = 5;
        const amount = +this.getPopularBetExcess + defaultAmount;
        return amount
    }
}

