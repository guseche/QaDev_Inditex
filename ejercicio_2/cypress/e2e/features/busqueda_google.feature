
Feature: wikipedia results in google search engine
  Scenario: Perform a search with the google engine and look for the result of wikipedia
    When When I do a google search on "automatización"
    And I choose the result from wikipedia, where I look up the history of automatización
    Then i should see that in the history of automation the first automation was in "Egipto ptolemaico, hacia el año 270 a. C."

