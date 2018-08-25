

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
    "%(sentDate)s by %(user)s": "%(sentDate)s \u043e\u0442 %(user)s", 
    "Aspect ratio": "\u0421\u044a\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435", 
    "Attachments": "\u041f\u0440\u0438\u043a\u0430\u0447\u0435\u043d\u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u0435", 
    "Autosave enabled.": "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0438\u044f\u0442 \u0437\u0430\u043f\u0438\u0441 \u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d.", 
    "CSS": "CSS", 
    "Changes saved.": "\u041f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0441\u0430 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u0438.", 
    "Close": "\u0417\u0430\u0442\u0432\u0430\u0440\u044f\u043d\u0435", 
    "Close notification": "\u0417\u0430\u0442\u0432\u0430\u0440\u044f\u043d\u0435 \u043d\u0430 \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u0442\u043e", 
    "Close submenu": "\u0417\u0430\u0442\u0432\u0430\u0440\u044f\u043d\u0435 \u043d\u0430 \u043f\u043e\u0434\u043c\u0435\u043d\u044e", 
    "Create a Redirect": "\u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043d\u0435", 
    "Default": "\u041f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435", 
    "Details": "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438", 
    "Discard draft.": "\u041e\u0442\u0445\u0432\u044a\u0440\u043b\u044f\u043d\u0435 \u043d\u0430 \u0447\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430.", 
    "Document": "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442", 
    "Draft autosaved:": "\u0427\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430 \u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e:", 
    "Draft discarded.": "\u0427\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430 \u0435 \u043e\u0442\u0445\u0432\u044a\u0440\u043b\u0435\u043d\u0430.", 
    "Draft discarded:": "\u0427\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430 \u0435 \u043e\u0442\u0445\u0432\u044a\u0440\u043b\u0435\u043d\u0430:", 
    "Draft published:": "\u0427\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430 \u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0430:", 
    "Draft restored.": "\u0427\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430 \u0435 \u0432\u044a\u0437\u0441\u0442\u0430\u043d\u043e\u0432\u0435\u043d\u0430.", 
    "Edit Page": "\u041f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0442\u0430", 
    "Embed YouTube Video": "\u0412\u043c\u044a\u043a\u0432\u0430\u043d\u0435 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u043e\u0442 YouTube", 
    "Error submitting as %(type)s": "\u0413\u0440\u0435\u0448\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435 \u043a\u0430\u0442\u043e %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u041f\u043e\u0447\u0430\u043a\u0430\u0439\u0442\u0435! \u0424\u0438\u043b\u0442\u0440\u0438\u0442\u0435 \u0441\u0435 \u043e\u0431\u043d\u043e\u0432\u044f\u0432\u0430\u0442\u2026", 
    "History": "\u0418\u0441\u0442\u043e\u0440\u0438\u044f", 
    "Insert Code Sample Template": "\u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0437\u0435\u0446 \u0437\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u043a\u043e\u0434", 
    "Insert Code Sample iFrame": "\u0412\u043c\u044a\u043a\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u043a\u043e\u0434 \u0437\u0430 iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "\u041f\u0443\u0441\u043a\u0430\u043d\u0435", 
    "Locate a YouTube Video": "\u041d\u0430\u043c\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u0432 YouTube", 
    "MDN Redirect": "\u041f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043d\u0435 \u043e\u0442 MDN", 
    "More about the beta.": "\u041f\u043e\u0432\u0435\u0447\u0435 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u0431\u0435\u0442\u0430-\u0432\u0435\u0440\u0441\u0438\u044f\u0442\u0430.", 
    "Never": "\u041d\u0438\u043a\u043e\u0433\u0430", 
    "New compatibility tables are in beta ": "\u041d\u043e\u0432\u0438\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0438 \u0437\u0430 \u0441\u044a\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0442\u0430 \u0441\u0430 \u0432 \u0431\u0435\u0442\u0430-\u0432\u0435\u0440\u0441\u0438\u044f ", 
    "New interest...": "\u041d\u043e\u0432 \u0438\u043d\u0442\u0435\u0440\u0435\u0441...", 
    "New tag...": "\u041d\u043e\u0432 \u0435\u0442\u0438\u043a\u0435\u0442\u2026", 
    "No": "\u041d\u0435", 
    "No Highlight": "\u0411\u0435\u0437 \u043e\u0442\u043a\u0440\u043e\u044f\u0432\u0430\u043d\u0435", 
    "No attachments available": "\u041d\u044f\u043c\u0430 \u043f\u0440\u0438\u043a\u0430\u0447\u0435\u043d\u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u0435", 
    "No selection": "\u0411\u0435\u0437 \u0438\u0437\u0431\u043e\u0440", 
    "Open": "\u041e\u0442\u0432\u0430\u0440\u044f\u043d\u0435", 
    "Open implementation notes": "\u041e\u0442\u0432\u0430\u0440\u044f\u043d\u0435 \u0431\u0435\u043b\u0435\u0436\u043a\u0438\u0442\u0435 \u043f\u043e \u043e\u0441\u044a\u0449\u0435\u0441\u0442\u0432\u044f\u0432\u0430\u043d\u0435\u0442\u043e", 
    "Open in %(site)s": "\u041e\u0442\u0432\u0430\u0440\u044f\u043d\u0435 \u0432 %(site)s", 
    "Paste YouTube Video URL": "\u041f\u043e\u0441\u0442\u0430\u0432\u0435\u0442\u0435 URL \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u043e\u0442 YouTube", 
    "Published version": "\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0430 \u0432\u0435\u0440\u0441\u0438\u044f", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0435\u0442\u043e \u043f\u0440\u043e\u043f\u0430\u0434\u043d\u0430. \u0412 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0435 \u0441\u0442\u0435 \u0432\u043b\u0435\u0437\u043b\u0438. \u041c\u043e\u043b\u044f \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u0442\u0435 \u043d\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b, \u0437\u0430 \u0434\u0430 \u0432\u043b\u0435\u0437\u0435\u0442\u0435 \u0438 \u0441\u0435 \u043e\u043f\u0438\u0442\u0430\u0439\u0442\u0435 \u0434\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e.", 
    "Report an error.": "\u0421\u044a\u043e\u0431\u0449\u0430\u0432\u0430\u043d\u0435 \u0437\u0430 \u0433\u0440\u0435\u0448\u043a\u0430.", 
    "Reported. Thanks!": "\u0414\u043e\u043a\u043b\u0430\u0434\u0432\u0430\u043d\u043e. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c!", 
    "Restore draft.": "\u0412\u044a\u0437\u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u0447\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430.", 
    "Result": "\u0420\u0435\u0437\u0443\u043b\u0442\u0430\u0442", 
    "Return to compatibility table.": "\u0412\u0440\u044a\u0449\u0430\u043d\u0435 \u043a\u044a\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0442\u0430 \u0437\u0430 \u0441\u044a\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0442\u0430.", 
    "Revert": "\u0412\u0440\u044a\u0449\u0430\u043d\u0435", 
    "Sample CSS Content": "\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435 \u0432 CSS \u0444\u043e\u0440\u043c\u0430\u0442", 
    "Sample Finder": "\u0422\u044a\u0440\u0441\u0435\u043d\u0435 \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0438", 
    "Sample HTML Content": "\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435 \u043d\u0430 HTML", 
    "Sample JavaScript Content": "\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435 \u0432 JavaScript \u0444\u043e\u0440\u043c\u0430\u0442", 
    "Search Stack Overflow": "\u0422\u044a\u0440\u0441\u0435\u043d\u0435 \u0432 Stack Overflow", 
    "Sections in Document": "\u0420\u0430\u0437\u0434\u0435\u043b\u0438 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442", 
    "Select a section": "\u0418\u0437\u0431\u043e\u0440 \u043d\u0430 \u0440\u0430\u0437\u0434\u0435\u043b", 
    "Select an attachment": "\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u0438\u043a\u0430\u0447\u0435\u043d \u0444\u0430\u0439\u043b", 
    "Selected: ": "\u0418\u0437\u0431\u0440\u0430\u043d\u043e: ", 
    "Show old table.": "\u041f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 \u0441\u0442\u0430\u0440\u0430\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430.", 
    "Submitted as %(submissionType)s": "\u0418\u0437\u043f\u0440\u0430\u0442\u0435\u043d\u043e \u043a\u0430\u0442\u043e %(submissionType)s", 
    "Submitting...": "\u0418\u0437\u043f\u0440\u0430\u0449\u0430 \u0441\u0435...", 
    "Syntax Highlighter": "\u0421\u0438\u043d\u0442\u0430\u043a\u0442\u0438\u0447\u043d\u043e \u043e\u0442\u043a\u0440\u043e\u044f\u0432\u0430\u043d\u0435", 
    "Take the survey": "\u041f\u043e\u043f\u044a\u043b\u0432\u0430\u043d\u0435 \u043d\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u043d\u0438\u043a\u0430", 
    "The URL you've entered doesn't appear to be valid": "\u0412\u0440\u044a\u0437\u043a\u0430\u0442\u0430, \u043a\u043e\u044f\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0445\u0442\u0435 \u0438\u0437\u0433\u043b\u0435\u0436\u0434\u0430 \u043d\u0435 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430", 
    "URL": "URL", 
    "Updated filters.": "\u041e\u0431\u043d\u043e\u0432\u0435\u043d\u0438 \u0444\u0438\u043b\u0442\u0440\u0438.", 
    "View Page": "\u041f\u0440\u0435\u0433\u043b\u0435\u0434 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0442\u0430", 
    "View draft.": "\u041f\u0440\u0435\u0433\u043b\u0435\u0434 \u043d\u0430 \u0447\u0435\u0440\u043d\u043e\u0432\u0430\u0442\u0430.", 
    "What should the sample title be?": "\u041a\u0430\u043a\u0432\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e\u0442\u043e \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435?", 
    "Yes": "\u0414\u0430", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "\u0421\u0435\u0433\u0430 \u0432\u0438\u0436\u0434\u0430\u0442\u0435 \u0442\u043e\u0437\u0438 \u0441\u0430\u0439\u0442 \u043d\u0430 %(localeName)s. \u0418\u0441\u043a\u0430\u0442\u0435 \u043b\u0438 \u0432\u0438\u043d\u0430\u0433\u0438 \u0434\u0430 \u0433\u043e \u0432\u0438\u0436\u0434\u0430\u0442\u0435 \u043d\u0430 %(localeName)s?", 
    "You have a draft from: %(time)s.": "\u0418\u043c\u0430\u0442\u0435 \u0447\u0435\u0440\u043d\u043e\u0432\u0430 \u043e\u0442: %(time)s.", 
    "You must input a valid YouTube video URL.": "\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u0435\u043d \u0430\u0434\u0440\u0435\u0441 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u0432 YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u0412\u0430\u0448\u0438\u044f\u0442 \u0447\u0435\u0442\u0435\u0446 \u043d\u0435 \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 MathML. \u0412\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0432\u0430 \u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0441\u044a\u0441 CSS.", 
    "an unknown date": "\u043d\u0435\u0437\u043d\u0430\u0439\u043d\u0430 \u0434\u0430\u0442\u0430"
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
    "DATE_FORMAT": "d F Y", 
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
    "SHORT_DATE_FORMAT": "d.m.Y", 
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

