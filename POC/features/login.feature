Feature: Login

Scenario: login with valid credentials

  Given I am on the login page

  When I fill in USERID with "<admin>" in USERID field

  And I fill in PASSWORD with "<admin>" in PASSWORD field

  And I press Login Button

  Then I should be on the Dashboard page with menu items list

  
     | USERID    | PASSWORD |
     | admin     | admin |
     | 123454    | P@ssw0rd |

  