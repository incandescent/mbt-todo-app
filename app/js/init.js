(function () {

  var jqmReady = $.Deferred(),
      pgReady = $.Deferred();

  // JQM and PhoneGap are ready
  $.when(jqmReady, pgReady).then(function () {
    // everything is ready here
  });

    // resolve phonegap
  if ("undefined" != typeof PhoneGap) {
    document.addEventListener("deviceready", pgReady.resolve, false);
  }
  else {
    pgReady.resolve();
  }

  //jqm ready
  $(document).on("mobileinit", function () {
    // init app after mobile is ready
    TD.init();
    jqmReady.resolve();
  });

})();
