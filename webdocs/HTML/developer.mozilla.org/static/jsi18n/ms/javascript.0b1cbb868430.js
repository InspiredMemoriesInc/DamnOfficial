

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
    "%(sentDate)s by %(user)s": "%(sentDate)s oleh %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Versi baru artikel ini telah diterbitkan sejak draf ini disimpan. Anda boleh mengembalikan semula draf untuk melihat kandungannya, tetapi anda tidak boleh menghantarnya untuk penerbitan.", 
    "Article Title Lookup / Link Text": "Carian Tajuk Artikel / Teks Pautan", 
    "Aspect ratio": "Nisbah aspek", 
    "Attachments": "Lampiran", 
    "Autosave enabled.": "Autosimpan didayakan.", 
    "CSS": "CSS", 
    "Changes saved.": "Perubahan disimpan.", 
    "Close": "Tutup", 
    "Close notification": "Tutup notifikasi", 
    "Close submenu": "Tutup submenu", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Bandingkan tarikh ini dengan tarikh semakan terakhir bagi memastikan anda tidak membuat perubahan pada yang terkemudian.", 
    "Create a Redirect": "Cipta Hala semula", 
    "Default": "Piawai", 
    "Details": "Butiran", 
    "Discard draft.": "Buang draf.", 
    "Document": "Dokumen", 
    "Draft autosaved:": "Draf autosimpan:", 
    "Draft discarded.": "Draf dibuang.", 
    "Draft discarded:": "Draf dibuang:", 
    "Draft published:": "Draf diterbitkan:", 
    "Draft restored.": "Draf dikembalikan semula.", 
    "Edit Page": "Edit Halaman", 
    "Embed YouTube Video": "Benam Video YouTube", 
    "Error loading content, please refresh the page": "Ralat memuatkan kandungan, sila muat semula halaman", 
    "Error submitting as %(type)s": "Ralat menghantar sebagai %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Tunggu! Mengemaskini penapis\u2026", 
    "History": "Sejarah", 
    "Insert Code Sample Template": "Masukkan Templat Sampel Kod", 
    "Insert Code Sample iFrame": "Masukkan Sampel Kod iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "Lancarkan", 
    "Locate a YouTube Video": "Cari Video YouTube", 
    "MDN Redirect": "Hala semula MDN", 
    "More about the beta.": "Selanjutnya perihal beta.", 
    "Never": "Jangan sesekali", 
    "New compatibility tables are in beta ": "Jadual keserasian baru masih beta\u00a0", 
    "New interest...": "Minat baru...", 
    "New tag...": "Tag baru...", 
    "No": "Tidak", 
    "No Highlight": "Tiada Serlahan", 
    "No attachments available": "Tiada lampiran tersedia", 
    "No selection": "Tiada pemilihan", 
    "Open": "Buka", 
    "Open implementation notes": "Buka nota implementasi", 
    "Open in %(site)s": "Buka di %(site)s", 
    "Paste YouTube Video URL": "Tampal URL Video YouTube", 
    "Published version": "Versi diterbitkan", 
    "Publishing changes\u2026": "Perubahan penerbitan\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Gagal diterbitkan. Sila salin dan tampal perubahan ke tempat yang selamat dan cuba hantar borang menggunakan butang \"Terbit\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Gagal diterbitkan. Anda tidak menglog masuk. Sila gunakan tab baru untuk mendaftar masuk dan cuba terbitkan sekali lagi.", 
    "Report an error.": "Laporkan ralat.", 
    "Reported. Thanks!": "Dilaporkan. Terima kasih!", 
    "Restore draft.": "Kembalikan semula draf.", 
    "Result": "Hasil", 
    "Return to compatibility table.": "Kembali ke jadual keserasian.", 
    "Revert": "Kembali semula", 
    "Revision history.": "Sejarah semakan.", 
    "Sample CSS Content": "Kandungan CSS Sampel", 
    "Sample Finder": "Pencari Sampel", 
    "Sample HTML Content": "Kandungan HTML Sampel", 
    "Sample JavaScript Content": "Kandungan JavaScript Sampel", 
    "Search Stack Overflow": "Carian Stack Overflow", 
    "Sections in Document": "Bahagian dalam Dokumen", 
    "Select a section": "Pilih bahagian", 
    "Select an attachment": "Pilih lampiran", 
    "Selected: ": "Dipilih:\u00a0", 
    "Show old table.": "Papar jadual lama.", 
    "Submitted as %(submissionType)s": "Dihantar sebagai %(submissionType)s", 
    "Submitting...": "Menghantar...", 
    "Syntax Highlighter": "Penyerlah Sintaks", 
    "Take the survey": "Sertai kaji selidik", 
    "The URL you've entered doesn't appear to be valid": "URL yang anda masukkan tidak sah", 
    "URL": "URL", 
    "Updated filters.": "Penapis dikemaskini.", 
    "View Page": "Papar Halaman", 
    "View draft.": "Papar draf.", 
    "Viewing old draft. This draft cannot be published.": "Memaparkan draf yang lama. Draf ini tidak boleh diterbitkan.", 
    "What should the sample title be?": "Apa tajuk sampel?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Bolehkah anda jawab 4 soalan ini untuk kami? <a %(url)s>Buka kaji selidik di dalam tab baru</a> dan isikan apabila anda sudah selesai melayari laman ini. Terima kasih!", 
    "Yes": "Ya", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Anda sedang melihat laman ini dalam bahasa %(localeName)s. Adakah anda mahu sentiasa melihat laman ini dalam bahasa %(localeName)s?", 
    "You have a draft from: %(time)s.": "Anda ada draf dari: %(time)s.", 
    "You must input a valid YouTube video URL.": "Anda mesti masukkan input URL video YouTube yang sah.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Pelayar anda tidak menyokong MathML. Sebaliknya, menggunakan gantian CSS.", 
    "an unknown date": "tarikh yang tidak diketahui"
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

