import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiAirplay, FiAnchor } from "react-icons/fi";
import { DiApple } from "react-icons/di";
import { FaHandsHelping } from "react-icons/fa";

import { GiInjustice } from "react-icons/gi";



const ServiceList = [
    {
        icon: <FaHandsHelping />,
        title: 'Recouvrement amiable',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <GiInjustice />,
        title: 'Recouvrement judiciaire',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <DiApple />,
        title: 'Recouvrement externalisé',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    // { 
    //     icon: <FiMonitor />,
    //     title: 'Mobile App Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
    // {
    //     icon: <FiUsers />,
    //     title: 'Marketing & Reporting',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
    // { 
    //     icon: <FiMonitor />,
    //     title: 'Mobile App Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
