/**
 * Created by dxc on 2016/9/1.
 */
import React from 'react'
import ColorsItem from './ColorsItem'
import * as colors from 'speed/base/colors'
import Box from 'speed/box/Box'
import diff  from  'color-diff'

class ColorsFind extends React.Component {
    constructor() {
        super();
        this.state = {
            color: '',
            find_color: ''
        };
        this.colors_int = [];
        for (let key in colors) {
            let dcimal = this.dcimal(colors[key]);
            let RGB = this.getRGB(colors[key]);
            if (RGB) {
                RGB.key = key;
                this.colors_int.push(RGB);
            }
        }
    };

    getRGB(color) {
        let R = this.dcimal(color.substr(1, 2));
        let G = this.dcimal(color.substr(3, 2));
        let B = this.dcimal(color.substr(5, 2));
        if (isNaN(R) || isNaN(G) || isNaN(B)) {
            return false;
        }
        return {R, G, B};
    }

    find(val) {
        var i_close = this.getRGB(val);
        if (!i_close) {
            return false;
        }
        var close = diff.closest(this.getRGB(val), this.colors_int);
        return close.key;
    }

    dcimal(int) {
        return parseInt(int, 16)
    }

    click() {
        let input = this.refs.input;
        let find_close = this.find(input.value);
        if (!find_close) {
            this.setState({color: '', find_color: '无效颜色'});
        } else {
            this.setState({color: this.find(input.value), find_color: input.value});
        }
        input.value = '';
    }

    render() {
        return (
            <div>
                <input ref="input"/>
                <button onClick={this.click.bind(this)}>查找</button>
                <Box m="0 10px" f="1" h="30px" vbox="c" hbox="c"
                     style={{background:this.state.find_color}}>{this.state.find_color}</Box>
                <ColorsItem color={this.state.color}/>
            </div>
        );
    }
}
module.exports = ColorsFind;