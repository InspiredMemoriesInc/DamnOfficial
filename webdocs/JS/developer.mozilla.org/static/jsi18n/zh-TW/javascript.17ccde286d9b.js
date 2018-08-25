

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
    "%(sentDate)s by %(user)s": "\u7531 %(user)s \u9001\u51fa\u65bc %(sentDate)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u5728\u6b64\u8349\u7a3f\u5132\u5b58\u5f8c\uff0c\u5df2\u6709\u65b0\u7248\u672c\u6587\u7ae0\u767c\u5e03\u3002\u60a8\u53ef\u4ee5\u6062\u5fa9\u6b64\u8349\u7a3f\u4f86\u6aa2\u8996\u5176\u5167\u5bb9\uff0c\u4f46\u7121\u6cd5\u518d\u767c\u5e03\u9019\u4efd\u8349\u7a3f\u3002", 
    "Article Title Lookup / Link Text": "\u641c\u5c0b\u6587\u4ef6\u6a19\u984c / \u93c8\u7d50\u6587\u5b57", 
    "Aspect ratio": "\u756b\u9762\u6bd4\u4f8b", 
    "Attachments": "\u9644\u4ef6", 
    "Autosave enabled.": "\u5df2\u958b\u555f\u81ea\u52d5\u5132\u5b58\u3002", 
    "CSS": "CSS", 
    "Changes saved.": "\u8b8a\u66f4\u5df2\u5132\u5b58\u3002", 
    "Close": "\u95dc\u9589", 
    "Close notification": "\u95dc\u9589\u901a\u77e5", 
    "Close submenu": "\u95dc\u9589\u5b50\u9078\u55ae", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "\u8acb\u6bd4\u8f03\u6b64\u65e5\u671f\u8207\u6700\u65b0\u7248\u672c\u6587\u4ef6\u7684\u65e5\u671f\uff0c\u78ba\u4fdd\u60a8\u6c92\u6709\u84cb\u6389\u8f03\u65b0\u7684\u4fee\u6539\u3002", 
    "Create a Redirect": "\u5efa\u7acb\u91cd\u5c0e", 
    "Default": "\u9810\u8a2d", 
    "Details": "\u8a73\u7d30\u8cc7\u8a0a", 
    "Discard draft.": "\u6368\u68c4\u8349\u7a3f\u3002", 
    "Document": "\u6587\u4ef6", 
    "Draft autosaved:": "\u8349\u7a3f\u81ea\u52d5\u5132\u5b58\u65bc:", 
    "Draft discarded.": "\u5df2\u6368\u68c4\u8349\u7a3f\u3002", 
    "Draft discarded:": "\u8349\u7a3f\u6368\u68c4\u65bc:", 
    "Draft published:": "\u8349\u7a3f\u767c\u5e03\u65bc:", 
    "Draft restored.": "\u5df2\u9084\u539f\u8349\u7a3f\u3002", 
    "Edit Page": "\u7de8\u8f2f\u9801\u9762", 
    "Embed YouTube Video": "\u5d4c\u5165 YouTube \u5f71\u7247", 
    "Error loading content, please refresh the page": "\u8f09\u5165\u5167\u5bb9\u6642\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u9801\u9762", 
    "Error submitting as %(type)s": "\u9001\u51fa %(type)s \u6642\u767c\u751f\u932f\u8aa4", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u7b49\u7b49\uff0c\u6b63\u5728\u66f4\u65b0\u904e\u6ffe\u5668\u2026", 
    "History": "\u7248\u672c\u6b77\u53f2", 
    "Insert Code Sample Template": "\u63d2\u5165\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u6a21\u677f", 
    "Insert Code Sample iFrame": "\u63d2\u5165\u7bc4\u4f8b\u7a0b\u5f0f\u78bc iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "\u57f7\u884c", 
    "Locate a YouTube Video": "\u5c0b\u627e YouTube \u5f71\u7247", 
    "MDN Redirect": "MDN \u91cd\u5c0e", 
    "More about the beta.": "\u4e86\u89e3 beta \u6e2c\u8a66\u7684\u66f4\u591a\u8cc7\u8a0a\u3002", 
    "Never": "\u6c38\u4e0d", 
    "New compatibility tables are in beta ": "\u65b0\u7248\u76f8\u5bb9\u6027\u8868\u683c\u6b63\u5728 beta \u6e2c\u8a66\u4e2d", 
    "New interest...": "\u65b0\u8208\u8da3\u2026", 
    "New tag...": "\u65b0\u589e\u6a19\u7c64\u2026", 
    "No": "\u6c92\u6709", 
    "No Highlight": "\u4e0d\u5f37\u8abf", 
    "No attachments available": "\u6c92\u6709\u9644\u4ef6", 
    "No selection": "\u7121\u9078\u64c7", 
    "Open": "\u958b\u555f", 
    "Open implementation notes": "\u6253\u958b\u5be6\u4f5c\u7b46\u8a18", 
    "Open in %(site)s": "\u65bc %(site)s \u958b\u555f\u00a0", 
    "Paste YouTube Video URL": "\u8cbc\u4e0a YouTube \u5f71\u7247\u7db2\u5740", 
    "Published version": "\u5df2\u767c\u5e03\u7248\u672c", 
    "Publishing changes\u2026": "\u6b63\u5728\u767c\u5e03\u8b8a\u66f4\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "\u767c\u5e03\u5931\u6557\u3002\u8acb\u5c07\u8b8a\u66f4\u8907\u88fd\u8cbc\u5230\u5b89\u5168\u7684\u5730\u65b9\uff0c\u7136\u5f8c\u4f7f\u7528\u300c\u767c\u5e03\u300d\u6309\u9215\u518d\u6b21\u9001\u51fa\u8868\u55ae\u3002", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u60a8\u76ee\u524d\u672a\u767b\u5165\uff0c\u767c\u5e03\u5931\u6557\u3002\u8acb\u4f7f\u7528\u65b0\u5206\u9801\u767b\u5165\u5f8c\u518d\u767c\u5e03\u4e00\u6b21\u3002", 
    "Report an error.": "\u56de\u5831\u932f\u8aa4\u3002", 
    "Reported. Thanks!": "\u5df2\u56de\u5831\uff0c\u611f\u8b1d\u60a8\uff01", 
    "Restore draft.": "\u9084\u539f\u8349\u7a3f\u3002", 
    "Result": "\u7d50\u679c", 
    "Return to compatibility table.": "\u56de\u5230\u76f8\u5bb9\u6027\u8868\u683c\u3002", 
    "Revert": "\u56de\u5fa9", 
    "Revision history.": "\u7248\u672c\u7d00\u9304\u3002", 
    "Sample CSS Content": "CSS \u7bc4\u4f8b\u5167\u5bb9", 
    "Sample Finder": "\u7bc4\u4f8b\u641c\u5c0b\u5668", 
    "Sample HTML Content": "HTML \u7bc4\u4f8b\u5167\u5bb9", 
    "Sample JavaScript Content": "JavaScript \u7bc4\u4f8b\u5167\u5bb9", 
    "Search Stack Overflow": "\u641c\u5c0b Stack Overflow", 
    "Sections in Document": "\u6587\u4ef6\u4e2d\u7684\u6bb5\u843d", 
    "Select a section": "\u9078\u64c7\u6bb5\u843d", 
    "Select an attachment": "\u9078\u64c7\u9644\u4ef6", 
    "Selected: ": "\u5df2\u9078\u64c7:", 
    "Show old table.": "\u986f\u793a\u820a\u7248\u8868\u683c\u3002", 
    "Submitted as %(submissionType)s": "\u5df2\u9001\u51fa %(submissionType)s", 
    "Submitting...": "\u9001\u51fa\u4e2d\u2026", 
    "Syntax Highlighter": "\u8a9e\u6cd5\u5f37\u8abf", 
    "Take the survey": "\u586b\u5beb\u554f\u5377", 
    "The URL you've entered doesn't appear to be valid": "\u60a8\u8f38\u5165\u7684\u7db2\u5740\u770b\u8d77\u4f86\u4e0d\u6b63\u78ba", 
    "URL": "\u7db2\u5740", 
    "Updated filters.": "\u5df2\u66f4\u65b0\u904e\u6ffe\u5668\u3002", 
    "View Page": "\u6aa2\u8996\u9801\u9762", 
    "View draft.": "\u6aa2\u8996\u8349\u7a3f\u3002", 
    "Viewing old draft. This draft cannot be published.": "\u6aa2\u8996\u7684\u662f\u820a\u7248\u8349\u7a3f\uff0c\u7121\u6cd5\u767c\u5e03\u6b64\u8349\u7a3f\u3002", 
    "What should the sample title be?": "\u7bc4\u4f8b\u7684\u6a19\u984c\u662f\u4ec0\u9ebc\uff1f", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "\u60a8\u65b9\u4fbf\u5354\u52a9\u56de\u7b54 4 \u500b\u554f\u984c\u55ce\uff1f<a %(url)s>\u53ef\u9ede\u6b64\u5728\u65b0\u5206\u9801\u958b\u555f\u554f\u5377</a>\uff0c\u4e26\u5728\u4f7f\u7528\u5b8c\u672c\u7db2\u7ad9\u5f8c\u586b\u7b54\uff0c\u611f\u8b1d\u60a8\uff01", 
    "Yes": "\u6709", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "\u60a8\u6b63\u5728\u4f7f\u7528\u6b64\u7db2\u7ad9\u7684 %(localeName)s \u7248\u672c\u3002\u60f3\u8981\u5c07 %(localeName)s \u8a2d\u70ba\u9810\u8a2d\u7248\u672c\u55ce\uff1f", 
    "You have a draft from: %(time)s.": "\u60a8\u6709\u500b\u5efa\u7acb\u65bc %(time)s \u7684\u8349\u7a3f", 
    "You must input a valid YouTube video URL.": "\u60a8\u5fc5\u9808\u8f38\u5165\u6709\u6548\u7684 YouTube \u5f71\u7247\u7db2\u5740\u3002", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u60a8\u7684\u700f\u89bd\u5668\u4e0d\u652f\u63f4 MathML\uff0c\u5df2\u6539\u7528 CSS \u986f\u793a\u3002", 
    "an unknown date": "\u672a\u77e5\u65e5\u671f"
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

