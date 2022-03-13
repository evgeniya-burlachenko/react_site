import React from 'react';
import "./FooterForm.css";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            SendMail:{
                text: '',
                name: '',
                email: ''
            },
        }
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleSendMail = this.handleSendMail.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleFullName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, name: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, email: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(prevState => ({
            SendMail: {
                ...prevState.SendMail, text: value
            }
        }), ()=>console.log(this.state.SendMail))
    }

    handleSendMail(e) {
        e.preventDefault();
        let userData = this.state.SendMail;
        fetch('https://helmda-systems.com/sendMail',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })
    }

    render() {
        return (<form className="container-fluid" onSubmit={this.handleSendMail}>
        <input
            className='name_entry_field'
            type='text'
            name='name'
            onChange = {this.handleFullName}
            value={this.state.SendMail.name}
            placeholder='   your name'
        />
        <input
            className='email_entry_field'
            type='email'
            name='email'
            onChange={this.handleEmail}
            value={this.state.SendMail.email}
            placeholder='   your e-mail'
        />
        <div className='col-sm-12 mt-4'>
            <textarea
                className='msg_entry_field'
                name='text'
                onChange={this.handleTextArea}
                value={this.state.SendMail.text}
                placeholder='   your message'
            />
        </div>
        <button
            className='form_button text-white'
            type='submit'
            onClick={this.handleSendMail}
            >
            SUBMIT
        </button>
        </form>
        );
    }
}