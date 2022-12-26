* configure report = true

Feature: Find pets by status

  Scenario: search pets by status sold
    Given url 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold'
    When method GET
    Then status 200
    * def before = response
    * def fun = function(x){ return {id:x.id, name:x.name} }
    * def res = karate.map(before, fun)
    * print res