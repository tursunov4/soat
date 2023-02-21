import React from 'react';
import "./Assets/main.css"
import over from './Assets/Images/arrow-bar-up.svg'
import under from './Assets/Images/past.svg'
import { paste } from '@testing-library/user-event/dist/paste';
class App extends React.Component {
    state={
        hour:0,
        minut:0,
        secund : 0,
        dis_btn : false,
        interval:'',
        saveinter :[],
        dis_btnone:true, 
        qushimcha:60,
        internal:'',
        btn_rev:false
   
    }
  Starwatch=()=>{
   let i= setInterval(() => {
        const {secund, minut ,hour} =this.state
       this.setState({
        secund: this.state.secund+1
       }) 
       if(secund===59){
        this.setState({
            minut : minut +1,
            secund:0 
        })
       }
       if(minut === 59){
        this.setState({
            hour : hour + 1,
            minut:0,
            secund:0
        })
       }
    }, 1000);
    this.setState({
        dis_btnone:false,
        dis_btn : true,
         interval : i
    })
  }

 

  SavedInteval =()=>{
    const {minut, hour, secund ,saveinter} = this.state
    saveinter.push(hour + ':'+minut +':' +secund)
    this.setState({
        saveinter
    })
  }

  clearInterval = () => {
    const { horu, minut, secund, interval, dis_btn } = this.state;
    clearInterval(interval)
    this.setState({
      minut:0,
      hour :0,
      secund:0,
      saveinter:[],
      dis_btn: false
  
    });
  };
//    orqaga qaytarish
btn1 =()=>{
    this.setState({
        hour: this.state.hour +1
    })    
    }
    btn3 =()=>{
        this.setState({
            minut: this.state.minut +1
        })
        if(this.state.minut===59) {
            this.setState({
                minut:0
            })
         }   
        }
        btn5 =()=>{
            this.setState({
                secund: this.state.secund +1
            })
            if(this.state.secund===59) {
                this.setState({
                    secund:0
                })
             }   
            }
   
btn2 =()=>{
    if(this.state.hour !==0){
        this.setState({
            hour : this.state.hour -1,
        })
    }   
}
   
btn4 =()=>{
    if(this.state.minut ===0){
        this.setState({
            minut:59
        })
    }
    if(this.state.minut !==0){
        this.setState({
            minut : this.state.minut -1,
        })
    }   
}
btn6 =()=>{
    if(this.state.secund ===0){
        this.setState({
            secund:59
        })
    }
    if(this.state.secund !==0){
        this.setState({
            secund : this.state.secund -1,
        })
    }   
}
 Reverce =()=>{
    this.setState({
        btn_rev:true,
        dis_btnone:false
    })
     let internal= setInterval(() => {
          const { minut, hour, secund,} = this.state
            if(minut>0|| secund>0||hour>0){
            this.setState({
              secund:secund-1
            })
            if(secund==0 && minut!=0 ){
              this.setState({
                  minut:minut-1,
                  secund:59
              })
            }
            if(minut===0 && hour!==0){
                this.setState({
                    hour:hour-1,
                    minut:59
                })
            }
            if(minut===0 && secund===0 && hour!==0){
                this.setState({
                    hour:hour-1,
                    minut:59,
                    secund:59
                }) 
            }
          
         }
         else if(minut==0, secund==0,hour==0){
            this.setState({
                minut:0,
                secund:0,
                hour:0
            })
         }
      },1000);
      this.setState({
        internal:internal
      })
 }
 Stopwatch =()=>{
    clearInterval(this.state.interval)    
    this.setState({
        dis_btn : false
    })
    clearInterval(this.state.internal)
    this.setState({
        btn_rev:false
    })
 }
    render() {
        const {hour, minut, secund,dis_btn, dis_btnone,btn_rev }= this.state
        return (
         <div class="container">
           <div className="row">
            <div className="col-md-6 offset-3 mt-4">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">
                            StopWatch
                        </h1> 
                    </div>
                    <div className="card-body wrappera_hour ">
                        <button className='btn1' onClick={this.btn1}><img src={over}alt="over" width={16}height={16}/></button>
                        <button className='btn2'  onClick={this.btn2}><img src={under} alt="under"width={16} height={16} /></button>
                        <button className='btn3'onClick={this.btn3} ><img src={over}alt="over" width={16}height={16}/></button>
                        <button className='btn4' onClick={this.btn4}><img src={under} alt="under"width={16} height={16} /></button>
                        <button className='btn5' onClick={this.btn5}><img src={over}alt="over" width={16}height={16}/></button>
                        <button className='btn6' onClick={this.btn6}><img src={under} alt="under"width={16} height={16} /></button>
                        
                        <h1 className='text-center '> {hour}:{minut}:{secund} </h1>
                    </div>
                    <div className="card-footer  ">
                      <div className="row justify-center">
                      <div className="col-md-2 text-center">
                            <button className="btn btn-info" onClick={this.Starwatch} disabled={dis_btn}> Start</button>
                        </div>
                        <div className="col-md-2 text-center">
                            <button className="btn btn-warning" onClick={this.Stopwatch} > Stop</button>
                        </div>
                        <div className="col-md-2 text-center">
                            <button className="btn btn-success" disabled={dis_btnone} onClick={this.SavedInteval}> Interval</button>
                        </div>
                        <div className="col-md-2 text-center">
                            <button className="btn btn-danger" onClick={this.clearInterval}> Clear</button>
                        </div>
                        <div className="col-md-2 text-center">
                            <button className="btn btn-primary" disabled={btn_rev} onClick={this.Reverce}> Reverce</button>
                        </div>
                      </div>
                      <div className="row">
                        {
                            this.state.saveinter.map((item ,index ) =>(
                                <h2 key={index}>{item}</h2>
                            ))
                        }
                      </div>
                    </div>
                </div>
            </div>
           </div>
         </div>
         
        );
    }
}



export default App;

