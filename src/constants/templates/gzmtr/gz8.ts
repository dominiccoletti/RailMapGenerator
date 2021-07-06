const params = {
    svg_height: 300,
    padding: 2.300062293353778,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['guangzhou', 'gz8', '#008C95', '#fff'],
    direction: 'l',
    current_stn_idx: '6t9l',
    platform_num: '1',
    stn_list: {
        linestart: {
            parents: [],
            children: ['9nrj'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        l1mz: {
            parents: ['4e8p'],
            children: ['iwf6'],
            name: ['琶洲', 'Pazhou'],
            branch: { left: [], right: [] },
            num: '27',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['万胜围', 'Wanshengwei'],
            branch: { left: [], right: [] },
            num: '28',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz4', '#00843D', '#fff', '4号线', 'Line 4']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '4e8p': {
            parents: ['i8pd'],
            children: ['l1mz'],
            name: ['新港东', 'Xingangdong'],
            branch: { left: [], right: [] },
            num: '26',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        i8pd: {
            parents: ['e3cn'],
            children: ['4e8p'],
            name: ['磨碟沙', 'Modiesha'],
            branch: { left: [], right: [] },
            num: '25',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        e3cn: {
            parents: ['rltg'],
            children: ['i8pd'],
            name: ['赤岗', 'Chigang'],
            branch: { left: [], right: [] },
            num: '24',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        rltg: {
            parents: ['qbz7'],
            children: ['e3cn'],
            name: ['客村', 'Kecun'],
            branch: { left: [], right: [] },
            num: '23',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz3', '#ECA154', '#000', '3号线', 'Line 3']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        qbz7: {
            parents: ['kmeu'],
            children: ['rltg'],
            name: ['鹭江', 'Lujiang'],
            branch: { left: [], right: [] },
            num: '22',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        kmeu: {
            parents: ['denz'],
            children: ['qbz7'],
            name: ['中大', 'Sun Yat-sen\\University'],
            branch: { left: [], right: [] },
            num: '21',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        denz: {
            parents: ['kuvx'],
            children: ['kmeu'],
            name: ['晓港', 'Xiaogang'],
            branch: { left: [], right: [] },
            num: '20',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        kuvx: {
            parents: ['lddl'],
            children: ['denz'],
            name: ['昌岗', 'Changgang'],
            branch: { left: [], right: [] },
            num: '19',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz2', '#00629B', '#fff', '2号线', 'Line 2']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        lddl: {
            parents: ['bp86'],
            children: ['kuvx'],
            name: ['宝岗大道', 'Baogang Dadao'],
            branch: { left: [], right: [] },
            num: '18',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        bp86: {
            parents: ['6t9l'],
            children: ['lddl'],
            name: ['沙园', 'Shayuan'],
            branch: { left: [], right: [] },
            num: '17',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gfl', '#C4D600', '#fff', '广佛线', 'Guangfo Line']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '6t9l': {
            parents: ['5eff'],
            children: ['bp86'],
            name: ['凤凰新村', 'Fenghuang Xincun'],
            branch: { left: [], right: [] },
            num: '16',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '5eff': {
            parents: ['788p'],
            children: ['6t9l'],
            name: ['同福西', 'Tongfuxi'],
            branch: { left: [], right: [] },
            num: '15',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '788p': {
            parents: ['i92z'],
            children: ['5eff'],
            name: ['文化公园', 'Cultural Park'],
            branch: { left: [], right: [] },
            num: '14',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz6', '#80225F', '#fff', '6号线', 'Line 6']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        i92z: {
            parents: ['d7sq'],
            children: ['788p'],
            name: ['华林寺', 'Hualinsi\\Buddist Temple'],
            branch: { left: [], right: [] },
            num: '13',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        d7sq: {
            parents: ['0x3h'],
            children: ['i92z'],
            name: ['陈家祠', 'Chen Clan Academy'],
            branch: { left: [], right: [] },
            num: '12',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz1', '#F3D03E', '#000', '1号线', 'Line 1']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '0x3h': {
            parents: ['yjqb'],
            children: ['d7sq'],
            name: ['彩虹桥', 'Caihongqiao'],
            branch: { left: [], right: [] },
            num: '11',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: ['未开通', 'Under Construction'],
        },
        yjqb: {
            parents: ['xbp3'],
            children: ['0x3h'],
            name: ['西村', 'Xicun'],
            branch: { left: [], right: [] },
            num: '10',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz5', '#C5003E', '#fff', '5号线', 'Line 5']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: ['未开通', 'Under Construction'],
        },
        xbp3: {
            parents: ['d0jg'],
            children: ['yjqb'],
            name: ['鹅掌坦', 'Ezhangtan'],
            branch: { left: [], right: [] },
            num: '09',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        d0jg: {
            parents: ['31cw'],
            children: ['xbp3'],
            name: ['同德', 'Tongde'],
            branch: { left: [], right: [] },
            num: '08',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '31cw': {
            parents: ['dsaz'],
            children: ['d0jg'],
            name: ['上步', 'Shangbu'],
            branch: { left: [], right: [] },
            num: '07',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        dsaz: {
            parents: ['2tdp'],
            children: ['31cw'],
            name: ['聚龙', 'Julong'],
            branch: { left: [], right: [] },
            num: '06',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '2tdp': {
            parents: ['uyzf'],
            children: ['dsaz'],
            name: ['石潭', 'Shitan'],
            branch: { left: [], right: [] },
            num: '05',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        uyzf: {
            parents: ['olyz'],
            children: ['2tdp'],
            name: ['小坪', 'Xiaoping'],
            branch: { left: [], right: [] },
            num: '04',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        olyz: {
            parents: ['77dn'],
            children: ['uyzf'],
            name: ['石井', 'Shijing'],
            branch: { left: [], right: [] },
            num: '03',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '77dn': {
            parents: ['9nrj'],
            children: ['olyz'],
            name: ['亭岗', 'Tinggang'],
            branch: { left: [], right: [] },
            num: '02',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '9nrj': {
            parents: ['linestart'],
            children: ['77dn'],
            name: ['滘心', 'Jiaoxin'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
    },
    line_name: ['8号线', 'Line 8'],
    psd_num: '20',
    line_num: '8',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: true, terminal: false },
    svgWidth: { destination: 1000, runin: 1000, railmap: 1800 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: false },
};

export default params;
