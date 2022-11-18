import React from 'react';
import '../Style/Style.css';
import Hamburger from './hamburger.png'

 class Drag extends React.Component{
  state = {
    items: [
      "Cultural Exploration: 7 hours", 
      "Local market visit: 8 hours", 
      "Mandovi River cruise: 3 hours", 
      "Water sports at Grand island: 4 hours", 
      "Clubbing at Tito's lane:  5 hours", 
      "A day at Baga Beach: 9 hours"
    ],
    defaultItem: "",
    dragItem: "" ,
    finalItem: [""],
    finalItem1: [""],
    finalItem2: [""],
    finalItem3: [""],
    limit1: 0,
    limit2: 0,
    limit3: 0,
    limit4: 0,
    limit5: 0
  };

onDragStart = (event,index) => {
    this.draggedItem = this.state.items[index];
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html",event.target.parentNode);
    event.dataTransfer.setDragImage(event.target.parentNode, 20, 20);
    this.setState({
      dragItem: this.draggedItem
    });
  };

  onDragOver = index => {
    const draggedOverItem = this.state.items[index];
    if (this.draggedItem === draggedOverItem) {
      return;
    }
    let items = this.state.items.filter(item => item !== this.draggedItem);
    items.splice(index, 0, this.draggedItem);
    this.setState({ items });
    
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };
 
  save = () => {
    var updatedItems = this.state.items.filter(item => item === this.state.dragItem);
    const updatedItems1 = this.state.finalItem.concat(updatedItems);
    this.setState({
      finalItem:  [...new Set(updatedItems1)]
    })
    if(this.state.limit1>9){
      this.setState({
        finalItem: this.state.finalItem.slice(0,-1),
      })
    }
    var arr1 = [];
    for (let index = 1; index < this.state.finalItem.length; index++) {
      const element = this.state.finalItem[index].at(this.state.finalItem[index].length-7);
      const elem = parseInt(element);
      arr1.push(elem);
    }
    var limit = arr1.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    this.setState({
      limit1: limit,
      limit5: this.state.limit1+this.state.limit2+this.state.limit3+this.state.limit4
    })
  }
  
  save1 = () => {
    const updatedItems = this.state.items.filter(item => item === this.state.dragItem);
    const updatedItems2 =  this.state.finalItem1.concat(updatedItems);
    this.setState({
      finalItem1:  [...new Set(updatedItems2)]
    })
    var arr1 = [];
    for (let index = 1; index < this.state.finalItem1.length; index++) {
      const element = this.state.finalItem1[index].at(this.state.finalItem1[index].length-7);
      const elem = parseInt(element);
      arr1.push(elem);
    }
    var limit = arr1.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    this.setState({
      limit2: limit,
      limit5: this.state.limit1+this.state.limit2+this.state.limit3+this.state.limit4
    })
    if(this.state.limit2>9){
      this.setState({
        finalItem1: this.state.finalItem1.slice(0,-1),
      })
    }
  }
  save2 = () => {
    const updatedItems = this.state.items.filter(item => item === this.state.dragItem);
    const updatedItems3 =  this.state.finalItem2.concat(updatedItems);
    this.setState({
      finalItem2:  [...new Set(updatedItems3)]
    })
    var arr1 = [];
    for (let index = 1; index < this.state.finalItem2.length; index++) {
      const element = this.state.finalItem2[index].at(this.state.finalItem2[index].length-7);
      const elem = parseInt(element);
      arr1.push(elem);
    }
    var limit = arr1.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    this.setState({
      limit3: limit,
      limit5: this.state.limit1+this.state.limit2+this.state.limit3+this.state.limit4
    })
    if(this.state.limit3>9){
      this.setState({
        finalItem2: this.state.finalItem2.slice(0,-1),
      })
    }
  }
  save3 = () => {
    const updatedItems = this.state.items.filter(item => item === this.state.dragItem);
    const updatedItems4 =  this.state.finalItem3.concat(updatedItems);
    this.setState({
      finalItem3:  [...new Set(updatedItems4)]
    })
    var arr1 = [];
    for (let index = 1; index < this.state.finalItem3.length; index++) {
      const element = this.state.finalItem3[index].at(this.state.finalItem3[index].length-7);
      const elem = parseInt(element);
      arr1.push(elem);
    }
    var limit = arr1.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    this.setState({
      limit4: limit,
      limit5: this.state.limit1+this.state.limit2+this.state.limit3+this.state.limit4
    })
    if(this.state.limit4>9){
      this.setState({
        finalItem3: this.state.finalItem3.slice(0,-1),
      })
    }
  }

clear = () => {
  const arr2 = [""]
this.setState({
    finalItem: arr2,
    finalItem1: arr2,
    finalItem2: arr2,
    finalItem3: arr2,
    limit1: 0,
    limit2: 0,
    limit3: 0,
    limit4: 0,
    limit5: 0
})
}

  render(){
    return (
      <div className="App">
        <main className="wrapper" >
          <h3>List of Activities</h3>
          <ul>
            { this.state.items.map((item,index) => (
              <li key={item} onDragOver={() => this.onDragOver(index)}>
                <div 
                  className="drag" 
                  draggable 
                  onDragStart={event => this.onDragStart(event,index)}
                  onDragEnd={this.onDragEnd}
                  
                  >
                  <img src={Hamburger} alt="hamburger" />
                  <span className="content">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </main>
        <div className="newsbox" onDragOver={this.save}>
          <h3>Day 1</h3>
          <ul>
            {(this.state?.finalItem?.map((item,index) => (
              <li key={item} onDragOver={() => this.save(index)}>
                <div 
                  draggable 
                  onMouseUp={this.onDragOver}
                  >
                  <span className="content-field">{item}</span>
                  
                </div>
              </li>
            )))}
            <div id='bottom'>
                <h3>Time: {this.state.limit1}</h3>
              </div>
          </ul>
        </div>
        <div className="newsbox1" onDragOver={this.save1}>
          <h3>Day 2</h3>
          <ul>
            {this.state?.finalItem1?.map((item,index) => (
              <li key={item} onDragOver={() => this.save1(index)}>
                <div 
                  draggable 
                  onMouseUp={this.onDragOver}
                  >
                  <span className="content-field">{item}</span>
                </div>
              </li>
            ))}
          </ul>
          <div id='bottom'>
                <h3>Time: {this.state.limit2}</h3>
              </div>
        </div>
        <div className="newsbox2" onDragOver={this.save2}>
          <h3>Day 3</h3>
          <ul>
            {this.state?.finalItem2?.map((item,index) => (
              <li key={item} onDragOver={() => this.save2(index)}>
                <div 
                  draggable 
                  onMouseUp={this.onDragOver}
                  >
                  <span className="content-field">{item}</span>
                </div>
              </li>
            ))}
          </ul>
          <div id='bottom'>
                <h3>Time: {this.state.limit3}</h3>
              </div>
        </div>
        <div className="newsbox3" onDragOver={this.save3}>
          <h3>Day 4</h3>
          <ul>
            {this.state?.finalItem3?.map((item,index) => (
              <li key={item} onDragOver={() => this.save3(index)}>
                <div 
                  draggable 
                  onMouseUp={this.onDragOver}
                  >
                  <span className="content-field">{item}</span>
                </div>
              </li>
            ))}
          </ul>
          <div id='bottom'>
                <h3>Time: {this.state.limit4}</h3>
              </div>
          </div>
          <div id='bottom-left'>
                <h3>Total Time: {this.state.limit5}</h3>
              </div>
              <button className='clear' type='button' onClick={this.clear}>
Submit
              </button>
      </div>
    );
  }
}

export default Drag;

