@Home
Feature: Check functionality on home Page
  As user I want to click virgin games website


  Scenario: User should navigate to website page successfully
    Given I am on homepage
    When I click on accept
    Then I should navigate to login page successfully



  Scenario: Scenario: User should navigate to website page successfully
    Given I am on homepage
    When I click on accept
    And I should see the welcome message
    Then I should navigate to login page successfully
