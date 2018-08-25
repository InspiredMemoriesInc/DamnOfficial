

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(sentDate)s av %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "En nyare version av den h\u00e4r artikeln har publicerats sedan det h\u00e4r utkastet sparades. Du kan \u00e5terst\u00e4lla utkastet f\u00f6r att visa inneh\u00e5llet, men du kommer inte att kunna skicka in det f\u00f6r publicering.", 
    "Article Title Lookup / Link Text": "S\u00f6k artikeltitel / l\u00e4nka text", 
    "Aspect ratio": "Bildf\u00f6rh\u00e5llande", 
    "Attachments": "Bilagor", 
    "Autosave enabled.": "Spara automatiskt aktiverad.", 
    "CSS": "CSS", 
    "Changes saved.": "\u00c4ndringarna har sparats.", 
    "Close": "St\u00e4ng", 
    "Close notification": "St\u00e4ng avisering", 
    "Close submenu": "St\u00e4ng undermeny", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "J\u00e4mf\u00f6r det h\u00e4r datumet till det senaste revisionsdatumet s\u00e5 att du inte skriver \u00f6ver senare \u00e4ndringar.", 
    "Create a Redirect": "Skapa en omdirigering", 
    "Default": "Standard", 
    "Details": "Detaljer", 
    "Discard draft.": "Kasta utkast.", 
    "Document": "Dokument", 
    "Draft autosaved:": "Utkast sparad automatiskt:", 
    "Draft discarded.": "Utkast kastat.", 
    "Draft discarded:": "Utkast kastad:", 
    "Draft published:": "Utkast publicerad:", 
    "Draft restored.": "Utkast \u00e5terst\u00e4llt.", 
    "Edit Page": "Redigera sida", 
    "Embed YouTube Video": "Inb\u00e4ddad YouTube-video", 
    "Error loading content, please refresh the page": "Fel vid inl\u00e4sning av inneh\u00e5ll, uppdatera sidan", 
    "Error submitting as %(type)s": "Fel att skicka in som en %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "H\u00e4ng kvar! Uppdaterar filter\u2026", 
    "History": "Historik", 
    "Insert Code Sample Template": "Infoga kodexempelmall", 
    "Insert Code Sample iFrame": "Infoga kodexempel iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "Starta", 
    "Locate a YouTube Video": "Hitta en YouTube-video", 
    "MDN Redirect": "MDN omdirigera", 
    "More about the beta.": "Mer om beta.", 
    "Never": "Aldrig", 
    "New compatibility tables are in beta ": "Nya kompatibilitetstabeller \u00e4r i beta ", 
    "New interest...": "Nytt intresse...", 
    "New tag...": "Ny tagg...", 
    "No": "Nej", 
    "No Highlight": "Ingen markering", 
    "No attachments available": "Inga bilagor tillg\u00e4ngliga", 
    "No selection": "Ingen markerad", 
    "Open": "\u00d6ppna", 
    "Open implementation notes": "\u00d6ppna implementeringsanteckningar", 
    "Open in %(site)s": "\u00d6ppna i %(site)s", 
    "Paste YouTube Video URL": "Klistra in YouTube-video URL", 
    "Published version": "Publicerad version", 
    "Publishing changes\u2026": "Publicerar \u00e4ndringar\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Publicering misslyckades. V\u00e4nligen kopiera och klistra in dina \u00e4ndringar p\u00e5 en s\u00e4ker plats och f\u00f6rs\u00f6k att skicka in formul\u00e4ret med knappen \"Publicera\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Det gick inte att publicera. Du \u00e4r inte inloggad. Anv\u00e4nd en ny flik f\u00f6r att logga in och f\u00f6rs\u00f6k publicera igen.", 
    "Report an error.": "Rapportera ett fel.", 
    "Reported. Thanks!": "Rapporterat. Tack!", 
    "Restore draft.": "\u00c5terst\u00e4ll utkast.", 
    "Result": "Resultat", 
    "Return to compatibility table.": "Tillbaka till kompatibilitetstabell.", 
    "Revert": "\u00c5terst\u00e4ll", 
    "Revision history.": "Versionshistorik.", 
    "Sample CSS Content": "Exempel CSS-inneh\u00e5ll", 
    "Sample Finder": "S\u00f6k exempel", 
    "Sample HTML Content": "Exempel HTML-inneh\u00e5ll", 
    "Sample JavaScript Content": "Exempel Javascript-inneh\u00e5ll", 
    "Search Stack Overflow": "S\u00f6k Stack Overflow", 
    "Sections in Document": "Avsnitt i dokumentet", 
    "Select a section": "V\u00e4lj ett avsnitt", 
    "Select an attachment": "V\u00e4lj en bilaga", 
    "Selected: ": "Markerade: ", 
    "Show old table.": "Visa gammal tabell.", 
    "Submitted as %(submissionType)s": "Inskickad som en %(submissionType)s", 
    "Submitting...": "Skickar in...", 
    "Syntax Highlighter": "Syntaxmarkering", 
    "Take the survey": "G\u00f6r unders\u00f6kningen", 
    "The URL you've entered doesn't appear to be valid": "Den URL som du har angett verkar inte vara giltig", 
    "URL": "URL", 
    "Updated filters.": "Uppdaterade filter.", 
    "View Page": "Visa sida", 
    "View draft.": "Visa utkast.", 
    "Viewing old draft. This draft cannot be published.": "Visar gammalt utkast. Detta utkast kan inte publiceras.", 
    "What should the sample title be?": "Vad ska titeln vara p\u00e5 exemplet?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Vill du svara p\u00e5 4 fr\u00e5gor? <a %(url)s>\u00d6ppna unders\u00f6kningen i en ny flik</a> och fyll i den n\u00e4r du \u00e4r klar p\u00e5 webbplatsen. Tack!", 
    "Yes": "Ja", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Du visar denna webbplatsen p\u00e5 %(localeName)s. Vill du alltid se den h\u00e4r sidan p\u00e5 %(localeName)s?", 
    "You have a draft from: %(time)s.": "Du har ett utkast fr\u00e5n: %(time)s.", 
    "You must input a valid YouTube video URL.": "Du m\u00e5ste ange en giltig YouTube-video URL.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Din webbl\u00e4sare st\u00f6der inte MathML. En CSS fallback har anv\u00e4nts i st\u00e4llet.", 
    "an unknown date": "ett ok\u00e4nt datum"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y-m-d H:i", 
    "SHORT_DATE_FORMAT": "Y-m-d", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

