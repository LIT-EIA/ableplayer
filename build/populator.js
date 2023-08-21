$("html").prop("lang", playerLanguage);
$('title').text(videoTitle);
$('#videotitle').text(videoTitle);
$(document).ready(function() {

    $('#videoholder').css('width', 'videoWidth');
    $('#videoholder').css('height', 'videoHeight');

    $('#videoplayer').attr({
        'width': videoWidth,
        'height': videoHeight,
        'poster': posterSource,
    });

    var source = $('<source />', {
        src: videoSource,
        type: 'video/mp4',
    });
    var track = $('<track />', {
        kind: "captions",
        src: CCSource,
        srclang: videoLanguage,
        label: (playerLanguage == "en") ? (videoLanguage == "en" ? CCName_ENPlayer_ENVideo : CCName_ENPlayer_FRVideo) : (videoLanguage == "en" ? CCName_FRPlayer_ENVideo : CCName_FRPlayer_FRVideo)
    });

    var transcript = $('<div style="width:' + videoWidth + 'px; margin:auto"><p>' + ((playerLanguage == "en") ? transcriptTagEN : transcriptTagFR) + '</p></div>');

    source.appendTo($('#videoplayer'));
    track.appendTo($('#videoplayer'));
    transcript.appendTo($('body'));

    if (typeof additionalTrackNames !== 'undefined') {
        for (var i = 0; i < additionalTrackNames.length; i++) {
            var temptrack = $('<track />', {
                kind: additionalTrackTypes[i],
                src: additionalTrackSources[i],
                srclang: additionalTrackLanguages[i],
                label: additionalTrackNames[i]
            });
            temptrack.appendTo($('#videoplayer'));
        }
    }

});