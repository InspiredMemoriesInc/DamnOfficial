

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
    "Attachments": "\u0e44\u0e1f\u0e25\u0e4c\u0e41\u0e19\u0e1a", 
    "CSS": "CSS", 
    "Close": "\u0e1b\u0e34\u0e14", 
    "Close notification": "\u0e1b\u0e34\u0e14\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19", 
    "Close submenu": "\u0e1b\u0e34\u0e14\u0e40\u0e21\u0e19\u0e39\u0e22\u0e48\u0e2d\u0e22", 
    "Create a Redirect": "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07", 
    "Default": "\u0e04\u0e48\u0e32\u0e1b\u0e23\u0e34\u0e22\u0e32\u0e22", 
    "Details": "\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14", 
    "Document": "\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23", 
    "Edit Page": "\u0e41\u0e01\u0e49\u0e44\u0e02\u0e2b\u0e19\u0e49\u0e32", 
    "Embed YouTube Video": "\u0e1d\u0e31\u0e07\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d YouTube", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u0e23\u0e2d\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27! \u0e01\u0e33\u0e25\u0e31\u0e07\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15\u0e15\u0e31\u0e27\u0e01\u0e23\u0e2d\u0e07\u2026", 
    "History": "\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34", 
    "JavaScript": "JavaScript", 
    "Locate a YouTube Video": "\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d YouTube", 
    "MDN Redirect": "\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07 MDN", 
    "More about the beta.": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e1a\u0e15\u0e49\u0e32", 
    "Never": "\u0e44\u0e21\u0e48\u0e40\u0e25\u0e22", 
    "New tag...": "\u0e1b\u0e49\u0e32\u0e22\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e43\u0e2b\u0e21\u0e48...", 
    "No": "\u0e44\u0e21\u0e48", 
    "Open": "\u0e40\u0e1b\u0e34\u0e14", 
    "Open in %(site)s": "\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e19 %(site)s", 
    "Paste YouTube Video URL": "\u0e27\u0e32\u0e07 URL \u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d YouTube", 
    "Report an error.": "\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14", 
    "Reported. Thanks!": "\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27 \u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13!", 
    "Restore draft.": "\u0e01\u0e39\u0e49\u0e04\u0e37\u0e19\u0e41\u0e1a\u0e1a\u0e23\u0e48\u0e32\u0e07", 
    "Result": "\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c", 
    "Revert": "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e01\u0e25\u0e31\u0e1a", 
    "Sample CSS Content": "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 CSS", 
    "Sample HTML Content": "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 HTML", 
    "Sample JavaScript Content": "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 JavaScript", 
    "Search Stack Overflow": "\u0e04\u0e49\u0e19\u0e2b\u0e32 Stack Overflow", 
    "Select an attachment": "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1f\u0e25\u0e4c\u0e41\u0e19\u0e1a", 
    "Selected: ": "\u0e16\u0e39\u0e01\u0e40\u0e25\u0e37\u0e2d\u0e01: ", 
    "Show old table.": "\u0e41\u0e2a\u0e14\u0e07\u0e15\u0e32\u0e23\u0e32\u0e07\u0e40\u0e01\u0e48\u0e32", 
    "Submitting...": "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...", 
    "Take the survey": "\u0e17\u0e33\u0e41\u0e1a\u0e1a\u0e2a\u0e33\u0e23\u0e27\u0e08", 
    "The URL you've entered doesn't appear to be valid": "URL \u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e1b\u0e49\u0e2d\u0e19\u0e14\u0e39\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e08\u0e30\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07", 
    "URL": "URL", 
    "Updated filters.": "\u0e15\u0e31\u0e27\u0e01\u0e23\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15", 
    "View Page": "\u0e14\u0e39\u0e2b\u0e19\u0e49\u0e32", 
    "Yes": "\u0e43\u0e0a\u0e48", 
    "You must input a valid YouTube video URL.": "\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e2a\u0e48 URL \u0e02\u0e2d\u0e07\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e1a\u0e19 YouTube \u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07", 
    "an unknown date": "\u0e44\u0e21\u0e48\u0e17\u0e23\u0e32\u0e1a\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"
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
    "DATETIME_FORMAT": "j F Y, G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d %b %Y", 
      "%d %B %Y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j M Y, G:i", 
    "SHORT_DATE_FORMAT": "j M Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "G:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S.%f", 
      "%H:%M:%S", 
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

