import BasePage from './base.page';

export class ResultsPage extends BasePage {

    selectSportDropDown = async (sport:string) => {
        const dropDownMenu = await $("#sportSelect");
        const option = await $(`option=${sport}`)
        await dropDownMenu.click();
        await option.click();
    }

    selectCalendarDate = async (day:string,month:string,year:string) => {
        const yeardropdown = $('div.xdsoft_year').$('span');
        const monthdropdown = $('div.xdsoft_month').$('span');
        const yearOption = $(`.xdsoft_option=${year}`)
        const monthOption = $(`.xdsoft_option=${month}`)
        const dayOption = $(`.xdsoft_date=${day}`)
        const datePicker = $('.sportDateFilter__datepicker__handler')
        await datePicker.click();
        await yeardropdown.click();
        await yearOption.scrollIntoView();
        await yearOption.click();
        await yeardropdown.click();
        await monthdropdown.click();
        await monthOption.scrollIntoView();
        await monthOption.click();
        await monthdropdown.click();
        await dayOption.click();
        await browser.setTimeout({ 'pageLoad': 10000 });
    }
}

