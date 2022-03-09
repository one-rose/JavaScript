let browser = "Chrome";

switch (browser) {
    case "Explorer":
        msg = "ActiveX installation required.";
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        msg = "Supported browsers!";
        break;

    default:
        msg = "Unsupported browsers!";
        break;
}

console.log(msg); // output: Supported browsers!