  /*
  Author : Abhay Gupta
  Version : 0.1
  Status : Development
  Description : This file consists of reactjs code to improve the UX on the update profile page.
  */

  // var React = require('react')
  // var SelectBox = React.createFactory(require('../lib/select-box'))
  alert('ss');
  var div = React.createElement.bind(null, 'div')
  var button = React.createElement.bind(null, 'button')
  var a = React.createElement.bind(null, 'a')
  var select = React.createElement.bind(null, 'select')
  var option = React.createElement.bind(null ,'option')
  var label = React.createElement.bind(null, 'label')

  var idInc = 0


  var div = React.createElement.bind(null,'div')
  var option = React.createElement.bind(null,'option')
  var h1 = React.createElement.bind(null,'h1')


  var RoleList = React.createClass({
          
      propTypes: {
          id: React.PropTypes.string.isRequired,
          options: React.PropTypes.array.isRequired,
          value: React.PropTypes.oneOfType(
              [
                  React.PropTypes.number,
                  React.PropTypes.string
              ]
          ),
          valueField: React.PropTypes.string,
          labelField: React.PropTypes.string,
          onChange: React.PropTypes.func
      },      
              
      getDefaultProps: function() {
          return {
              value: null,
              valueField: 'value',
              labelField: 'label',
              onChange: null
          };  
      },  
      
      getInitialState: function() {
          var selected = this.getSelectedFromProps(this.props);
          return {
              selected: selected,
  	    search_box_value: []
          }
      },

      componentWillReceiveProps: function(nextProps) {
          var selected = this.getSelectedFromProps(nextProps);
          this.setState({
             selected: selected
          });
      },
       getSelectedFromProps(props) {
          var selected;
          if (props.value === null && props.options.length !== 0) {
              selected = props.options[0][props.valueField];
          } else {
              selected = props.value;
          }
          return selected;
      },

      render: function() {
          var self = this;
          var count = 1;
          var checkBoxBindId = '';
          var options = self.props.options.map(function(option) {
              checkBoxBindId = "nat" + count++;
              return (
                  <div className="form-group">
                          <div className="checkbox custom">
                                  <input type="checkbox" id={checkBoxBindId} value={option[self.props.valueField]} onChange={this.handleChange} />
                                  <label htmlFor={checkBoxBindId}>{option[self.props.labelField]}</label>
                          </div>
                  </div>
              )
          }, this);
          return (
             <div className="selectpicker">
                  <button type="button" className="btn btn-block select_main" data-id="role"><span className="text">Roles</span></button>
             <div className="select_menu" id="role">
             <div className="search-box">
                  <input type="text" placeholder="Search in the list" className="form-control live-search" value={this.state.search_box_value} />
             </div>
             <div className="list-to-filter">
                  {options}
             </div>
             </div>
             </div>
          )
      },

      handleChange: function(e) {
  	    if (e.target.checked) {
                      this.state.search_box_value.push(e.target.value);
                     }
              else{
                   var index = this.state.search_box_value.indexOf(e.target.value);
                   if (index >= 0) {
                      this.state.search_box_value.splice( index, 1 );
                   }
              }
              var change = {
                oldValue: this.state.selected,
                newValue: e.target.value
              }
              //this.props.onChange(change);
          this.setState({selected: e.target.value});
      }

  });

  var FunctionList = React.createClass({

      propTypes: {
          id: React.PropTypes.string.isRequired,
          options: React.PropTypes.array.isRequired,
          value: React.PropTypes.oneOfType(
              [
                  React.PropTypes.number,
                  React.PropTypes.string
              ]
          ),
          valueField: React.PropTypes.string,
          labelField: React.PropTypes.string,
          onChange: React.PropTypes.func
      },

      getDefaultProps: function() {
          return {
              value: null,
              valueField: 'value',
              labelField: 'label',
              onChange: null
          };
      },

      getInitialState: function() {
          var selected = this.getSelectedFromProps(this.props);
          return {
              selected: selected,
  	    search_box_value : []
          }
      },

      componentWillReceiveProps: function(nextProps) {
          var selected = this.getSelectedFromProps(nextProps);
          this.setState({
             selected: selected
          });
      },

      getSelectedFromProps(props) {
          var selected;
          if (props.value === null && props.options.length !== 0) {
              selected = props.options[0][props.valueField];
          } else {
              selected = props.value;
          }
          return selected;
      },

      render: function() {
          var self = this;
  	var count = 1;
          var checkBoxBindId = '';
          var options = self.props.options.map(function(option) {
              checkBoxBindId = "nat" + count++;
              return (
                  <div className="form-group">
                          <div className="checkbox custom">
                                  <input type="checkbox" id={checkBoxBindId} value={option[self.props.valueField]} onChange={this.handleChange} />
                                  <label htmlFor={checkBoxBindId}>{option[self.props.labelField]}</label>
                          </div>
                  </div>
              )
          }, this);
          return (
             <div className="selectpicker">
                  <button type="button" className="btn btn-block select_main" data-id="function"><span className="text">Functions</span></button>
             <div className="select_menu" id="function">
             <div className="search-box">
                  <input type="text" placeholder="Search in the list" className="form-control live-search" value={this.state.search_box_value} />
             </div>
             <div className="list-to-filter">
                  {options}
             </div>
             </div>
             </div>
          )
      },

      handleChange: function(e) {
              if (e.target.checked) {
                      this.state.search_box_value.push(e.target.value);
   	           }
              else{
                   var index = this.state.search_box_value.indexOf(e.target.value);
                   if (index >= 0) {
                      this.state.search_box_value.splice( index, 1 );
                   }
              }
  	    var change = {
                oldValue: this.state.selected,
                newValue: e.target.value
              }
              this.props.onChange(change);
          
          this.setState({selected: e.target.value});
      }

  });


  var IndustryList = React.createClass({

      propTypes: {
          id: React.PropTypes.string.isRequired,
          options: React.PropTypes.array.isRequired,
          value: React.PropTypes.oneOfType(
              [
                  React.PropTypes.number,
                  React.PropTypes.string
              ]
          ),
          valueField: React.PropTypes.string,
          labelField: React.PropTypes.string,
          onChange: React.PropTypes.func
      },

      getDefaultProps: function() {
          return {
              value: null,
              valueField: 'value',
              labelField: 'label',
              onChange: null
          };
      },

      getInitialState: function() {
          var selected = this.getSelectedFromProps(this.props);
          return {
              selected: selected,
  	    search_box_value : []
          }
      },

      componentWillReceiveProps: function(nextProps) {
          var selected = this.getSelectedFromProps(nextProps);
          this.setState({
             selected: selected
          });
      },

      getSelectedFromProps(props) {
          var selected;
          if (props.value === null && props.options.length !== 0) {
              selected = props.options[0][props.valueField];
          } else {
              selected = props.value;
          }
          return selected;
      },

      render: function() {
          var self = this;
  	var count = 1;
  	var checkBoxBindId = '';
          var options = self.props.options.map(function(option) {
  	    checkBoxBindId = "nat" + count++;
              return (
                  <div className="form-group">
                  	<div className="checkbox custom">
                          	<input type="checkbox" id={checkBoxBindId} value={option[self.props.valueField]} onChange={this.handleChange} name="ind_checkbox" />
                                  <label htmlFor={checkBoxBindId}>{option[self.props.labelField]}</label>
                          </div>
                  </div>
              )
          }, this);
          return (
  	   <div className="selectpicker">
             	<button type="button" className="btn btn-block select_main" data-id="industry"><span className="text">Industry</span></button>
             <div className="select_menu" id="industry">
  	   <div className="search-box">
             	<input type="text" placeholder="Search in the list" className="form-control live-search" value={this.state.search_box_value} />
             </div>
             <div className="list-to-filter">
  		{options}
             </div>
  	   </div>
  	   </div>
          )
      },

      handleChange: function(e) {
          if (e.target.checked) {
  	    this.state.search_box_value.push(e.target.value);	
  	}
  	else{ 
  	   var index = this.state.search_box_value.indexOf(e.target.value);
  	   if (index >= 0) {
   		this.state.search_box_value.splice( index, 1 );
  		}
  	}
              var change = {
                oldValue: this.state.selected,
                newValue: e.target.value
              }
  	    var dropDownOnChange2 = function(change) {
    var functionData = $.getJSON( "roles.json", function(data) {
                    var options = data;
                    ReactDOM.render(
                      <RoleList id='roleList'
                                      options={options}
                                      value='Role1'
                                      labelField='ROLE'
                                      valueField='ROLE'
                       />,
                      document.getElementById('target-roles')
                    );

                })
                  .done(function() {
                    console.log( "roles second success" );
                  })
                  .fail(function() {
                    console.log( "roles error" );
                  })
                  .always(function() {
                    console.log( "roles complete" );
                  });
               };
            if (this.state.search_box_value.indexOf('Any') >= 0){
              var functionData = $.getJSON( "any_function.json", function(data) {
                    var options = data;
                    ReactDOM.render(
                      <FunctionList id='functionList'
                                      options={options}
                                      value='Function1'
                                      labelField='FUNCTION'
                                      valueField='FUNCTION'
                                      onChange={dropDownOnChange2}
                       />,
                      document.getElementById('target-functions')
                    );

                })
                  .done(function() {
                    console.log( "function second success" );
                  })
                  .fail(function() {
                    console.log( "function error" );
                  })
                  .always(function() {
                    console.log( "function complete" );
                  });

            }
  	    else{
                var options = [{"ID":"65","FUNCTION":"Function3"}];
                ReactDOM.render(
                  <FunctionList id='functionList'
                                  options={options}
                                  value='Function1'
                                  labelField='FUNCTION'
                                  valueField='FUNCTION'
                                  onChange={dropDownOnChange2}
                   />,
                  document.getElementById('target-functions')
                );
              }
              this.props.onChange(change);
          
          this.setState({selected: e.target.value});

      }

  });

  $( document ).ready(function() {
    $.ajax({
            url: 'industry.json',
            //dataType : 'json',   //you may use jsonp for cross origin request
            crossDomain:true,
            success: function(data) {
              alert(data);
  	    var options = data;
      	    var dropDownOnChange = function(change) {
         		};
      	    ReactDOM.render(
        		<IndustryList id='myDropdown'
                        options={options}
                        value='Any'
                        labelField='NAME'
                        valueField='NAME'
                        onChange={dropDownOnChange}
         		/>,
        		document.getElementById('target-industry')
      		);
            },
            error: function(xhr, status, err) {
                  alert('error in ajax request');
         }
       });
  });
