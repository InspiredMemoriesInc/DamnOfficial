

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
    "%(sentDate)s by %(user)s": "%(sentDate)s, bek\u00fcld\u0151: %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "A cikk egy \u00fajabb verzi\u00f3ja lett k\u00f6zz\u00e9t\u00e9ve, mi\u00f3ta ez a piszkozat ment\u00e9sre ker\u00fclt. Helyre\u00e1ll\u00edthatja a piszkozatot a tartalom megtekint\u00e9s\u00e9hez, de nem fogja tudni k\u00f6zz\u00e9tenni.", 
    "Article Title Lookup / Link Text": "Cikkc\u00edm-keres\u00e9s / hivatkoz\u00e1ssz\u00f6veg", 
    "Aspect ratio": "M\u00e9retar\u00e1ny", 
    "Attachments": "Mell\u00e9kletek", 
    "Autosave enabled.": "Automatikus ment\u00e9s enged\u00e9lyezve.", 
    "CSS": "CSS", 
    "Changes saved.": "M\u00f3dos\u00edt\u00e1sok mentve.", 
    "Close": "Bez\u00e1r\u00e1s", 
    "Close notification": "\u00c9rtes\u00edt\u00e9s bez\u00e1r\u00e1sa", 
    "Close submenu": "Almen\u00fc bez\u00e1r\u00e1sa", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Hasonl\u00edtsa \u00f6ssze ezt a d\u00e1tumot a leg\u00fajabb \u00e9rt\u00e9kel\u00e9s d\u00e1tum\u00e1val, hogy meggy\u0151z\u0151dj\u00f6n arr\u00f3l, hogy nem \u00edr fel\u00fcl k\u00e9s\u0151bbi v\u00e1ltoztat\u00e1sokat.", 
    "Create a Redirect": "\u00c1tir\u00e1ny\u00edt\u00e1s l\u00e9trehoz\u00e1sa", 
    "Default": "Alap\u00e9rtelmezett", 
    "Details": "R\u00e9szletek", 
    "Discard draft.": "Piszkozat elvet\u00e9se.", 
    "Document": "Dokumentum", 
    "Draft autosaved:": "Piszkozat automatikusan mentve:", 
    "Draft discarded.": "Piszkozat elvetve.", 
    "Draft discarded:": "Piszkozat elvetve:", 
    "Draft published:": "Piszkozat k\u00f6zz\u00e9t\u00e9ve:", 
    "Draft restored.": "Piszkozat helyre\u00e1ll\u00edtva.", 
    "Edit Page": "Oldal szerkeszt\u00e9se", 
    "Embed YouTube Video": "YouTube vide\u00f3 be\u00e1gyaz\u00e1sa", 
    "Error loading content, please refresh the page": "Hiba a tartalom bet\u00f6lt\u00e9sekor, friss\u00edtse az oldalt", 
    "Error submitting as %(type)s": "Hiba a beny\u00fajt\u00e1skor mint %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "V\u00e1rjon! Sz\u0171r\u0151k friss\u00edt\u00e9se\u2026", 
    "History": "El\u0151zm\u00e9nyek", 
    "Insert Code Sample Template": "Mintak\u00f3d sablon besz\u00far\u00e1sa", 
    "Insert Code Sample iFrame": "P\u00e9ldak\u00f3d iFrame beilleszt\u00e9se", 
    "JavaScript": "JavaScript", 
    "Launch": "Ind\u00edt\u00e1s", 
    "Locate a YouTube Video": "YouTube vide\u00f3 keres\u00e9se", 
    "MDN Redirect": "MDN \u00e1tir\u00e1ny\u00edt\u00e1s", 
    "More about the beta.": "Tov\u00e1bbi inform\u00e1ci\u00f3k a b\u00e9ta verzi\u00f3r\u00f3l.", 
    "Never": "Soha", 
    "New compatibility tables are in beta ": "\u00daj kompatibilit\u00e1si t\u00e1bl\u00e1zatok a b\u00e9ta verzi\u00f3ban ", 
    "New interest...": "\u00daj \u00e9rdekl\u0151d\u00e9si k\u00f6r\u2026", 
    "New tag...": "\u00daj c\u00edmke\u2026", 
    "No": "Nem", 
    "No Highlight": "Nincs kiemel\u00e9s", 
    "No attachments available": "Nem \u00e9rhet\u0151 el mell\u00e9klet", 
    "No selection": "Nincs kiv\u00e1lasztva", 
    "Open": "Megnyit\u00e1s", 
    "Open implementation notes": "Megval\u00f3s\u00edt\u00e1si megjegyz\u00e9sek megnyit\u00e1sa", 
    "Open in %(site)s": "Megnyit\u00e1s itt: %(site)s", 
    "Paste YouTube Video URL": "YouTube vide\u00f3 URL beilleszt\u00e9se", 
    "Published version": "K\u00f6zz\u00e9tett verzi\u00f3", 
    "Publishing changes\u2026": "M\u00f3dos\u00edt\u00e1sok k\u00f6zz\u00e9t\u00e9tele\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "K\u00f6zz\u00e9t\u00e9tel sikertelen. M\u00e1solja \u00e9s illessze be egy biztons\u00e1gos helyre a m\u00f3dos\u00edt\u00e1sait, \u00e9s pr\u00f3b\u00e1lja \u00fajra elk\u00fcldeni az \u0171rlapot a \u201eK\u00f6zz\u00e9t\u00e9tel\u201d gombbal.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "K\u00f6zz\u00e9t\u00e9tel sikertelen. Jelenleg nincs bejelentkezve. Jelentkezzen be egy \u00faj lapon, \u00e9s pr\u00f3b\u00e1lja meg \u00fajra k\u00f6zz\u00e9tenni.", 
    "Report an error.": "Hiba bejelent\u00e9se.", 
    "Reported. Thanks!": "Bejelentve. K\u00f6sz\u00f6nj\u00fck!", 
    "Restore draft.": "Piszkozat helyre\u00e1ll\u00edt\u00e1sa.", 
    "Result": "Eredm\u00e9ny", 
    "Return to compatibility table.": "Visszat\u00e9r\u00e9s a kompatibilit\u00e1si t\u00e1bl\u00e1zathoz.", 
    "Revert": "Vissza\u00e1ll\u00edt\u00e1s", 
    "Revision history.": "Verzi\u00f3t\u00f6rt\u00e9net.", 
    "Sample CSS Content": "Minta CSS tartalom", 
    "Sample Finder": "Mintakeres\u0151", 
    "Sample HTML Content": "Minta HTML tartalom", 
    "Sample JavaScript Content": "Minta JavaScript tartalom", 
    "Search Stack Overflow": "Keres\u00e9s a Stack Overflow oldalon", 
    "Sections in Document": "Dokumentum szakaszai", 
    "Select a section": "Szakasz kijel\u00f6l\u00e9se", 
    "Select an attachment": "Mell\u00e9klet kiv\u00e1laszt\u00e1sa", 
    "Selected: ": "Kiv\u00e1lasztva: ", 
    "Show old table.": "R\u00e9gi t\u00e1bl\u00e1zat megjelen\u00edt\u00e9se.", 
    "Submitted as %(submissionType)s": "Bek\u00fcldve mint %(submissionType)s", 
    "Submitting...": "Bek\u00fcld\u00e9s\u2026", 
    "Syntax Highlighter": "Szintaxis kiemel\u0151", 
    "Take the survey": "K\u00e9rd\u0151\u00edv kit\u00ed\u00f6lt\u00e9se", 
    "The URL you've entered doesn't appear to be valid": "A megadott URL val\u00f3sz\u00edn\u0171leg \u00e9rv\u00e9nytelen", 
    "URL": "URL", 
    "Updated filters.": "Sz\u0171r\u0151k friss\u00edtve.", 
    "View Page": "Oldal megtekint\u00e9se", 
    "View draft.": "Piszkozat megtekint\u00e9se.", 
    "Viewing old draft. This draft cannot be published.": "R\u00e9gi piszkozat megtekint\u00e9se. Ez a piszkozat nem tehet\u0151 k\u00f6zz\u00e9.", 
    "What should the sample title be?": "Mi legyen a minta c\u00edme?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Megv\u00e1laszolna nek\u00fcnk 4 k\u00e9rd\u00e9st? <a %(url)s>Nyissa meg a k\u00e9rd\u0151\u00edvet egy \u00faj lapon</a>, \u00e9s t\u00f6ltse ki, ha v\u00e9gzett az oldalon. K\u00f6sz\u00f6nj\u00fck!", 
    "Yes": "Igen", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Ezt az oldalt jelenleg %(localeName)s nyelven n\u00e9zi. Mindig ezen a nyelven akarja ezt az oldalt megtekinteni: %(localeName)s?", 
    "You have a draft from: %(time)s.": "L\u00e9tezik egy piszkozata ekkorr\u00f3l: %(time)s.", 
    "You must input a valid YouTube video URL.": "\u00c9rv\u00e9nyes YouTube vide\u00f3 URL-t kell megadnia.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "B\u00f6ng\u00e9sz\u0151je nem t\u00e1mogatja a MathML-t. Egy CSS tartal\u00e9kmegold\u00e1s lett haszn\u00e1lva helyette.", 
    "an unknown date": "ismeretlen d\u00e1tum"
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
    "DATETIME_FORMAT": "Y. F j. G.i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y.%m.%d. %H.%M.%S", 
      "%Y.%m.%d. %H.%M.%S.%f", 
      "%Y.%m.%d. %H.%M", 
      "%Y.%m.%d.", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "Y. F j.", 
    "DATE_INPUT_FORMATS": [
      "%Y.%m.%d.", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "F j.", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y.m.d. G.i", 
    "SHORT_DATE_FORMAT": "Y.m.d.", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "G.i", 
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S", 
      "%H.%M", 
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "Y. F"
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

