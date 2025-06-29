// Soup's YouTube Ad Skipper
// 
// Paste this script into this website if you want a bookmarklet:
// https://chriszarate.github.io/bookmarkleter/

function soup_auto_skipper() {
  // Check for already existing soup auto skipper
  if (document.getElementById('soup-skip-container') != null) {
    alert('Soup\'s YouTube Ad Skipper was already embedded.');
    return;
  }
  
  // Check if on YouTube
  if (!window.location.href.startsWith('https://www.youtube.com')) {
    alert('Soup\'s YouTube Ad Skipper can only be embedded when YouTube is selected.');
  }

  // Create buttons
  var controls_div = document.getElementsByClassName('ytp-left-controls')[0];
  var skip_div = document.createElement('div');
  skip_div.id = 'soup-skip-container';
  skip_div.innerHTML = '<button id="soup-skip" style="background-color: #44444400; color: #eeeeee; width: 60px; height: 30px; margin-left: 10px; font-family: &quot;YouTube Noto&quot;,Roboto,Arial,Helvetica,sans-serif; cursor: pointer; position: relative: bottom: 2px;"><p><strong>Skip</strong></p></button>';
  controls_div.appendChild(skip_div);
  var auto_skip_div = document.createElement('div');
  auto_skip_div.id = 'soup-auto-skip-container';
  auto_skip_div.innerHTML = '<button id="soup-auto-skip" style="background-color: #44444400; color: #eeeeee; width: 100px; height: 30px; margin-left: 10px; font-family: &quot;YouTube Noto&quot;,Roboto,Arial,Helvetica,sans-serif; cursor: pointer; position: relative; top: 0.75px;"><p><strong id="soup-auto-skip-text">✕ Auto-Skip</strong></p></button>';
  controls_div.appendChild(auto_skip_div);
  var skip_button = document.getElementById('soup-skip');
  var auto_skip_button = document.getElementById('soup-auto-skip');
  var auto_skip_text = document.getElementById('soup-auto-skip-text');

  // Skip functionality
  var skip_function = function() {
    if (document.getElementsByClassName('ytp-ad-badge__text--clean-player')[0] != null) {
      var video_player = document.getElementsByClassName('html5-main-video')[0];
      video_player.currentTime = video_player.duration;
    }
  }
  skip_button.onclick = skip_function;
  
  // Auto-skip functionality
  var auto_skip = false;
  var interval = null;
  auto_skip_button.onclick = function() {
    auto_skip = !auto_skip;
    if (auto_skip) {
      auto_skip_text.innerHTML = '✓ Auto-Skip';
      interval = setInterval(skip_function, 50);
    } else {
      auto_skip_text.innerHTML = '✕ Auto-Skip';
      clearInterval(interval);
    }
  }
  
  alert('Soup\'s YouTube Ad Skipper successfully embedded!');
}

soup_auto_skipper();
