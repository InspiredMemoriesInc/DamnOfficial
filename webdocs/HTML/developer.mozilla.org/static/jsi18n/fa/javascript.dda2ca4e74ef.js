

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u06cc\u06a9 \u0646\u0633\u062e\u0647 \u062c\u062f\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0646 \u0645\u0642\u0627\u0644\u0647 \u0627\u0632 \u0632\u0645\u0627\u0646 \u0630\u062e\u06cc\u0631\u0647 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0622\u0646 \u0645\u0646\u062a\u0634\u0631 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0631\u0627 \u0628\u0627\u0632\u0622\u0648\u0631\u06cc \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0645\u062d\u062a\u0648\u06cc\u0627\u062a \u0622\u0646 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f\u060c \u0627\u0645\u0627 \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0622\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u0634\u0627\u0631 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f.", 
    "Article Title Lookup / Link Text": "\u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0639\u0646\u0648\u0627\u0646 \u0645\u0642\u0627\u0644\u0647 / \u0645\u062a\u0646 \u067e\u06cc\u0648\u0646\u062f", 
    "Aspect ratio": "\u0646\u0633\u0628\u062a \u0639\u0631\u0636 \u0628\u0647 \u0627\u0631\u062a\u0641\u0627\u0639", 
    "Attachments": "\u067e\u06cc\u0648\u0633\u062a\u200c\u0647\u0627", 
    "Autosave enabled.": "\u0630\u062e\u06cc\u0631\u0647 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0641\u0639\u0627\u0644 \u0634\u062f.", 
    "CSS": "CSS", 
    "Changes saved.": "\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.", 
    "Close notification": "\u0628\u0633\u062a\u0646 \u0627\u0639\u0644\u0627\u0646", 
    "Close submenu": "\u0628\u0633\u062a\u0646 \u0645\u0646\u0648\u06cc \u0641\u0631\u0639\u06cc", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "\u0627\u06cc\u0646 \u062a\u0627\u0631\u06cc\u062e \u0631\u0627 \u0628\u0627 \u062a\u0627\u0631\u06cc\u062e \u0622\u062e\u0631\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0642\u0627\u06cc\u0633\u0647 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f \u06a9\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0628\u0639\u062f\u06cc \u0631\u0627 \u0631\u0648\u0646\u0648\u06cc\u0633\u06cc \u0646\u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f.", 
    "Create a Redirect": "\u0627\u06cc\u062c\u0627\u062f \u06cc\u06a9 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0633\u06cc\u0631", 
    "Default": "\u067e\u06cc\u0634 \u0641\u0631\u0636", 
    "Details": "\u062c\u0632\u0626\u06cc\u0627\u062a", 
    "Discard draft.": "\u062d\u0630\u0641 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633.", 
    "Document": "\u0633\u0646\u062f", 
    "Draft autosaved:": "\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f:", 
    "Draft discarded.": "\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u062d\u0630\u0641 \u0634\u062f.", 
    "Draft discarded:": "\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u062d\u0630\u0641 \u0634\u062f:", 
    "Draft published:": "\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0645\u0646\u062a\u0634\u0631 \u0634\u062f:", 
    "Draft restored.": "\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0628\u0627\u0632\u0622\u0648\u0631\u06cc \u0634\u062f.", 
    "Edit Page": "\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0635\u0641\u062d\u0647", 
    "Embed YouTube Video": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0648\u06cc\u062f\u0626\u0648 YouTube", 
    "Error submitting as %(type)s": "\u062e\u0637\u0627 \u062f\u0631 \u0647\u0646\u06af\u0627\u0645 \u062b\u0628\u062a \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f! \u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0641\u06cc\u0644\u062a\u0631\u0647\u0627\u2026", 
    "History": "\u062a\u0627\u0631\u06cc\u062e\u0686\u0647", 
    "Insert Code Sample Template": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0642\u0627\u0644\u0628 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f", 
    "Insert Code Sample iFrame": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 iFrame \u0646\u0645\u0648\u0646\u0647 \u06a9\u064f\u062f", 
    "JavaScript": "\u062c\u0627\u0648\u0627 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a", 
    "Launch": "\u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc", 
    "Locate a YouTube Video": "\u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0648\u06cc\u062f\u0626\u0648 YouTube", 
    "MDN Redirect": "\u062a\u063a\u06cc\u06cc\u0631 \u0645\u0633\u06cc\u0631 MDN", 
    "New interest...": "\u0639\u0644\u0627\u0642\u0647 \u062c\u062f\u06cc\u062f\u2026", 
    "New tag...": "\u062a\u06af \u062c\u062f\u06cc\u062f\u2026", 
    "No Highlight": "\u0628\u062f\u0648\u0646 \u0628\u0631\u062c\u0633\u062a\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u062f", 
    "No attachments available": "\u0647\u06cc\u0686 \u0636\u0645\u06cc\u0645\u0647\u200c\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0646\u06cc\u0633\u062a", 
    "No selection": "\u0647\u06cc\u0686 \u0686\u06cc\u0632\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0634\u062f\u0647", 
    "Open in %(site)s": "\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u062f\u0631 %(site)s", 
    "Paste YouTube Video URL": "\u062c\u0627\u06cc\u200c\u06af\u0630\u0627\u0631\u06cc \u0622\u062f\u0631\u0633 \u0648\u06cc\u062f\u0626\u0648 YouTube", 
    "Published version": "\u0646\u0633\u062e\u0647 \u0645\u0646\u062a\u0634\u0631 \u0634\u062f\u0647", 
    "Publishing changes\u2026": "\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062a\u0634\u0627\u0631 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "\u0627\u0646\u062a\u0634\u0627\u0631 \u0634\u06a9\u0633\u062a \u062e\u0648\u0631\u062f. \u0644\u0637\u0641\u0627\u064b \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u06cc\u06a9 \u0645\u062d\u0644 \u0627\u0645\u0646 \u0631\u0648\u0646\u0648\u0634\u062a \u0648 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u0641\u064f\u0631\u0645 \u0631\u0627 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u062f\u06a9\u0645\u0647 \u00ab\u0627\u0646\u062a\u0634\u0627\u0631\u00bb \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u0627\u0646\u062a\u0634\u0627\u0631 \u0634\u06a9\u0633\u062a \u062e\u0648\u0631\u062f. \u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u0648\u0627\u0631\u062f \u0633\u06cc\u0633\u062a\u0645 \u0646\u0634\u062f\u0647\u200c\u0627\u06cc\u062f. \u0644\u0637\u0641\u0627\u064b \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u062f\u0631 \u06cc\u06a9 \u0632\u0628\u0627\u0646\u0647 \u062f\u06cc\u06af\u0631 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f \u0648 \u0645\u062c\u062f\u062f\u0627 \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u0634\u0627\u0631 \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.", 
    "Restore draft.": "\u0628\u0627\u0632\u0622\u0648\u0631\u06cc \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633", 
    "Result": "\u0646\u062a\u06cc\u062c\u0647", 
    "Revert": "\u0628\u0631\u06af\u0634\u062a", 
    "Revision history.": "\u062a\u0627\u0631\u06cc\u062e\u0686\u0647\u0654 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a.", 
    "Sample CSS Content": "\u0646\u0645\u0648\u0646\u0647\u0654 \u0645\u062d\u062a\u0648\u0627\u06cc CSS", 
    "Sample Finder": "\u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0646\u0645\u0648\u0646\u0647", 
    "Sample HTML Content": "\u0646\u0645\u0648\u0646\u0647\u0654 \u0645\u062d\u062a\u0648\u0627\u06cc HTML", 
    "Sample JavaScript Content": "\u0646\u0645\u0648\u0646\u0647\u0654 \u0645\u062d\u062a\u0648\u0627\u06cc \u062c\u0627\u0648\u0627 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a", 
    "Search Stack Overflow": "\u062c\u0633\u062a\u200c\u0648\u062c\u0648 \u062f\u0631 Stack Overflow", 
    "Sections in Document": "\u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0633\u0646\u062f", 
    "Select a section": "\u0627\u0646\u062a\u062e\u0627\u0628 \u06cc\u06a9 \u0642\u0633\u0645\u062a", 
    "Select an attachment": "\u0627\u0646\u062a\u062e\u0627\u0628 \u06cc\u06a9 \u067e\u0631\u0648\u0646\u062f\u0647\u0654 \u0636\u0645\u06cc\u0645\u0647", 
    "Selected: ": "\u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647: ", 
    "Submitting...": "\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026", 
    "Syntax Highlighter": "\u0628\u0631\u062c\u0633\u062a\u0647 \u06a9\u0646\u0646\u062f\u0647 \u06a9\u062f", 
    "The URL you've entered doesn't appear to be valid": "\u0622\u062f\u0631\u0633\u06cc \u06a9\u0647 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f \u0628\u0647 \u0646\u0638\u0631 \u0635\u062d\u06cc\u062d \u0646\u06cc\u0633\u062a", 
    "URL": "\u0622\u062f\u0631\u0633 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc", 
    "Updated filters.": "\u0641\u06cc\u0644\u062a\u0631\u0647\u0627 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0634\u062f.", 
    "View Page": "\u062f\u06cc\u062f\u0646 \u0635\u0641\u062d\u0647", 
    "View draft.": "\u0646\u0645\u0627\u06cc\u0634 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633.", 
    "Viewing old draft. This draft cannot be published.": "\u0646\u0645\u0627\u06cc\u0634 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0642\u062f\u06cc\u0645\u06cc. \u0627\u06cc\u0646 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0631\u0627 \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0645\u0646\u062a\u0634\u0631 \u06a9\u0646\u06cc\u062f.", 
    "What should the sample title be?": "\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u0646\u0647 \u0686\u06cc \u0628\u0627\u06cc\u062f \u0628\u0627\u0634\u062f\u061f", 
    "You have a draft from: %(time)s.": "\u0634\u0645\u0627 \u06cc\u06a9 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u062f\u0627\u0631\u06cc\u062f \u0627\u0632: %(time)s.", 
    "You must input a valid YouTube video URL.": "\u0634\u0645\u0627 \u0628\u0627\u06cc\u062f \u06cc\u06a9 \u0622\u062f\u0631\u0633 \u0645\u0639\u062a\u0628\u0631 \u0627\u0632 \u0648\u06cc\u062f\u0626\u0648 YouTube \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u0645\u0631\u0648\u0631\u06af\u0631 \u0634\u0645\u0627 \u0627\u0632 MathML \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc\u200c\u06a9\u0646\u062f. \u06cc\u06a9 \u0631\u0648\u0634 \u06cc\u062f\u06a9\u06cc \u0627\u0632 \u0637\u0631\u06cc\u0642 CSS \u0628\u062c\u0627\u06cc \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.", 
    "an unknown date": "\u062a\u0627\u0631\u06cc\u062e \u0646\u0627\u0645\u0634\u062e\u0635"
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
    "DATETIME_FORMAT": "j F Y\u060c \u0633\u0627\u0639\u062a G:i", 
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
    "FIRST_DAY_OF_WEEK": "6", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "Y/n/j\u060c\u200f G:i", 
    "SHORT_DATE_FORMAT": "Y/n/j", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "G:i", 
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

