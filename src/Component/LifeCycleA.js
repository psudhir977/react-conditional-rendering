
import React,{Component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycle extends Component{

    constructor(props){
        super(props)
        this.state={
            name: 'Sudhir'

        }
        console.log('LifeCycle A constuctor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle A get derived state from props')
        return null

    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')

    }

    render(){
        console.log('Lifecycle A render')
        return(

            <div>

                LIFECYCLE A
                <LifeCycleB/>
            </div>
        )
    
    }

}

export default LifeCycle