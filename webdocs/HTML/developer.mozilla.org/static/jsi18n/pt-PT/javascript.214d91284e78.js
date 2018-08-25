

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
    "%(sentDate)s by %(user)s": "%(sentDate)s por %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Uma nova vers\u00e3o deste artigo foi publicada desde que este rascunho foi guardado. Pode restaurar o rascunho para ver o conte\u00fado, mas n\u00e3o ir\u00e1 conseguir submet\u00ea-lo para publica\u00e7\u00e3o.", 
    "Article Title Lookup / Link Text": "T\u00edtulo do artigo para pesquisa / Texto da liga\u00e7\u00e3o", 
    "Aspect ratio": "Rela\u00e7\u00e3o de aspeto", 
    "Attachments": "Anexos", 
    "Autosave enabled.": "Guardar automaticamente ativado.", 
    "CSS": "CSS", 
    "Changes saved.": "Altera\u00e7\u00f5es guardadas.", 
    "Close": "Fechar", 
    "Close notification": "Fechar notifica\u00e7\u00e3o", 
    "Close submenu": "Fechar submenu", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Compare esta data \u00e0 revis\u00e3o mais recente para garantir que n\u00e3o est\u00e1 a sobrescrever altera\u00e7\u00f5es posteriores.", 
    "Create a Redirect": "Criar um redirecionamento", 
    "Default": "Predefinido", 
    "Details": "Detalhes", 
    "Discard draft.": "Descartar rascunho.", 
    "Document": "Documento", 
    "Draft autosaved:": "Rascunho guardado automaticamente:", 
    "Draft discarded.": "Rascunho descartado.", 
    "Draft discarded:": "Rascunho descartado:", 
    "Draft published:": "Rascunho publicado:", 
    "Draft restored.": "Rascunho restaurado.", 
    "Edit Page": "Editar p\u00e1gina", 
    "Embed YouTube Video": "Incorporar v\u00eddeo do YouTube", 
    "Error loading content, please refresh the page": "Erro ao carregar conte\u00fado, por favor atualize a p\u00e1gina", 
    "Error submitting as %(type)s": "Erro ao submeter como %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Aguarde! A atualizar filtros\u2026", 
    "History": "Hist\u00f3rico", 
    "Insert Code Sample Template": "Inserir modelo do exemplo de c\u00f3digo", 
    "Insert Code Sample iFrame": "Inserir iFrame de exemplo de c\u00f3digo", 
    "JavaScript": "JavaScript", 
    "Launch": "Executar", 
    "Locate a YouTube Video": "Localizar um v\u00eddeo do YouTube", 
    "MDN Redirect": "Redirecionamento MDN", 
    "More about the beta.": "Mais acerca da beta.", 
    "Never": "Nunca", 
    "New compatibility tables are in beta ": "Novas tabelas de compatibilidade est\u00e3o em beta ", 
    "New interest...": "Novo interesse...", 
    "New tag...": "Nova etiqueta...", 
    "No": "N\u00e3o", 
    "No Highlight": "Sem destaque", 
    "No attachments available": "Sem anexos dispon\u00edveis", 
    "No selection": "Sem sele\u00e7\u00e3o", 
    "Open": "Abrir", 
    "Open implementation notes": "Abrir notas de implementa\u00e7\u00e3o", 
    "Open in %(site)s": "Abrir em %(site)s", 
    "Paste YouTube Video URL": "Colar URL de um v\u00eddeo do YouTube", 
    "Published version": "Vers\u00e3o publicada", 
    "Publishing changes\u2026": "A publicar altera\u00e7\u00f5es\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "A publica\u00e7\u00e3o falhou. Por favor copie e cole as suas altera\u00e7\u00f5es num s\u00edtio seguro e tente submeter o formul\u00e1rio utilizando o bot\u00e3o \"publicar\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "A publica\u00e7\u00e3o falhou. Atualmente n\u00e3o tem a sess\u00e3o iniciada. Por favor utilize um novo separador para iniciar sess\u00e3o e tente publicar novamente.", 
    "Report an error.": "Reporte um erro.", 
    "Reported. Thanks!": "Reportado. Obrigado!", 
    "Restore draft.": "Restaurar rascunho.", 
    "Result": "Resultado", 
    "Return to compatibility table.": "Voltar para a tabela de compatibilidade.", 
    "Revert": "Reverter", 
    "Revision history.": "Hist\u00f3rico de revis\u00f5es.", 
    "Sample CSS Content": "Conte\u00fado CSS do exemplo", 
    "Sample Finder": "Pesquisa de exemplos", 
    "Sample HTML Content": "Conte\u00fado HTML do exemplo", 
    "Sample JavaScript Content": "Conte\u00fado JavaScript do exemplo", 
    "Search Stack Overflow": "Pesquisar o Stack Overflow", 
    "Sections in Document": "Sec\u00e7\u00f5es num documento", 
    "Select a section": "Selecionar uma sec\u00e7\u00e3o", 
    "Select an attachment": "Selecionar um anexo", 
    "Selected: ": "Selecionado: ", 
    "Show old table.": "Mostrar tabela antiga.", 
    "Submitted as %(submissionType)s": "Submetido como %(submissionType)s", 
    "Submitting...": "A submeter...", 
    "Syntax Highlighter": "Destaque de sintaxe", 
    "Take the survey": "Preencha o inqu\u00e9rito", 
    "The URL you've entered doesn't appear to be valid": "O URL que introduziu parece ser inv\u00e1lido", 
    "URL": "URL", 
    "Updated filters.": "Filtros atualizados.", 
    "View Page": "Ver p\u00e1gina", 
    "View draft.": "Ver rascunho.", 
    "Viewing old draft. This draft cannot be published.": "A ver rascunho antigo. Este rascunho n\u00e3o pode ser publicado.", 
    "What should the sample title be?": "Qual deve ser o t\u00edtulo do exemplo?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Gostaria de responder a 4 quest\u00f5es nossas? <a %(url)s>Abra o question\u00e1rio num novo separador</a> e preencha-o quando concluir a sua visita ao site. Obrigado!", 
    "Yes": "Sim", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Est\u00e1 agora a ver este site em %(localeName)s. Deseja ver este site sempre em %(localeName)s?", 
    "You have a draft from: %(time)s.": "Tem um rascunho de: %(time)s.", 
    "You must input a valid YouTube video URL.": "Deve introduzir um URL de v\u00eddeo do YouTube v\u00e1lido.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "O seu navegador n\u00e3o suporta MathML. Ser\u00e1 utilizado um mecanismo alternativo de substitui\u00e7\u00e3o em CSS.", 
    "an unknown date": "uma data desconhecida"
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y"
    ], 
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%d/%m/%Y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j \\d\\e F", 
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
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
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

