import React from 'react';
import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import gitHubLogo from '../Assets/Images/gitHubLogo.png';
import linkedInLogo from '../Assets/Images/linkedInLogo.png';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Git Hub Portfolio',
                    subTitle: 'Various self projects',
                    imgSrc: gitHubLogo,
                    link: 'https://github.com/albertosales1998',
                    selected: false
                },

                {
                    id: 1,
                    title: 'LinkedIn',
                    subTitle: 'Checkout my profile',
                    imgSrc: linkedInLogo,
                    link: 'https://www.linkedin.com/in/albertosales/',
                    selected: false
                }

                // {
                //     id: 2,
                //     title: 'Dev Grub',
                //     subTitle: 'The cookbook for developers',
                //     // imgSrc: devgrub,
                //     link: 'https://devgrub.com',
                //     selected: false
                // },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems =(items) => {
        return items.map(item => {
            return <Card item = {item} click = {(e => this.handleCardClick(item.id, e))} key = {item.id} />
        })
    }

    render(){ 
        return(
            <Container fluid = {true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;