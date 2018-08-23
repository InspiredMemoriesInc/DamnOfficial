

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
    "%(sentDate)s by %(user)s": "op %(sentDate)s door %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Er is een nieuwere versie van dit artikel gepubliceerd nadat dit concept is opgeslagen. U kunt het concept terugzetten om de inhoud te zien, maar het niet indienen voor publicatie.", 
    "Article Title Lookup / Link Text": "Zoeken naar artikeltitel / koppelingstekst", 
    "Aspect ratio": "Hoogte-breedteverhouding", 
    "Attachments": "Bijlagen", 
    "Autosave enabled.": "Automatisch opslaan ingeschakeld.", 
    "CSS": "CSS", 
    "Changes saved.": "Wijzigingen opgeslagen.", 
    "Close": "Sluiten", 
    "Close notification": "Melding sluiten", 
    "Close submenu": "Submenu sluiten", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Vergelijk deze datum met de laatste revisie om zeker te zijn dat u geen latere wijzigingen overschrijft.", 
    "Create a Redirect": "Een omleiding maken", 
    "Default": "Standaard", 
    "Details": "Details", 
    "Discard draft.": "Concept verwijderen", 
    "Document": "Document", 
    "Draft autosaved:": "Concept automatisch opgeslagen:", 
    "Draft discarded.": "Concept verwijderd.", 
    "Draft discarded:": "Concept verwijderd:", 
    "Draft published:": "Concept gepubliceerd:", 
    "Draft restored.": "Concept teruggezet.", 
    "Edit Page": "Pagina bewerken", 
    "Embed YouTube Video": "YouTube-video inbedden", 
    "Error loading content, please refresh the page": "Fout bij laden van inhoud, vernieuw de pagina", 
    "Error submitting as %(type)s": "Fout bij indienen als %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Moment! Filters worden bijgewerkt\u2026", 
    "History": "Geschiedenis", 
    "Insert Code Sample Template": "Codevoorbeeldsjabloon invoegen", 
    "Insert Code Sample iFrame": "Codevoorbeeld-iFrame invoegen", 
    "JavaScript": "JavaScript", 
    "Launch": "Starten", 
    "Locate a YouTube Video": "Een YouTube-video zoeken", 
    "MDN Redirect": "MDN-omleiding", 
    "More about the beta.": "Meer over de b\u00e8ta.", 
    "Never": "Nooit", 
    "New compatibility tables are in beta ": "Nieuwe compatibiliteitstabellen zijn in b\u00e8ta ", 
    "New interest...": "Nieuwe interesse\u2026", 
    "New tag...": "Nieuw label\u2026", 
    "No": "Nee", 
    "No Highlight": "Geen markering", 
    "No attachments available": "Geen bijlagen beschikbaar", 
    "No selection": "Geen selectie", 
    "Open": "Openen", 
    "Open implementation notes": "Implementatieopmerkingen openen", 
    "Open in %(site)s": "Openen in %(site)s", 
    "Paste YouTube Video URL": "YouTube-video-URL plakken", 
    "Published version": "Gepubliceerde versie", 
    "Publishing changes\u2026": "Wijzigingen publiceren\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Publiceren is mislukt. Kopieer en plak uw wijzigingen naar een veilige plek en probeer het formulier in te dienen met behulp van de knop \u2018Publiceren\u2019.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Publiceren is mislukt. U bent momenteel niet aangemeld. Gebruik een nieuw tabblad om u aan te melden en probeer opnieuw te publiceren.", 
    "Report an error.": "Een fout melden", 
    "Reported. Thanks!": "Gemeld. Bedankt!", 
    "Restore draft.": "Concept terugzetten", 
    "Result": "Resultaat", 
    "Return to compatibility table.": "Terug naar compatibiliteitstabel", 
    "Revert": "Terugzetten", 
    "Revision history.": "Revisiegeschiedenis", 
    "Sample CSS Content": "Voorbeeld van CSS-inhoud", 
    "Sample Finder": "Voorbeeldzoeker", 
    "Sample HTML Content": "Voorbeeld van HTML-inhoud", 
    "Sample JavaScript Content": "Voorbeeld van JavaScript-inhoud", 
    "Search Stack Overflow": "Zoeken bij Stack Overflow", 
    "Sections in Document": "Secties in document", 
    "Select a section": "Selecteer een sectie", 
    "Select an attachment": "Selecteer een bijlage", 
    "Selected: ": "Geselecteerd: ", 
    "Show old table.": "Oude tabel tonen", 
    "Submitted as %(submissionType)s": "Ingediend als %(submissionType)s", 
    "Submitting...": "Indienen...", 
    "Syntax Highlighter": "Syntaxismarkeerder", 
    "Take the survey": "De enqu\u00eate starten", 
    "The URL you've entered doesn't appear to be valid": "De URL die u hebt ingevoerd lijkt niet geldig te zijn", 
    "URL": "URL", 
    "Updated filters.": "Filters zijn bijgewerkt.", 
    "View Page": "Pagina weergeven", 
    "View draft.": "Concept weergeven", 
    "Viewing old draft. This draft cannot be published.": "U bekijkt een oud concept. Dit concept kan niet worden gepubliceerd.", 
    "What should the sample title be?": "Wat zou de voorbeeldtitel moeten zijn?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Wilt u 4 vragen voor ons beantwoorden? <a %(url)s>Open de enqu\u00eate in een nieuw tabblad</a> en vul deze in wanneer u de website wilt verlaten. Bedankt!", 
    "Yes": "Ja", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "U bekijkt deze website nu in het %(localeName)s. Wilt u deze website altijd in het %(localeName)s bekijken?", 
    "You have a draft from: %(time)s.": "U hebt een concept van: %(time)s.", 
    "You must input a valid YouTube video URL.": "U moet een geldige YouTube-video-URL opgeven.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Uw browser ondersteunt geen MathML. Daarom is een CSS-terugvalversie gebruikt.", 
    "an unknown date": "een onbekende datum"
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
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%y %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S", 
      "%Y/%m/%d %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%y %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%Y/%m/%d %H:%M:%S.%f", 
      "%d-%m-%Y %H.%M:%S", 
      "%d-%m-%y %H.%M:%S", 
      "%d/%m/%Y %H.%M:%S", 
      "%d/%m/%y %H.%M:%S", 
      "%d-%m-%Y %H.%M:%S.%f", 
      "%d-%m-%y %H.%M:%S.%f", 
      "%d/%m/%Y %H.%M:%S.%f", 
      "%d/%m/%y %H.%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%y %H:%M", 
      "%Y-%m-%d %H:%M", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%y %H:%M", 
      "%Y/%m/%d %H:%M", 
      "%d-%m-%Y %H.%M", 
      "%d-%m-%y %H.%M", 
      "%d/%m/%Y %H.%M", 
      "%d/%m/%y %H.%M", 
      "%d-%m-%Y", 
      "%d-%m-%y", 
      "%Y-%m-%d", 
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y/%m/%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y", 
      "%d-%m-%y", 
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j-n-Y H:i", 
    "SHORT_DATE_FORMAT": "j-n-Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H.%M:%S", 
      "%H.%M:%S.%f", 
      "%H.%M", 
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

