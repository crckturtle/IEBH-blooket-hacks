/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var e,o=document.createElement("iframe");document.body.append(o),window.confirm=o.contentWindow.confirm.bind(window),window.console.log=o.contentWindow.console.log.bind(window),o.style.display="none",(await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/rush/setBlooks.js"==e.question)?.answers?.[0]))<1682808883522||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats"))&&(console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsetBlooks.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem",""),o=document.createElement("iframe"),document.body.append(o),window.prompt=o.contentWindow.prompt.bind(window),o.remove(),o=Number(parseInt(prompt("How many blooks do you want?"))),e=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"],e.setState({numBlooks:o}),e.isTeam?e.props.liveGameController.setVal({path:`a/${e.props.client.name}/bs`,val:o}):e.props.liveGameController.setVal({path:`c/${e.props.client.name}/bs`,val:numDefense}))})();