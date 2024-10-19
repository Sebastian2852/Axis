"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[795],{42864:e=>{e.exports=JSON.parse('{"functions":[{"name":"PhaseOne","desc":"All Axis core objects like events are created, this sets all roblox related properties and setups up anthing roblox-wise","params":[],"returns":[{"desc":"Was the phase successful","lua_type":"bool"}],"function_type":"method","source":{"line":17,"path":"Axis/ServerScriptService/Kernel/Bootstrapper.luau"}},{"name":"PhaseTwo","desc":"Any roblox functions/events are connected with functions.","params":[],"returns":[{"desc":"Was the phase successful","lua_type":"bool"}],"function_type":"method","source":{"line":28,"path":"Axis/ServerScriptService/Kernel/Bootstrapper.luau"}},{"name":"PhaseThree","desc":"Initializes and Starts all modules added to by the developer","params":[],"returns":[{"desc":"Was the phase successful","lua_type":"bool"}],"function_type":"method","source":{"line":45,"path":"Axis/ServerScriptService/Kernel/Bootstrapper.luau"}},{"name":"ApplyPlayerConfig","desc":"Applies the current player config to the given player","params":[{"name":"Player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","source":{"line":62,"path":"Axis/ServerScriptService/Kernel/Bootstrapper.luau"}},{"name":"ApplyCharacterConfig","desc":"Applies the current player config to the given player\'s character","params":[{"name":"Player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","errors":[{"lua_type":"\\"Player currently doesn\'t have a character\\"","desc":"Error happens when the function is called but the player\'s character does not yet exist"}],"yields":true,"source":{"line":80,"path":"Axis/ServerScriptService/Kernel/Bootstrapper.luau"}},{"name":"BootSequence","desc":"Executes all the phases in order","params":[],"returns":[{"desc":"","lua_type":"bool"}],"function_type":"method","source":{"line":97,"path":"Axis/ServerScriptService/Kernel/Bootstrapper.luau"}}],"properties":[],"types":[],"name":"Bootstrap","desc":"Internal module only to be used by Axis itself","source":{"line":7,"path":"Axis/ServerScriptService/Kernel/Bootstrapper.luau"}}')}}]);