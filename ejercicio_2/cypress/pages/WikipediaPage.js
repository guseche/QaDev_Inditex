class WikipediaPage{

    elements = {
        historyHiperLink : (text) => cy.get(`[href="#${text}"]`),
        text: (text) => cy.contains(text)
    }

    clickOnTheIndex(text){
        this.elements.historyHiperLink(text).click();
    }

    screenshotPage(){
        cy.screenshot('screenshot from wikipedia page')
    }

}

export const wikipediaPage = new WikipediaPage();