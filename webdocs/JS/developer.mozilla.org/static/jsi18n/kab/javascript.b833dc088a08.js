

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n > 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(sentDate)s s\u0263ur %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Lqem aneggaru n umagrad yeffe\u0263-d seg usekles arewway. Tzemre\u1e0d ad terre\u1e0d arewway-agi akken ad twali\u1e0d agbur acukan ur tettizmire\u1e0d ara ad t-id-suff\u0263e\u1e0d.", 
    "Article Title Lookup / Link Text": "Anadi n imagraden s uzwel/a\u1e0dris n use\u0263wen", 
    "Aspect ratio": "Ameskar n tel\u0263a", 
    "Attachments": "Imeddayen", 
    "Autosave enabled.": "Asekles awurman yettwarmed.", 
    "CSS": "CSS", 
    "Changes saved.": "Isnifal ttwakelsen.", 
    "Close": "Mdel", 
    "Close notification": "Mdel al\u0263u", 
    "Close submenu": "Mdel umu\u0263 asnawan", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Semzazal azemz-agi akked uzemz n use\u0263ti aneggaru iwakken ad tes\u025bu\u1e0d ttbut belli ur te\u1e5bki\u1e0de\u1e0d ara ibeddilen ineggura.", 
    "Create a Redirect": "Rnu awelleh", 
    "Default": "Amezwer", 
    "Details": "Talqayt", 
    "Discard draft.": "Kkes arewway.", 
    "Document": "Isemli", 
    "Draft autosaved:": "Arewway yettwasekles s wudem awurman:", 
    "Draft discarded.": "Arewway yettwakkes.", 
    "Draft discarded:": "Arewway yettwakkes:", 
    "Draft published:": "Arewway yeffe\u0263-d:", 
    "Draft restored.": "Arewway yu\u0263al-d.", 
    "Edit Page": "\u1e92reg asebter", 
    "Embed YouTube Video": "Tavudyut YouTube tusli\u0263t", 
    "Error loading content, please refresh the page": "Tucc\u1e0da deg usali n ugbur, ma ulac a\u0263ilif smiren asebter-agi", 
    "Error submitting as %(type)s": "Tucc\u1e0da n tuzna am %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u1e5a\u01e7u cwi\u1e6d! Imzizdigen ad ttwalqamen\u2026", 
    "History": "Amazray", 
    "Insert Code Sample Template": "Ger Tane\u0263ruft d amedya n tengalt", 
    "Insert Code Sample iFrame": "Ger iFrame d amedya n tengalt", 
    "JavaScript": "JavaScript", 
    "Launch": "Senker", 
    "Locate a YouTube Video": "Af-d adig n tvidyut YouTube", 
    "MDN Redirect": "Awelleh MDN", 
    "More about the beta.": "Ugar \u0263ef beta.", 
    "Never": "Wer\u01e7in", 
    "New compatibility tables are in beta ": "Tifelwiyin timaynutin n um\u1e63ada llant s lqem beta ", 
    "New interest...": "Amaynut n wayen t\u1e25emle\u1e0d...", 
    "New tag...": "Tabzimt tamaynut...", 
    "No": "Ala", 
    "No Highlight": "Ulac aseb\u1e5bu\u1e5beq", 
    "No attachments available": "Ulac amedday", 
    "No selection": "Ulac afran", 
    "Open": "Ldi", 
    "Open implementation notes": "Ldi-d tizmilin n bennu", 
    "Open in %(site)s": "Ldi di %(site)s", 
    "Paste YouTube Video URL": "Sen\u1e6de\u1e0d URL n tvidyut YouTube", 
    "Published version": "Lqem i d-yeff\u0263en", 
    "Publishing changes\u2026": "Asuffe\u0263 n usnifel...", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Asuffe\u0263 ur yeddi ara. Ma ulac a\u0263ilif n\u0263el sakin sen\u1e6de\u1e0d asnifel inek \u0263er wadig a\u0263elsan sakin \u025bre\u1e0d tuzna n tferkit s useqdec n tqeffalt 'Suffe\u0263-d'.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Asuffe\u0263 ur yeddi ara. Ur tekcimed ara akka tura. MA ulac a\u0263ilif seqdec iccer amaynut akken ad tkecme\u1e0d sakin \u025bre\u1e0d tikelt nni\u1e0den.", 
    "Report an error.": "Azen tucc\u1e0da.", 
    "Reported. Thanks!": "Yettwazen. Tanemmirt!", 
    "Restore draft.": "Err-d rewway.", 
    "Result": "Agmu\u1e0d", 
    "Return to compatibility table.": "U\u0263al \u0263er tfelwit n um\u1e63ada.", 
    "Revert": "U\u0263al", 
    "Revision history.": "Amazray n ucegger.", 
    "Sample CSS Content": "Agbur CSS a\u1e25erfi", 
    "Sample Finder": "Anaram n imedyaten", 
    "Sample HTML Content": "Amedya n ugbur HTML", 
    "Sample JavaScript Content": "Agbur JavaScript a\u1e25erfi", 
    "Search Stack Overflow": "Nadi di Stack Overflow", 
    "Sections in Document": "Tigezmiyin deg isemli", 
    "Select a section": "Fren tigezmi", 
    "Select an attachment": "Fren amedday", 
    "Selected: ": "Yettwafren:\u00a0", 
    "Show old table.": "Sken tafelwit taqbu\u1e5bt.", 
    "Submitted as %(submissionType)s": "Yettwazen am %(submissionType)s", 
    "Submitting...": "Tuzna...", 
    "Syntax Highlighter": "Aseb\u1e5bu\u1e5beq n tseddast", 
    "Take the survey": "Err i u\u1e25edqis", 
    "The URL you've entered doesn't appear to be valid": "Tansa URL ikecmen tettban ma\u010d\u010di d tame\u0263tut", 
    "URL": "URL", 
    "Updated filters.": "Imzizdigen yettwaleqmen.", 
    "View Page": "Sken asebter", 
    "View draft.": "Sken arewway.", 
    "Viewing old draft. This draft cannot be published.": "Askan n urewway aqbur. Arewway-agi ur yezmir ara ad d-yeffe\u0263..", 
    "What should the sample title be?": "Amek yessefk ad yili uzwel n umedya agi?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Tzemre\u1e0d ad terre\u1e0d i 4 n yisteqsiyen akken ad \u0263-d-mudde\u1e0d afus? <a %(url)s>Ldi a\u1e25edqis deg iccer amaynut</a> sakin \u010d\u010dar-it ar tagara n tirza-ik \u0263ef usmel. Tanemmirt-ik si tazwara!", 
    "Yes": "Ih", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Tettwali\u1e0d asmel-agi deg %(localeName)s. Teb\u03b3i\u1e0d ad twali\u1e0d asmel-ai deg %(localeName)s ?", 
    "You have a draft from: %(time)s.": "\u0194ur-k arewway seg: %(time)s.", 
    "You must input a valid YouTube video URL.": "Yessefk ad d-mudde\u1e0d tansa URL tame\u0263tut i tvidyut YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Iminig inek ur isefrak ara MathML. Agbur n usemselsi s CSS yettwaseqdec.", 
    "an unknown date": "azemz arussin"
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
    "DATETIME_FORMAT": "N j, Y, P", 
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
    "DATE_FORMAT": "N j, Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "m/d/Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
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

