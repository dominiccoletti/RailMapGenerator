const params = {
    svg_height: 300,
    padding: 8.750201061605276,
    y_pc: 40,
    branch_spacing: 45,
    theme: [
        "shanghai",
        "sh16",
        "#2CD5C4",
        "#000"
    ],
    direction: "r",
    current_stn_idx: "l1mz",
    platform_num: false,
    stn_list: {
        linestart: {
            parents: [],
            children: [
                "l1mz"
            ],
            name: [
                "路綫左端",
                "LEFT END"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            num: "00",
            secondaryName: false
        },
        lineend: {
            parents: [
                "iwf6"
            ],
            children: [],
            name: [
                "路綫右端",
                "RIGHT END"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            num: "00",
            secondaryName: false
        },
        l1mz: {
            parents: [
                "linestart"
            ],
            children: [
                "l5s7"
            ],
            name: [
                "龙阳路",
                "     Longyang Road"
            ],
            branch: {
                left: [],
                right: []
            },
            num: "02",
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        [
                            "shanghai",
                            "sh2",
                            "#97D700",
                            "#000",
                            "2号线",
                            "Line 2"
                        ],
                        [
                            "shanghai",
                            "sh7",
                            "#FF6900",
                            "#000",
                            "7号线",
                            "Line 7"
                        ],
                        [
                            "shanghai",
                            "sh18",
                            "#D6A461",
                            "#000",
                            "18号线",
                            "Line 18"
                        ],
                        [
                            "shanghai",
                            "maglev",
                            "#009090",
                            "#fff",
                            "磁悬浮",
                            "Maglev"
                        ]
                    ]
                ]
            },
            services: [
                "local",
                "express",
                "direct"
            ],
            facility: "",
            secondaryName: false
        },
        iwf6: {
            children: [
                "lineend"
            ],
            parents: [
                "j2ts"
            ],
            name: [
                "滴水湖",
                "     Dishui Lake"
            ],
            branch: {
                left: [],
                right: []
            },
            num: "01",
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local",
                "express",
                "direct"
            ],
            facility: "",
            secondaryName: false
        },
        l5s7: {
            name: [
                "华夏中路",
                "     Middle Huaxia Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "l1mz"
            ],
            children: [
                "z631"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh13",
                            "#EF95CF",
                            "#000",
                            "13号线",
                            "Line 13"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        z631: {
            name: [
                "罗山路",
                "     Luoshan Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local",
                "express"
            ],
            parents: [
                "l5s7"
            ],
            children: [
                "flg6"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh11",
                            "#76232F",
                            "#fff",
                            "11号线",
                            "Line 11"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        flg6: {
            name: [
                "周浦东",
                "East Zhoupu"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "z631"
            ],
            children: [
                "op34"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        q0vm: {
            name: [
                "航头东",
                "     East Hangtou"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "op34"
            ],
            children: [
                "c0at"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        c0at: {
            name: [
                "新场",
                "     Xinchang"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local",
                "express"
            ],
            parents: [
                "q0vm"
            ],
            children: [
                "zph2"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        zph2: {
            name: [
                "野生动物园",
                "     Wild Animal Park"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "c0at"
            ],
            children: [
                "0ku9"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '0ku9': {
            name: [
                "惠南",
                "Huinan"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local",
                "express"
            ],
            parents: [
                "zph2"
            ],
            children: [
                "jj84"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        jj84: {
            name: [
                "惠南东",
                "East Huinan"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "0ku9"
            ],
            children: [
                "oy89"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        oy89: {
            name: [
                "书院",
                "Shuyuan"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "jj84"
            ],
            children: [
                "j2ts"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        j2ts: {
            name: [
                "临港大道",
                "     Lingang Avenue"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local",
                "express"
            ],
            parents: [
                "oy89"
            ],
            children: [
                "iwf6"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        op34: {
            name: [
                "鹤沙航城",
                "     Heshahangcheng"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "flg6"
            ],
            children: [
                "q0vm"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        }
    },
    line_name: [
        "16号线",
        "Line 16"
    ],
    psd_num: "1",
    line_num: "TW",
    info_panel_type: "sh",
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false
    },
    svgWidth: {
        destination: 1000,
        runin: 1000,
        railmap: 1600
    },
    notesGZMTR: [],
    namePosMTR: {
        isStagger: true,
        isFlip: false
    }
};

export default params;