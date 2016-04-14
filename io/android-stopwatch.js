
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoAndroidStopwatch extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m18.1 24v-10.2h3.8v10.2h-3.8z m13.8-10.7c1.9 2.6 3.1 5.8 3.1 9.2 0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.4 0 6.6 1.2 9.2 3.1l2.4-2.3 2.6 2.6z m-3.6 17.5c2.2-2.2 3.4-5.2 3.4-8.3s-1.2-6.1-3.4-8.3-5.2-3.4-8.3-3.4-6.1 1.2-8.3 3.4-3.4 5.2-3.4 8.3 1.2 6.1 3.4 8.3 5.2 3.4 8.3 3.4 6.1-1.2 8.3-3.4z m-13.3-24.5v-3.8h10v3.8h-10z"/></g>
            </IconBase>
        );
    }
}
