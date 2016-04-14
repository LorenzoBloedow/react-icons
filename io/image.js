
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoImage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m26.3 17.5c-2.1 0-3.8-1.7-3.8-3.7s1.7-3.8 3.8-3.8 3.7 1.7 3.7 3.8-1.7 3.7-3.7 3.7z m6.5-12.5c1.3 0 2.2 0.9 2.2 2.2v25.6c0 1.3-0.9 2.2-2.2 2.2h-30.6c-1.3 0-2.2-0.9-2.2-2.2v-25.6c0-1.3 0.9-2.2 2.2-2.2h30.6z m-8 15.5l7.7 8.3v-20.4c0-0.5-0.5-0.9-1-0.9h-28c-0.5 0-0.9 0.4-1 0.9v20.4l9.8-11.9c0.4-0.3 0.8-0.6 1.4-0.6s1 0.1 1.3 0.5l4.2 4.6 0.3 0.3c0.3 0.2 0.6 0.3 0.9 0.3s0.6-0.1 0.9-0.4l1.4-1.2c0.3-0.2 0.7-0.4 1.1-0.4s0.7 0.2 1 0.5z"/></g>
            </IconBase>
        );
    }
}
