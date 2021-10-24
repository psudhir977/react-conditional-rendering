
import React,{Component} from 'react'

class LifeCycleB extends Component{

    constructor(props){
        super(props)
        this.state={
            name: 'Sudhir'

        }
        console.log('LifeCycle B constuctor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle B get derived state from props')
        return null

    }

    componentDidMount(){
        console.log('LifeCycle B componentDidMount')

    }

    render(){
        console.log('Lifecycle B render')
        return(

            <div>

                LIFECYCLE B
            </div>
        )
    
    }

}

export default LifeCycleB