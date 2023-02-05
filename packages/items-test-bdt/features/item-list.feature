Feature: Control Search Testing


  Scenario Outline:  Multiple authentication in accounts
    Given I write the url of portal <challengeUrl> in  the browser
    When I write my search keyword: <searchKeyWord>
    Then I should view a breadcrumb with the content: <resultContent>

    Examples:
      | challengeUrl            | searchKeyWord        | resultContent                                      |
      | 'http://localhost:3000' | 'piano'              | 'Instrumentos Musicales'                           |
      | 'http://localhost:3000' | 'guitarra'           | 'Instrumentos Musicales'                           |
      | 'http://localhost:3000' | 'steren'             | 'Accesorios para Vehículos'                        |
