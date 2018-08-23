

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u0646\u064f\u0634\u0631\u062a \u0646\u0633\u062e\u0629 \u0623\u062d\u062f\u062b \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0645\u0646\u0630 \u062d\u0641\u0638 \u0647\u0630\u0647 \u0627\u0644\u0645\u0633\u0648\u062f\u0629. \u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u0633\u0648\u062f\u0629 \u0648\u0639\u0631\u0636 \u0645\u062d\u062a\u0648\u0627\u0647\u0627\u060c \u0648\u0644\u0643\u0646 \u0644\u0646 \u062a\u0633\u062a\u0637\u064a\u0639 \u0625\u0631\u0633\u0627\u0644\u0647\u0627 \u0644\u0646\u0634\u0631\u0647\u0627.", 
    "Aspect ratio": "\u0627\u0644\u0646\u0633\u0628\u0629 \u0627\u0644\u0628\u0627\u0639\u064a\u0651\u0629", 
    "Attachments": "\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a", 
    "Changes saved.": "\u062d\u064f\u0641\u0638\u062a \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a.", 
    "Close notification": "\u0623\u063a\u0644\u0650\u0642 \u0627\u0644\u0625\u0634\u0639\u0627\u0631", 
    "Close submenu": "\u0623\u063a\u0644\u0650\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0641\u0631\u0639\u064a\u0629", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "\u0642\u0627\u0631\u0646 \u0647\u0630\u0627 \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0645\u0639 \u062a\u0627\u0631\u064a\u062e \u0623\u062d\u062f\u062b \u0645\u0631\u0627\u062c\u0639\u0629 \u0644\u062a\u062a\u0623\u0643\u0651\u062f \u0645\u0646 \u0639\u062f\u0645 \u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0623\u062d\u062f\u062b \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a.", 
    "Default": "\u0627\u0644\u0645\u0628\u062f\u0626\u064a", 
    "Discard draft.": "\u0623\u0647\u0645\u0650\u0644 \u0627\u0644\u0645\u0633\u0648\u062f\u0629.", 
    "Draft discarded.": "\u0623\u064f\u0647\u0645\u0644\u062a \u0627\u0644\u0645\u0633\u0648\u062f\u0629.", 
    "Draft discarded:": "\u0627\u0644\u0645\u0633\u0648\u062f\u0629 \u0627\u0644\u0645\u0647\u0645\u0644\u0629:", 
    "Draft published:": "\u0627\u0644\u0645\u0633\u0648\u062f\u0629 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629:", 
    "Draft restored.": "\u0627\u0633\u062a\u064f\u0639\u064a\u062f\u062a \u0627\u0644\u0645\u0633\u0648\u062f\u0629.", 
    "Edit Page": "\u062d\u0631\u0651\u0631 \u0627\u0644\u0635\u0641\u062d\u0629", 
    "Embed YouTube Video": "\u0636\u0645\u0651\u0646 \u06a4\u062f\u064a\u0648 \u064a\u0648\u062a\u064a\u0648\u0628", 
    "Hang on! Updating filters\u2026": "\u0627\u0646\u062a\u0638\u0631 \u0641\u0627\u0644\u0645\u0631\u0634\u0651\u062d\u0627\u062a \u062a\u064f\u062d\u062f\u0651\u062b\u2026", 
    "History": "\u0627\u0644\u062a\u0623\u0631\u064a\u062e", 
    "JavaScript": "\u062c\u0627\u0641\u0627\u0633\u0643\u0631\u0650\u0628\u062a", 
    "Launch": "\u0623\u0637\u0644\u0650\u0642", 
    "Never": "\u0623\u0628\u062f\u064b\u0627", 
    "New tag...": "\u0648\u0633\u0645 \u062c\u062f\u064a\u062f\u2026", 
    "No": "\u0644\u0627", 
    "No attachments available": "\u0644\u0627 \u0645\u0631\u0641\u0642\u0627\u062a \u0645\u062a\u0648\u0641\u0631\u0629", 
    "Open in %(site)s": "\u0627\u0641\u062a\u062d \u0641\u064a %(site)s", 
    "Paste YouTube Video URL": "\u0623\u0644\u0635\u0650\u0642 \u0645\u0633\u0627\u0631 \u06a4\u062f\u064a\u0648 \u064a\u0648\u062a\u064a\u0648\u0628", 
    "Published version": "\u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629", 
    "Publishing changes\u2026": "\u064a\u0646\u0634\u0631 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "\u0641\u0634\u0644 \u0627\u0644\u0646\u0634\u0631. \u0631\u062c\u0627\u0621\u064b \u0627\u0646\u0633\u062e \u0648\u0623\u0644\u0635\u0650\u0642 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0641\u064a \u0645\u0643\u0627\u0646 \u0622\u0645\u0646 \u0648\u062d\u0627\u0648\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0645\u0627\u0631\u0629 \u0645\u0633\u062a\u062e\u062f\u0645\u0627 \u0632\u0631 \u201d\u0627\u0646\u0634\u0631\u201c.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u0641\u0634\u0644 \u0627\u0644\u0646\u0634\u0631. \u0644\u0633\u062a \u0648\u0627\u0644\u062c\u064b\u0627. \u0631\u062c\u0627\u0621\u064b \u0627\u0633\u062a\u062e\u062f\u0645 \u0644\u0633\u0627\u0646\u0627 \u0622\u062e\u0631 \u0644\u0644\u0648\u0644\u0648\u062c \u0648\u062d\u0627\u0648\u0644 \u0627\u0644\u0646\u0634\u0631 \u062b\u0627\u0646\u064a\u0629\u064b.", 
    "Report an error.": "\u0623\u0628\u0644\u0650\u063a \u0639\u0646 \u062e\u0637\u0623.", 
    "Reported. Thanks!": "\u0648\u0635\u0644 \u0627\u0644\u0625\u0628\u0644\u0627\u063a. \u0634\u0643\u0631\u0627 \u0644\u0643.", 
    "Restore draft.": "\u0627\u0633\u062a\u0639\u062f \u0627\u0644\u0645\u0633\u0648\u062f\u0629.", 
    "Revert": "\u0623\u0631\u062c\u0650\u0639", 
    "Revision history.": "\u062a\u0623\u0631\u064a\u062e \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0627\u062a.", 
    "Search Stack Overflow": "\u0627\u0628\u062d\u062b \u0641\u064a Stack Overflow", 
    "Sections in Document": "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u0646\u062f", 
    "Select a section": "\u0627\u062e\u062a\u0631 \u0642\u0633\u0645\u064b\u0627", 
    "Select an attachment": "\u0627\u062e\u062a\u0631 \u0645\u0631\u0641\u0642\u064b\u0627", 
    "Show old table.": "\u0627\u0639\u0631\u0636 \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0642\u062f\u064a\u0645.", 
    "Submitting...": "\u064a\u064f\u0631\u0633\u0644\u2026", 
    "The URL you've entered doesn't appear to be valid": "\u0644\u0627 \u064a\u0628\u062f\u0648 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0630\u064a \u0623\u062f\u062e\u0644\u062a\u0647 \u0635\u0627\u0644\u062d\u064b\u0627", 
    "Updated filters.": "\u062d\u064f\u062f\u0651\u062b\u062a \u0627\u0644\u0645\u0631\u0634\u0651\u062d\u0627\u062a.", 
    "View Page": "\u0627\u0639\u0631\u0636 \u0627\u0644\u0635\u0641\u062d\u0629", 
    "View draft.": "\u0627\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u0648\u062f\u0629.", 
    "Viewing old draft. This draft cannot be published.": "\u064a\u0639\u0631\u0636 \u0645\u0633\u0648\u062f\u0629 \u0642\u062f\u064a\u0645\u0629. \u0644\u0627 \u064a\u0645\u0643\u0646 \u0646\u0634\u0631 \u0647\u0630\u0647 \u0627\u0644\u0645\u0633\u0648\u062f\u0629.", 
    "What should the sample title be?": "\u0623\u064a \u0639\u0646\u0648\u0627\u0646 \u062a\u0631\u064a\u062f \u0644\u0644\u0639\u064a\u0651\u0646\u0629\u061f", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "\u0647\u0644\u0651\u0627 \u0623\u062e\u0630\u0646\u0627 \u0645\u0646 \u0648\u0642\u062a\u0643 \u0642\u0644\u064a\u0644\u0627 \u0644\u0625\u062c\u0627\u0628\u0629 \u0664 \u0623\u0633\u0626\u0644\u0629\u061f <a %(url)s>\u0627\u0641\u062a\u062d \u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u0641\u064a \u0644\u0633\u0627\u0646 \u062c\u062f\u064a\u062f</a> \u0648\u0627\u0645\u0644\u0623\u0647 \u0645\u0627 \u0625\u0646 \u062a\u0646\u062a\u0647\u064a \u0645\u0646 \u0639\u0645\u0644\u0643 \u0641\u064a \u0627\u0644\u0645\u0648\u0642\u0639. \u0634\u0643\u0631\u0627 \u0644\u0643.", 
    "Yes": "\u0646\u0639\u0645", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "\u062a\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0622\u0646 \u0628\u0627\u0644\u0644\u063a\u0629 %(localeName)s. \u0623\u062a\u0631\u064a\u062f \u0639\u0631\u0636 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0644\u063a\u0629 %(localeName)s \u062f\u0627\u0626\u0645\u0627\u061f", 
    "You have a draft from: %(time)s.": "\u0644\u062f\u064a\u0643 \u0645\u0633\u0648\u062f\u0629 \u0645\u0646: %(time)s.", 
    "You must input a valid YouTube video URL.": "\u0639\u0644\u064a\u0643 \u0625\u062f\u062e\u0627\u0644 \u0645\u0633\u0627\u0631 \u06a4\u062f\u064a\u0648 \u064a\u0648\u062a\u064a\u0648\u0628 \u0635\u0627\u0644\u062d.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u0644\u0627 \u064a\u062f\u0639\u0645 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062a\u0642\u0646\u064a\u0629 MathML. \u0627\u0633\u062a\u064f\u062e\u062f\u0645 CSS \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0637 \u0628\u062f\u0644\u0647\u0627.", 
    "an unknown date": "\u062a\u0627\u0631\u064a\u062e \u0645\u062c\u0647\u0648\u0644"
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
    "DATE_FORMAT": "j F\u060c Y", 
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
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "d\u200f/m\u200f/Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "g:i A", 
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

