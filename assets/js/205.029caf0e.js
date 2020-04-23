(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{440:function(e,t,i){"use strict";i.r(t);var s=i(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"manually-claim-0conf-deposits-using-linux"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#manually-claim-0conf-deposits-using-linux"}},[e._v("#")]),e._v(" Manually Claim 0conf Deposits Using Linux")]),e._v(" "),i("p",[e._v("If you are having trouble with claiming your "),i("code",[e._v("0conf")]),e._v(" deposit using the GUI, fear not. The deposits are safe as long as you have your "),i("code",[e._v("passphrase")]),e._v(" and "),i("code",[e._v("txid")]),e._v(". Follow this guide accordingly and you will be able to claim your deposit. This guide will be helpful for both GUI and CLI users for claiming.")]),e._v(" "),i("p",[e._v("Note: Linux is needed to follow this guide and claim deposits using terminal window a.k.a. CLI.")]),e._v(" "),i("p",[e._v("Requirements:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Komodo (KMD) running in native mode, blockchain fully synced and passphrase imported; "),i("RouterLink",{attrs:{to:"/komodo/installation.html"}},[e._v("instructions.")])],1)]),e._v(" "),i("li",[i("p",[e._v("Deposit txid/deposit files")])]),e._v(" "),i("li",[i("p",[e._v("Latest mmV1 - "),i("RouterLink",{attrs:{to:"/mmV1/installation/install-marketmakerV1.html"}},[e._v("Instructions")])],1)])]),e._v(" "),i("h2",{attrs:{id:"prepare-the-0conf-deposit-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-0conf-deposit-files"}},[e._v("#")]),e._v(" Prepare the 0conf deposit files")]),e._v(" "),i("h3",{attrs:{id:"for-users-with-deposit-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#for-users-with-deposit-files"}},[e._v("#")]),e._v(" For users with deposit files")]),e._v(" "),i("p",[e._v("If you have the deposit files, you can just use them to claim and don't have to worry about re-creating them from. Just copy them to "),i("code",[e._v("~/SuperNET/iguana/DB/")]),e._v(" dir inside the CLI installation.")]),e._v(" "),i("h4",{attrs:{id:"cli"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),i("p",[e._v("CLI users already should have these files created inside that dir. Just check that you have all the files inside the dir "),i("code",[e._v("~/SuperNET/iguana/DB/")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"gui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gui"}},[e._v("#")]),e._v(" GUI")]),e._v(" "),i("p",[e._v("If using GUI, 0conf deposit files can be found inside the BarterDEX data dir called DB which is inside . So, the directory structure is "),i("code",[e._v(".BarterDEX/DB")]),e._v(" in user home directory. This directory is hidden in all OS. In Linux the data dir is "),i("code",[e._v(".BarterDEX")]),e._v(" in user home. In Windows it is "),i("code",[e._v("%appdata%/BarterDEX")]),e._v(".")]),e._v(" "),i("p",[e._v("Inside the DB dir you will find various files which are your 0conf deposit files. Example:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("-rw-rw-r-- 1 devx devx  64 Dec 12 13:32 deposits.RANyPgfZZLhSjQB9jrzztSw66zMMYDZuxQ\n-rw-rw-r-- 1 devx devx   0 Dec 10 12:56 deposits.RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn\n-rw-rw-r-- 1 devx devx  69 Dec 10 11:04 instantdex.json\n-rw-rw-r-- 1 devx devx 137 Jan  9 11:59 instantdex_RANyPgfZZLhSjQB9jrzztSw66zMMYDZuxQ_append.json\n-rw-rw-r-- 1 devx devx  69 Jan  9 11:59 instantdex_RANyPgfZZLhSjQB9jrzztSw66zMMYDZuxQ.json\n-rw-rw-r-- 1 devx devx   3 Jan  9 11:58 instantdex_RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn_append.json\n-rw-rw-r-- 1 devx devx   3 Jan  9 11:58 instantdex_RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn.json\n")])])]),i("p",[e._v("Copy these files inside "),i("code",[e._v("~/SuperNET/iguana/DB/")]),e._v(" dir to be used by the CLI.")]),e._v(" "),i("h3",{attrs:{id:"users-with-txid-only"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#users-with-txid-only"}},[e._v("#")]),e._v(" Users with txid only")]),e._v(" "),i("p",[e._v("This can be used by all users. You need to put the "),i("code",[e._v("txid")]),e._v(" of the 0conf deposit in an "),i("code",[e._v("instantdex.json")]),e._v(" file inside "),i("code",[e._v("~/SuperNET/iguana/DB/")]),e._v(" dir. The content inside "),i("code",[e._v("instantdex.json")]),e._v(" should look like following:")]),e._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),i("span",{pre:!0,attrs:{class:"token string"}},[e._v('"d5705d948a5a4e0171acec3eb718ca1421ef998b37d0af5c37ac3b440898aef5"')]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".\n")])])]),i("p",[e._v("You can use multiple txid usig a "),i("code",[e._v(",")]),e._v(" inbetween the txids. Once you start native KMD and run BarterDEX the deposit files will be created automatically.")]),e._v(" "),i("h2",{attrs:{id:"process-of-claiming"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#process-of-claiming"}},[e._v("#")]),e._v(" Process of claiming")]),e._v(" "),i("p",[e._v("By now you should have all the deposit files ready inside "),i("code",[e._v("~/SuperNET/iguana/DB/")]),e._v(" if you been following this guide without any errors. Now, is the time to claim them.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Start KMD in native mode using Agama or "),i("code",[e._v("komodod")]),e._v(", let the blockchain load.")])]),e._v(" "),i("li",[i("p",[e._v("Start BarterDEX by issuing "),i("code",[e._v("./client")]),e._v(" script in one terminal and let it running. Output from this terminal is very important for troubleshooting purposes.")])]),e._v(" "),i("li",[i("p",[e._v("Open another terminal and use "),i("code",[e._v("./buy")]),e._v(" or any other script as the first API call which will not do anything except showing you coin wallet smartaddress and info.")])]),e._v(" "),i("li",[i("p",[e._v("KMD will be activated automatically if you are running native mode.")])]),e._v(" "),i("li",[i("p",[e._v("Verify you have the deposits working by issuing "),i("code",[e._v("./balance")]),e._v(" script for KMD smarataddress. It will show you "),i("code",[e._v("zcredits")]),e._v(" and the amount in the output.")])]),e._v(" "),i("li",[i("p",[e._v("Use "),i("code",[e._v("./claim")]),e._v(" script. This will claim your 0conf deposit. You may have to wait some time to get back your deposit as this may not be instant.")])])]),e._v(" "),i("p",[e._v("Useful Link: "),i("RouterLink",{attrs:{to:"/mmV1/guides/0conf-deposit-claim.html"}},[e._v("Processing InstantDEX swap on barterDEX")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);