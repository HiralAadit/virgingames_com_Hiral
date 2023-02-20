package com_virgingames.pages;


import com_virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

import static com_virgingames.browserfactory.ManageBrowser.driver;

public class HomePage extends Utility {  //dialog_button
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//label[@for='privacy_pref_optin']")
    WebElement acceptcookies;

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Welcome to Virgin Games']")
    WebElement welcomeText;

    public void enteracceptcookies() {
        log.info("Clicling on accept cookies"+ acceptcookies.getText());
        clickOnElement(acceptcookies);
    }
    public String verifywelcomeText(){
        String message1=getTextFromElement(welcomeText);
        log.info("Geetting message :"+ welcomeText.getText());
        return getTextFromElement(welcomeText);
    }
}
