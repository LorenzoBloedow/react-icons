
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoLogIn extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5c-7.5 0-13.8-4.7-16.3-11.2h2.6c0.7 1.5 1.8 3.1 3.1 4.3 2.8 2.8 6.6 4.4 10.6 4.4s7.8-1.6 10.6-4.4 4.4-6.6 4.4-10.6-1.6-7.8-4.4-10.6-6.6-4.4-10.6-4.4-7.8 1.6-10.6 4.4c-1.3 1.2-2.4 2.8-3.1 4.4h-2.6c2.5-6.6 8.8-11.3 16.3-11.3z m-3.8 22.8l4-4h-17.7v-2.5h17.7l-4-4.1 1.7-1.8 7.1 7.1-7.1 7.1z"/></g>
            </IconBase>
        );
    }
}
