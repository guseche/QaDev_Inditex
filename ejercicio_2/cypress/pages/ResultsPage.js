class ResultPage{

    elements = {
        wikipediaPage: () => cy.contains('https://es.wikipedia.org')
    }

    clickInTheResultWikipedia(){
        this.elements.wikipediaPage().click();
    }

}

export const resultPage = new ResultPage();