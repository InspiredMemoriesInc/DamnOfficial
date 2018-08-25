

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
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Versi terbaru dari artikel ini telah ditayangkan sejak rancangan ini disimpan. Anda dapat mengembalikan rancangan untuk melihat isinya, namun Anda tidak dapat menayangkannya.", 
    "Article Title Lookup / Link Text": "Pencarian Judul Artikel / Tautan Teks", 
    "Aspect ratio": "Rasio aspek", 
    "Attachments": "Lampiran", 
    "Autosave enabled.": "Simpan-otomatis diaktifkan.", 
    "CSS": "CSS", 
    "Changes saved.": "Perubahan disimpan.", 
    "Close": "Tutup", 
    "Close notification": "Tutup notifikasi", 
    "Close submenu": "Tutup submenu", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Bandingkan tanggal ini dengan tanggal revisi terbaru untuk memastikan Anda tidak sedang menimpa perubahan.", 
    "Create a Redirect": "Membuat Pengalihan", 
    "Default": "Bawaan", 
    "Details": "Rincian", 
    "Discard draft.": "Buang rancangan.", 
    "Document": "Dokumen", 
    "Draft autosaved:": "Rancangan disimpan otomatis:", 
    "Draft discarded.": "Rancangan dibuang.", 
    "Draft discarded:": "Rancangan dibuang:", 
    "Draft published:": "Rancangan ditayangkan:", 
    "Draft restored.": "Rancangan dikembalikan.", 
    "Edit Page": "Sunting Laman", 
    "Embed YouTube Video": "Melekatkan Video YouTube", 
    "Error submitting as %(type)s": "Gagal mengirimkan sebagai %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Tunggu! Memperbarui filter\u2026", 
    "History": "Riwayat", 
    "Insert Code Sample Template": "Menyisipkan Contoh Kode Template", 
    "Insert Code Sample iFrame": "Menyisipkan Contoh Kode iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "Luncurkan", 
    "Locate a YouTube Video": "Menemukan sebuah Video YouTube", 
    "MDN Redirect": "Pengalihan MDN", 
    "More about the beta.": "Lebih lanjut tentang versi beta.", 
    "Never": "Jangan pernah", 
    "New compatibility tables are in beta ": "Tabel kompatibilitas baru tersedia dalam versi beta ", 
    "New interest...": "Minat baru...", 
    "New tag...": "Tag baru...", 
    "No": "Tidak", 
    "No Highlight": "Tak Ada Penanda", 
    "No attachments available": "Lampiran tidak tersedia", 
    "No selection": "Tidak ada pilihan", 
    "Open": "Buka", 
    "Open implementation notes": "Catatan implementasi terbuka", 
    "Open in %(site)s": "Buka di %(site)s", 
    "Paste YouTube Video URL": "Menyalin URL Video YouTube", 
    "Published version": "Versi tayang", 
    "Publishing changes\u2026": "Menayangkan perubahan\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Penayangan gagal. Salin dan tempel perubahan Anda ke tempat yang aman dan coba kirim formulir tersebut menggunakan tombol \"Tayangkan\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Penerbitan gagal. Anda belum masuk. Buka tab baru untuk masuk dan coba tayangkan kembali.", 
    "Report an error.": "Melaporkan kesalahan.", 
    "Reported. Thanks!": "Dilaporkan. Terima kasih!", 
    "Restore draft.": "Kembalikan rancangan.", 
    "Result": "Hasil", 
    "Return to compatibility table.": "Kembali ke tabel kompatibilitas.", 
    "Revert": "Kembalikan", 
    "Revision history.": "Riwayat revisi.", 
    "Sample CSS Content": "Contoh Konten CSS", 
    "Sample Finder": "Contoh Finder", 
    "Sample HTML Content": "Contoh Konten HTML", 
    "Sample JavaScript Content": "Contoh Konten JavaScript", 
    "Search Stack Overflow": "Cari Stack Overflow", 
    "Sections in Document": "Bagian dalam Dokumen", 
    "Select a section": "Memilih bagian", 
    "Select an attachment": "Pilih lampiran", 
    "Selected: ": "Terpilih: ", 
    "Show old table.": "Tampilkan tabel lama.", 
    "Submitted as %(submissionType)s": "Dikirim sebagai %(submissionType)s", 
    "Submitting...": "Mengirim...", 
    "Syntax Highlighter": "Penanda Sintaksis", 
    "Take the survey": "Isilah survei", 
    "The URL you've entered doesn't appear to be valid": "URL yang anda masukkan sepertinya tidak benar", 
    "URL": "URL", 
    "Updated filters.": "Filter diperbarui.", 
    "View Page": "Lihat Laman", 
    "View draft.": "Tampilkan rancangan.", 
    "Viewing old draft. This draft cannot be published.": "Melihat rancangan lama. Rancangan ini tidak dapat ditayangkan.", 
    "What should the sample title be?": "Apa yang sebaiknya menjadi contoh judul?", 
    "Yes": "Ya", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Anda sedang melihat situs ini dalam bahasa %(localeName)s. Anda ingin selalu melihat situs ini dalam bahasa %(localeName)s?", 
    "You have a draft from: %(time)s.": "Anda memiliki rancangan dari: %(time)s.", 
    "You must input a valid YouTube video URL.": "Anda harus memasukkan URL Video YouTube yang benar.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Peramban anda tidak mendukung MathML. Sebuah sandaran CSS telah digunakan sebagai gantinya.", 
    "an unknown date": "tanggal yang tidak diketahui"
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
    "DATETIME_FORMAT": "j N Y, G.i", 
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y %H.%M.%S", 
      "%d-%m-%Y %H.%M.%S.%f", 
      "%d-%m-%Y %H.%M", 
      "%d-%m-%Y", 
      "%d-%m-%y %H.%M.%S", 
      "%d-%m-%y %H.%M.%S.%f", 
      "%d-%m-%y %H.%M", 
      "%d-%m-%y", 
      "%m/%d/%y %H.%M.%S", 
      "%m/%d/%y %H.%M.%S.%f", 
      "%m/%d/%y %H.%M", 
      "%m/%d/%y", 
      "%m/%d/%Y %H.%M.%S", 
      "%m/%d/%Y %H.%M.%S.%f", 
      "%m/%d/%Y %H.%M", 
      "%m/%d/%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j N Y", 
    "DATE_INPUT_FORMATS": [
      "%d-%m-%y", 
      "%d/%m/%y", 
      "%d-%m-%Y", 
      "%d/%m/%Y", 
      "%d %b %Y", 
      "%d %B %Y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d-m-Y G.i", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "G.i", 
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S", 
      "%H.%M", 
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

