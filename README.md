# part 1
These Scenarios are best viewable in the following feature files

highlights.feature

results.feature

    Feature: Homepage functionality
    In order to consider making bets on upcoming sporting events
    as a sportsbook user
    I want to be able to see the odds of upcoming events

    Background: Background name
        Given I am on the homepage

    Scenario: Invalid users cannot login
        Given I open the login menu
        When I login with an invalid account
        Then I should see a message stating the login attempt was unsuccessful

    Scenario: Exanding the navigation menu
        When I click the expanded navigation button
        Then I should see navigation menu with additonal sport options

    Scenario: Today's Football link in popular links
        When I click on "Today's Football" in popular links
        Then I am on the "soccer" page
        And I can see the results for today

    Scenario Outline: Popular sports links
        When I click on "<sportslink>" in popular links
        Then I am on the "<sports>" page
        Examples:
            | sportslink  | sports            |
            | UK Football | soccer            |
            | NFL         | american_football |

    Scenario: View more popular bets
        Given The view more expander is present
        When I click View more expander
        Then the amount of bets present should increase by the stated number

    Scenario: Navigate to promotions
        When I click "promotions" on the sub navigation menu
        Then I am on the "promotions" page

    Scenario: Navigate to today's results
        When I click "results" on the sub navigation menu
        Then I am on the "results" page
        And the radio button for today is selected

    Scenario: Changing the type of Odds
        Given I am viewing the fractional odd type
        When I change my odd type to "Decimal"
        Then the odds on the page now show as decimal

    Scenario: Viewing the upcoming football results
    When I scroll down to the football section
    Then I can see the upcoming Football events
------------------------------------------------------------------------------------

    Feature: Results functionality
    In order to see the results of recent and upcoming events
    as a sportsbook user
    I want to be to navigate resent and upcoming events for different sports

    Background: Navigate to results page
        Given I am on the homepage
        And I click "results" on the sub navigation menu


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

------------------------------------------------------------------------------------

# Part 2
Please run the following commands to run the tests

npm install

npm run test

# thanks
