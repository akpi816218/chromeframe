const isUrl = (s) => {
  try {
    let a = new URL(s);
  } catch {
    return false;
  }
  return true;
};

const url = prompt("URL:");
if (isUrl(url)) {
  const frame = document.createElement("iframe");
  frame.id = "chromeframe";
  frame.src = url;
	frame.style = "border: none; position: absolute;"
	document.body.appendChild(frame);
} else {
	alert(`Invalid URL: ${url}`)
}
