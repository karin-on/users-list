import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            email: '',
            ip: '',
            nicknameValid: false,
            emailValid: false,
            ipValid: false,
            formValid: false,
        }
    }

    handleChange = (e, input) => {
        this.setState({
            [input]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let newUser = {
            nickname: this.state.nickname,
            email: this.state.email,
            ip: this.state.ip,
            date: Date.now()
        };

        // console.log(newUser);

        if (typeof this.props.addNewUser === 'function') {
            this.props.addNewUser(newUser);
        }

    };


    render() {
        // (() => {
        //     console.log(this.state);
            const emailPattern = /[a-z0-9\.\-\_]+@[a-z0-9\.\-\_]+\.[a-z]+/gi;
            const ipPattern = /[0-9]+/g;

            // let errorMsgNickname = this.state.nickname.length > 0 ?
            //     '' : 'Please enter your nickname';
            let errorMsgEmail = (emailPattern.test(this.state.email) || this.state.email.length === 0) ?
                '' : 'Please enter valid email address';
            let errorMsgIP = ipPattern.test(this.state.ip) ?
                '' : 'Please enter valid IP address';

            let formValid = (errorMsgEmail + errorMsgIP === '');


        // })();
            console.log(errorMsgEmail, errorMsgIP);




        return <section className="form-section">
            <form className="form" onSubmit={e => this.handleSubmit(e)}>
                <div className="form__item">
                    <div className="label-box">
                        <label className="label" htmlFor="nickname">
                            Your nickname
                        </label>
                    </div>
                    <div className="input-box">
                        <input className="input"
                               type="text"
                               id="nickname"
                               placeholder="nickname"
                               value={this.state.nickname}
                               onChange={e => this.handleChange(e, 'nickname')}/>
                    </div>
                </div>
                <div className="form__item">
                    <div className="label-box">
                        <label className="label" htmlFor="email">
                            Your email
                        </label>
                    </div>
                    <div className="input-box">
                        <input className="input"
                               type="text"
                               id="email"
                               placeholder="email"
                               value={this.state.email}
                               onChange={e => this.handleChange(e, 'email')}/>
                    </div>
                </div>
                <div className="form__item">
                    <div className="label-box">
                        <label className="label" htmlFor="ip">
                            Your IP address
                        </label>
                    </div>
                    <div className="input-box">
                        <input className="input"
                               type="text"
                               id="ip"
                               placeholder="IP address"
                               value={this.state.ip}
                               onChange={e => this.handleChange(e, 'ip')}/>
                    </div>
                </div>

                <input className="btn submit-btn"
                        type="submit"
                        disabled={!formValid} value="Add"/>
            </form>
        </section>
    }
}

export {Form};