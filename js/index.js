function formatElapsedTime() 
{
  const currentTime = new Date();
  const lastStreamEndTime = new Date("2025-02-01T03:06:45Z");
  // in milliseconds
  const timeSinceStream = currentTime.getTime() - lastStreamEndTime.getTime();
  
  const secondsPart = Math.floor((timeSinceStream % (1000 * 60)) / 1000);
  const minutesPart = Math.floor((timeSinceStream % (1000 * 60 * 60)) / (1000 * 60));
  const hoursPart = Math.floor((timeSinceStream % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const daysPart = Math.floor(timeSinceStream / (1000 * 60 * 60 * 24));

  
  return `${daysPart} days, ${hoursPart} hours, ${minutesPart} minutes, and ${secondsPart} seconds without Nerissa`;
}

function updateTimeSinceNerissaElement() 
{
  document.getElementById("how-long-since-stream").textContent = formatElapsedTime();
}

updateTimeSinceNerissaElement();
setInterval(updateTimeSinceNerissaElement, 1000);
//--------------------------------------------------------------------
/*const nerissaStreams = ["2QPj2hPm8vM", "aO9Te463qBQ", "sjjPriB-0xw", "PJSd7DYlGNo", "SOLsTnPzmAE", "1Fi1_gTTqwU",
                        "gtAt6xfeuFo", "qGEyKRT9Oj0", "hOX5wf06LN4", "JcdYQ3ApqWg", "pGQBbTk164s", "5s-O3oluZJM",
                        "8wpwqJ0_BGA", "gg3SrFzHn9M", "2Nob6f5dy7c", "vyvA71ABpRo", "T6qmfEr8ypo", "uq7T_akcUg0"];

function buildRandomNerissaStreamLink() 
{

  const randomIndex = Math.floor(Math.random() * nerissaStreams.length);
  const streamContainer = document.getElementById("randomStream");

  const existingLink = streamContainer.querySelector("a");
  if (existingLink)
    streamContainer.removeChild(existingLink);

  const streamLink = document.createElement("a");

  streamLink.addEventListener("click", function(event)
  {
    buildRandomNerissaStreamLink();
  });

  streamLink.href = `https://youtube.com/watch?v=${nerissaStreams[randomIndex]}`;
  streamLink.textContent = "random Nerissa stream vod";
  streamLink.target = "_blank";
  streamContainer.appendChild(streamLink);
}

//builds the first link upon page load
buildRandomNerissaStreamLink();*/