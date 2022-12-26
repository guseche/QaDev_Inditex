
class HomePageGoogle{

    elements = {
        searchBar: () => cy.get('[title="Buscar"]')
    }

    search(text) {
        this.elements.searchBar().type(text);
        this.elements.searchBar().type('{enter}');
    }

    load(){
        cy.visit("https://google.com/");
    }
    
    

}

export const homePageGoogle = new HomePageGoogle();