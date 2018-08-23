

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(sentDate)s, autorstwa u\u017cytkownika \u201e%(user)s\u201d", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Od czasu zapisania tego szkicu opublikowano nowsz\u0105 wersj\u0119 tego artyku\u0142u. Mo\u017cna przywr\u00f3ci\u0107 szkic, aby wy\u015bwietli\u0107 jego tre\u015b\u0107, ale nie b\u0119dzie mo\u017cna go opublikowa\u0107.", 
    "Article Title Lookup / Link Text": "Podgl\u0105d tytu\u0142u artyku\u0142u / Tekst odno\u015bnika", 
    "Aspect ratio": "Skala obrazu", 
    "Attachments": "Za\u0142\u0105czniki", 
    "Autosave enabled.": "Automatyczny zapis w\u0142\u0105czony.", 
    "CSS": "CSS", 
    "Changes saved.": "Zapisano zmiany.", 
    "Close": "Zamknij", 
    "Close notification": "Zamknij powiadomienie", 
    "Close submenu": "Zamknij podmenu", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Por\u00f3wnaj t\u0119 dat\u0119 do daty najnowszej wersji, aby upewni\u0107 si\u0119, \u017ce p\u00f3\u017aniejsze zmiany nie zostan\u0105 zast\u0105pione.", 
    "Create a Redirect": "Stw\u00f3rz przekierowanie", 
    "Default": "Domy\u015blny", 
    "Details": "Szczeg\u00f3\u0142y", 
    "Discard draft.": "Odrzu\u0107 szkic.", 
    "Document": "Dokument", 
    "Draft autosaved:": "Automatycznie zapisano szkic:", 
    "Draft discarded.": "Odrzucono szkic.", 
    "Draft discarded:": "Odrzucono szkic:", 
    "Draft published:": "Opublikowano szkic:", 
    "Draft restored.": "Przywr\u00f3cono szkic.", 
    "Edit Page": "Edytuj stron\u0119", 
    "Embed YouTube Video": "Wstaw wideo z YouTube", 
    "Error loading content, please refresh the page": "B\u0142\u0105d podczas wczytywania tre\u015bci, prosz\u0119 od\u015bwie\u017cy\u0107 stron\u0119", 
    "Error submitting as %(type)s": "B\u0142\u0105d podczas wysy\u0142ania jako \u201e%(type)s\u201d", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Prosz\u0119 czeka\u0107. Aktualizowanie filtr\u00f3w\u2026", 
    "History": "Historia", 
    "Insert Code Sample Template": "Wstaw szablon przyk\u0142adowego kodu", 
    "Insert Code Sample iFrame": "Wstaw pr\u00f3bk\u0119 kodu iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "Uruchom", 
    "Locate a YouTube Video": "Znajd\u017a wideo z YouTube", 
    "MDN Redirect": "Przekierowanie MDN", 
    "More about the beta.": "Wi\u0119cej o fazie beta.", 
    "Never": "Nigdy", 
    "New compatibility tables are in beta ": "Nowe tabele kompatybilno\u015bci s\u0105 w fazie beta ", 
    "New interest...": "Nowe zainteresowanie...", 
    "New tag...": "Nowa etykieta...", 
    "No": "Nie", 
    "No Highlight": "Bez pod\u015bwietlenia", 
    "No attachments available": "Brak za\u0142\u0105cznik\u00f3w", 
    "No selection": "Brak wyboru", 
    "Open": "Otw\u00f3rz", 
    "Open implementation notes": "Otw\u00f3rz notatki implementacyjne", 
    "Open in %(site)s": "Otw\u00f3rz w %(site)s", 
    "Paste YouTube Video URL": "Wklej URL wideo z YouTube", 
    "Published version": "Opublikowana wersja", 
    "Publishing changes\u2026": "Publikowanie zmian\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Publikacja si\u0119 nie powiod\u0142a. Prosimy skopiowa\u0107 swoje zmiany w\u00a0bezpieczne miejsce i\u00a0jeszcze raz wys\u0142a\u0107 formularz za pomoc\u0105 przycisku \u201eOpublikuj\u201d.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Publikacja si\u0119 nie powiod\u0142a, poniewa\u017c nie zalogowano. Prosimy zalogowa\u0107 si\u0119 w\u00a0innej karcie i\u00a0opublikowa\u0107 ponownie.", 
    "Report an error.": "Zg\u0142o\u015b b\u0142\u0105d.", 
    "Reported. Thanks!": "Zg\u0142oszono. Dzi\u0119kujemy!", 
    "Restore draft.": "Przywr\u00f3\u0107 szkic.", 
    "Result": "Wynik", 
    "Return to compatibility table.": "Wr\u00f3\u0107 do tabeli kompatybilno\u015bci.", 
    "Revert": "Przywr\u00f3\u0107", 
    "Revision history.": "Historia wersji.", 
    "Sample CSS Content": "Przyk\u0142adowa zawarto\u015b\u0107 CSS", 
    "Sample Finder": "Wyszukiwarka przyk\u0142ad\u00f3w", 
    "Sample HTML Content": "Przyk\u0142adowa zawarto\u015b\u0107 HTML", 
    "Sample JavaScript Content": "Przyk\u0142adowa zawarto\u015b\u0107 JavaScript", 
    "Search Stack Overflow": "Przeszukaj Stack Overflow", 
    "Sections in Document": "Sekcje dokumentu", 
    "Select a section": "Wybierz sekcj\u0119", 
    "Select an attachment": "Wybierz za\u0142\u0105cznik", 
    "Selected: ": "Wybrane: ", 
    "Show old table.": "Poka\u017c star\u0105 tabel\u0119.", 
    "Submitted as %(submissionType)s": "Wys\u0142ano jako \u201e%(submissionType)s\u201d", 
    "Submitting...": "Wysy\u0142anie\u2026", 
    "Syntax Highlighter": "Pod\u015bwietl sk\u0142adni\u0119", 
    "Take the survey": "Wype\u0142nij ankiet\u0119", 
    "The URL you've entered doesn't appear to be valid": "Podany URL nie wygl\u0105da na poprawny", 
    "URL": "URL", 
    "Updated filters.": "Zaktualizowano filtry.", 
    "View Page": "Wy\u015bwietl stron\u0119", 
    "View draft.": "Wy\u015bwietl szkic.", 
    "Viewing old draft. This draft cannot be published.": "Wy\u015bwietlanie starego szkicu. Nie mo\u017cna go opublikowa\u0107.", 
    "What should the sample title be?": "Jaki ma by\u0107 tytu\u0142 przyk\u0142adu?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Odpowiesz na cztery pytania? <a %(url)s>Otw\u00f3rz ankiet\u0119 w\u00a0nowej karcie</a> i\u00a0wype\u0142nij j\u0105 w\u00a0wolnej chwili. Dzi\u0119ki!", 
    "Yes": "Tak", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Strona jest przegl\u0105dana w\u00a0j\u0119zyku: %(localeName)s. Czy chcesz zawsze przegl\u0105da\u0107 t\u0119 stron\u0119 w\u00a0j\u0119zyku: %(localeName)s?", 
    "You have a draft from: %(time)s.": "Masz szkic od: %(time)s.", 
    "You must input a valid YouTube video URL.": "Podaj prawid\u0142owy URL wideo z YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Twoja przegl\u0105darka nie obs\u0142uguje MathML. Zamiast tego korzystasz z alternatywnej wersji CSS.", 
    "an unknown date": "nieznana data"
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
    "DATETIME_FORMAT": "j E Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j E Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%y-%m-%d", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d-m-Y  H:i", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
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

