
const WIDTH = 720.0;
const HEIGHT = 480.0;
const codec = "vp09.00.41.08";
const framerate = 15;
const totalFrames = 30;

const encoderConfig = {
  codec,
  width: WIDTH,
  height: HEIGHT,
  framerate,
};

var msg = JSON.stringify(["tinker", "tailor", "soldier", "spy"])
var ccd = new TextEncoder().encode(msg)
var token = new TextEncoder().encode("token")

var config_params = { 
  token: token, 
  ccd: ccd,
  frames: 30 
}

const video = document.getElementById("iproov-video");

if (!window.VideoEncoder) {
  alert(
    "WebCodecs is not enabled on this browser - have you enabled the relevant flags?"
  );
}

const isWebAssemblySupported = () => {
  try {
    if (typeof WebAssembly === "object") {
      const module = new WebAssembly.Module(
        new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
      );
      if (module instanceof WebAssembly.Module) {
        const moduleInstance = new WebAssembly.Instance(module);
        return moduleInstance instanceof WebAssembly.Instance;
      }
    }
  } catch (err) {
    console.log(err);
  }

  return false;
}

