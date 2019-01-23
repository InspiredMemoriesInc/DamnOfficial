

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
    "%(sentDate)s by %(user)s": "%(sentDate)s b\u1edfi %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "M\u1ed9t b\u1ea3n m\u1edbi c\u1ee7a b\u00e0i vi\u1ebft n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n k\u1ec3 t\u1eeb khi b\u1ea3n nh\u00e1p n\u00e0y \u0111\u01b0\u1ee3c l\u01b0u. B\u1ea1n c\u00f3 th\u1ec3 kh\u00f4i ph\u1ee5c b\u1ea3n th\u1ea3o n\u00e0y \u0111\u1ec3 xem n\u1ed9i dung nh\u01b0ng kh\u00f4ng th\u1ec3 \u0111\u1ec7 tr\u00ecnh b\u1ea3n th\u1ea3o n\u00e0y \u0111\u1ec3 xu\u1ea5t b\u1ea3n.", 
    "Attachments": "N\u1ed9i dung \u0111\u00ednh k\u00e8m", 
    "Autosave enabled.": "T\u00ednh n\u0103ng t\u1ef1 \u0111\u1ed9ng l\u01b0u \u0111ang b\u1eadt.", 
    "CSS": "CSS", 
    "Changes saved.": "C\u00e1c thay \u0111\u1ed5i \u0111\u00e3 \u0111\u01b0\u1ee3c l\u01b0u.", 
    "Close notification": "\u0110\u00f3ng th\u00f4ng b\u00e1o", 
    "Close submenu": "\u0110\u00f3ng menu con", 
    "Create a Redirect": "T\u1ea1o m\u1ed9t \u0111i\u1ec1u h\u01b0\u1edbng", 
    "Default": "M\u1eb7c \u0111\u1ecbnh", 
    "Details": "Chi ti\u1ebft", 
    "Discard draft.": "H\u1ee7y b\u1ea3n th\u1ea3o.", 
    "Document": "T\u00e0i li\u1ec7u", 
    "Draft autosaved:": "B\u1ea3n th\u1ea3o \u0111\u01b0\u1ee3c l\u01b0u t\u1ef1 \u0111\u1ed9ng:", 
    "Draft discarded.": "\u0110\u00e3 h\u1ee7y b\u1ea3n th\u1ea3o.", 
    "Draft discarded:": "B\u1ea3n th\u1ea3o \u0111\u00e3 b\u1ecb h\u1ee7y:", 
    "Draft published:": "B\u1ea3n th\u1ea3o \u0111\u00e3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n:", 
    "Draft restored.": "\u0110\u00e3 kh\u00f4i ph\u1ee5c b\u1ea3n th\u1ea3o.", 
    "Edit Page": "Ch\u1ec9nh s\u1eeda trang", 
    "Embed YouTube Video": "Ch\u00e8m video YouTube", 
    "Error submitting as %(type)s": "L\u1ed7i khi g\u1eedi d\u01b0\u1edbi d\u1ea1ng %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Vui l\u00f2ng \u0111\u1ee3i! \u0110ang c\u1eadp nh\u1eadt b\u1ed9 l\u1ecdc...", 
    "History": "L\u1ecbch s\u1eed", 
    "JavaScript": "JavaScript", 
    "Launch": "Kh\u1edfi ch\u1ea1y", 
    "MDN Redirect": "\u0110i\u1ec1u h\u01b0\u1edbng MDN", 
    "Never": "Kh\u00f4ng bao gi\u1edd", 
    "New tag...": "Tag m\u1edbi...", 
    "No attachments available": "Kh\u00f4ng c\u00f3 n\u1ed9i dung \u0111\u00ednh k\u00e8m", 
    "No selection": "Ch\u01b0a ch\u1ecdn m\u1ee5c n\u00e0o", 
    "Paste YouTube Video URL": "D\u00e1n URL Video t\u1eeb YouTube", 
    "Published version": "Phi\u00ean b\u1ea3n \u0111\u00e3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n", 
    "Restore draft.": "Kh\u00f4i ph\u1ee5c b\u1ea3n th\u1ea3o.", 
    "Result": "K\u1ebft qu\u1ea3", 
    "Revert": "Ph\u1ee5c h\u1ed3i", 
    "Search Stack Overflow": "T\u00ecm Stack Overflow", 
    "Sections in Document": "C\u00e1c ph\u1ea7n trong t\u00e0i li\u1ec7u", 
    "Select a section": "Ch\u1ecdn m\u1ed9t ph\u1ea7n", 
    "Select an attachment": "Ch\u1ecdn m\u1ed9t \u0111\u00ednh k\u00e8m", 
    "Selected: ": "\u0110\u00e3 ch\u1ecdn:", 
    "Submitted as %(submissionType)s": "\u0110\u00e3 g\u1eedi d\u01b0\u1edbi d\u1ea1ng %(submissionType)s", 
    "Submitting...": "\u0110ang g\u1eedi l\u00ean...", 
    "URL": "URL", 
    "Updated filters.": "\u0110\u00e3 c\u1eadp nh\u1eadt b\u1ed9 l\u1ecdc.", 
    "View Page": "Xem trang", 
    "View draft.": "Xem b\u1ea3n th\u1ea3o.", 
    "Viewing old draft. This draft cannot be published.": "\u0110ang xem b\u1ea3n nh\u00e1p c\u0169. B\u1ea3n th\u1ea3o n\u00e0y kh\u00f4ng th\u1ec3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n.", 
    "You have a draft from: %(time)s.": "B\u1ea1n c\u00f3 m\u1ed9t b\u1ea3n th\u1ea3o t\u1eeb l\u00fac: %(time)s.", 
    "You must input a valid YouTube video URL.": "B\u1ea1n ph\u1ea3i nh\u1eadp v\u00e0o m\u1ed9t URL video t\u1eeb YouTube h\u1ee3p l\u1ec7.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Tr\u00ecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\u00f4ng h\u1ed7 tr\u1ee3 MathML. CSS \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thay th\u1ebf.", 
    "an unknown date": "m\u1ed9t ng\u00e0y kh\u00f4ng r\u00f5"
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
    "DATETIME_FORMAT": "H:i \\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y", 
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
    "DATE_FORMAT": "\\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y", 
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
    "SHORT_DATETIME_FORMAT": "H:i d-m-Y", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ".", 
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

