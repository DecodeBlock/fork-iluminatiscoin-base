(function (t) {
    function e(e) {
        for (var a, r, o = e[0], c = e[1], l = e[2], p = 0, d = []; p < o.length; p++) r = o[p], Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]), s[r] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        u && u(e);
        while (d.length) d.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], a = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== s[c] && (a = !1)
            }
            a && (i.splice(e--, 1), t = r(r.s = n[0]))
        }
        return t
    }
    var a = {},
        s = {
            app: 0
        },
        i = [];

    function r(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = t, r.c = a, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var a in t) r.d(n, a, function (e) {
                return t[e]
            }.bind(null, a));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var l = 0; l < o.length; l++) e(o[l]);
    var u = c;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("56d7")
    },
    "034f": function (t, e, n) {
        "use strict";
        n("85ec")
    },
    1: function (t, e) { },
    10: function (t, e) { },
    11: function (t, e) { },
    12: function (t, e) { },
    13: function (t, e) { },
    14: function (t, e) { },
    "14cc": function (t, e, n) {
        t.exports = n.p + "img/haze.ff55b9b.a0e04a38.png"
    },
    15: function (t, e) { },
    16: function (t, e) { },
    17: function (t, e) { },
    "175a": function (t, e, n) {
        t.exports = n.p + "img/apr.30ef68bf.png"
    },
    18: function (t, e) { },
    19: function (t, e) { },
    2: function (t, e) { },
    20: function (t, e) { },
    21: function (t, e) { },
    22: function (t, e) { },
    "24c8": function (t, e, n) {
        "use strict";
        n("d6ff")
    },
    3: function (t, e) { },
    4: function (t, e) { },
    "43f2": function (t, e, n) {
        t.exports = n.p + "img/Icono.png"
    },
    5: function (t, e) { },
    "56d7": function (t, e, n) {
        "use strict";
        n.r(e);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("2b0e"),
            s = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [a("header", {
                    staticClass: "bg-dark"
                }, [a("nav", {
                    staticClass: "navbar navbar-expand-lg navbar-dark mx-auto"
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("router-link", {
                    staticClass: "\n            navbar-logo\n            d-flex\n            align-items-center\n            nuxt-link-exact-active nuxt-link-active\n          ",
                    attrs: {
                        to: "/"
                    }
                }, [a("img", {
                    staticClass: "navbar-brand p-0",
                    attrs: {
                        src: n("43f2"),
                        alt: "logo"
                    }
                }), a("span", {
                    staticClass: "text-primary fw-bold navbar-brand-text"
                }, [t._v(" IluminatisCoin ")])]), t.getUserAccount ? [a("div", {
                    staticClass: "d-none d-sm-flex"
                }, [a("p", {
                    staticClass: "mb-0 text-primary"
                }, [t._v(" " + t._s(t.addrTruncation(t.getUserAccount)) + " ")]), a("button", {
                    staticClass: "btn btn-primary btn-connect",
                    on: {
                        click: t.disconnect
                    }
                }, [t._v(" Disconnect ")])]), a("div", {
                    staticClass: "d-flex w-100 justify-content-between d-sm-none"
                }, [a("p", {
                    staticClass: "mb-0 text-primary"
                }, [t._v(" " + t._s(t.addrTruncation(t.getUserAccount)) + " ")]), a("button", {
                    staticClass: "btn btn-primary btn-connect",
                    on: {
                        click: t.disconnect
                    }
                }, [t._v(" Disconnect ")])])] : a("button", {
                    staticClass: "btn btn-primary btn-connect",
                    on: {
                        click: function (e) {
                            t.showModal = !t.showModal
                        }
                    }
                }, [t._v(" Connect ")])], 2)])]), a("router-view"), t._m(0), a("div", {
                    staticClass: "modal",
                    class: t.showModal ? "show" : ""
                }, [a("div", {
                    staticClass: "modal-dialog modal-dialog-centered"
                }, [a("div", {
                    staticClass: "modal-content mx-auto"
                }, [a("div", {
                    staticClass: "modal-header"
                }, [a("h5", {
                    staticClass: "modal-title"
                }, [t._v("Connect to a wallet")]), a("button", {
                    staticClass: "btn-close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function (e) {
                            t.showModal = !t.showModal
                        }
                    }
                })]), a("div", {
                    staticClass: "modal-body"
                }, [t.isMetamaskInstalled ? a("button", {
                    staticClass: "\n              btn-connect\n              bg-primary\n              rounded\n              d-flex\n              align-items-center\n              justify-content-between\n              w-100\n            ",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function (e) {
                            return t.onConnect("metamask")
                        }
                    }
                }, [a("p", {
                    staticClass: "mb-0 fw-bold"
                }, [t._v("Metamask")]), a("img", {
                    staticClass: "provider-icon bg-white rounded-circle",
                    attrs: {
                        src: n("da13"),
                        alt: "Metamask"
                    }
                })]) : t._e(), t.isBinanceInstalled ? a("button", {
                    staticClass: "\n              btn-connect\n              bg-primary\n              rounded\n              d-flex\n              align-items-center\n              justify-content-between\n              w-100\n            ",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function (e) {
                            return t.onConnect("binance")
                        }
                    }
                }, [a("p", {
                    staticClass: "mb-0 fw-bold"
                }, [t._v("Binance smart chain Wallet")]), a("img", {
                    staticClass: "provider-icon bg-white rounded-circle",
                    attrs: {
                        src: n("d3af"),
                        alt: "Binance Chain Wallet"
                    }
                })]) : t._e(), a("button", {
                    staticClass: "\n              btn-connect\n              bg-primary\n              rounded\n              d-flex\n              align-items-center\n              justify-content-between\n              w-100\n            ",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function (e) {
                            return t.onConnect("connect")
                        }
                    }
                }, [a("p", {
                    staticClass: "mb-0 fw-bold"
                }, [t._v("Wallet Connect")]), a("img", {
                    staticClass: "provider-icon bg-white rounded-circle",
                    attrs: {
                        src: n("ef65"),
                        alt: "Wallet Connect"
                    }
                })])])])])])], 1)
            },
            i = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("footer", {
                    staticClass: "py-3"
                }, [a("div", {
                    staticClass: "footer m-auto"
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "\n            d-md-flex\n            justify-content-center\n            text-center\n            align-items-center\n          "
                }, [a("a", {
                    attrs: {
                        href: "https://hazecrypto.net/bnbbrokers/",
                        target: "_blank"
                    }
                }, [a("img", {
                    attrs: {
                        src: n("14cc")
                    }
                })]), a("a", {
                    attrs: {
                        href: "https://dappradar.com/binance-smart-chain/high-risk/bnbbrokers",
                        target: "_blank"
                    }
                }, [a("img", {
                    attrs: {
                        src: n("e77c")
                    }
                })]), a("a", {
                    attrs: {
                        href: "https://twitter.com/bnbbrokers",
                        target: "_blank"
                    }
                }, [a("img", {
                    staticClass: "mx-2",
                    staticStyle: {
                        height: "40px"
                    },
                    attrs: {
                        src: n("aa24")
                    }
                })]), a("a", {
                    attrs: {
                        href: "https://medium.com/bnbbrokers",
                        target: "_blank"
                    }
                }, [a("img", {
                    staticClass: "mx-2",
                    staticStyle: {
                        height: "60px"
                    },
                    attrs: {
                        src: n("aa25")
                    }
                })])])])])])
            }],
            r = n("1da1"),
            o = n("5530"),
            c = (n("fb6a"), n("ac1f"), n("841c"), n("1276"), n("96cf"), n("99e5")),
            l = n.n(c),
            u = n("2eaf"),
            p = n("d2d0"),
            d = n("2f62"),
            m = {
                name: "App",
                data: function () {
                    return {
                        showModal: !1,
                        isMetamaskInstalled: !1,
                        isBinanceInstalled: !1
                    }
                },
                mounted: function () {
                    var t = this;
                    this.isMetamaskInstalled = !!window.ethereum, this.isBinanceInstalled = !!window.BinanceChain, window.ethereum && window.ethereum.request({
                        method: "eth_accounts"
                    }).then((function (e) {
                        e.length > 0 && t.onConnect("metamask")
                    })).catch((function (t) {
                        console.error(t)
                    }))
                },
                methods: Object(o["a"])(Object(o["a"])({}, Object(d["b"])("wallet", ["SET_REFERRAL", "SET_WEB3", "SET_USER_ACCOUNT", "SET_INSTANCE", "SET_BUSDINSTANCE"])), {}, {
                    onConnect: function (t) {
                        var e = this;
                        return Object(r["a"])(regeneratorRuntime.mark((function n() {
                            var a, s, i;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        if ("metamask" !== t) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.next = 3, window.ethereum.request({
                                            method: "eth_requestAccounts"
                                        });
                                    case 3:
                                        e.onProvider(window.ethereum), window.ethereum.on("accountsChanged", (function (t) {
                                            e.SET_USER_ACCOUNT(t[0]), e.onProvider(window.ethereum)
                                        })), n.next = 22;
                                        break;
                                    case 7:
                                        if ("binance" !== t) {
                                            n.next = 16;
                                            break
                                        }
                                        return a = new p["BscConnector"]({
                                            supportedChainIds: [56, 97]
                                        }), n.next = 11, a.activate();
                                    case 11:
                                        s = n.sent, e.onProvider(s.provider), a.on("accountsChanged", (function (t) {
                                            e.SET_USER_ACCOUNT(t[0]), e.onProvider(s.provider)
                                        })), n.next = 22;
                                        break;
                                    case 16:
                                        if ("connect" !== t) {
                                            n.next = 22;
                                            break
                                        }
                                        return i = new u["a"]({
                                            rpc: {
                                                56: "https://bsc-dataseed.binance.org/"
                                            }
                                        }), n.next = 20, i.enable();
                                    case 20:
                                        e.onProvider(i), i.on("accountsChanged", (function (t) {
                                            e.SET_USER_ACCOUNT(t[0]), e.onProvider(i)
                                        }));
                                    case 22:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    onProvider: function (t) {
                        var e = this;
                        return Object(r["a"])(regeneratorRuntime.mark((function n() {
                            var a, s, i, r, o;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return e.showModal = !1, n.prev = 1, a = new l.a(t), e.SET_WEB3(a), n.next = 6, a.eth.getAccounts();
                                    case 6:
                                        s = n.sent, e.SET_USER_ACCOUNT(s[0]), i = new e.getWeb3.eth.Contract(e.getContractABI, e.getContractAddress), /*r = new e.getWeb3.eth.Contract(e.getBUSDContractABI, e.getBUSDContractAddress),*/ e.SET_INSTANCE(i), e.SET_BUSDINSTANCE(r), o = e.getQueryVariable() ? e.getQueryVariable() : s[0], e.SET_REFERRAL(o), n.next = 20;
                                        break;
                                    case 16:
                                        return n.prev = 16, n.t0 = n["catch"](1), console.log("Could not get a wallet connection", n.t0), n.abrupt("return");
                                    case 20:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 16]
                            ])
                        })))()
                    },
                    addrTruncation: function (t) {
                        return t.slice(0, 6) + "…" + t.slice(t.length - 4, t.length)
                    },
                    getQueryVariable: function () {
                        var t = window.location.search.substring(1),
                            e = t.split("&");
                        if (e)
                            for (var n = 0; n < e.length; n++) {
                                var a = e[n].split("=");
                                if ("ref" == a[0]) return a[1]
                            }
                        return !1
                    },
                    disconnect: function () {
                        this.SET_WEB3(null), this.SET_INSTANCE(null), this.SET_REFERRAL(null), this.SET_USER_ACCOUNT(null)
                    }
                }),
                computed: Object(o["a"])({}, Object(d["c"])("wallet", ["getWeb3", "getReferral", "getUserAccount", "getInstance", "getContractABI", "getContractAddress", "getBUSDInstance", "getBUSDContractABI", "getBUSDContractAddress"]))
            },
            f = m,
            b = (n("034f"), n("2877")),
            y = Object(b["a"])(f, s, i, !1, null, null, null),
            v = y.exports,
            _ = function () {
                // ABI_ADDRESS
                return {
                    web3: null,
                    userAccount: null,
                    instance: null,
                    BUSDInstance: null,
                    referral: "",
                    //contractAddress: "0xcfefa22C4823B6b44592d98b18280A846d3524c3",
                    contractAddress: "0x550fe767e5A9Cd39A5c2886b2C31bDa1E1753c10",
                    contractABI: [
                        {
                            "inputs": [

                            ],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "user",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "totalAmount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "FeePayed",
                            "type": "event"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "referrer",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "plan",
                                    "type": "uint8"
                                }
                            ],
                            "name": "invest",
                            "outputs": [

                            ],
                            "stateMutability": "payable",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "launch",
                            "outputs": [

                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "user",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint8",
                                    "name": "plan",
                                    "type": "uint8"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "NewDeposit",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "internalType": "address",
                                    "name": "user",
                                    "type": "address"
                                }
                            ],
                            "name": "Newbie",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "referrer",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "referral",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "internalType": "uint256",
                                    "name": "level",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "RefBonus",
                            "type": "event"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address payable",
                                    "name": "_commissionWallet",
                                    "type": "address"
                                }
                            ],
                            "name": "setCommissionWallet",
                            "outputs": [

                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "withdraw",
                            "outputs": [

                            ],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "internalType": "address",
                                    "name": "user",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                }
                            ],
                            "name": "Withdrawn",
                            "type": "event"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "commissionWallet",
                            "outputs": [
                                {
                                    "internalType": "address payable",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "getContractBalance",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "plan",
                                    "type": "uint8"
                                }
                            ],
                            "name": "getPlanInfo",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "time",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "percent",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "getSiteInfo",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "_totalInvested",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "_totalBonus",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserAmountOfDeposits",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserAvailable",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserCheckpoint",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getUserDepositInfo",
                            "outputs": [
                                {
                                    "internalType": "uint8",
                                    "name": "plan",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "percent",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "start",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "finish",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserDividends",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserDownlineCount",
                            "outputs": [
                                {
                                    "internalType": "uint256[5]",
                                    "name": "referrals",
                                    "type": "uint256[5]"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserInfo",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "totalDeposit",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "totalWithdrawn",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "totalReferrals",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserReferralBonus",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserReferralTotalBonus",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserReferralWithdrawn",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserReferrer",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserTotalDeposits",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserTotalReferrals",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "userAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "getUserTotalWithdrawn",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "INVEST_MIN_AMOUNT",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "owner",
                            "outputs": [
                                {
                                    "internalType": "address",
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "PERCENT_STEP",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "PERCENTS_DIVIDER",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "PROJECT_FEE",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "name": "REFERRAL_PERCENTS",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "started",
                            "outputs": [
                                {
                                    "internalType": "bool",
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "TIME_STEP",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "totalInvested",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "inputs": [

                            ],
                            "name": "totalRefBonus",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        }
                    ]
                }
            },
            h = _,
            g = {
                SET_WEB3: function (t, e) {
                    t.web3 = e
                },
                SET_USER_ACCOUNT: function (t, e) {
                    t.userAccount = e
                },
                SET_BUSDINSTANCE: function (t, e) {
                    t.BUSDInstance = e
                },
                SET_INSTANCE: function (t, e) {
                    t.instance = e
                },
                SET_REFERRAL: function (t, e) {
                    t.referral = e
                }
            },
            C = g,
            w = {
                getWeb3: function (t) {
                    return t.web3
                },
                getUserAccount: function (t) {
                    return t.userAccount
                },
                getReferral: function (t) {
                    return t.referral
                },
                getContractAddress: function (t) {
                    return t.contractAddress
                },
                getContractABI: function (t) {
                    return t.contractABI
                },
                getInstance: function (t) {
                    return t.instance
                }
            },
            T = w,
            x = {
                SET_WEB3: function (t, e) {
                    var n = t.commit;
                    n("SET_WEB3", e)
                },
                SET_USER_ACCOUNT: function (t, e) {
                    var n = t.commit;
                    n("SET_USER_ACCOUNT", e)
                },
                SET_REFERRAL: function (t, e) {
                    var n = t.commit;
                    n("SET_REFERRAL", e)
                },
                SET_INSTANCE: function (t, e) {
                    var n = t.commit;
                    n("SET_INSTANCE", e)
                },
                SET_BUSDINSTANCE: function (t, e) {
                    var n = t.commit;
                    n("SET_BUSDINSTANCE", e)
                }
            },
            E = x,
            B = {
                namespaced: !0,
                state: h,
                mutations: C,
                actions: E,
                getters: T
            },
            A = B;
        a["a"].use(d["a"]);
        var S = new d["a"].Store({
            modules: {
                wallet: A
            }
        }),
            U = n("8c4f"),
            k = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "loading loaded"
                }, [n("div", [

                    n("section", {
                        staticClass: "top-section no-margin-bot"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "row justify-content-center"
                    }, [n("div", {
                        staticClass: "col-12"
                    }, [n("div", {
                        staticClass: "card border px-sm-6"
                    }, [n("div", {
                        staticClass: "card-body"
                    }, [n("div", {
                        staticClass: "row"
                    }, [

                        n("div", { staticClass: "timerContainer" }, [
                            n("h1", { staticClass: "home-info", attrs: { id: "timerHeadline" } }, [t._v("Project launch in")]),
                            n("div", { attrs: { id: "timerCountdown" }, style: { display: "inline-block" } }, [
                                n("ul", {}, [
                                    n("li", {}, [
                                        n("span", { attrs: { id: "days" } }, []),
                                        t._v("DAYS")
                                    ]),
                                    n("li", {}, [
                                        n("span", { attrs: { id: "hours" } }, []),
                                        t._v("HOURS")
                                    ]),
                                    n("li", {}, [
                                        n("span", { attrs: { id: "minutes" } }, []),
                                        t._v("MINUTES")
                                    ]),
                                    n("li", {}, [
                                        n("span", { attrs: { id: "seconds" } }, []),
                                        t._v("SECONDS")
                                    ])
                                ])
                            ],
                                n("div", { attrs: { id: "timerContent" }, style: { display: "inline-block" } }, "Porject is live!"))
                        ])

                    ])])])])])])]),

                    n("section", {
                        staticClass: "top-section"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "row justify-content-center"
                    }, [n("div", {
                        staticClass: "col-12"
                    }, [n("div", {
                        staticClass: "card border px-sm-5"
                    }, [n("div", {
                        staticClass: "card-body"
                    }, [n("div", {
                        staticClass: "row"
                    }, [t._m(0), n("div", {
                        staticClass: "col-12 col-sm-6 my-4 text-sm-center"
                    }, [n("p", {
                        staticClass: "card-subtitle"
                    }, [t._v("Total BNB Deposited")]), n("p", {
                        staticClass: "card-title mb-0"
                    }, [t._v("" + t._s(t.totalInvested))])]), n("div", {
                        staticClass: "col-12 col-sm-6 my-4 text-sm-center"
                    }, [n("p", {
                        staticClass: "card-subtitle"
                    }, [t._v("Total Referral Earnings")]), n("p", {
                        staticClass: "card-title mb-0"
                    }, [t._v("" + t._s(t.totalReferralEarnings) + " ")])]), n("div", {
                        staticClass: "col-12 col-sm-6 my-4 text-sm-center"
                    }, [n("div", [n("router-link", {
                        staticClass: "btn btn-primary w-100 mt-3 lauch-dashboard",
                        attrs: {
                            to: "dashboard"
                        }
                    }, [t._v(" Dashboard ")]), n("a", {
                        staticClass: "btn btn-primary w-100 mt-3",
                        attrs: {
                            href: "http://busdharvest.com/docs.pdf",
                            target: "_blank"
                        }
                    }, [t._v("Information ")])], 1)]), t._m(1)])])])])])])]),
                    t._m(2)])])
            },
            D = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "col-12 my-4"
                }, [n("div", {
                    staticClass: "text-center pb-3"
                }, [n("p", {
                    staticClass: "fw-bold fs-2"
                }, [t._v("IluminatisCoin")]), n("p", { staticClass: "home-info" }, [t._v(" low risk high reward yield farm")]),
                n("p", {}, [t._v(" on Binance Smart Chain ")])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "col-12 col-sm-6 my-4"
                }, [n("div", [n("a", {
                    staticClass: "btn btn-primary w-100 mt-3",
                    attrs: {
                        href: "https://bscscan.com/address/0xcfefa22c4823b6b44592d98b18280a846d3524c3#code",
                        target: "_blank"
                    }
                }, [t._v("Verified Contract ")]), n("a", {
                    staticClass: "btn btn-primary w-100 mt-3",
                    attrs: {
                        href: "https://t.me/Bnbbrokers",
                        target: "_blank"
                    }
                }, [t._v("Telegram ")])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "community"
                }, [a("div", {
                    staticClass: "container bot"
                }, [a("div", {
                    staticClass: "community-block"
                }, [a("p", {
                    staticClass: "mb-3 text-center fs-4"
                }, [t._v(" Start your yield farm journey "), a("br"), t._v(" with IluminatisCoin community ")]), a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-md-7 col-lg-4 mx-auto text-center mt-3"
                }, [a("img", {
                    staticClass: "community-img",
                    attrs: {
                        src: n("6822")
                    }
                }), a("p", {
                    staticClass: "fs-5 fw-light home-info-2"
                }, [t._v("Ironclad security")]), a("p", {
                    staticClass: "fw-light mb-0 mt-n1 lh-xs"
                }, [a("small", [t._v("The smart contract code has been successful audited by independent company HazeCrypto which guarantees the protection of your assets from all external risks.")])])]), a("div", {
                    staticClass: "col-md-7 col-lg-4 mx-auto text-center mt-3"
                }, [a("img", {
                    staticClass: "community-img",
                    attrs: {
                        src: n("175a")
                    }
                }), a("p", {
                    staticClass: "fs-5 fw-light home-info-2"
                }, [t._v("High & Stable APR")]), a("p", {
                    staticClass: "fw-light mb-0 mt-n1 lh-xs"
                }, [a("small", [t._v("In the code sets the highest APR among all yield farms on BSC, rules of a smart contract can’t be changed, nothing can affect the amount of income.")])])]), a("div", {
                    staticClass: "col-md-7 col-lg-4 mx-auto text-center mt-3"
                }, [a("img", {
                    staticClass: "community-img",
                    attrs: {
                        src: n("c042")
                    }
                }), a("p", {
                    staticClass: "fs-5 fw-light home-info-2"
                }, [t._v("Customer support")]), a("p", {
                    staticClass: "fw-light mb-0 mt-n1 lh-xs"
                }, [a("small", [t._v("IluminatisCoin 24/7 provides you our knowledgable and experienced customer support team in "), a("a", {
                    staticClass: "text-dark",
                    attrs: {
                        href: "https://t.me/bnbbrokers",
                        target: "_blank"
                    }
                }, [t._v("Telegram.")])])])])])])])])
            }],
            M = n("3835"),
            I = (n("d3b7"), n("3ca3"), n("ddb0"), n("b680"), n("a9e3"), n("25f0"), {
                name: "Home",
                data: function () {
                    return {
                        timer: null,
                        totalReferralEarnings: "0.000",
                        totalInvested: "0.000"
                    }
                },
                mounted: function () {
                    var t = this;
                    this.readValue(), this.timer = setInterval((function () {
                        t.readValue()
                    }), 1e4)
                },
                beforeDestroy: function () {
                    clearInterval(this.timer)
                },
                methods: {
                    readValue: function () {
                        var t = this,
                            //e = new l.a("https://bsc-dataseed1.binance.org:443"),
                            e = new l.a("https://data-seed-prebsc-1-s1.binance.org:8545"),
                            n = new e.eth.Contract(this.getContractABI, this.getContractAddress);
                        Promise.all([
                            n.methods.getSiteInfo().call(),
                            n.methods.started()
                        ]).then((function (n) {
                            var a = Object(M["a"])(n, 2),
                                s = a[0];
                            t.totalInvested = Number(e.utils.fromWei(s._totalInvested.toString(), "ether")).toFixed(3),
                                t.totalReferralEarnings = (Number(5 * t.totalInvested) / 100).toFixed(3)
                        }))
                    }
                },
                computed: Object(o["a"])({}, Object(d["c"])("wallet", ["getWeb3", "getReferral", "getUserAccount", "getInstance", "getContractABI", "getContractAddress", "getBUSDInstance", "getBUSDContractABI", "getBUSDContractAddress"]))
            }),
            R = I,
            $ = Object(b["a"])(R, k, D, !1, null, null, null),
            N = $.exports,
            O = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "main-section"
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-lg-6"
                }, [a("div", {
                    staticClass: "card border-0 mb-4 adv"
                }, [t._m(0), a("div", {
                    staticClass: "card-body"
                }, [a("div", {
                    staticClass: "d-flex align-items-center mb-4"
                }, [a("div", {
                    staticClass: "w-100"
                }, [t._m(1), a("p", {
                    staticClass: "fs-5 fw-bold mb-0"
                }, [t._v(t._s(t.userAvailable) + " BNB")])]), a("button", {
                    staticClass: "btn btn-primary ms-2 w-50",
                    attrs: {
                        disabled: !t.getUserAccount || "0.000" === t.userAvailable
                    },
                    on: {
                        click: t.harvest
                    }
                }, [t._v(" Harvest ")])]), a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-6 mb-4"
                }, [a("div", {
                    staticClass: "w-100"
                }, [t._m(2), a("p", {
                    staticClass: "fs-5 fw-bold mb-0"
                }, [t._v(t._s(t.BNBBalance) + " BNB")])])]), a("div", {
                    staticClass: "col-6 mb-4"
                }, [a("div", {
                    staticClass: "w-100"
                }, [t._m(3), a("p", {
                    staticClass: "fs-5 fw-bold mb-0"
                }, [t._v(t._s(t.totalDeposit) + " BNB")])])]), a("div", {
                    staticClass: "col-6 mb-4"
                }, [a("div", {
                    staticClass: "w-100"
                }, [t._m(4), a("p", {
                    staticClass: "fs-5 fw-bold mb-0"
                }, [t._v(t._s(t.totalWithdrawn) + " BNB")])])]), a("div", {
                    staticClass: "col-6 col-sm-3 mb-4"
                }, [a("div", {
                    staticClass: "w-100"
                }, [t._m(5), a("p", {
                    staticClass: "fs-5 fw-bold mb-0"
                }, [t._v(t._s(t.totalBonus) + " BNB")])])]), a("div", {
                    staticClass: "col-6 col-sm-3 mb-4"
                }, [a("div", {
                    staticClass: "w-100"
                }, [t._m(6), a("p", {
                    staticClass: "fs-5 fw-bold mb-0"
                }, [t._v(t._s(t.totalReferrals))])])])])])])]), a("div", {
                    staticClass: "col-lg-6"
                }, [a("div", {
                    staticClass: "card border-0 mb-3 adv"
                }, [t._m(7), a("div", {
                    staticClass: "card-body"
                }, [t._m(8), t._m(9), a("p", {
                    staticClass: "mb-0"
                }, [t._v("3 LVL - 1.5%")]), a("p", {
                    staticClass: "mb-0"
                }, [t._v("4 LVL - 1%")]), a("p", [t._v("5 LVL - 0.5%")]), a("div", {
                    staticClass: "rounded pb-3 pt-2"
                }, [a("p", {
                    staticClass: "mb-0"
                }, [t._v("Your personal link:")]), a("div", [a("input", {
                    staticClass: "tron-link position-absolute",
                    staticStyle: {
                        opacity: "0"
                    },
                    attrs: {
                        type: "text"
                    }
                }), a("div", {
                    staticClass: "d-flex w-100"
                }, [a("div", {
                    staticClass: "mb-0 w-100 p-2 ps-3 rounded me-n11 refbox"
                }, [a("small", {
                    staticClass: "py-1 mt-1 copy-link d-block text-truncate",
                    attrs: {
                        id: "copy-link"
                    }
                }, [t._v(" " + t._s("https://bnbbrokers.app/?ref=" + t.getUserAccount) + " ")])]), a("div", {
                    staticClass: "tooltip-container"
                }, [a("button", {
                    staticClass: "btn btn-primary py-2",
                    attrs: {
                        disabled: !t.getUserAccount
                    },
                    on: {
                        click: t.copy
                    }
                }, [a("span", {
                    staticClass: "py-1 d-block"
                }, [t._v(" Copy ")])]), a("span", {
                    staticClass: "tooltip tron-tooltip"
                }, [t._v(t._s(t.copied || "copy"))])])])])])])])]), a("div", {
                    staticClass: "col-lg-12 outBoxStakeBnb"
                }, [a("div", {
                    staticClass: "card border-0 mb-3 dark-style"
                }, [t._m(10), a("div", {
                    staticClass: "card-body p-0"
                }, [a("table", {
                    staticClass: "table"
                }, [t._m(11), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer",
                    on: {
                        click: function (e) {
                            t.row_one = !t.row_one
                        }
                    }
                }, [t._m(12), t._m(13), t._m(14), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }), t._m(15)]), t.row_one ? a("tr", [a("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "5"
                    }
                }, [a("div", {
                    staticClass: "sub-item overflow-hidden"
                }, [a("div", {
                    staticClass: "bg-secondary rounded-bottom p-3"
                }, [a("div", {
                    staticClass: "p-1 pe-3"
                }, [a("div", {
                    staticClass: "d-flex justify-content-between mb-3 for-xs"
                }, [a("span", {
                    staticClass: "text-capitalize me-3 full-width-right"
                }, [t._v("BNB Available: " + t._s(t.BNBBalance) + " ")]),
                a("div", [a("span", {
                    staticClass: "text-capitalize me-3"
                }, [t._v("Total Earn: " + t._s(t.total_earning_one) + " BNB")]), a("button", {
                    staticClass: "border-0 bg-transparent ms-auto",
                    on: {
                        click: function (e) {
                            t.rate = 2.5, t.showModal = !t.showModal
                        }
                    }
                }, [a("img", {
                    staticClass: "me-3",
                    attrs: {
                        src: n("f0ba")
                    }
                })])])
                ]), a("form", {
                    staticClass: "w-lg-75 ms-lg-auto ps-md-4"
                }, [a("fieldset", {
                    staticClass: "d-flex w-lg-75 ms-auto"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.plan_one_amount,
                        expression: "plan_one_amount"
                    }],
                    staticClass: "form-control me-n11",
                    attrs: {
                        type: "number",
                        min: "0.05",
                        step: "0.01",
                        placeholder: "Enter BNB amount"
                    },
                    domProps: {
                        value: t.plan_one_amount
                    },
                    on: {
                        input: [function (e) {
                            e.target.composing || (t.plan_one_amount = e.target.value)
                        }, function (e) {
                            return t.calculateTotalEarning(e, 0)
                        }]
                    }
                }), a("button", {
                    staticClass: "btn btn-primary py-2 px-4",
                    attrs: {
                        disabled: !t.getUserAccount //|| t.isLoading_one
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.stakeBNB(0)
                        }
                    }
                }, [a("span", {
                    staticClass: "py-1 d-block px-3"
                }, [t._v(" " + t._s(t.stakeBtn_one) + " ")])])])])], 2)])])])]) : t._e()]), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer",
                    on: {
                        click: function (e) {
                            t.row_two = !t.row_two
                        }
                    }
                }, [t._m(16), t._m(17), t._m(18), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }), t._m(19)]), t.row_two ? a("tr", [a("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "5"
                    }
                }, [a("div", {
                    staticClass: "sub-item overflow-hidden"
                }, [a("div", {
                    staticClass: "bg-secondary rounded-bottom p-3"
                }, [a("div", {
                    staticClass: "p-1 pe-3"
                }, [t.getUserAccount ? a("div", {
                    staticClass: "d-flex justify-content-between mb-3 for-xs"
                }, [a("span", {
                    staticClass: "text-capitalize me-3 full-width-right"
                }, [t._v("BNB Available: " + t._s(t.BNBBalance) + " ")]),
                a("div", [a("span", {
                    staticClass: "text-capitalize me-3"
                }, [t._v("Total Earn: " + t._s(t.total_earning_two) + " BNB")]), a("button", {
                    staticClass: "border-0 bg-transparent ms-auto",
                    on: {
                        click: function (e) {
                            t.rate = 4, t.showModal = !t.showModal
                        }
                    }
                }, [a("img", {
                    staticClass: "me-3",
                    attrs: {
                        src: n("f0ba")
                    }
                })])])
                ]) : t._e(), a("form", {
                    staticClass: "w-lg-75 ms-lg-auto ps-md-4"
                }, [a("fieldset", {
                    staticClass: "d-flex w-lg-75 ms-auto"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.plan_two_amount,
                        expression: "plan_two_amount"
                    }],
                    staticClass: "form-control me-n11",
                    attrs: {
                        type: "number",
                        min: "0.05",
                        step: "0.01",
                        placeholder: "Enter BNB amount"
                    },
                    domProps: {
                        value: t.plan_two_amount
                    },
                    on: {
                        input: [function (e) {
                            e.target.composing || (t.plan_two_amount = e.target.value)
                        }, function (e) {
                            return t.calculateTotalEarning(e, 1)
                        }]
                    }
                }), a("button", {
                    staticClass: "btn btn-primary py-2 px-4",
                    attrs: {
                        disabled: !t.getUserAccount //|| t.isLoading_two
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.stakeBNB(1)
                        }
                    }
                }, [a("span", {
                    staticClass: "py-1 d-block px-3"
                }, [t._v(" " + t._s(t.stakeBtn_two) + " ")])])])])], 2)])])])]) : t._e()]), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer",
                    on: {
                        click: function (e) {
                            t.row_three = !t.row_three
                        }
                    }
                }, [t._m(20), t._m(21), t._m(22), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }), t._m(23)]), t.row_three ? a("tr", [a("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "5"
                    }
                }, [a("div", {
                    staticClass: "sub-item overflow-hidden"
                }, [a("div", {
                    staticClass: "bg-secondary rounded-bottom p-3"
                }, [a("div", {
                    staticClass: "p-1 pe-3"
                }, [t.getUserAccount ? a("div", {
                    staticClass: "d-flex justify-content-between mb-3 for-xs"
                }, [a("span", {
                    staticClass: "text-capitalize me-3 full-width-right"
                }, [t._v("BNB Available: " + t._s(t.BNBBalance) + " ")]),
                a("div", [a("span", {
                    staticClass: "text-capitalize me-3"
                }, [t._v("Total Earn: " + t._s(t.total_earning_three) + " BNB")]), a("button", {
                    staticClass: "border-0 bg-transparent ms-auto",
                    on: {
                        click: function (e) {
                            t.rate = 3.5, t.showModal = !t.showModal
                        }
                    }
                }, [a("img", {
                    staticClass: "me-3",
                    attrs: {
                        src: n("f0ba")
                    }
                })])])
                ]) : t._e(), a("form", {
                    staticClass: "w-lg-75 ms-lg-auto ps-md-4"
                }, [a("fieldset", {
                    staticClass: "d-flex w-lg-75 ms-auto"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.plan_three_amount,
                        expression: "plan_three_amount"
                    }],
                    staticClass: "form-control me-n11",
                    attrs: {
                        type: "number",
                        min: "0.05",
                        step: "0.01",
                        placeholder: "Enter BNB amount"
                    },
                    domProps: {
                        value: t.plan_three_amount
                    },
                    on: {
                        input: [function (e) {
                            e.target.composing || (t.plan_three_amount = e.target.value)
                        }, function (e) {
                            return t.calculateTotalEarning(e, 2)
                        }]
                    }
                }), a("button", {
                    staticClass: "btn btn-primary py-2 px-4",
                    attrs: {
                        disabled: !t.getUserAccount //|| t.isLoading_three
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.stakeBNB(2)
                        }
                    }
                }, [a("span", {
                    staticClass: "py-1 d-block px-3"
                }, [t._v(" " + t._s(t.stakeBtn_three) + " ")])])])])], 2)])])])]) : t._e()]), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer",
                    on: {
                        click: function (e) {
                            t.row_four = !t.row_four
                        }
                    }
                }, [t._m(24), t._m(25), t._m(26), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }), t._m(27)]), t.row_four ? a("tr", [a("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "5"
                    }
                }, [a("div", {
                    staticClass: "sub-item overflow-hidden"
                }, [a("div", {
                    staticClass: "bg-secondary rounded-bottom p-3"
                }, [a("div", {
                    staticClass: "p-1 pe-3"
                }, [t.getUserAccount ? a("div", {
                    staticClass: "d-flex justify-content-between mb-3 for-xs"
                }, [a("span", {
                    staticClass: "text-capitalize me-3 full-width-right"
                }, [t._v("BNB Available: " + t._s(t.BNBBalance) + " ")]),
                a("div", [a("span", {
                    staticClass: "text-capitalize me-3"
                }, [t._v("Total Earn: " + t._s(t.total_earning_four) + " BNB")]), a("button", {
                    staticClass: "border-0 bg-transparent ms-auto",
                    on: {
                        click: function (e) {
                            t.rate = 3, t.showModal = !t.showModal
                        }
                    }
                }, [a("img", {
                    staticClass: "me-3",
                    attrs: {
                        src: n("f0ba")
                    }
                })])])
                ]) : t._e(), a("form", {
                    staticClass: "w-lg-75 ms-lg-auto ps-md-4"
                }, [a("fieldset", {
                    staticClass: "d-flex w-lg-75 ms-auto"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.plan_four_amount,
                        expression: "plan_four_amount"
                    }],
                    staticClass: "form-control me-n11",
                    attrs: {
                        type: "number",
                        min: "0.05",
                        step: "0.01",
                        placeholder: "Enter BNB amount"
                    },
                    domProps: {
                        value: t.plan_four_amount
                    },
                    on: {
                        input: [function (e) {
                            e.target.composing || (t.plan_four_amount = e.target.value)
                        }, function (e) {
                            return t.calculateTotalEarning(e, 3)
                        }]
                    }
                }), a("button", {
                    staticClass: "btn btn-primary py-2 px-4",
                    attrs: {
                        disabled: !t.getUserAccount //|| t.isLoading_four
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.stakeBNB(3)
                        }
                    }
                }, [a("span", {
                    staticClass: "py-1 d-block px-3"
                }, [t._v(" " + t._s(t.stakeBtn_four) + " ")])])])])], 2)])])])]) : t._e()])])])])]), t._m(28)])]), a("div", {
                    staticClass: "modal",
                    class: t.showModal ? "show" : ""
                }, [a("div", {
                    staticClass: "modal-dialog modal-dialog-centered"
                }, [a("div", {
                    staticClass: "modal-content"
                }, [a("div", {
                    staticClass: "modal-header"
                }, [a("h5", {
                    staticClass: "modal-title"
                }, [t._v("ROI")]), a("button", {
                    staticClass: "btn-close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function (e) {
                            t.showModal = !t.showModal
                        }
                    }
                })]), a("div", {
                    staticClass: "modal-body px-0 pt-0"
                }, [a("table", {
                    staticClass: "table table-borderless"
                }, [t._m(29), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer"
                }, [t._m(30), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s(1 * t.rate) + "% ")])]), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s((1 * t.rate / 100).toFixed(2)) + " ")])]), t._m(31)]), t._m(32)]), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer"
                }, [t._m(33), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s(7 * t.rate) + "% ")])]), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s((7 * t.rate / 100).toFixed(2)) + " ")])]), t._m(34)]), t._m(35)]), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer"
                }, [t._m(36), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s(30 * t.rate) + "% ")])]), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s((30 * t.rate / 100).toFixed(2)) + " ")])]), t._m(37)]), t._m(38)]), a("tbody", {
                    staticClass: "position-relative"
                }, [a("tr", {
                    staticClass: "cursor-pointer"
                }, [t._m(39), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s(90 * t.rate) + "% ")])]), a("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [a("span", [t._v(" " + t._s((90 * t.rate / 100).toFixed(2)) + " ")])]), t._m(40)]), t._m(41)])]), t._m(42)])])])])])
            },
            j = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "border-0 pb-0"
                }, [n("p", {
                    staticClass: "card-title mb-0"
                }, [t._v("Your Farm")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [n("small", [t._v("BNB to Harvest:")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [n("small", [t._v("BNB in Wallet")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [n("small", [t._v("Total Deposit")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [n("small", [t._v("Total Withdrawn")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [n("small", [t._v("Referral Earnings")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [n("small", [t._v("Invited users")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "border-0 pb-0"
                }, [n("p", {
                    staticClass: "card-title mb-0"
                }, [t._v("Affiliate Program")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [t._v("1 LVL "), n("small", [t._v("(your invited user)")]), t._v(" - 7%")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "mb-0"
                }, [t._v(" 2 LVL "), n("small", [t._v("(user invited by your 1 lvl)")]), t._v(" - 3% ")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "card-header border-0 pb-0"
                }, [n("p", {
                    staticClass: "card-title mb-0"
                }, [t._v("Stake BNB")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("thead", {
                    staticClass: "border-bottom"
                }, [n("tr", [n("td", {
                    staticClass: "text-capitalize",
                    attrs: {
                        scope: "col"
                    }
                }, [n("small", [t._v("days")])]), n("td", {
                    staticClass: "text-capitalize",
                    attrs: {
                        scope: "col"
                    }
                }, [n("small", [t._v("% daily")])]), n("td", {
                    staticClass: "text-capitalize",
                    attrs: {
                        scope: "col"
                    }
                }, [n("small", [t._v("% total")])]), n("td", {
                    staticClass: "text-capitalize",
                    attrs: {
                        scope: "col"
                    }
                })])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 120 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 2.5% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 300% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("button", {
                    staticClass: "border-0 bg-transparent"
                }, [n("span", {
                    staticClass: "angle mb-1"
                })])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 35 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 4% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 140% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("button", {
                    staticClass: "border-0 bg-transparent"
                }, [n("span", {
                    staticClass: "angle mb-1"
                })])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 50 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 3.5% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 175% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("button", {
                    staticClass: "border-0 bg-transparent"
                }, [n("span", {
                    staticClass: "angle mb-1"
                })])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 75 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 3% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 225% ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("button", {
                    staticClass: "border-0 bg-transparent"
                }, [n("span", {
                    staticClass: "angle mb-1"
                })])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "col-lg-12"
                }, [n("div", {
                    staticClass: "card border-0 mb-3 dark-style"
                }, [n("div", {
                    staticClass: "card-header border-0 pb-0"
                }, [n("p", {
                    staticClass: "card-title mb-0"
                }, [t._v("Read before use")])]), n("div", {
                    staticClass: "card-body"
                }, [n("small", {
                    staticClass: "fw-light mt-n3 d-block lh-xs padding-top-20px"
                }, [t._v(" The principal deposit cannot be withdrawn, the only return users can get are daily dividends and referral rewards. Payments is possible only if contract balance have enough BNB. Please analyze the transaction history and balance of the smart contract before investing. High risk - high profit, DYOR ")])])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("thead", {
                    staticClass: "border-bottom"
                }, [n("tr", [n("td", {
                    staticClass: "text-capitalize",
                    attrs: {
                        scope: "col"
                    }
                }, [n("small", [t._v("days")])]), n("td", {
                    staticClass: "text-capitalize",
                    attrs: {
                        scope: "col"
                    }
                }, [n("small", [t._v("ROI;")])]), n("td", {
                    staticClass: "text-capitalize",
                    attrs: {
                        scope: "col"
                    }
                }, [n("small", [t._v("Income per 1 "), n("br"), t._v(" BNB:")])]), n("td")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 1 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("tr", [n("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "4"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 7 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("tr", [n("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "4"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 30 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("tr", [n("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "4"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [t._v(" 90 ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("tr", [n("td", {
                    staticClass: "p-0 border-0 position-relative end-0",
                    attrs: {
                        colspan: "4"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", {
                    staticClass: "text-center"
                }, [n("small", [t._v(" Calculated based on compounding 1x daily. ")])])
            }],
            L = {
                name: "Dashboard",
                data: function () {
                    return {
                        rate: "5",
                        showModal: !1,
                        isLoading_one: !1,
                        isLoading_two: !1,
                        isLoading_three: !1,
                        isLoading_four: !1,
                        isApproved: !1,
                        stakeBtn_one: "Stake",
                        stakeBtn_two: "Stake",
                        stakeBtn_three: "Stake",
                        stakeBtn_four: "Stake",
                        approveBtn_one: "Approve Contract",
                        approveBtn_two: "Approve Contract",
                        approveBtn_three: "Approve Contract",
                        approveBtn_four: "Approve Contract",
                        timer: null,
                        copied: !1,
                        row_one: !1,
                        row_two: !1,
                        row_three: !1,
                        row_four: !1,
                        plan_one_amount: null,
                        plan_two_amount: null,
                        plan_three_amount: null,
                        plan_four_amount: null,
                        total_earning_one: 0,
                        total_earning_two: 0,
                        total_earning_three: 0,
                        total_earning_four: 0,
                        BNBBalance: "0.000",
                        userAvailable: "0.000",
                        totalDeposit: "0.000",
                        totalWithdrawn: "0.000",
                        totalReferrals: "0",
                        totalBonus: "0.000"
                    }
                },
                mounted: function () {
                    var t = this;
                    this.readValue(), this.timer = setInterval((function () {
                        t.readValue()
                    }), 1e4)
                },
                beforeDestroy: function () {
                    clearInterval(this.timer)
                },
                methods: {
                    copy: function () {
                        var t = document.getElementById("copy-link");
                        navigator.clipboard.writeText(t.innerHTML), this.copied = "Copied"
                    },
                    readValue: function () {
                        var t = this;
                        if (this.getWeb3) {

                            var e = this.getInstance.methods;
                            Promise.all(
                                [
                                    //this.getBUSDInstance.methods.balanceOf(this.getUserAccount).call(),
                                    this.getWeb3.eth.getBalance(this.getUserAccount),
                                    //this.getBUSDInstance.methods.allowance(this.getUserAccount, this.getContractAddress).call(),
                                    e.getUserInfo(this.getUserAccount).call(),
                                    e.getUserAvailable(this.getUserAccount).call(),
                                    e.getUserTotalReferrals(this.getUserAccount).call(),
                                    e.getUserTotalWithdrawn(this.getUserAccount).call(),
                                    e.getUserReferralTotalBonus(this.getUserAccount).call()
                                ]).then((function (e) {
                                    var n = Object(M["a"])(e, 6),
                                        a = n[0],
                                        s = 0,
                                        i = n[1],
                                        r = n[2],
                                        o = n[3],
                                        c = n[4],
                                        l = n[5];
                                    s > 0 && (t.isApproved = !0),
                                        t.BNBBalance = t.humanized(a, 3),
                                        t.totalDeposit = t.humanized(i.totalDeposit, 3),
                                        t.userAvailable = t.humanized(r, 3),
                                        t.totalReferrals = o,
                                        t.totalWithdrawn = t.humanized(c, 3),
                                        t.totalBonus = t.humanized(l, 3)
                                }))

                        }
                    },
                    humanized: function (t, e) {
                        return Number(this.getWeb3.utils.fromWei(t.toString(), "ether")).toFixed(0 == t ? 3 : e)
                    },
                    calculateTotalEarning: function (t, e) {
                        switch (Number(e)) {
                            case 0:
                                this.total_earning_one = Number(300 * t.target.value) / 100;
                                break;
                            case 1:
                                this.total_earning_two = Number(140 * t.target.value) / 100;
                                break;
                            case 2:
                                this.total_earning_three = Number(175 * t.target.value) / 100;
                                break;
                            case 3:
                                this.total_earning_four = Number(225 * t.target.value) / 100;
                                break
                        }
                    },
                    clearBtn: function () {
                        this.isLoading_one = !1, this.isLoading_two = !1, this.isLoading_three = !1, this.isLoading_four = !1, this.stakeBtn_one = "Stake", this.stakeBtn_two = "Stake", this.stakeBtn_three = "Stake", this.stakeBtn_four = "Stake", this.approveBtn_one = "Approve Contract", this.approveBtn_two = "Approve Contract", this.approveBtn_three = "Approve Contract", this.approveBtn_four = "Approve Contract"
                    },
                    approve: function (t) {
                        var e = this;
                        try {
                            this["isLoading_" + t] = !0, this["approveBtn_" + t] = "Pending Approval", this.getBUSDInstance.methods.approve(this.getContractAddress, "999999999999999999999999999999999999999999999999999999999999999999999999").estimateGas({
                                from: this.getUserAccount
                            }).then((function (t) {
                                e.getBUSDInstance.methods.approve(e.getContractAddress, "999999999999999999999999999999999999999999999999999999999999999999999999").send({
                                    from: e.getUserAccount,
                                    gasLimit: e.getWeb3.utils.toHex(t)
                                }).on("transactionHash", (function (t) {
                                    console.log("Transaction hash", t), e.$toasted.show("Transaction submitted to the network")
                                })).on("receipt", (function (t) {
                                    e.clearBtn(), e.isApproved = !0, console.log("Receipt: ", t), e.$toasted.show("Transaction completed successfully")
                                })).on("error", (function (t) {
                                    e.clearBtn(), console.log("Error receipt: ", t)
                                }))
                            })).catch((function (t) {
                                console.log("Error receipt: ", t)
                            }))
                        } catch (n) {
                            this.clearBtn()
                        }
                    },
                    stakeBNB: function (t) {
                        var e = this;
                        try {
                            var n = 0;
                            switch (Number(t)) {
                                case 0:
                                    n = this.plan_one_amount, this.stakeBtn_one = "Pending Confirmation";
                                    break;
                                case 1:
                                    n = this.plan_two_amount, this.stakeBtn_two = "Pending Confirmation";
                                    break;
                                case 2:
                                    n = this.plan_three_amount, this.stakeBtn_three = "Pending Confirmation";
                                    break;
                                case 3:
                                    n = this.plan_four_amount, this.stakeBtn_four = "Pending Confirmation";
                                    break
                            }
                            if (console.log(n), null === n || "" === n || 0 == n) return this.clearBtn(), void this.$toasted.show("Enter the amount to stake");
                            var valueToSend = this.getWeb3.utils.toWei(n.toString(), "ether");
                            console.log(t);
                            this.getInstance.methods.invest(this.getReferral, t).send({
                                from: this.getUserAccount,
                                value: valueToSend
                            }).on("transactionHash", (function (t) {
                                console.log("Transaction hash", t), e.$toasted.show("Transaction submitted to the network")
                            })).on("receipt", (function (t) {
                                e.clearBtn(), console.log("Receipt: ", t), e.$toasted.show("Transaction completed successfully")
                            })).on("error", (function (t) {
                                e.clearBtn(), console.log("Error receipt: ", t)
                            }))
                        } catch (a) {
                            this.clearBtn()
                        }
                    },
                    harvest: function () {
                        var t = this;
                        this.isLoading = !0, this.getInstance.methods.withdraw().send({
                            from: this.getUserAccount
                        }).on("transactionHash", (function (e) {
                            console.log("Transaction hash", e), t.$toasted.show("Transaction submitted to the network")
                        })).on("receipt", (function (e) {
                            console.log("Receipt: ", e), t.$toasted.show("Transaction completed successfully")
                        })).on("error", (function (t) {
                            console.log("Error receipt: ", t)
                        }))
                    }
                },
                computed: Object(o["a"])({}, Object(d["c"])("wallet", ["getWeb3", "getReferral", "getUserAccount", "getInstance", "getContractABI", "getContractAddress", "getBUSDInstance", "getBUSDContractABI", "getBUSDContractAddress"])),
                watch: {
                    getInstance: function () {
                        this.readValue()
                    }
                }
            },
            P = L,
            W = (n("24c8"), Object(b["a"])(P, O, j, !1, null, "6473e689", null)),
            z = W.exports;
        a["a"].use(U["a"]);
        var V = [{
            path: "/",
            name: "Home",
            component: N
        }, {
            path: "/dashboard",
            name: "Dashboard",
            component: z
        }],
            F = new U["a"]({
                mode: "history",
                base: "/",
                routes: V
            }),
            H = F,
            q = n("a65d"),
            J = n.n(q),
            Q = n("1dce"),
            Y = n.n(Q);
        a["a"].use(d["a"]), a["a"].use(Y.a), a["a"].use(J.a, {
            theme: "outline",
            duration: 5e3,
            position: "bottom-right"
        }), a["a"].config.productionTip = !1, new a["a"]({
            store: S,
            router: H,
            render: function (t) {
                return t(v)
            }
        }).$mount("#app")
    },
    6: function (t, e) { },
    6822: function (t, e, n) {
        t.exports = n.p + "img/secure.dcf57969.png"
    },
    7: function (t, e) { },
    8: function (t, e) { },
    "85ec": function (t, e, n) { },
    9: function (t, e) { },
    aa24: function (t, e, n) {
        t.exports = n.p + "img/twitter.095df65.21b808ec.png"
    },
    aa25: function (t, e, n) {
        t.exports = n.p + "img/medium.logo.png"
    },
    c042: function (t, e, n) {
        t.exports = n.p + "img/support.401595ad.png"
    },
    d3af: function (t, e, n) {
        t.exports = n.p + "img/3b337921e04b6b4474d30684bfa430b9.a72f8730.svg"
    },
    d6ff: function (t, e, n) { },
    da13: function (t, e, n) {
        t.exports = n.p + "img/967323a536688d01da885bdf5a58daa0.455325c3.svg"
    },
    e77c: function (t, e, n) {
        t.exports = n.p + "img/2a4f7bcb3ea48cf9b412d5d56c13e84c.d8e0684d.svg"
    },
    ef65: function (t, e, n) {
        t.exports = n.p + "img/2c2a5dc61de30babc08fb5e796cf1673.c0d71daa.svg"
    },
    f0ba: function (t, e, n) {
        t.exports = n.p + "img/520294a18c7cf5bc4e34af55694a95f9.46ede6c4.svg"
    }
});
//# sourceMappingURL=app.e001c9db.js.map
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy,
        dayMonth = "04/21/",
        launch = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    //end

    const countDown = new Date(launch).getTime();
    var x = setInterval(function () {

        const now = new Date().getTime(),
            distance = countDown - now;

        if (document.getElementById("days")) {
            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("timerHeadline").innerText = "Project is Live!";
                document.getElementById("timerCountdown").style.display = "none";
                document.getElementById("timerContent").style.display = "block";
                clearInterval(x);
                launched = true;
            }
        }
        //seconds
    }, 1000)
}());