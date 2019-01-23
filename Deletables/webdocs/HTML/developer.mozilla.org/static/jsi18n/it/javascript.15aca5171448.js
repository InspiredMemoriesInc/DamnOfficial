

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
    "%(sentDate)s by %(user)s": "%(sentDate)s da %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Dall\u2019ultimo salvataggio della bozza \u00e8 stata pubblicata una nuova versione dell\u2019articolo, pertanto non potrai pi\u00f9 pubblicare questa bozza. Puoi comunque ripristinarla per visualizzarne il contenuto.", 
    "Article Title Lookup / Link Text": "Titolo articolo / Testo link", 
    "Aspect ratio": "Proporzioni", 
    "Attachments": "Allegati", 
    "Autosave enabled.": "Salvataggio automatico attivato.", 
    "CSS": "CSS", 
    "Changes saved.": "Le modifiche sono state salvate.", 
    "Close": "Chiudi", 
    "Close notification": "Chiudi notifica", 
    "Close submenu": "Chiudi sottomenu", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Assicurati che la data di questa versione sia posteriore a quella dell\u2019ultima versione in modo da non sovrascrivere le modifiche pi\u00f9 recenti.", 
    "Create a Redirect": "Crea una pagina di reindirizzamento", 
    "Default": "Predefinito", 
    "Details": "Informazioni", 
    "Discard draft.": "Elimina questa bozza", 
    "Document": "Documento", 
    "Draft autosaved:": "Bozza salvata automaticamente:", 
    "Draft discarded.": "Bozza eliminata", 
    "Draft discarded:": "Bozza eliminata:", 
    "Draft published:": "Bozza pubblicata:", 
    "Draft restored.": "Bozza ripristinata", 
    "Edit Page": "Modifica pagina", 
    "Embed YouTube Video": "Inserisci un video YouTube", 
    "Error loading content, please refresh the page": "Errore di caricamento dei contenuti, ricaricare la pagina", 
    "Error submitting as %(type)s": "Errore durante l\u2019inserimento dei dati come %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Solo un attimo. Aggiornamento filtri in corso\u2026", 
    "History": "Storico", 
    "Insert Code Sample Template": "Inserisci il codice del modello di esempio", 
    "Insert Code Sample iFrame": "Inserisci il codice iframe di esempio", 
    "JavaScript": "JavaScript", 
    "Launch": "Avvia", 
    "Locate a YouTube Video": "Individua un video YouTube", 
    "MDN Redirect": "Pagina MDN di reindirizzamento", 
    "More about the beta.": "Ulteriori informazioni sulla fase beta.", 
    "Never": "Mai", 
    "New compatibility tables are in beta ": "Le nuove tabelle di compatibilit\u00e0 sono in una fase sperimentale", 
    "New interest...": "Nuovo interesse.", 
    "New tag...": "Nuovo tag.", 
    "No": "No", 
    "No Highlight": "Nessuna evidenziazione", 
    "No attachments available": "Nessun allegato disponibile", 
    "No selection": "Nessuna selezione", 
    "Open": "Apri", 
    "Open implementation notes": "Apri note di implementazione", 
    "Open in %(site)s": "Apri in %(site)s", 
    "Paste YouTube Video URL": "Incolla l\u2019indirizzo di un video YouTube", 
    "Published version": "Versione pubblicata", 
    "Publishing changes\u2026": "Pubblicazione delle modifiche in corso\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Pubblicazione non riuscita. Effettua una copia di backup, poi riprova a inviare i dati facendo clic sul pulsante Pubblica.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "La pubblicazione dei contenuti non \u00e8 riuscita perch\u00e9 al momento non sei collegato con il tuo profilo MDN. Apri una nuova scheda, effettua l\u2019accesso e ripeti l\u2019operazione.", 
    "Report an error.": "Segnala un errore.", 
    "Reported. Thanks!": "Segnalazione effettuata. Grazie.", 
    "Restore draft.": "Ripristina il contenuto della bozza", 
    "Result": "Risultato", 
    "Return to compatibility table.": "Ritorna alla tabella compatibilit\u00e0.", 
    "Revert": "Annulla modifiche", 
    "Revision history.": "Storico delle versioni", 
    "Sample CSS Content": "Fogli di stile CSS di esempio", 
    "Sample Finder": "Trova esempi", 
    "Sample HTML Content": "Codice HTML di esempio", 
    "Sample JavaScript Content": "Codice JavaScript di esempio", 
    "Search Stack Overflow": "Ricerca su Stack Overflow", 
    "Sections in Document": "Sezioni nel documento", 
    "Select a section": "Seleziona una sezione", 
    "Select an attachment": "Seleziona un allegato", 
    "Selected: ": "Selezionato: ", 
    "Show old table.": "Visualizza la tabella utilizzando il vecchio formato.", 
    "Submitted as %(submissionType)s": "Inviato come %(submissionType)s", 
    "Submitting...": "Inserimento dei dati in corso\u2026", 
    "Syntax Highlighter": "Evidenziatore di sintassi", 
    "Take the survey": "Partecipa al sondaggio", 
    "The URL you've entered doesn't appear to be valid": "L\u2019indirizzo inserito non sembra essere valido.", 
    "URL": "URL", 
    "Updated filters.": "Filtri aggiornati.", 
    "View Page": "Visualizza pagina", 
    "View draft.": "Visualizza la bozza", 
    "Viewing old draft. This draft cannot be published.": "Stai visualizzando una bozza obsoleta. Questa versione non pu\u00f2 essere pubblicata.", 
    "What should the sample title be?": "Come dovrei scegliere il titolo per l\u2019esempio?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Risponderesti a quattro domande di numero per aiutarci a migliorare il sito? <a %(url)s>Apri il questionario in una nuova scheda</a> e ricordati di compilarlo dopo aver consultato il sito. Grazie in anticipo per la tua disponibilit\u00e0.", 
    "Yes": "S\u00ec", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Stai visualizzando il sito in %(localeName)s. Desideri visualizzare sempre in %(localeName)s questo sito?", 
    "You have a draft from: %(time)s.": "\u00c8 presente una bozza da: %(time)s.", 
    "You must input a valid YouTube video URL.": "Inserisci un URL valido per il video di YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Il browser in uso non interpreta la tecnologia MathML. \u00c8 stata quindi utilizzata una versione alternativa basata sui CSS.", 
    "an unknown date": "data sconosciuta"
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
    "DATETIME_FORMAT": "l d F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%Y", 
      "%d-%m-%y %H:%M:%S", 
      "%d-%m-%y %H:%M:%S.%f", 
      "%d-%m-%y %H:%M", 
      "%d-%m-%y"
    ], 
    "DATE_FORMAT": "d F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%Y/%m/%d", 
      "%d-%m-%Y", 
      "%Y-%m-%d", 
      "%d-%m-%y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j/F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i", 
    "SHORT_DATE_FORMAT": "d/m/Y", 
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

