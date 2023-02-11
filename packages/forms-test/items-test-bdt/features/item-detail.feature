Feature: Control Search Testing


  Scenario Outline:  Multiple authentication in accounts
    Given I write the url of portal <challengeUrl> in  the browser
    #Then I should view a breadcrumb with the content: <resultContent>
    Then I should view a item with the title: <itemTitle>

    Examples:
      | challengeUrl                                | resultContent            | itemTitle                         |
      | 'http://localhost:3000/items/MLA1116890684' | 'Instrumentos Musicales' | 'Órgano Eléctrico Musical Gadnic' |
      | 'http://localhost:3000/items/MLA748433339'  | 'Instrumentos Musicales' | 'Stereo Bluetooth Estereo' |
