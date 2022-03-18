var main_music = document.createElement("audio");
main_music.src = main_music_src;
main_music.loop = true;

var intense_music = document.createElement("audio");
intense_music.src = intense_music_src;
intense_music.loop = true;

var alabaster_music = document.createElement("audio");
alabaster_music.src = alabaster_music_src;
alabaster_music.loop = true;

var music_on = true;
var current_music = main_music;

var ready_for_input_sound = document.createElement("audio");
ready_for_input_sound.src = ready_for_input_sound_src;

var success_sound = document.createElement("audio");
success_sound.src = success_sound_src;

var failure_sound = document.createElement("audio");
failure_sound.src = failure_sound_src;
