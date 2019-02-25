var activeLanguaje = jQuery('html').attr('lang');
var calcLanguaje = {
    'en-GB' : {
        // H3 titel tag text
        calcTitle           : 'How long should you run your A/B Test?',
        // Item 1 text
        q1                  : 'Estimated existing conversion rate (%)',
        // Item 2 text
        q2                  : 'Minimum improvement in conversion rate you want to detect (%)',
        // Item 3 text
        q3                  : 'Number of variations/combinations (including control)',
        // Item 4 text
        q4                  : 'Average number of daily visitors',
        // Item 5 text
        q5                  : 'Percent visitors included in test?',
        // Text accompanying the test result
        resultMessage       : 'Total number of days to run the test: ',
        // Button text
        calcBtn             : 'Calculate Test Duration',
        // Day singular
        day                 : ' day',
        // Day plural
        days                : ' days',
        // Less than a day
        lesthanaday         : 'Less than a day.',
        // Validation text for empty field
        conversionEmpty     : 'Please enter your expected conversion rate.<br />',
        // Validation text for field with invalid data
        conversionError     : 'Please enter a valid number for the conversion rate.<br />',
        // Validation text for empty field
        versionEmpty        : 'Please enter the number of combinations you have.',
        // Validation text for field with invalid data
        versionError        : 'Please enter a valid number for the combinations you have.<br />',
        // Validation text for empty field
        resolutionEmpty     : 'Please enter desired change in conversion rate.<br />',
        // Validation text for field with invalid datad
        resolutionError     : 'Please enter a valid value for desired change in conversion rate.<br />',
        // Validation text for empty field
        percentEmpty        : 'Please enter the percentage of visitors to include in the test.<br />',
        // Validation text for field with invalid datad
        percentError        : 'Please enter a valid number for percentage of visitors to include in the test.<br />',
        // Validation text for empty field
        visitorError        : 'Please enter the average number of visitors on the test page.<br />',
        // Validation text for field with invalid datad
        visitorEmpty        : 'Please enter a valid number for the average number of visitors on the test page.<br />'
    },
    'de-DE' : {
        calcTitle           : 'Wie lange sollten Sie Ihren A/B-Test durchführen?',
        q1                  : 'Geschätzte bestehende Konversionsrate (%)',
        q2                  : 'Minimale Verbesserung der Konversionsrate, die Sie erkennen möchten (%)',
        q3                  : 'Anzahl der Variationen/Kombinationen (einschließlich Steuerung)',
        q4                  : 'Durchschnittliche Anzahl der täglichen Besucher',
        q5                  : 'Prozent der Besucher im Test enthalten?',
        resultMessage       : 'Gesamtzahl der Tage, an denen der Test durchgeführt wurde: ',
        calcBtn             : 'Berechnen der Testdauer',
        day                 : ' Tag',
        days                : ' Tage',
        lesthanaday         : 'Weniger als ein Tag.',
        conversionEmpty     : 'Bitte geben Sie Ihre erwartete Konversionsrate ein.<br />',
        conversionError     : 'Bitte geben Sie eine gültige Zahl für den Konversionskurs ein.<br />',
        versionEmpty        : 'Bitte gib die Anzahl der Kombinationen ein, die du hast.<br />',
        versionError        : 'Bitte geben Sie eine gültige Nummer für die von Ihnen verwendeten Kombinationen ein.<br />',
        resolutionEmpty     : 'Bitte geben Sie die gewünschte Änderung der Konversionsrate ein.<br />',
        resolutionError     : 'Bitte geben Sie einen gültigen Wert für die gewünschte Änderung der Konversionsrate ein.<br />',
        percentEmpty        : 'Bitte geben Sie den Prozentsatz der Besucher ein, die in den Test einbezogen werden sollen.<br />',
        percentError        : 'Bitte geben Sie eine gültige Zahl für den Prozentsatz der Besucher ein, die in den Test einbezogen werden sollen.<br />',
        visitorError        : 'Bitte geben Sie auf der Testseite die durchschnittliche Besucherzahl ein.<br />',
        visitorEmpty        : 'Bitte geben Sie auf der Testseite eine gültige Zahl für die durchschnittliche Besucherzahl ein.<br />'
    },
    'es-ES' : {
        calcTitle           : '¿Cuánto tiempo debe durar la prueba A/B?',
        q1                  : 'Tasa de conversión actual estimada (%)',
        q2                  : 'Mínima mejora en la tasa de conversión que desea detectar (%)',
        q3                  : 'Número de variaciones/combinaciones (incluido el control)',
        q4                  : 'Número medio de visitantes diarios',
        q5                  : 'Porcentaje de visitantes incluidos en la prueba?',
        resultMessage       : 'Número total de días para realizar la prueba: ',
        calcBtn             : 'Calcular la duración de la prueba',
        day                 : ' dia',
        days                : ' dias',
        lesthanaday         : 'Menos de un día.',
        conversionEmpty     : 'Por favor, introduzca su tasa de conversión esperada.<br />',
        conversionError     : 'Por favor, introduzca un número válido para la tasa de conversión.<br />',
        versionEmpty        : 'Por favor, introduzca el número de combinaciones que tiene.<br />',
        versionError        : 'Por favor, introduzca un número válido para las combinaciones que tenga.<br />',
        resolutionEmpty     : 'Por favor, introduzca el cambio deseado en la tasa de conversión.<br />',
        resolutionError     : 'Por favor, introduzca un valor válido para el cambio deseado en la tasa de conversión.<br />',
        percentEmpty        : 'Por favor, introduzca el porcentaje de visitantes que desea incluir en la prueba.<br />',
        percentError        : 'Por favor, introduzca un número válido para el porcentaje de visitantes a incluir en la prueba.<br />',
        visitorError        : 'Por favor, introduzca el número medio de visitantes en la página de prueba.<br />',
        visitorEmpty        : 'Por favor, introduzca un número válido para el número medio de visitantes en la página de prueba.<br />'
    },
    'default' : {
        calcTitle           : 'How long should you run your A/B Test?',
        q1                  : 'Estimated existing conversion rate (%)',
        q2                  : 'Minimum improvement in conversion rate you want to detect (%)',
        q3                  : 'Number of variations/combinations (including control)',
        q4                  : 'Average number of daily visitors',
        q5                  : 'Percent visitors included in test?',
        resultMessage       : 'Total number of days to run the test: ',
        calcBtn             : 'Calculate Test Duration',
        day                 : ' day',
        days                : ' days',
        lesthanaday         : 'Less than a day.',
        conversionEmpty     : 'Please enter your expected conversion rate.<br />',
        conversionError     : 'Please enter a valid number for the conversion rate.<br />',
        versionEmpty        : 'Please enter the number of combinations you have.',
        versionError        : 'Please enter a valid number for the combinations you have.<br />',
        resolutionEmpty     : 'Please enter desired change in conversion rate.<br />',
        resolutionError     : 'Please enter a valid value for desired change in conversion rate.<br />',
        percentEmpty        : 'Please enter the percentage of visitors to include in the test.<br />',
        percentError        : 'Please enter a valid number for percentage of visitors to include in the test.<br />',
        visitorError        : 'Please enter the average number of visitors on the test page.<br />',
        visitorEmpty        : 'Please enter a valid number for the average number of visitors on the test page.<br />'
    },
};

var message = calcLanguaje[activeLanguaje];

jQuery(document).ready( function(){

    if ( null == message ){
        message = calcLanguaje['default'];
    }
    /* HACER LAS TRADUCCIONES DEL TEMPLATE */
    jQuery('#calcTitle').text(message.calcTitle);
    jQuery('#q1').text(message.q1);
    jQuery('#q2').text(message.q2);
    jQuery('#q3').text(message.q3);
    jQuery('#q4').text(message.q4);
    jQuery('#q5').text(message.q5);
    jQuery('#resultMessage').text(message.resultMessage);
    jQuery('#calcBtn').text(message.calcBtn);
})
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
