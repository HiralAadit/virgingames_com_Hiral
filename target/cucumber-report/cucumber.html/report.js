$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Home.feature");
formatter.feature({
  "line": 2,
  "name": "Check functionality on home Page",
  "description": "As user I want to click virgin games website",
  "id": "check-functionality-on-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.before({
  "duration": 4068754800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to website page successfully",
  "description": "",
  "id": "check-functionality-on-home-page;user-should-navigate-to-website-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on accept",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 99795800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAccept()"
});
formatter.result({
  "duration": 112173600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 48386800,
  "status": "passed"
});
formatter.after({
  "duration": 661105700,
  "status": "passed"
});
formatter.before({
  "duration": 2122725600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Scenario: User should navigate to website page successfully",
  "description": "",
  "id": "check-functionality-on-home-page;scenario:-user-should-navigate-to-website-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on accept",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the welcome message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAccept()"
});
formatter.result({
  "duration": 94971700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeTheWelcomeMessage()"
});
formatter.result({
  "duration": 57203000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 25711700,
  "status": "passed"
});
formatter.after({
  "duration": 638457700,
  "status": "passed"
});
});