/**
 * Flow structure
 * 
 * Authentication of client id
 *      if not authenticated:
 *          exit;
 * 
 *      if authenticated:
 *          Load integrations list ( another JS file ) -----> as a response from authentication API
 *          Create UI boiler plate
 *          Append integrations list
 *          
 *          Render UI
 * 
 */
const API = 'http://localhost:3000/clients'

const authenticate = async () => {
    try {
        const host = window.location.host || "" ;
        const id = Number(host == "localhost:3000")
        // const clientId = document.currentScript.getAttribute('clientId') || "" ;
    
        const data = await fetch(`${API}/${id}`).then(response => response.json());
        /**
         * data format : { token, settings, expireAt }
         */
        const { token, settings } = data;
        if(data.enabled) {
            localStorage.setItem("genieweb-token", token);
            localStorage.setItem("genieweb-settings", settings);
            initiateWidget()
        }
    
    } catch (error) {
        console.error("error loading genie widget")
    }
};

// authenticate()

var importFile = (filename, type="JS") => {
    console.log("import file")
    const head = document.getElementsByTagName('head')[0];

    if(type === "JS"){

        const script = document.createElement('script');
        script.src = filename;
        script.type = 'text/javascript';
        head.appendChild(script)

    } else if (type === "CSS") {

        const styleSheet = document.createElement("link");
        styleSheet.rel = "stylesheet";
        styleSheet.href = filename;
        head.appendChild(styleSheet);
    }

}

const initiateWidget = () => {
    /**
     * Import CSS file
     * Draw widget, append the apps
     * Render the app
     */
    importFile('./genie-widget.css', 'CSS')
    importFile('./genie-widget.js', 'JS')
    // importFile('https://assets.geniebutton.com/genie-widget.css', 'CSS')
    // importFile('https://assets.geniebutton.com/genie-widget.js', 'JS')
    
}

initiateWidget()