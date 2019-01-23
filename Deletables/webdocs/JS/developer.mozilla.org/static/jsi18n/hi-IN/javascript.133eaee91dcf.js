

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
    "Article Title Lookup / Link Text": "\u0932\u0947\u0916 \u0936\u0940\u0930\u094d\u0937\u0915 \u0932\u0941\u0915\u0905\u092a / \u0932\u093f\u0902\u0915 \u092a\u093e\u0920", 
    "Aspect ratio": "\u092a\u0915\u094d\u0937 \u0905\u0928\u0941\u092a\u093e\u0924", 
    "Attachments": "\u0938\u0902\u0932\u0917\u094d\u0928\u0915", 
    "Autosave enabled.": "\u0938\u094d\u0935\u0924: \u0938\u0939\u0947\u091c\u0928\u093e \u0938\u0915\u094d\u0937\u092e \u0915\u093f\u092f\u093e \u0917\u092f\u093e.", 
    "Changes saved.": "\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u0938\u0939\u0947\u091c\u0947 \u0917\u090f.", 
    "Close": "\u092c\u0902\u0926 \u0915\u0930\u0947", 
    "Create a Redirect": "\u090f\u0915 \u0905\u0928\u0941\u092a\u094d\u0930\u0947\u0937\u093f\u0924 \u092c\u0928\u093e\u090f\u0901", 
    "Default": "\u0924\u092f\u0936\u0941\u0926\u093e", 
    "Details": "\u0935\u093f\u0935\u0930\u0923", 
    "Document": "\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c", 
    "Edit Page": "\u092a\u0943\u0937\u094d\u0920 \u0938\u0902\u092a\u093e\u0926\u093f\u0924 \u0915\u0930\u0947\u0902", 
    "Embed YouTube Video": "YouTube \u0935\u0940\u0921\u093f\u092f\u094b \u090f\u092e\u094d\u092c\u0947\u0921 \u0915\u0930\u0947\u0902", 
    "Hang on! Updating filters\u2026": "\u0932\u0917\u0947 \u0930\u0939\u0947\u0902! \u092b\u093c\u093f\u0932\u094d\u091f\u0930 \u0905\u0926\u094d\u092f\u0924\u0928 \u0915\u0930 \u0930\u0939\u093e \u0939\u0948...", 
    "History": "\u0907\u0924\u093f\u0939\u093e\u0938", 
    "Insert Code Sample iFrame": "\u0915\u094b\u0921 \u0928\u092e\u0942\u0928\u093e iFrame \u092a\u094d\u0930\u0935\u093f\u0937\u094d\u091f \u0915\u0930\u0947\u0902", 
    "Launch": "\u092a\u094d\u0930\u092e\u094b\u091a\u0928", 
    "MDN Redirect": "MDN \u0905\u0928\u0941\u092a\u094d\u0930\u0947\u0937\u0923", 
    "More about the beta.": "\u092c\u0940\u091f\u093e \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0905\u0927\u093f\u0915.", 
    "New interest...": "\u0928\u0908 \u0930\u0942\u091a\u093f...", 
    "New tag...": "\u0928\u092f\u093e \u091f\u0948\u0917...", 
    "No": "\u0928\u0939\u0940\u0902", 
    "No Highlight": "\u0915\u094b\u0908 \u0939\u093e\u0907\u0932\u093e\u0907\u091f \u0928\u0939\u0940\u0902", 
    "No attachments available": "\u0915\u094b\u0908 \u0905\u0928\u0941\u0932\u0917\u094d\u0928\u0915 \u0928\u0939\u0940\u0902 \u0909\u092a\u0932\u092c\u094d\u0927", 
    "No selection": "\u0915\u094b\u0908 \u091a\u092f\u0928 \u0928\u0939\u0940\u0902", 
    "Open": "\u0916\u094b\u0932\u093f\u090f", 
    "Open implementation notes": "\u0916\u0941\u0932\u093e \u0915\u093e\u0930\u094d\u092f\u093e\u0928\u094d\u0935\u092f\u0928 \u0928\u094b\u091f\u094d\u0938", 
    "Open in %(site)s": "%(site)s \u092e\u0947\u0902 \u0916\u094b\u0932\u0947\u0902", 
    "Report an error.": "\u0924\u094d\u0930\u0941\u091f\u093f \u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0915\u0930\u0947\u0902.", 
    "Reported. Thanks!": "\u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0915\u0940 \u0917\u0908. \u0927\u0928\u094d\u092f\u0935\u093e\u0926!", 
    "Result": "\u092a\u0930\u093f\u0923\u093e\u092e", 
    "Return to compatibility table.": "\u0938\u0902\u0917\u0924\u0924\u093e \u0924\u093e\u0932\u093f\u0915\u093e \u092a\u0930 \u0935\u093e\u092a\u0938 \u091c\u093e\u090f\u0901.", 
    "Revert": "\u0935\u093e\u092a\u0938 \u091c\u093e\u090f\u0901", 
    "Sample CSS Content": "\u0928\u092e\u0942\u0928\u093e CSS \u0938\u093e\u092e\u0917\u094d\u0930\u0940", 
    "Sample Finder": "\u0928\u092e\u0942\u0928\u093e \u0916\u094b\u091c\u0915", 
    "Sample HTML Content": "\u0928\u092e\u0942\u0928\u093e HTML \u0938\u093e\u092e\u0917\u094d\u0930\u0940", 
    "Sample JavaScript Content": "\u0928\u092e\u0942\u0928\u093e JavaScript \u0938\u093e\u092e\u0917\u094d\u0930\u0940", 
    "Search Stack Overflow": "\u0938\u094d\u091f\u0948\u0915 \u0913\u0935\u0930\u092b\u093c\u094d\u0932\u094b \u0916\u094b\u091c\u0947\u0902", 
    "Sections in Document": "\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u092e\u0947\u0902 \u0905\u0928\u0941\u092d\u093e\u0917", 
    "Select a section": "\u0905\u0928\u0941\u092d\u093e\u0917 \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902", 
    "Select an attachment": "\u0905\u0928\u0941\u0932\u0917\u094d\u0928\u0915 \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902", 
    "Selected: ": "\u091a\u092f\u0928\u093f\u0924: ", 
    "Show old table.": "\u092a\u0941\u0930\u093e\u0928\u0947 \u0924\u093e\u0932\u093f\u0915\u093e \u0926\u093f\u0916\u093e\u090f\u0901.", 
    "Submitting...": "\u0926\u0930\u094d\u095b \u0939\u094b \u0930\u0939\u093e \u0939\u0948...", 
    "Take the survey": "\u0938\u0930\u094d\u0935\u0947\u0915\u094d\u0937\u0923 \u0932\u0947\u0902", 
    "URL": "URL", 
    "Updated filters.": "\u0905\u0926\u094d\u092f\u0924\u0928 \u0915\u093f\u090f \u0917\u090f \u092b\u093c\u093f\u0932\u094d\u091f\u0930\u094d\u0938.", 
    "View Page": "\u092a\u0943\u0937\u094d\u0920 \u0926\u0947\u0916\u0947\u0902", 
    "Yes": "\u0939\u093e\u0901", 
    "an unknown date": "\u090f\u0915 \u0905\u091c\u094d\u091e\u093e\u0924 \u0924\u093e\u0930\u0940\u0916"
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
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ",", 
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

