var script = document.createElement('script');
script.src = "https://cdn.tailwindcss.com";
script.type = "text/javascript";
document.head.appendChild(script);
const widget = document.createElement('div');

const geniebuttonOpenWhatsapp = () => {
  widget.innerHTML = whatsappContainer; // widgetContainer;
}

const settings = JSON.parse(localStorage.getItem('genieweb-settings') || "{}");

const { buttonConfiguration: { buttonStyle = '', animation: { enabled = false, animation = '' } = {}, } = {}, agents = [] } = settings;

const whatsappAgents = agents.find(a => a.type == "WhatsApp");

const agentUI = whatsappAgents.children.map((a) => {
  const { agentImage, agentName, agentPosition, number, preFilledMessage="" } = a;
  const agentIcon = agentImage || "/icons-new/whatsapp-color.png";


  const htmlElement = `
  <Link href="https://wa.me/+916361963375" class="flex items-center justify-between p-2 mx-2 rounded-md border-[1px] border-gray-400" >
    <div class="flex items-center" >
      <Image class="h-10 w-10 rounded-3xl" src=${agentIcon} height={200} width={200} />
      <div class="flex flex-col">
        <span class="text-sm font-bold text-gray-800" >${agentName}</span>
        <span class="text-sm text-gray-400" >${agentPosition}</span>
      </div>
    </div>
    <div>
      <Image class="h-7 w-7 rounded-3xl" src="/icons-new/whatsapp-color.png" height={200} width={200} />
    </div>
  </Link>
`

return htmlElement;
})

console.log(agentUI)

const whatsappContainer = `
<div class="flex flex-col items-end gap-4 fixed bottom-4 right-4" >
        <div class="rounded-2xl h-fit w-[300px] bg-white" >
          <div class="h-[70px] w-full rounded-t-2xl bg-green-600 flex justify-between items-center p-4" >
            <div class="flex items-center gap-2" >
              <div class="flex items-end" >
                <Image class="h-12 w-12 rounded-3xl" src="/icons-new/whatsapp-color.png" height={200} width={200} />
                <span class="h-[10px] w-[10px] bg-green-600 flex rounded-full relative right-2 bottom-1" ></span>
              </div>
              <div class="flex text flex-col gap-0 text-white" >
                <span class="font-semibold" >Start a Conversation</span>
                <span class="text-xs mr-4" >Click one of our members below to chat</span>
              </div>
            </div>
            <div class="flex flex-col" >
              <span class="bg-white text-2xl w-6 h-0.5 rotate-45" ></span>
              <span class="bg-white text-2xl w-6 h-0.5 -rotate-45" ></span>
            </div>
          </div>

          <div class="flex flex-col p-1" >
            <div class="flex flex-col gap-2 m-2" id="agents-list">

              <Link href="https://wa.me/+916361963375" class="flex items-center justify-between p-2 mx-2 rounded-md border-[1px] border-gray-400" >
                <div class="flex items-center" >
                  <Image class="h-10 w-10 rounded-3xl" src="/icons-new/whatsapp-color.png" height={200} width={200} />
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-gray-800" >asdf</span>
                    <span class="text-sm text-gray-400" >asdfasdfasdf</span>
                  </div>
                </div>
                <div>
                  <Image class="h-7 w-7 rounded-3xl" src="/icons-new/whatsapp-color.png" height={200} width={200} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div class="w-[300px] flex mt-6 justify-end" >
          <span class="h-16 w-16 p-2 bg-gray-700 rounded-full flex justify-center items-center" >
            <span class="bg-white h-full w-full rounded-full flex" ></span>
          </span>
          <span class="h-4 w-4 p-0.5 text-white text-[12px] flex justify-center items-center bg-red-600 rounded-full relative right-2 top-2" >1</span>
        </div>
      </div>
`

const widgetContainer = `
    <div class="flex flex-col items-end gap-4 fixed bottom-4 right-4">
        <div class="rounded-2xl h-fit w-[300px] bg-white">
            <div class="h-[70px] w-full rounded-t-2xl bg-gray-700 flex justify-between items-center p-4">
                <div class="flex items-center gap-2">
                    <div class="flex items-end">
                        <img loading="lazy" width="200" height="200" decoding="async" data-nimg="1" class="h-12 w-12 rounded-3xl  border-2 border-white" style="color:transparent" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" />
                        <span class="h-[10px] w-[10px] bg-green-600 flex rounded-full relative right-2 bottom-1"></span>
                    </div>
                    <div class="flex text-xs flex-col gap-0 text-white">
                        <span class="font-semibold">Bob</span>
                        <span>Manager</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class="bg-white text-2xl w-6 h-0.5 rotate-45"></span>
                    <span class="bg-white text-2xl w-6 h-0.5 -rotate-45"></span>
                </div>
            </div>
            <div class="flex flex-col p-1">
                <div class="flex justify-center">
                    <span class="text-xs opacity-60 py-2">12:00</span>
                </div>
                <div class="flex justify-evenly px-3 py-2 gap-2">
                    <img loading="lazy" width="150" height="150" decoding="async" data-nimg="1" class="h-9 w-9 rounded-3xl" style="color:transparent" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" />
                    <span class="text-xs p-2 bg-gray-300 opacity-95 text-gray-800 rounded-xl rounded-tl-none">Hello, how may we help you? Just send us a message now to get assistance.</span>
                </div>
                <div class="flex flex-col text-center pt-4 text-xs font-bold">
                    <span>Start Chat With:</span>
                    <div class="flex">
                        <img loading="lazy" width="60" height="60" decoding="async" data-nimg="1" class="h-10 w-10" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" style="color: transparent;" />
                        <img loading="lazy" width="60" height="60" decoding="async" data-nimg="1" class="h-10 w-10" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" style="color: transparent;" />
                        <img loading="lazy" width="60" height="60" decoding="async" data-nimg="1" class="h-10 w-10" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" style="color: transparent;" />
                    </div>
                </div>
            </div>
        </div>
        <div class="h-16 w-16 rounded-full bg-gray-600 shadow-md border-[1px] border-white">
            <img loading="lazy" width="60" height="60" decoding="async" data-nimg="1" class="p-1 rounded-full" style="color:transparent" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" />
        </div>
    </div>
`

const renderWidget = () => {
  const widgetContainerV1 = `
    <div class="flex flex-col items-end gap-4 fixed bottom-4 right-4">
        <div class="rounded-2xl h-fit w-[300px] bg-white">
            <div class="h-[70px] w-full rounded-t-2xl bg-gray-700 flex justify-between items-center p-4">
                <div class="flex items-center gap-2">
                    <div class="flex items-end">
                        <img loading="lazy" width="200" height="200" decoding="async" data-nimg="1" class="h-12 w-12 rounded-3xl  border-2 border-white" style="color:transparent" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" />
                        <span class="h-[10px] w-[10px] bg-green-600 flex rounded-full relative right-2 bottom-1"></span>
                    </div>
                    <div class="flex text-xs flex-col gap-0 text-white">
                        <span class="font-semibold">Bob</span>
                        <span>Manager</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class="bg-white text-2xl w-6 h-0.5 rotate-45"></span>
                    <span class="bg-white text-2xl w-6 h-0.5 -rotate-45"></span>
                </div>
            </div>
            <div class="flex flex-col p-1">
                <div class="flex justify-center">
                    <span class="text-xs opacity-60 py-2">12:00</span>
                </div>
                <div class="flex justify-evenly px-3 py-2 gap-2">
                    <img loading="lazy" width="150" height="150" decoding="async" data-nimg="1" class="h-9 w-9 rounded-3xl" style="color:transparent" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" />
                    <span class="text-xs p-2 bg-gray-300 opacity-95 text-gray-800 rounded-xl rounded-tl-none">Hello, how may we help you? Just send us a message now to get assistance.</span>
                </div>
                <div class="flex flex-col text-center pt-4 text-xs font-bold">
                    <span>Start Chat With:</span>
                    <div class="flex">
                        <div class="bg-green-500 text-white w-full p-2 rounded-md my-4 cursor-pointer" onclick="geniebuttonOpenWhatsapp()" >WhatsApp</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-16 w-16 ${buttonStyle == "Rectangle" ? 'rounded-md' : 'rounded-full'} bg-gray-600 shadow-md border-[1px] border-white">
            <img loading="lazy" width="60" height="60" decoding="async" data-nimg="1" class="p-1 ${buttonStyle == "Rectangle" ? 'rounded-md' : 'rounded-full'}" style="color:transparent" src="https://img.freepik.com/free-photo/tree-defying-laws-gravity-by-floating-air_23-2151122867.jpg" />
        </div>
    </div>
`
  widget.innerHTML = widgetContainerV1;

  document.body.append(widget)
}

renderWidget()