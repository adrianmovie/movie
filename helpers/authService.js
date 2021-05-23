const axios = require("axios");

const checkToken = token => {
    axios({
        method: 'delete',
        url: Constants.API_URL() + "clients/" + this.state.deleteClient
    }).then(response => {
        this.getAllClients().then(response => {
            this.setState({
                modalDeleteIsOpen: false,
                clients: response.data,
                deleteClient: ""
            });
        }).catch(function (error) {
            console.log(error);
        });
    }).catch(function (error) {
        console.log(error);
    })
}
module.exports = checkToken;