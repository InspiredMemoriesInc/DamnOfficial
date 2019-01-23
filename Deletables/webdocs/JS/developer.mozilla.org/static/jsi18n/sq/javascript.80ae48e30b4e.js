

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
    "%(sentDate)s by %(user)s": "%(sentDate)s nga %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u00cbsht\u00eb botuar nj\u00eb version i ri i k\u00ebtij artikulli, pasi u ruajt skica. Mund ta riktheni skic\u00ebn p\u00ebr t\u00eb par\u00eb l\u00ebnd\u00ebn e saj, por s\u2019do t\u00eb jeni n\u00eb gjendje ta parashtroni p\u00ebr botim.", 
    "Article Title Lookup / Link Text": "K\u00ebrkim Titulli Artikulli / Tekst Lidhjeje", 
    "Aspect ratio": "P\u00ebrpjestim", 
    "Attachments": "Bashkangjitje", 
    "Autosave enabled.": "Vet\u00ebruajtjet u aktivizuan.", 
    "CSS": "CSS", 
    "Changes saved.": "Ndryshimet u ruajt\u00ebn.", 
    "Close": "Mbylle", 
    "Close notification": "Mbylle njoftimin", 
    "Close submenu": "Mbylle n\u00ebnmenun\u00eb", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Krahasoni k\u00ebt\u00eb dat\u00eb me dat\u00ebn e rishikimit m\u00eb t\u00eb ri, p\u00ebr t\u00eb garantuar q\u00eb nuk po mbishkruani ndryshimet m\u00eb t\u00eb fresk\u00ebta.", 
    "Create a Redirect": "Krijoni nj\u00eb Ridrejtim", 
    "Default": "Parazgjedhje", 
    "Details": "Holl\u00ebsi", 
    "Discard draft.": "Hidhe tej skic\u00ebn.", 
    "Document": "Dokument", 
    "Draft autosaved:": "Skica u vet\u00ebruajt:", 
    "Draft discarded.": "Skica u hodh tej.", 
    "Draft discarded:": "Skica u hodh tej:", 
    "Draft published:": "Skica u botua:", 
    "Draft restored.": "Skica u rikthye.", 
    "Edit Page": "P\u00ebrpunojeni Faqen", 
    "Embed YouTube Video": "Trup\u00ebzoni Video YouTube", 
    "Error loading content, please refresh the page": "Gabim n\u00eb ngarkim l\u00ebnde, ju lutemi, rifreskoni faqen", 
    "Error submitting as %(type)s": "Gabim n\u00eb parashtrimin si %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Prisni! Po p\u00ebrdit\u00ebsohen filtrat\u2026", 
    "History": "Historik", 
    "Insert Code Sample Template": "Futni Gjedhe Shembull Kodi", 
    "Insert Code Sample iFrame": "Futni iFrame Shembull Kodi", 
    "JavaScript": "JavaScript", 
    "Launch": "Nise", 
    "Locate a YouTube Video": "Gjeni nj\u00eb Video YouTube", 
    "MDN Redirect": "Ridrejtim MDN-je", 
    "More about the beta.": "M\u00eb tep\u00ebr mbi betan.", 
    "Never": "Kurr\u00eb", 
    "New compatibility tables are in beta ": "Tabelat e reja t\u00eb p\u00ebrputhshm\u00ebris\u00eb jan\u00eb n\u00eb gjendje beta", 
    "New interest...": "Interes i ri...", 
    "New tag...": "Etiket\u00eb e re...", 
    "No": "Jo", 
    "No Highlight": "Pa Theksim", 
    "No attachments available": "S\u2019ka bashk\u00ebngjitje", 
    "No selection": "Pa p\u00ebrzgjedhje", 
    "Open": "Hape", 
    "Open implementation notes": "Hapni sh\u00ebnime send\u00ebrtimi", 
    "Open in %(site)s": "Hape n\u00eb %(site)s", 
    "Paste YouTube Video URL": "Hidhni URL-n\u00eb e Videos YouTube", 
    "Published version": "Version i botuar", 
    "Publishing changes\u2026": "Po botohen ndryshimet\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Botimi d\u00ebshtoi. Ju lutemi, kopjojini dhe ngjitini ndryshimet tuaja n\u00eb nj\u00eb vend t\u00eb sigurt dhe provoni ta parashtroni formularin duke p\u00ebrdorur butonin \"Botoje\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Botimi d\u00ebshtoi. S\u2019keni b\u00ebr\u00eb hyrjen. Ju lutemi, p\u00ebrdorni nj\u00eb sked\u00eb t\u00eb re p\u00ebr t\u00eb b\u00ebr\u00eb hyrjen dhe riprovoni m\u00eb pas botimin.", 
    "Report an error.": "Njoftoni nj\u00eb gabim", 
    "Reported. Thanks!": "U njoftua. Faleminderit!", 
    "Restore draft.": "Riktheje skic\u00ebn.", 
    "Result": "P\u00ebrfundim", 
    "Return to compatibility table.": "Rikthehuni te tabela e p\u00ebrputhshm\u00ebrive.", 
    "Revert": "Riktheje", 
    "Revision history.": "Historik rishikimesh.", 
    "Sample CSS Content": "Shembull L\u00ebnde CSS", 
    "Sample Finder": "Gjet\u00ebs Shembujsh", 
    "Sample HTML Content": "Shembull L\u00ebnde HTML", 
    "Sample JavaScript Content": "Shembull L\u00ebnde JavaScript", 
    "Search Stack Overflow": "K\u00ebrkoni te Stack Overflow", 
    "Sections in Document": "Ndarje n\u00eb Dokument", 
    "Select a section": "P\u00ebrzgjidhni nj\u00eb ndarje", 
    "Select an attachment": "P\u00ebrzgjidhni nj\u00eb bashk\u00ebngjitje", 
    "Selected: ": "T\u00eb p\u00ebrzgjedhur: ", 
    "Show old table.": "Shfaq tabel\u00ebn e vjet\u00ebr.", 
    "Submitted as %(submissionType)s": "Parashtruar si %(submissionType)s", 
    "Submitting...": "Po parashtrohet\u2026", 
    "Syntax Highlighter": "Theksues Sintakse", 
    "Take the survey": "Plot\u00ebsoni pyet\u00ebsorin", 
    "The URL you've entered doesn't appear to be valid": "URL-ja q\u00eb dhat\u00eb s\u2019duket se \u00ebsht\u00eb e vlefshme", 
    "URL": "URL", 
    "Updated filters.": "Filtrat u p\u00ebrdit\u00ebsuan.", 
    "View Page": "Shiheni Faqen", 
    "View draft.": "Shiheni skic\u00ebn.", 
    "Viewing old draft. This draft cannot be published.": "Po shihen skic\u00eb e vjet\u00ebr. Kjo skic\u00eb s\u2019botohet dot.", 
    "What should the sample title be?": "Cili do t\u00eb ishte titulli i shembullit?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "A do t\u2019u p\u00ebrgjigjeshit 4 pyetjeve tona? <a %(url)s>Hapeni pyet\u00ebsorin n\u00eb nj\u00eb sked\u00eb t\u00eb re</a> dhe plot\u00ebsojeni, kur t\u00eb keni mbaruar pun\u00eb n\u00eb sajt. Faleminderit!", 
    "Yes": "Po", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "K\u00ebt\u00eb sajt po e shihni n\u00eb %(localeName)s. Doni ta shihni p\u00ebrher\u00eb k\u00ebt\u00eb sajt n\u00eb %(localeName)s?", 
    "You have a draft from: %(time)s.": "Keni nj\u00eb skic\u00eb nga: %(time)s.", 
    "You must input a valid YouTube video URL.": "Duhet t\u00eb jepni nj\u00eb URL videoje YouTube t\u00eb vlefshme.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Shfletuesi juaj nuk mbulon MathML. N\u00eb vend t\u00eb tij \u00ebsht\u00eb p\u00ebrdorur CSS.", 
    "an unknown date": "nj\u00eb dat\u00eb e panjohur"
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
    "SHORT_DATE_FORMAT": "Y-m-d", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "g.i.A", 
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

