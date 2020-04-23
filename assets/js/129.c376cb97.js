(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{362:function(e,a,t){"use strict";t.r(a);var s=t(0),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"subatomic-swaps-work-in-progress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subatomic-swaps-work-in-progress"}},[e._v("#")]),e._v(" Subatomic Swaps (Work In Progress)")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("This is a "),t("strong",[e._v("Work in Progress (WIP)")]),e._v(" guide for testing Komodo's new tech "),t("strong",[e._v("Subatomic OTC Swaps")]),e._v(". It works with normal CLTV channels. Read more about it "),t("a",{attrs:{href:"https://bitcoin.stackexchange.com/questions/48243/are-micropayment-channels-still-subject-to-malleability-after-bip65",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". Bugs are expected, please report them to "),t("code",[e._v("#dev_subatomic")]),e._v(" channel in "),t("a",{attrs:{href:"https://discord.gg/jrdECGj",target:"_blank",rel:"noopener noreferrer"}},[e._v("Komodo Discord"),t("OutboundLink")],1),e._v(". Please also report any incorrect info/suggestions on this guide in "),t("code",[e._v("#dev_subatomic")]),e._v(" channel or leave a comment at the end of this guide.")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[t("strong",[e._v("All chains must be native on both alice and bob nodes.")])]),e._v(" "),t("ol",[t("li",[e._v("Working CLI knowledge on Ubuntu/Debian to follow along this guide.")]),e._v(" "),t("li",[e._v("DEX chain with "),t("code",[e._v("dexp2p=2")]),e._v(", special peer IP (available in bob and alice section inside the launch param) and privkey of the R address and zAddr imported (full sync is not mandatory).")]),e._v(" "),t("li",[e._v("KMD chain "),t("code",[e._v("./komodod &")]),e._v(" - fully synced and privkey of the R address imported & funded as required.")]),e._v(" "),t("li",[e._v("PIRATE chain "),t("code",[e._v("./komodod -ac_name=PIRATE -ac_supply=0 -ac_reward=25600000000 -ac_halving=77777 -ac_private=1 -addnode=178.63.77.56 &")]),e._v(" - fully synced and privkey of the zAddr imported & funded as required.")])]),e._v(" "),t("h2",{attrs:{id:"install-deps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-deps"}},[e._v("#")]),e._v(" Install Deps")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo apt-get update && sudo apt-get upgrade -y\nsudo apt-get install build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool ncurses-dev unzip git python zlib1g-dev wget bsdmainutils automake libboost-all-dev libssl-dev libprotobuf-dev protobuf-compiler libgtest-dev libqt4-dev libqrencode-dev libdb++-dev ntp ntpdate software-properties-common curl clang libcurl4-gnutls-dev cmake clang libsodium-dev jq -y\n")])])]),t("h2",{attrs:{id:"clone-compile-and-link-komodo-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-compile-and-link-komodo-cli"}},[e._v("#")]),e._v(" Clone, Compile and Link "),t("code",[e._v("komodo-cli")])]),e._v(" "),t("p",[t("strong",[e._v("Make sure you compile "),t("code",[e._v("jl777")]),e._v(" branch from jl777's repo and don't mix the daemon from another branch or repo.")]),t("br"),e._v("\nUse the following commands in both bob and alice nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/jl777/komodo\ncd ~/komodo\ngit checkout jl777\n./zcutil/fetch-params.sh\n./zcutil/build.sh -j$(nproc)\nsudo ln -sf /home/$USER/komodo/src/komodo-cli /usr/local/bin/komodo-cli\n")])])]),t("h2",{attrs:{id:"compile-the-subatomic-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-the-subatomic-daemon"}},[e._v("#")]),e._v(" Compile the "),t("code",[e._v("subatomic")]),e._v(" daemon")]),e._v(" "),t("p",[e._v("This is the daemon that will used on subatomic OTC swaps. You will find the "),t("code",[e._v("subatomic")]),e._v(" daemon inside "),t("code",[e._v("~/komodo/src/")]),e._v(" directory once compiled. "),t("strong",[e._v("Please note: you need to have "),t("code",[e._v("gcc8")]),e._v(" to be able to compile this binary.")]),e._v(" Once the compilation finished, the binary will be available inside "),t("code",[e._v("~/komodo/src/")]),e._v(" directory. Both alice & bob nodes need this. To compile/build the daemon issue the following commands:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd ~/komodo/src/cc/dapps\n./make_subatomic.sh\ncd ../../\nln cc/dapps/subatomic.json .\n")])])]),t("h2",{attrs:{id:"bob-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bob-node"}},[e._v("#")]),e._v(" bob Node")]),e._v(" "),t("h3",{attrs:{id:"launch-dex-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launch-dex-chain"}},[e._v("#")]),e._v(" Launch DEX Chain")]),e._v(" "),t("p",[e._v("Import the privkey of the corresponding pubkey of the "),t("code",[e._v("R")]),e._v(" address and zaddr after the chain start. Make sure to change "),t("code",[e._v("-handle")]),e._v(" according to your liking and leave "),t("code",[e._v("_bob")]),e._v(" as it it for easy identification.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./komodod -pubkey=02c3af47b51a506b08b4ededb156cb4c3f9db9e0ac7ad27b8623c08a056fdcc220 -ac_name=DEX -dexp2p=2 -ac_supply=999999 -addnode=136.243.58.134 -handle=alien_bob -recvZaddr=zs1wq40g4wvrzc2eq9xw7wtstshgar68ash659eq20ellm5jeqsyfwe5qs3tex9l3mjnrj2yf34hw0 &\n")])])]),t("p",[e._v("Note:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pubkey = is the pubkey of your KMD transparent (R) address. the privkey of that address needs to be imported in both KMD and DEX wallet\nrecvZaddr = is your PIRATE receiving address. the privkey of this address also needs to be imported into both PIRATE and DEX wallet\n")])])]),t("p",[t("strong",[e._v("Important: After you have completed importing your R and zs addr privkey into the daemon, restart the DEX chain with all the params like above.")])]),e._v(" "),t("h3",{attrs:{id:"create-bid-and-ask-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-bid-and-ask-scripts"}},[e._v("#")]),e._v(" Create "),t("code",[e._v("bid")]),e._v(" and "),t("code",[e._v("ask")]),e._v(" scripts")]),e._v(" "),t("p",[e._v("Usage:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("bid: ./komodo-cli -ac_name=DEX DEX_broadcast <recvZaddr> <priority> KMD PIRATE <01pubkey> $2 $1\nask: ./komodo-cli -ac_name=DEX DEX_broadcast <recvaddr> <priority> PIRATE KMD <01pubkey> $1 $2\n")])])]),t("p",[e._v("You need to get the "),t("code",[e._v("01")]),e._v(" pubkey from the DEX chain startup standard outputs, known as "),t("code",[e._v("stdout")]),e._v(" to use inside the following scripts. For this testing we are using priority "),t("code",[e._v("5")]),e._v(". Don't forget to make the "),t("code",[e._v("bid")]),e._v(" and "),t("code",[e._v("ask")]),e._v(" scripts executable using "),t("code",[e._v("chmod +x")]),e._v(" command. For easy access and launch, create them inside the "),t("code",[e._v("~/komodo/src/")]),e._v(" directory.")]),e._v(" "),t("h5",{attrs:{id:"bid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bid"}},[e._v("#")]),e._v(" "),t("code",[e._v("bid")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./komodo-cli -ac_name=DEX DEX_broadcast zs1wq40g4wvrzc2eq9xw7wtstshgar68ash659eq20ellm5jeqsyfwe5qs3tex9l3mjnrj2yf34hw0 5 KMD PIRATE 01b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f $2 $1\n")])])]),t("h5",{attrs:{id:"ask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ask"}},[e._v("#")]),e._v(" "),t("code",[e._v("ask")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./komodo-cli -ac_name=DEX DEX_broadcast RQPZrM4yQaTZpEuoGmcGwzE4SaG2Tn9QiB 5 PIRATE KMD 01b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f $1 $2\n")])])]),t("h5",{attrs:{id:"posting-bid-ask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#posting-bid-ask"}},[e._v("#")]),e._v(" Posting "),t("code",[e._v("bid")]),e._v(" & "),t("code",[e._v("ask")])]),e._v(" "),t("p",[e._v("For both bid and ask: ./bid or ./ask PIRATEvol KMDvol, so to get a 0.1 price use the following commands:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./bid 1000 100\n./ask 1000 100\n")])])]),t("p",[t("code",[e._v("bid")]),e._v(" example output:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('./bid 1000 100\n{\n  "timestamp": 1581516364,\n  "id": 2855700768,\n  "hash": "079268a3ca4b7e426b8486608886df3fab245db089b0d90c110ee02784db28c2",\n  "tagA": "KMD",\n  "tagB": "PIRATE",\n  "pubkey": "01b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f",\n  "payload": "b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f3582d81a2a7fe1cbf178937e9aa28881c92b0d11216403600000000000000000000000000000000068d6998ab646e7b9be0293ed7f153f4c15dd687cf80f36ed5ac94de18e6436fef12bd4d368864d193ec40bd27d625c214577897ae312be9ee7e3eb7c9664487934215c463360e48de6096f88ac348b4e19b451ee7c0adac7d5578bd2c7288a",\n  "hex": 1,\n  "decrypted": "zs1wq40g4wvrzc2eq9xw7wtstshgar68ash659eq20ellm5jeqsyfwe5qs3tex9l3mjnrj2yf34hw0",\n  "decryptedhex": 0,\n  "senderpub": "01b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f",\n  "amountA": "100.00000000",\n  "amountB": "1000.00000000",\n  "priority": 5,\n  "recvtime": 1581516364,\n  "cancelled": 0\n}\n')])])]),t("p",[t("code",[e._v("ask")]),e._v(" example output:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('./ask\n{\n  "timestamp": 1581528567,\n  "id": 1900124800,\n  "hash": "07a81914b70bc3bf9fdd2de377bef941a6be52ada355882d400eb28c2e69b853",\n  "tagA": "PIRATE",\n  "tagB": "KMD",\n  "pubkey": "01b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f",\n  "payload": "b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f8554141b10696753c487b9f729e7e71ba2808c965e61deea00000000000000000000000000000000dbaa2f2af16622b63e45d351ac120b13729bc6f744c715dc1aca94d3b7b306bd258a1530ada3cb73fe166e46e7abcbff521be2",\n  "hex": 1,\n  "decrypted": "RQPZrM4yQaTZpEuoGmcGwzE4SaG2Tn9QiB",\n  "decryptedhex": 0,\n  "senderpub": "01b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f",\n  "amountA": "0.00000000",\n  "amountB": "0.00000000",\n  "priority": 7,\n  "recvtime": 1581528567,\n  "cancelled": 0\n}\n')])])]),t("p",[e._v("Remember the "),t("code",[e._v("id")]),e._v(" from the bid, the "),t("code",[e._v("alice")]),e._v(" node will need it.")]),e._v(" "),t("h3",{attrs:{id:"start-the-subatomic-loop-in-bob-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-the-subatomic-loop-in-bob-node"}},[e._v("#")]),e._v(" Start the "),t("code",[e._v("subatomic")]),e._v(" loop in bob node")]),e._v(" "),t("p",[e._v("This is how you start a bob node to perform the "),t("code",[e._v("subatomic")]),e._v(" swaps. These loops will be running long term. So, better to use individual "),t("code",[e._v("screen")]),e._v(" session for each pair your bob is running. You can attach and detach a screen without shutting down the loop.")]),e._v(" "),t("ul",[t("li",[e._v("To start a bob loop that accepts "),t("code",[e._v("PIRATE")]),e._v(" for "),t("code",[e._v("KMD")]),e._v(" use the following command in a screen session or in a separate terminal/SSH window.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('./subatomic PIRATE "" KMD\n')])])]),t("ul",[t("li",[e._v("To start a bob loop that accepts "),t("code",[e._v("KMD")]),e._v(" for "),t("code",[e._v("PIRATE")]),e._v(" use the following command in a screen session or in a separate terminal/SSH window.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('./subatomic KMD "" PIRATE\n')])])]),t("h2",{attrs:{id:"launch-dex-chain-for-alice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launch-dex-chain-for-alice"}},[e._v("#")]),e._v(" Launch DEX Chain for alice")]),e._v(" "),t("p",[e._v("Import the privkey of the corresponding pubkey of the "),t("code",[e._v("R")]),e._v(" address and zaddr after the chain start. Make sure to change "),t("code",[e._v("-handle")]),e._v(" according to your liking and leave "),t("code",[e._v("_alice")]),e._v(" as it it for easy identification.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./komodod -pubkey=038e61fbface549a850862f12ed99b7cbeef5c2bd2d8f1daddb34809416f0259e1 -ac_name=DEX -dexp2p=2 -ac_supply=999999 -addnode=136.243.58.134 -handle=alien_alice -recvZaddr=zs1r3ptv82fn0yz6q47nwmgsak2dasl0v5zrprqu222f0r3mtc5p9202t82lt2vu4wmr386v2cx4tn &\n")])])]),t("p",[e._v("Note:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pubkey = is the pubkey of your KMD transparent (R) address. the privkey of that address needs to be imported in both KMD and DEX wallet\nrecvZaddr = is your PIRATE receiving address. the privkey of this address also needs to be imported into both PIRATE and DEX wallet\n")])])]),t("p",[t("strong",[e._v("Important: After you have completed importing your R and zs addr privkey into the daemon, restart the DEX chain with all the params like above.")])]),e._v(" "),t("p",[e._v("You also need KMD and PIRATE chain in native mode in Alice node and corresponding privkey imported & funded as required. You can find the launch params of these chains "),t("a",{attrs:{href:"https://gist.github.com/himu007/add3181427bb53ab5dc5160537f0c238#requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"display-orderbook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-orderbook"}},[e._v("#")]),e._v(" Display Orderbook")]),e._v(" "),t("p",[e._v("Display orderbook data using the following example. You can change the coin name and base/rel as your liking.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./komodo-cli -ac_name=DEX DEX_orderbook 10 0 PIRATE KMD\n")])])]),t("p",[e._v("Example Output:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('./komodo-cli -ac_name=DEX DEX_orderbook 10 0 PIRATE KMD\n{\n  "asks": [\n    {\n      "price": "0.05000000",\n      "baseamount": "100.00000000",\n      "relamount": "5.00000000",\n      "priority": 6,\n      "pubkey": "01b977e90eba4e21ccaf432a7866e313682b51c350bd319c5ebbc76e176ecad44f",\n      "timestamp": 1581538693,\n      "hash": "076ce1b408a6e404ed92cd5fff589962e330f36aaf00514e217b8bf51a4e31f5",\n      "id": 2337150656\n    }\n  ],\n  "bids": [\n  ],\n  "base": "PIRATE",\n  "rel": "KMD"\n}\n')])])]),t("h3",{attrs:{id:"start-the-subatomic-swaps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-the-subatomic-swaps"}},[e._v("#")]),e._v(" Start the "),t("code",[e._v("subatomic")]),e._v(" swaps")]),e._v(" "),t("p",[e._v("Once all above are done and you have the "),t("code",[e._v("id")]),e._v(" of an order that you would like to swap with, you are ready to start a subatomic swap. All you to do is just use "),t("code",[e._v('./subatomic PIRATE "" <bid id> <fill amount>')])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('./subatomic PIRATE "" 2855700768 10\n')])])]),t("h3",{attrs:{id:"important-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-notes"}},[e._v("#")]),e._v(" Important Notes")]),e._v(" "),t("p",[t("strong",[e._v("- Remember to use small amount while testing.")]),t("br"),e._v(" "),t("strong",[e._v("- Check your balances in the corresponding wallet and make sure that this is what you expected.")]),t("br"),e._v(" "),t("strong",[e._v("- Report any bugs in #dev_subatomic channel of Komodo Discord.")]),t("br"),e._v(" "),t("strong",[e._v("- For the "),t("code",[e._v("pubkey")]),e._v(" and "),t("code",[e._v("recvZaddr")]),e._v(", use your own. Don't use the key and addresses that are used as example.")])])])}),[],!1,null,null,null);a.default=o.exports}}]);