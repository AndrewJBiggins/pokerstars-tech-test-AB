Feature: Results functionality
    In order to se the results of recent and upcoming events
    as a sportsbook user
    I want to be to navigate resent and upcoming events for different sports

  Background: Navigate to results page
    Given I am on the homepage
    And I click "results" on the sub navigation menu

  @ignore
  Scenario Outline: select results by date
    When I use the date picker to select "<day>", "<month>" and "<year>"
    Then I am on the results page for that "<day>", "<month>" and "<year>"
    Examples:
      | day  | month     | year |
      | 2022 | September | 13   |

  Scenario Outline: select results by category
    When I select "<category>" in the sports drop down menu
    Then I am on the results page for "<sport>"
    Examples:
      | category | sport   |
      | Tennis   | tennis  |
      | Snooker  | snooker |

