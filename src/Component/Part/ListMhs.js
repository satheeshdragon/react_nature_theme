import React from 'react';
import { Table, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modals from './Modal';


class ListMhs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id:''
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {

        this.setState({
            modal: !this.state.modal,
        });
    }

    
    render() {
        const url = 'http://localhost:3000/'
        const lists = this.props.list.map((e, i) => {
             return (
                 <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.Name}</td>
                     <td>{e.CountryCode}</td>
                     <td>{e.District}</td>
                     <td>
                        <Button color="success" size='sm' href={url + 'edit/' + e.Batch_setting_id} ><FontAwesome name='edit' /></Button>{' '}
                        <Button color="danger" size='sm' key={e.Batch_setting_id} onClick={() => this.setState({ id: e.Batch_setting_id }, this.toggle)} ><FontAwesome name='trash' /></Button> 
                    </td>
                 </tr>
             )
         })
        return (
            <div>
                <Modals
                    modal={this.state.modal}
                    toggle={this.toggle}
                    id={this.state.id}
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>CITY_NAME</th>
                            <th>COUNTRY_CODE</th>
                            <th>DISTRICT</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        );
    }
}
        
export default ListMhs
