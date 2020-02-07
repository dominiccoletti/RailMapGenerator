import { RMGStation, IntInfoTag, InterchangeInfo } from './Station';
import { ID, Name, BranchInfo, StationInfo } from '../utils';

const station_id = 'stn_sh'

class RMGStationSH extends RMGStation {
    constructor(id: ID, data: StationInfo) {
        super(id, data);
        this.stnNum = data.num;
    }

    get _nameShift() { return false; }
    get _tickRotation() { return this.y > 0 ? 180 : 0; }
    get _dxdy() {
        var nameENLn = this.name[1].split('\\').length;
        let dx: number;
        if (this._nameShift) {
            dx = this._tickRotation === 0 ? -9 : 16 + (nameENLn - 1) * 12 * Math.cos(-45);
        } else {
            dx = this._tickRotation === 0 ? (24 + (nameENLn - 1) * 12) * Math.cos(-45) : -6;
        }
        // let dx = this._nameShift ? -8 : (24 + (nameENLn-1)*12) * Math.cos(-45);
        let dy = this._tickRotation === 0 ? (-4 - 21.921875 - (nameENLn - 1) * 12 * Math.cos(-45)) : 17.5;
        // var dy = (-4 - 21.921875 - (nameENLn-1)*12*Math.cos(-45)) * (this._tickRotation === 0 ? 1 : -1);
        return [dx, dy]
    }

    get iconHTML() {
        var [iconType, numClass] = (this.state == -1) ? [station_id + '_pass', 'Pass'] : [station_id, 'Future'];
        return $('<g>', { transform: `translate(${this.x},${this.y})` })
            .append($('<use>', { 'xlink:href': '#' + iconType, class: 'rmg-stn' }));
    }

    get nameHTML() {
        let [dx, dy] = this._dxdy
        return $('<g>', {
            'transform': `translate(${this.x - dx},${this.y + dy})rotate(-60)`,
            'text-anchor': this._tickRotation === 0 ? 'start' : 'end',
            // class: `Name ${this.nameClass}`
            class: `Name Future`  // todo: fix this
        }).append(
            $('<text>').addClass('rmg-name__zh rmg-name__shmetro--station').text(this.name[0])
        ).append(
            $('<text>', {
                dy: 15, class: 'rmg-name__en rmg-name__shmetro--station'
            }).text(this.name[1].split('\\')[0]).append(
                $('<tspan>', {
                    'x': 0, 'dy': 12
                }).text(this.name[1].split('\\')[1])
            )
        );
    }
}

class IntStationSH extends RMGStationSH {
    private _intInfos: InterchangeInfo[];

    constructor(id: ID, data: StationInfo) {
        super(id, data);
        this._intInfos = data.interchange[0][0];
    }

    // rewrite this to get all drawing function to be called
    get ungrpHTML() {
        return [this.iconHTML, this.nameHTML, ...this.intTickHTML];
    }

    // interchange station icon on main line
    get iconHTML() {
        var [iconType, numClass] = (this.state == -1) ? ['int2_sh_pass', 'Pass'] : ['int2_sh', 'Future'];
        return $('<g>', { transform: `translate(${this.x},${this.y})` })
            .append($('<use>', { 'xlink:href': '#' + iconType, class: 'rmg-stn', stroke: this._intInfos[IntInfoTag.colour] }));
    }

    // regular station name
    get nameHTML() {
        let [dx, dy] = this._dxdy;
        // wrap the name, decro_line and int_line under g in order to rotate at once
        return $('<g>', {
            'transform': `translate(${this.x - dx},${this.y + dy})`,  //rotate(-60)
        }).append(
            // the original name text
            $('<g>', {
                'text-anchor': this._tickRotation === 0 ? 'start' : 'end',
                class: `Name Future`  // todo: fix this
            }).append(
                $('<text>').addClass('rmg-name__zh rmg-name__shmetro--station').text(this.name[0])
            ).append(
                $('<text>', {
                    dy: 15, class: 'rmg-name__en rmg-name__shmetro--station'
                }).text(this.name[1].split('\\')[0]).append(
                    $('<tspan>', {
                        'x': 0, 'dy': 12
                    }).text(this.name[1].split('\\')[1])
                )
            )
        )
    }

    // interchange station icon after station name
    get intTickHTML() {
        // var nameText = $(`#stn_icons > #${this.id} > g:first-child`)
        // console.log(`#stn_icons > #${this.id} > g:first-child`, nameText)

        // interchange line icon after station name
        var tickRotation = (this.namePos == 1) ? 180 : 0;
        var tickColour = this._intInfos[IntInfoTag.colour];
        var tick = $('<use>', {
            'xlink:href': '#int_sh',
            fill: tickColour,
            // Todo: fix this hard-coded position by getting the name text elem
            transform: `translate(10,-10)rotate(${tickRotation})`,
            class: 'rmg-line__shmetro rmg-line__change',
        });
        if (this.state == -1) {
            tick.addClass('rmg-line__pass');
        }

        // line starts with numbers or letters
        var lineNumber = String(this._intInfos[IntInfoTag.nameZH]).match(/(\d*)\w+/)
        if (lineNumber) {
            var lineName = lineNumber[0]
        } else {
            var lineName = String(this._intInfos[IntInfoTag.nameZH])
        }
        // interchange line name
        var lineNameElem = $('<text>', {
            // Todo: fix this hard-coded position by getting the name text elem
            transform: `translate(15,10)rotate(${tickRotation})`,
            class: 'rmg-name__zh rmg-name__shmetro--line_name',
        }).text(lineName)

        return [tick, lineNameElem];
    }

    get _nameClass() {
        return (this.state == -1) ? 'Pass' : 'Future';
    }

}

export { RMGStationSH, IntStationSH, station_id };
