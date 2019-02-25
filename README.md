# A/B Testing Calculator

Calculator that lets you know how long an **A/B testing campaign** could last, according to some input parameters. 

It is multilanguage, comes translated for English, Spanish and German. Its default language is English, you can add more languages.

The valid format allowed by the script to detect the language is: en-EN [(IETF language tag)](https://en.wikipedia.org/wiki/IETF_language_tag)

It is dependent on the [jQuery 3.3.1 Slim version](https://code.jquery.com/jquery-3.3.1.slim.min.js) library. Layout with [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/).

**Note:** _Makes some validations, only allows numerical data types._

## HTML Markup

```html
<section class="section">
    <h3 id="calcTitle"></h3>
    <p id="q1"></p>
    <input type="text"id="conversions" value="30"> <span>%</span>
    <p id="q2"></p>
    <input type="text" id="resolution" value="20"> <span>%</span>
    <p id="q3"></p>
    <input type="text" id="versions" value="6">
    <p id="q4"></p>
    <input type="text" id="visitor" value="200">
    <p id="q5"></p>
    <input type="text" id="percent" value="100"> <span>%</span>
    <p><span id="resultMessage"></span> <span id="result"></span></p>
    <p id="error_message_placeholder"></p>
    <button id="calcBtn" onclick="durationCalculator()"></button>
</section>
```

## HTML Bootstrap 3.3.7 Markup

```html
<section class="section">
    <div class="container wrap">
        <div class="row center-lg">
            <div class="col-lg-10">
                <h3 id="calcTitle" class="section-l2-title mb-50 text-dark ta-c"></h3>
                <div class="row center-lg">
                    <div class="col-lg-12">
                        <div class="border">
                            <div class="row">
                                <div class="col-lg-8 col-sm-8 col-md-8">
                                    <p id="q1"></p>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-md-4">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="conversions" value="30">
                                        <div class="input-group-addon">%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 col-sm-8 col-md-8">
                                    <p id="q2" ></p>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-md-4">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="resolution" value="20">
                                        <div class="input-group-addon">%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 col-sm-8 col-md-8">
                                    <p id="q3"></p>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-md-4">
                                    <input type="text" class="form-control" id="versions" value="6">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 col-sm-8 col-md-8">
                                    <p id="q4"></p>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-md-4">
                                    <input type="text" class="form-control" id="visitor" value="200">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 col-sm-8 col-md-8">
                                    <p id="q5"></p>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-md-4">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="percent" value="100">
                                        <div class="input-group-addon">%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <p><span id="resultMessage"></span> <span id="result" class="color-blue"></span></p>
                        <p id="error_message_placeholder"></p>
                        <button id="calcBtn" class="btn btn-primary" onclick="durationCalculator()"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Scripts

It's a pretty simple script. The main function does the validations first and then displays an error message or the test result, as the case may be.

When the document is ready, we verify which language is declared in the ```lang=""``` property of the ```<html>``` tag, in order to use the corresponding language.

### Initializations and Declarations

```javascript
// GET LANG PROPERTY 
var activeLanguaje = jQuery('html').attr('lang');

//CREATE JSON OBJECT FOR LANGUAGES
var calcLanguaje = {
    'en-GB' : {
        calcTitle           : 'How long should you run your A/B Test?', // H3 title tag text
        q1                  : 'Estimated existing conversion rate (%)', // Item 1 text
        q2                  : 'Minimum improvement in conversion rate you want to detect (%)', // Item 2 text
        q3                  : 'Number of variations/combinations (including control)', // Item 3 text
        q4                  : 'Average number of daily visitors', // Item 4 text
        q5                  : 'Percent visitors included in test?', // Item 5 text
        resultMessage       : 'Total number of days to run the test: ', // Text accompanying the test result
        calcBtn             : 'Calculate Test Duration', // Button text
        day                 : ' day', // Day singular
        days                : ' days', // Day plural
        lesthanaday         : 'Less than a day.', // Less than a day
        conversionEmpty     : 'Please enter your expected conversion rate.<br />', // Validation text for empty field
        conversionError     : 'Please enter a valid number for the conversion rate.<br />', // Validation text for field with invalid data
        versionEmpty        : 'Please enter the number of combinations you have.', // Validation text for empty field
        versionError        : 'Please enter a valid number for the combinations you have.<br />', // Validation text for field with invalid data
        resolutionEmpty     : 'Please enter desired change in conversion rate.<br />', // Validation text for empty field
        resolutionError     : 'Please enter a valid value for desired change in conversion rate.<br />', // Validation text for field with invalid data
        percentEmpty        : 'Please enter the percentage of visitors to include in the test.<br />', // Validation text for empty field
        percentError        : 'Please enter a valid number for percentage of visitors to include in the test.<br />', // Validation text for field with invalid datad
        visitorError        : 'Please enter the average number of visitors on the test page.<br />', // Validation text for empty field
        visitorEmpty        : 'Please enter a valid number for the average number of visitors on the test page.<br />' // Validation text for field with invalid datad
    },
    // ... more languages here as JSON format
};
// SETUP THE SELECTED LANGUAGE
var message = calcLanguaje[activeLanguaje];
```

### Calculator Function

```javascript
function durationCalculator() {
    console.log(message.lesthanaday, message.day, message.days)
    var errors = "";
    if (jQuery("#conversions").val() == "")
        errors += message.conversionEmpty;
    else if (
            isNaN(jQuery("#conversions").val()) || 
            jQuery("#conversions").val() > 100 || 
            jQuery("#conversions").val() <= 0)
                errors += message.conversionError;
    if (jQuery("#versions").val() == "")
        errors += message.versionEmpty;
    else if (
            isNaN(jQuery("#versions").val()) || 
            jQuery("#versions").val() <= 0)
                errors += message.versionError;
    if (jQuery("#resolution").val() == "")
        errors += message.resolutionEmpty;
    else if (
            isNaN(jQuery("#resolution").val()) || 
            jQuery("#resolution").val() > 100 || 
            jQuery("#resolution").val() <= 0)
                errors += message.resolutionError;
    if (jQuery("#percent").val() == "")
        errors += message.percentEmpty;
    else if (
            isNaN(jQuery("#percent").val()) || 
            jQuery("#percent").val() <= 0 || 
            jQuery("#percent").val() > 100)
                errors += message.percentError;
    if (jQuery("#visitor").val() == "")
        errors += message.visitorError;
    else if (
            isNaN(jQuery("#visitor").val()) || 
            jQuery("#visitor").val() <= 0)
                errors += message.visitorEmpty;
    if (errors.length > 0) {
        jQuery('#error_message_placeholder').html(errors)
        return false;
    } else {
        jQuery('#error_message_placeholder').html('')
        var mean_size;
        var std_dev;
        var power = 0.8416;
        var significance = 1.6449;
        mean_size = jQuery("#conversions").val() / 100;
        std_dev = Math.sqrt(mean_size * (1 - mean_size));
        var effect_size = mean_size * jQuery("#resolution").val() / 100.0;
        var number_of_variations = parseFloat(jQuery("#versions").val());
        var percent = parseFloat(jQuery("#percent").val()) / 100;
        var per_day_visit = parseInt(jQuery("#visitor").val()) * percent;
        var per_variation_result = Math.pow((4) * (std_dev / effect_size), 2);
        var result = per_variation_result * (number_of_variations);
        result = Math.round(Math.round(result, 0) / per_day_visit);
        if (result == 0)
            jQuery("#result").html( message.lesthanaday );
        else
            jQuery("#result").html(result + (result > 1 ? message.days : message.day));
        console.log(result)
    }
    jQuery('.duration-calc-result').addClass('duration-calc-result--show');
};
```

### Ready Function

```javascript
jQuery(document).ready( function(){
    
    if ( null == message ){
        message = calcLanguaje['default'];
    }   

    jQuery('#calcTitle').text(message.calcTitle);
    jQuery('#q1').text(message.q1);
    jQuery('#q2').text(message.q2);
    jQuery('#q3').text(message.q3);
    jQuery('#q4').text(message.q4);
    jQuery('#q5').text(message.q5);
    jQuery('#resultMessage').text(message.resultMessage);
    jQuery('#calcBtn').text(message.calcBtn);
})
```
