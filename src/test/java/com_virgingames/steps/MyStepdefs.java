package com_virgingames.steps;

import com_virgingames.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {System.out.println("");
    }

    @When("^I click on accept$")
    public void iClickOnAccept() { new HomePage().enteracceptcookies();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() { new HomePage().verifywelcomeText();
    }

    @And("^I should see the welcome message$")
    public void iShouldSeeTheWelcomeMessage() {
        String expectedMessage = "Welcome to Virgin Games";
        String actualMessage = new HomePage().verifywelcomeText();
        Assert.assertEquals("Message is not visible",expectedMessage, actualMessage);
    }
}
