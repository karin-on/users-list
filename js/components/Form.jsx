import React from 'react';

class Form extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();

        console.log('dziala');
    }



    render() {
        return <section className="form-section">
            <form className="form" onSubmit={e => this.handleSubmit(e)}>
                <div className="form__item">
                    <div className="label-box"><label className="label" htmlFor="nickname">Your nickname</label></div>
                    <div className="input-box"><input className="input" type="text" id="nickname" placeholder="nickname"/></div>
                </div>
                <div className="form__item">
                    <div className="label-box"><label className="label" htmlFor="nickname">Your email</label></div>
                    <div className="input-box"><input className="input" type="text" id="email" placeholder="email"/></div>
                </div>
                <div className="form__item">
                    <div className="label-box"><label className="label" htmlFor="nickname">Your IP address</label></div>
                    <div className="input-box"><input className="input" type="text" id="ip" placeholder="IP address"/></div>
                </div>

                <button className="submit-btn" type="submit">Add</button>

            </form>
        </section>

    }
}

export {Form};